          
          rollup -c rollup.conf.js
          
          rollup -c test/data/rollup.conf.js
          rollup -c data/rollup.conf.js
          
            "noEmitHelpers": true

        
        
        
        InvariantPlugin({
          // Instead of completely stripping InvariantError messages in
          // production, this option assigns a numeric code to the
          // production version of each error (unique to the call/throw
          // location), which makes it much easier to trace production
          // errors back to the unminified code where they were thrown,
          // where the full error string can be found. See #4519.
          errorCodes: true,
        }) as any,



"@most/core": "",
    "@most/scheduler": "",
    "@decorators/common": "",
    "@decorators/di": "",
    "@types/core-js": "",
    "@types/debug": "",
    "@types/events": "",
    "@types/execa": "",
    "@types/node": "",
    "@types/p-event": "",
    "@types/through2": "",
    "@types/gulp": "",
    "@types/micromatch": "",
    "@types/anymatch": "",
    "anymatch":"",
    "micromatch":"",
    "ajv": "",
    "async": "",
    "class-validator": "",
    "normalizr": "",
    "better-queue": "",
    "core-js": "",
    "eventemitter2": "",
    "execa": "",
    "gulp": "",
    "gulp-typescript": "",
    "gulp-zip": "",
    "utility-types": "",
    "meow": "",
    "p-event": "",
    "pify": "",
    "promise-limit": "",
    "reflect-metadata": "",
    "source-map": "",
    "sourcemap-validator": "",
    "uuid": "",
    "mobx-state-tree": "",
    "mobx-state-tree-ts": "",
    "redux": "",
    "redux-observable": "",
    "redux-thunk": "",
    "register-service-worker": "",
    "rxjs": "",
    "chai-as-promised": "",
    "child-process-promise": "",
    "node-nvidia-smi": "^1.0.0",
    "rx": "^4.1.0",
    "sqlite3": "^4.0.2",
    "ssh2": "^0.6.1",
    "stream-buffers": "^3.0.2",
    "tree-kill": "^1.2.0",
    "ts-deferred": "^1.0.4",
    "typescript-ioc": "^1.2.4",
    "typescript-string-operations": "",
    "webhdfs":"^1.2.0",
    "azure-storage": "^2.10.2",
    "kubernetes-client": "^6.5.0",
    "js-base64": "^2.4.9"



    Warning: "Treating [module] as external dependency"

Rollup will only resolve relative module IDs by default. This means that an import statement like this...

import moment from 'moment';

...won't result in moment being included in your bundle – instead, it will be an external dependency that is required at runtime. If that's what you want, you can suppress this warning with the external option, which makes your intentions explicit:

// rollup.config.js
export default {
  entry: 'src/index.js',
  dest: 'bundle.js',
  format: 'cjs',
  external: [ 'moment' ] // <-- suppresses the warning
};

If you do want to include the module in your bundle, you need to tell Rollup how to find it. In most cases, this is a question of using rollup-plugin-node-resolve.

Some modules, like events or util, are built in to Node.js. If you want to include those (for example, so that your bundle runs in the browser), you may need to include rollup-plugin-node-builtins.