import {
 baseConfig, build
} from '../src';

export async function run(){
  try {
  const r = await build(baseConfig, {
    input: './test/data/index.ts',
    output: {
      file:'./test/data/dist.js',
      name: 'fdssdf'
    }
  });
  console.log(`r`, r);
} catch (err){ console.warn(err)}

}
run()