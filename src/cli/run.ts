//import { mergeOptions } from 'src/utils/mergeOptions';
/* import {watch} from '@/run/watch';
import {build} from '@/run/build'; */
import {
	InputOptions,
	InputOption,
	OutputAsset,
	OutputChunk,
	OutputOptions,
	RollupBuild,
	RollupError,
	RollupWatchOptions 
} from 'rollup';
import {} from 'rollup/dist/rollup.es.js'
import { 
	BatchWarnings,printTimings,batchWarnings,
    handleError, stderr } from '../runner/handlers';
import {cyan,green,
    underline,gray,red,
    yellow,bold,dim} from '../utils/color';

    

declare const useStdout: any;
declare const outputOptions: any;

declare const SOURCEMAPPING_URL: any;




export const onFin = async (bundle: RollupBuild) => {
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
}
 

