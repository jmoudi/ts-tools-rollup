import {mergeDeep, cloneDeepWith} from '@std/fp'
import { RollupOptions } from '../types';


const prepareConfig = (conf) => {
    const customMerger = {
        'input': (a, b) => a + b + 'dfdgd',
        'output': (a) => ({
                file: a
            })
        }
        return cloneDeepWith(conf, (v, k) => {
            const handler = customMerger[k];
            if (handler){ return handler(v)}
        })
}

export const mergeOptions = (opts: RollupOptions[]) => {
    //const prepareAll = opts.map(prepareConfig); 
    const res: RollupOptions = mergeDeep.all(opts);
    return res;
}
