import * as TsconfigPaths from 'tsconfig-paths';
import {log, Logger} from '@lib/logger';
import {resolve} from 'path';
import {default as TsTransformPaths} from 'ts-transform-paths';
import {default as ts} from 'typescript';

//ts.CustomTransformers
TsTransformPaths()

enum ERR {

}
const logger = new Logger();

export async function convertPaths({ tsconfigFile }){
    const loadResult = TsconfigPaths.loadConfig(resolve(tsconfigFile)); //await readConfig(`../tsconfig.json`);
    if (loadResult.resultType === "failed") {
        logger.error(`Failed to load tsconfig.json: ${loadResult.message}`);
        return
    }
    log(`log`, loadResult);
    //loadResult.
    logger.info(`convertPaths: Using config file at ${loadResult.configFileAbsolutePath}`);
    const absoluteBaseUrl = loadResult.absoluteBaseUrl; //options.baseUrl ||  this.absoluteBaseUrl = options.baseUrl ? path.resolve(options.baseUrl) : loadResult.absoluteBaseUrl;
            //this.matchPath = TsconfigPaths.createMatchPathAsync(this.absoluteBaseUrl, loadResult.paths, options.mainFields);
    const matchPaths = TsconfigPaths.createMatchPath(loadResult.absoluteBaseUrl, loadResult.paths)
    log(`matchPaths`, matchPaths(`@Modules/logger`));
    return matchPaths
}

export function transformPaths(paths: { [k: string]: string[] }){
    for (const path in paths){
        const patterns = paths[path];
        //patterns
    }
}
