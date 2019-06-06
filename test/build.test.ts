import {baseConfig} from '/home/jm/Projects/Config/rollup';
import {default as customConf} from './data/rollup.config';
import { 
    RollupOptions,
    merge,
  } from '/home/jm/Projects/Modules/tools/rollup';

describe(`c`, () => {
    test(`baseConfig`, () => {
        const conf = baseConfig();
        console.log(`baseConf`, conf);
        expect(conf).toBeTruthy();

    })
});


describe(`merge`, () => {
    
    test(`merged c`, () => {
        const mc = merge(baseConfig(), customConf); 
        console.log(`mc`, mc);
        expect(mc).toBeTruthy();

    })
});

describe(`build`, () => {
    
    test(`build c`, () => {
        const mc = merge(baseConfig(), customConf); 
        console.log(`mc`, mc);
        expect(mc).toBeTruthy();



    })
});