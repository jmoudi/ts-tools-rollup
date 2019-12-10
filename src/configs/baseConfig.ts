import {
    ResolvePlugin,
    TypescriptPlugin,
    InvariantPlugin,
    CommonjsPlugin,
    SourcemapsPlugin,
    SourceMapsPlugin,
    TsTransformPathsPlugins
} from '../plugins/plugins';
import { RollupOptions } from '../types';

function onWarn(message) {
    console.log(message);
    const suppressed = [
      //'UNRESOLVED_IMPORT', 
    'THIS_IS_UNDEFINED'
    ];
    const isSuppressed = suppressed.find(code => message.code === code)
    if (!isSuppressed) {
        return console.warn(message.message);
    }
}

const baseConfigDefaults = {
  input: './src/index.ts',
  output: {

  }
}


/**
 * When creating an iife or umd bundle, you will need to provide global variable names to replace your external imports via the output.globals option.

If a relative import, i.e. starting with ./ or ../, is marked as "external", rollup will internally resolve the id to an absolute file system location so that different imports of the external module can be merged. When the resulting bundle is written, the import will again be converted to a relative import. Example:
 */
export const BaseConfig: RollupOptions = {
    //input: cfg.input,
    output: {
        //external: ['tslib'],
        //file: cfg.output,
        format: 'umd',
        sourcemap: true,
        //name: cfg.name,
        exports: 'named',
        interop: true,
        //paths:
        //globals
    },

    plugins: [

      ResolvePlugin({
        //jsnext: true, main: true,
        modulesOnly: true,
        extensions: ['.ts', '.tsx', '.js', '.mjs', '.json', '.jsx', '.node' ],
        preferBuiltins: false
      }), // so Rollup can find 'ms'


       CommonjsPlugin({
        include: /node_modules/
        //include: [/node_modules/]
      }), // so Rollup can convert `ms` to an ES module */


      // @ts-ignore
      SourcemapsPlugin({ 
        include: [/node_modules/]
      }), //SourcemapsPlugin({include: [/node_modules/]}),
      
      //TsTransformPathsPlugins(),

    ],
    onwarn: onWarn,

    // important for yarn link
    preserveSymlinks: true,
    perf: false,
};

interface CreateOptions {
  tsPlugin: Parameters<typeof TypescriptPlugin>[0],

}
export const baseConfig = () => {
  return BaseConfig;
}