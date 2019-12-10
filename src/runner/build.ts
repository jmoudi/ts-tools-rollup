import { cyan, bold } from '@/utils/logging';
/* import {watch} from '@/run/watch';
import {build} from '@/run/build'; */
import {
    RollupOptions, RollupBuild, OutputOptions
} from '@/types';
import {rollup} from 'rollup';
import { 
	BatchWarnings,printTimings,batchWarnings,
	handleError, stderr } from './handlers';
import {mergeOptions} from '@/utils/config';
//import {readConfigFile, readJsonConfigFile} from 'typescript'
import {array} from 'fp-ts/lib/Array';
import {task, Task,of} from 'fp-ts/lib/Task';
import { Lazy } from "fp-ts/lib/function";
import { Either, left, right } from "fp-ts/lib/Either";
import { pipe } from "fp-ts/lib/pipeable";
import { TaskEither } from "fp-ts/lib/TaskEither";


class Reporter {
    reportFileWrite(fileName){
        process.stdout.write('\n' + cyan(bold('//→ ' + fileName + ':')) + '\n');
    }

    showOutput(output){
        process.stdout.write(JSON.stringify(output));
    }
}



const writeTask = (builder: RollupBuild) => {
    return (options: OutputOptions) => builder.write(options);

}
//const i = [of(writeTask({})), ]

const onConfigErr = (err) => {
    console.log(err);
}
const onWriteErr = (err) => {
    console.log(err);
}

export async function build(...configs: RollupOptions[]){
    const reporter = new Reporter();
    const cfg: RollupOptions = mergeOptions([...configs]);
    console.log(`cfg`, cfg);
    const build = await rollup(cfg).catch(onConfigErr);
    if (!build){return}
    /* const {output} = await build.generate(cfg.output);
    reporter.showOutput(output); */
    const output = await build.write(cfg.output).catch(onWriteErr);
    if (!output){return}
    reporter.showOutput(output.output);
    
/*     .map(output => bundle.write(output)
    const m = output.map(o => of(writeTask({

    })))
    pa();
    for (const o of output){
        o.
        build.write
    }
    //const outp2 = await res.generate(cfg.output);
    const outp = await res.write(cfg.output);
    const ast = res.cache.modules[0].ast;
    console.log(`outp`, outp, res.cache, ast);
    return res; */
}

const pa = array.sequence(task);