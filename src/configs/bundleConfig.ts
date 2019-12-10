/* const Res = {
    ResolvePlugin({
        extensions: ['.ts', '.tsx'],  [ '.mjs', '.js', '.json', '.node' ]
        module: true,
    }
} 



const keysTransformer = require('ts-transformer-keys/transformer').default;
const transformer = (service) =>
{
    before: [ keysTransformer(service.getProgram()) ],
    after: []
};
 
// ...
plugins: [
    typescript({ transformers: [transformer] })
]


*/



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