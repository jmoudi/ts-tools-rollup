import path from 'path';
import rollup from 'rollup';
import {cyan,green,underline,gray,red,yellow,bold,dim} from '@/utils/logging';
import { InputOptions, RollupBuild, RollupOutput } from '@/types';
import {ms,dateTime,prettyBytes} from '@/utils/logging';
import {relativeId} from '@/utils/';

import { batchWarnings, handleError, stderr } from '@/runner/handlers';
 
interface NodeModuleWithCompile extends NodeModule {
	_compile(code: string, filename: string): any;
}

function interopDefault<T>(ex: T): T {
	return ex && typeof ex === 'object' && 'default' in ex ? (ex as any).default : ex;
}

export function loadConfigFile(
	configFile: string,
	commandOptions: any = {}
): Promise<InputOptions[]> {
	const silent = commandOptions.silent || false;
	const warnings = batchWarnings();

	return rollup
		.rollup({
			external: (id: string) => {
				return (id[0] !== '.' && !path.isAbsolute(id)) || id.slice(-5, id.length) === '.json';
			},
			input: configFile,
			onwarn: warnings.add,
			treeshake: false
		})
		.then((bundle: RollupBuild) => {
			if (!silent && warnings.count > 0) {
				stderr(bold(`loaded ${relativeId(configFile)} with warnings`));
				warnings.flush();
			}

			return bundle.generate({
				exports: 'named',
				format: 'cjs'
			});
		})
		.then(({ output: [{ code }] }: RollupOutput) => {
			// temporarily override require
			const defaultLoader = require.extensions['.js'];
			const aa = (module: NodeModuleWithCompile, filename: string) => {
				if (filename === configFile) {
					module._compile(code, filename);
				} else {
					defaultLoader(module, filename);
				}
			};
			require.extensions['.js'] = aa as any;

			delete require.cache[configFile];

			return Promise.resolve(interopDefault(require(configFile)))
				.then(configFileContent => {
					if (typeof configFileContent === 'function') {
						return configFileContent(commandOptions);
					}
					return configFileContent;
				})
				.then(configs => {
					if (Object.keys(configs).length === 0) {
						handleError({
							code: 'MISSING_CONFIG',
							message: 'Config file must export an options object, or an array of options objects',
							url: 'https://rollupjs.org/guide/en#configuration-files'
						});
					}

					require.extensions['.js'] = defaultLoader;

					return Array.isArray(configs) ? configs : [configs];
				});
		});
}
