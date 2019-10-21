import {Plugin} from './types';
import ResolvePlugin from 'rollup-plugin-node-resolve'
import CommonjsPlugin from 'rollup-plugin-commonjs'
import SourcemapsPlugin from 'rollup-plugin-sourcemaps';
import TypescriptPlugin from 'rollup-plugin-typescript2';
import ReplacePlugin from 'rollup-plugin-replace';
import InvariantPlugin from 'rollup-plugin-invariant';


export {
    InvariantPlugin,
    ResolvePlugin, 
    CommonjsPlugin,
    SourcemapsPlugin,
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
//import tstransformpaths from '@zerollup/ts-transform-paths';