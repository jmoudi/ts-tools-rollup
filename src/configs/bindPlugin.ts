import {
    ResolvePlugin,
    TypescriptPlugin,
    InvariantPlugin,
    CommonjsPlugin,
    SourcemapsPlugin,
    SourceMapsPlugin,
    TsTransformPathsPlugins
} from '../plugins/plugins';
import {transformPaths} from '@/utils/tsconfig-paths';
import path from 'path';
  

/*   AliasPlugin({
    '@Modules/logger': ``
}) */

export const createTsPlugin = ({appRoot}, opts: Parameters<typeof TypescriptPlugin>[0]) => {
    const tsconfigDefaults1 = {
        compilerOptions: {
        lib: ['dom', 'dom.iterable', 'es2015', 'esnext', 'es2017'],
        sourceMap: true,
        declaration: true
        }
    }
     const tsconfigOverride1 = {
        compilerOptions: {
            module: 'ESNext',
            //sourceMap: true,
            // evtl because of declaration problems?????
            //declaration: true
         
        }
      } 

        //SourceMapsPlugin(),
        return TypescriptPlugin({ 
          // IMPORTANT: check: false CAUSES TYPE ERRORS
          //abortOnError: true,
          cacheRoot: path.resolve(appRoot, '.cache'),
          verbosity: 2,
          tsconfigDefaults: tsconfigDefaults1,
          clean: true,

          exclude: ['*.spec*', '**/*.spec*'],

          rollupCommonJSResolveHack: true,
          useTsconfigDeclarationDir: true,
          tsconfig: path.resolve(appRoot, 'tsconfig.json'),
          //typescript,
          tsconfigOverride: tsconfigOverride1,
          transformers: [
              (service) => {
                const OUTPP = transformPaths(service.getProgram());
                //if (debug === true){
                    console.log(`transformPaths`, OUTPP);

                //}
                return transformPaths(service.getProgram()) as any }
            ]
  /* 
          If true, declaration files will be emitted in the directory given in the tsconfig. If false, the declaration files will be placed inside the destination directory given in the Rollup configuration.
  
          Set to false if any other rollup plugins need access to declaration files. */
          //seTsconfigDeclarationDir: false
        }) //tsconfig
  }
/* 
typescript({
    abortOnError: true,
    check: !watch,
    clean: !watch,
    
    tsconfig: path.join(repoRoot, 'tsconfig.base.json'),
    useTsconfigDeclarationDir: true,
    typescript: ttypescript,
    tsconfigOverride: {
        compilerOptions: {
            baseUrl: repoRoot,
            paths: {
                ...paths,
                [pkg.json.name]: [pkg.srcDir]
            },
            rootDir: pkg.srcDir,
            declarationDir: pkg.declarationDir,
            declaration: pkg.lib
        },
        include: [pkg.srcDir]
    }
}), */