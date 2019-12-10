import ResolvePlugin from 'rollup-plugin-node-resolve'
import CommonjsPlugin from 'rollup-plugin-commonjs'
import SourcemapsPlugin, {default as SourceMapsPlugin} from 'rollup-plugin-sourcemaps';
import TypescriptPlugin from 'rollup-plugin-typescript2';
import ReplacePlugin from 'rollup-plugin-replace';
import InvariantPlugin from 'rollup-plugin-invariant';
import TsPathsPlugins from 'rollup-plugin-ts-paths';
import TsTransformPathsPlugins from '@zerollup/ts-transform-paths';
import AliasPlugin from 'rollup-plugin-alias'
import ImportAliasPlugin from 'rollup-plugin-import-alias'


export {
    ImportAliasPlugin,
    AliasPlugin,
    TsTransformPathsPlugins,
    TsPathsPlugins,
    InvariantPlugin,

        // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    ResolvePlugin, 

    /**
     * Symlinks are common in monorepos and are also created by the npm link command.
     * Rollup with rollup-plugin-node-resolve resolves modules to their real paths by default. So include and exclude paths should handle real paths rather than symlinked paths (e.g. ../common/node_modules/** instead of node_modules/**). 
     * You may also use a regular expression for include that works regardless of base path. Try this:
     * Whether symlinked module paths are realpathed or preserved depends on Rollup's preserveSymlinks setting, which is false by default, matching Node.js' default behavior. Setting preserveSymlinks to true in your Rollup config will cause import and export to match based on symlinked paths instead.
     */
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