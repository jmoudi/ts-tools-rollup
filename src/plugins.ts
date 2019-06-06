/*
export {default as ResolvePlugin} from 'rollup-plugin-node-resolve'
export {default as CommonjsPlugin} from 'rollup-plugin-commonjs'
export {default as SourcemapsPlugin} from 'rollup-plugin-sourcemaps';
export {default as TypescriptPlugin} from 'rollup-plugin-typescript2';

var rollupInject = require('rollup-plugin-inject');

*/
import {default as ResolvePlugin} from 'rollup-plugin-node-resolve'
import {default as CommonjsPlugin} from 'rollup-plugin-commonjs'
import {default as SourcemapsPlugin} from 'rollup-plugin-sourcemaps';
import {default as TypescriptPlugin} from 'rollup-plugin-typescript2';
import {default as ReplacePlugin} from 'rollup-plugin-replace';
import {default as _AliasPlugin} from 'rollup-plugin-import-alias';
const AliasPlugin = _AliasPlugin as Plugin;

import {default as _InvariantPlugin} from 'rollup-plugin-invariant';
import {Plugin} from 'rollup';

const InvariantPlugin = _InvariantPlugin as Plugin;

export {
    InvariantPlugin,
    ResolvePlugin, 
    CommonjsPlugin,
    SourcemapsPlugin,
    TypescriptPlugin,
    ReplacePlugin,
    AliasPlugin
}
//import tstransformpaths from '@zerollup/ts-transform-paths';