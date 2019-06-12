import ms from 'pretty-ms';
import {rollup} from 'rollup';
import {cyan,green,underline,gray,red,yellow,bold,dim} from '@/utils/color';

import {
	InputOptions,
	OutputAsset,
	OutputChunk,
	OutputOptions,
	RollupBuild
} from 'rollup';
import {relativeId} from '@/utils';
import { BatchWarnings,printTimings,
	handleError, stderr } from './logging';

const SOURCEMAPPING_URL = '111';

export async function build(
	inputOptions: InputOptions,
	outputOptions: OutputOptions[],
	warnings: BatchWarnings,
	silent = false
) {
	const useStdout = !outputOptions[0].file && !outputOptions[0].dir;

	const start = Date.now();
	const files = useStdout ? ['stdout'] : outputOptions.map(t => relativeId(t.file || t.dir));
	if (!silent) {
		let inputFiles: string;
		if (typeof inputOptions.input === 'string') {
			inputFiles = inputOptions.input;
		} else if (inputOptions.input instanceof Array) {
			inputFiles = inputOptions.input.join(', ');
		} else if (typeof inputOptions.input === 'object' && inputOptions.input !== null) {
			inputFiles = Object.keys(inputOptions.input)
				.map(name => (<Record<string, string>>inputOptions.input)[name])
				.join(', ');
		}
		stderr(cyan(`\n${bold(inputFiles)} → ${bold(files.join(', '))}...`));
	}

	try {
	const bundle = await rollup(inputOptions).then(async (bundle: RollupBuild) => {
			if (useStdout) {
				const output = outputOptions[0];
				if (output.sourcemap && output.sourcemap !== 'inline') {
					handleError({
						code: 'MISSING_OUTPUT_OPTION',
						message: 'You must specify a --file (-o) option when creating a file with a sourcemap'
					});
				}

				return bundle.generate(output).then(({ output: outputs }) => {
					for (const file of outputs) {
						let source: string | Buffer;
						if ((<OutputAsset>file).isAsset) {
							source = (<OutputAsset>file).source;
						} else {
							source = (<OutputChunk>file).code;
							if (output.sourcemap === 'inline') {
								source += `\n//# ${SOURCEMAPPING_URL}=${(<OutputChunk>file).map.toUrl()}\n`;
							}
						}
						if (outputs.length > 1)
							process.stdout.write('\n' + cyan(bold('//→ ' + file.fileName + ':')) + '\n');
						process.stdout.write(source);
					}
				});
			}

			return Promise.all(outputOptions.map(output => <Promise<any>>bundle.write(output))).then(
				() => bundle
			);
		});
		if (bundle){
			warnings.flush();
			if (!silent)
				stderr(
					green(`created ${bold(files.join(', '))} in ${bold(ms(Date.now() - start))}`)
				);
			if (bundle && bundle.getTimings) {
				printTimings(bundle.getTimings());
			}
		}
		} catch(err){
			if (warnings.count > 0) warnings.flush();
			handleError(err);
		};
/* 		.catch((err: any) => {
			if (warnings.count > 0) warnings.flush();
			handleError(err);
		}); */
}
