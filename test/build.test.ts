import {baseConfig} from '/home/jm/Projects/Config/rollup';
//import {default as customConf} from './data/rollup.config';
import { 
    RollupOptions,
    merge,
  } from '/home/jm/Projects/Tools/rollup';

const customConfig = {
    input: `./test/data/index.ts`,
}


describe(`c`, () => {
    test(`baseConfig`, () => {
        const conf = baseConfig();
        console.log(`baseConf`, conf);
        expect(conf).toBeTruthy();

    })
});


describe(`merge`, () => {
    
    test(`merged c`, () => {
        console.log(`customConf`, customConfig);
        const mc = merge(baseConfig(), customConfig); 
        console.log(`mc`, mc);
        expect(mc).toBeTruthy();

    })
});

 