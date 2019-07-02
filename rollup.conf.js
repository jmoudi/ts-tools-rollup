import {baseConfig} from '/home/jm/Projects/Config/rollup';
import { 
    merge,
  } from '/home/jm/Projects/Modules/tools/rollup';

  const conf ={
    input: './test/data/t1.ts',
}
const con = merge(baseConfig(), conf);
console.log(`CON`, con);
module.exports = con;
//module.exports = merge(baseConfig(), conf)