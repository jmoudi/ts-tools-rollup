import {
    baseConfig, build
} from '..';
   
//@ts-check 
/** @type {RollupOptions} */
const c = {
    input: './test/data/index.ts',
    output: {
        file:'./test/data/dist.js'
    }
}
console.log(`r`, c)

export default {...c};