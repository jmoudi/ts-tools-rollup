import {rollup, RollupWarning, InputOption} from 'rollup';
import {RollupOptions} from '../types';
import * as path from 'path';
import { findRoot } from '@lib/path';
import { reduce,mergeDeep } from '@lib/fp';
import { 
    ResolvePlugin, 
    CommonjsPlugin, 
    TypescriptPlugin, 
    SourcemapsPlugin 
} from '../plugins';
import { isObject, isString } from 'util';
import { readConfigFile } from 'typescript';
import { basename, extname, isAbsolute, relative } from './path';

export function merge(...configs: Partial<RollupOptions>[]){
    const finalConfig:RollupOptions={};
    return mergeDeep(finalConfig, ...configs);
}



 



/*
export function findRoots(input: InputOption){
    reduce(input, (p,c) => )
    const root = findRoot(input)
}
 export function findRoots(input: InputOption){
    const roots = new Set<string>();
    if (isString(input)){
        roots.add(findRoot(input));
    } else if (Array.isArray(input)){
        for (const str of input){ 
            const rootdir = findRoot(str);
            roots.add(rootdir); 
        }
    } else if (isObject(input)){
        for (const str of Object.values(input)){ 
            const rootdir = findRoot(str);
            roots.add(rootdir); 
        }
    }
    return Array.from(roots);
} */

export {
    findRoot
}

 
/*


*/