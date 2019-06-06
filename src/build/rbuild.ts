import ms from 'pretty-ms';
import * as rollup from 'rollup';
import tc from 'turbocolor';
import {
	InputOptions,
	OutputAsset,
	OutputChunk,
	OutputOptions,
	RollupBuild
} from 'rollup';
import {relativeId} from '@/utils';
import { handleError, stderr } from '@/utils/logging';
import SOURCEMAPPING_URL from '../sourceMappingUrl';
import { BatchWarnings } from './batchWarnings';
import { printTimings } from './timings';

export default function build(
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
		stderr(tc.cyan(`\n${tc.bold(inputFiles)} → ${tc.bold(files.join(', '))}...`));
	}

	return rollup(inputOptions)
		.then((bundle: RollupBuild) => {
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
							process.stdout.write('\n' + tc.cyan(tc.bold('//→ ' + file.fileName + ':')) + '\n');
						process.stdout.write(source);
					}
				});
			}

			return Promise.all(outputOptions.map(output => <Promise<any>>bundle.write(output))).then(
				() => bundle
			);
		})
		.then((bundle?: RollupBuild) => {
			warnings.flush();
			if (!silent)
				stderr(
					tc.green(`created ${tc.bold(files.join(', '))} in ${tc.bold(ms(Date.now() - start))}`)
				);
			if (bundle && bundle.getTimings) {
				printTimings(bundle.getTimings());
			}
		})
		.catch((err: any) => {
			if (warnings.count > 0) warnings.flush();
			handleError(err);
		});
}
