import {baseConfig} from '/home/jm/Projects/Config/rollup';
//const {baseConfig} = require('/home/jm/Projects/Config/rollup');
//const {merge} = require('/home/jm/Projects/Tools/rollup');
import { 
    merge,
} from '/home/jm/Projects/Tools/rollup';

const conf = {
    input: './src/index.ts',
    //output: `./test/index.js`
}
const con = merge(baseConfig(), conf);
console.log(`CON`, con);
module.exports = con;
//module.exports = merge(baseConfig(), conf)