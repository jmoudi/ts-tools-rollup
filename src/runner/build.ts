/* import {watch} from '@/run/watch';
import {build} from '@/run/build'; */
import {
    RollupOptions
} from '../types';
import {rollup} from 'rollup';
import { 
	BatchWarnings,printTimings,batchWarnings,
	handleError, stderr } from './logging';
import {merge} from '../utils';
 



export async function build(...configs: RollupOptions[]){
    const cfg: RollupOptions = merge({}, ...configs);
    console.log(`cfg`, cfg);
    const res = await rollup(cfg);
    //const outp2 = await res.generate(cfg.output);
    const outp = await res.write(cfg.output);
    const ast = res.cache.modules[0].ast;
    console.log(`outp`, outp, res.cache, ast);
    return res;
}