import {
    ResolvePlugin,
    TypescriptPlugin,
    InvariantPlugin,
    CommonjsPlugin,
    SourcemapsPlugin,
    SourceMapsPlugin,
    TsTransformPathsPlugins
} from '../plugins';
import { RollupOptions } from '../types';

import typescript from 'typescript';
import tslib from 'tslib';
export {tslib}

 const tsconfigOverride1 = {
    compilerOptions: {
        module: 'ESNext',
        sourceMap: true,
        // evtl because of declaration problems?????
        declaration: true
     
    }
  } 

function onWarn(message) {
    const suppressed = ['UNRESOLVED_IMPORT', 'THIS_IS_UNDEFINED'];
    if (!suppressed.find(code => message.code === code)) {
        return console.warn(message.message);
    }
}

const baseConfigDefaults = {
  input: './src/index.ts',
  output: {

  }
}

export const BaseConfig: RollupOptions = {
    //input: cfg.input,
    output: {
        //file: cfg.output,
        format: 'umd',
        sourcemap: true,
        //name: cfg.name,
        exports: 'named'
    },
    plugins: [

      ResolvePlugin({
        extensions: ['.ts', '.tsx', '.js', '.json', '.jsx', '.node' ]
    /*     main: true,
        module: true,
        extensions: [ ], */
        //preferBuiltins: false
      }), // so Rollup can find 'ms'

/*       CommonjsPlugin({
        include: 'node_modules/**'
        //include: [/node_modules/]
      }), // so Rollup can convert `ms` to an ES module */

      //SourceMapsPlugin(),
      TypescriptPlugin({ 
        //check: false,
        abortOnError: true,
        verbosity: 2,
        clean: true,
        //useTsconfigDeclarationDir: true,
        //typescript,
        tsconfigOverride: tsconfigOverride1,
        //rollupCommonJSResolveHack: true
/* 
        If true, declaration files will be emitted in the directory given in the tsconfig. If false, the declaration files will be placed inside the destination directory given in the Rollup configuration.

        Set to false if any other rollup plugins need access to declaration files. */
        //seTsconfigDeclarationDir: false
      }), //tsconfig

      // @ts-ignore
      SourcemapsPlugin({ include: 'node_modules/**' }), //SourcemapsPlugin({include: [/node_modules/]}),
          
      
      //TsTransformPathsPlugins(),
    ],
    onwarn: onWarn,
};
export const baseConfig = () => {
  return BaseConfig;
}
/*
export function rollup1({
  name,
  input = './src/index.ts',
  outputPrefix = 'bundle',
  extraGlobals = {},
}) {
  const projectDir = path.join(__filename, '..');
  console.info(`Building project esm ${projectDir}`);
  const tsconfig = `${projectDir}/tsconfig.json`;

  const globals = {
    ...defaultGlobals,
    ...extraGlobals,
  };

  function external(id) {
    return Object.prototype.hasOwnProperty.call(globals, id);
  }

  function outputFile(format) {
    return './lib/' + outputPrefix + '.' + format + '.js';
  }

  function convert(format) {
    return {
      input: outputFile('esm'),
      external,
      output: {
        file: outputFile(format),
        format,
        sourcemap: true,
        name,
        globals,
      },
      onwarn,
    };
  }

  return [
    {
      input,
      external,
      output: {
        file: outputFile('esm'),
        format: 'esm',
        sourcemap: true,
      },
      plugins: [
        ResolvePlugin({
          extensions: ['.ts', '.tsx'],
          module: true,
        }),
        TypescriptPlugin({ typescript, tsconfig }),
        invariantPlugin({
          // Instead of completely stripping InvariantError messages in
          // production, this option assigns a numeric code to the
          // production version of each error (unique to the call/throw
          // location), which makes it much easier to trace production
          // errors back to the unminified code where they were thrown,
          // where the full error string can be found. See #4519.
          errorCodes: true,
        }),
      ],
      onwarn,
    },
    convert('umd'),
    convert('cjs'),
    {
      input: outputFile('cjs'),
      output: {
        file: outputFile('cjs.min'),
        format: 'cjs',
      },
      plugins: [
        minify({
          mangle: {
            toplevel: true,
          },
          compress: {
            global_defs: {
              '@process.env.NODE_ENV': JSON.stringify('production'),
            },
          },
        }),
      ],
    },
  ];
}
 */