import {RollupOptions,rollup, RollupWarning} from 'rollup';
import typescriptPlugin from 'rollup-plugin-typescript2';
import {relative,join,resolve} from 'path';

import {
    InvariantPlugin,
    ResolvePlugin,
    TypescriptPlugin
} from '../plugins';

const ModuleRoot = `/home/jm/Projects/Modules/`;
const projectDir = join(__filename, '..');
const libraryName = `aaaa`
const Tsc = `${projectDir}/tsconfig.build.json`;


const Paths = {

}
const globals = {};

const plugins = [
  ResolvePlugin({
    extensions: ['.ts', '.tsx'],
    module: true,
  }),
  TypescriptPlugin({
      tsconfig: Tsc,
      clean: true,
      rollupCommonJSResolveHack: true,
  }),

],

const getModuleName = (id) => {
    const [o, name] = /^@[^\/]+\/([^"']+)$/.exec(id);
    return name ? name : id
}

const setInput = (file) => `./${file}`
const setOutput = (format, file) => `./bundle.${format}.js`
function onwarn(warning){
  const {code, missing, message} = warning as RollupWarning;
  const ignoreWarnings = ['CIRCULAR_DEPENDENCY', 'CIRCULAR', 'THIS_IS_UNDEFINED']
  if (ignoreWarnings.some(w => w === code)){return}
  if (missing === 'alea'){return}

  console.warn(message)
}
const sourcemapPathTransform = (relativePath) => {
  // will transform e.g. "src/main.js" -> "main.js"
  return relative('src', relativePath)
},

function createConfig(format, file) {
    return {
      input: setInput(file),
      output: {
        format: format,
        file: setOutput(format),
        name: libraryName,
        paths: (id) =>  join(ModuleRoot, getModuleName(id)),
        sourcemap: true,
        exports: 'named',
        noConflict: true,
        globals,
      },
      external,
      onwarn,
    };
  }

const createEsmConfig = createConfig(`esm`);
const o: RollupOptions = {
    input: `./src/index.ts`,
    output: {
        format: 'umd',
        name: 'R',
        exports: 'named',
        file: ``
        
    },

    
 
 