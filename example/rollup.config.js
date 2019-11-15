import {
    baseConfig, build, mergeOptions
} from '..';
   
//@ts-check 
/** @type {RollupOptions} */
const c = {
    input: './src/index.ts',
    output: {
        file:'./dist/index.js'
    }
}
const conf = mergeOptions([baseConfig(), c]);
console.log(`r`, conf)

export default {...conf};