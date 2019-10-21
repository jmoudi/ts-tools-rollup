import {
  baseConfig
} from '../src';
import {rollup, RollupOptions} from 'rollup';

export async function run(){
  const r = await rollup(baseConfig);
  console.log(`r`, r)
}
run()