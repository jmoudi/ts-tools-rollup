import {Plugin} from './types';
import ResolvePlugin from 'rollup-plugin-node-resolve'
import CommonjsPlugin from 'rollup-plugin-commonjs'
import SourcemapsPlugin, {default as SourceMapsPlugin} from 'rollup-plugin-sourcemaps';
import TypescriptPlugin from 'rollup-plugin-typescript2';
import ReplacePlugin from 'rollup-plugin-replace';
import InvariantPlugin from 'rollup-plugin-invariant';
import TsPathsPlugins from 'rollup-plugin-ts-paths';
import TsTransformPathsPlugins from '@zerollup/ts-transform-paths';


export {
    TsTransformPathsPlugins,
    TsPathsPlugins,
    InvariantPlugin,
    ResolvePlugin, 
    CommonjsPlugin,
    SourcemapsPlugin,
    SourceMapsPlugin,
    /**
     * Compatibility
rollup-plugin-node-resolve

Must be before rollup-plugin-typescript2 in the plugin list, especially when browser: true option is used, see #66
rollup-plugin-commonjs

See explanation for rollupCommonJSResolveHack option below.
plugins using async/await

See objectHashIgnoreUnknownHack below.
rollup-plugin-babel

This plugin transpiles code, but doesn't change file extension. Babel plugin, even though it claims it processes all files, only looks at code with those extensions by default: .js,.jsx,.es6,.es,.mjs. To workaround add ts and tsx to the list of babel extensions.
     */
    TypescriptPlugin,
    ReplacePlugin,
}
/* 
AliasPlugin
InvariantPlugin
declare module "rollup-plugin-import-alias" {
    import * as _AliasPlugin from 'rollup-plugin-import-alias';
    const AliasPlugin = _AliasPlugin as Plugin;
    export 
} 
import * as _InvariantPlugin from 'rollup-plugin-invariant';

const InvariantPlugin = _InvariantPlugin as Plugin;
import * as ResolvePlugin from 'rollup-plugin-node-resolve'
import * as CommonjsPlugin from 'rollup-plugin-commonjs'
import * as SourcemapsPlugin from 'rollup-plugin-sourcemaps';
import * as TypescriptPlugin from 'rollup-plugin-typescript2';
import * as ReplacePlugin from 'rollup-plugin-replace';
import * as InvariantPlugin from 'rollup-plugin-invariant';
*/
//