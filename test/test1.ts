import typescript from 'typescript';
import {
    ResolvePlugin,
    TypescriptPlugin,
    InvariantPlugin
} from '../src/plugins';
import path from 'path';
import { terser as minify } from 'rollup-plugin-terser';
import {rollup, RollupOptions} from 'rollup';

const tsconfigOverride = {
  compilerOptions: { 
    module: 'ESNext',
    declaration: true 
  }
}
function onWarn(message) {
    const suppressed = ['UNRESOLVED_IMPORT', 'THIS_IS_UNDEFINED'];
  
    if (!suppressed.find(code => message.code === code)) {
      return console.warn(message.message);
    }
  }

const cfg = {
    input: './test/data/index.ts',
    output: './dd.js'

}
const r = rollup({
    input: cfg.input,
    output: {
      file: cfg.output,
      format: 'umd',
      sourcemap: true,
    },
    
    plugins: [

    //@ts-ignore
    ResolvePlugin({
        extensions: ['.ts', '.tsx'],
        module: true,
      }),
      //@ts-ignore
      TypescriptPlugin({ typescript, tsconfigOverride }), //tsconfig
      //@ts-ignore
      InvariantPlugin({
        // Instead of completely stripping InvariantError messages in
        // production, this option assigns a numeric code to the
        // production version of each error (unique to the call/throw
        // location), which makes it much easier to trace production
        // errors back to the unminified code where they were thrown,
        // where the full error string can be found. See #4519.
        errorCodes: true,
      }),
    ],
    onWarn,
});