import {baseConfig} from '/home/jm/Projects/Config/rollup';
import { 
    RollupOptions,
    merge,
  } from '/home/jm/Projects/Modules/tools/rollup';

  const conf ={
    input: './test/data/t1.ts',
}

module.exports = merge(baseConfig(), conf)