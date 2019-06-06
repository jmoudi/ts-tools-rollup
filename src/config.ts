
export const EXTERNALS = [
    "assert",
    "buffer",
    "constants",
    "crypto",
    "events",
    "fs",
    "module",
    "os",
    "path",
    "stream",
    "url",
    "util",
    "readline",
  
    // See comment in jest.config.js
    "graceful-fs"
  ];






/*   
//const input = Array.isArray(init.input) ? init.input[0] : init.input;

    const roots = findRoots(init.input); //path.resolve(target, "tsconfig.json");
    log("Roots:", roots);
    for (const root of roots){
        const tsconfig = await readConfig(path.resolve(root, "tsconfig.json"));
        log("tsconfig", tsconfig);
        //const newpaths = transformPaths(tsconfig["paths"]);
        //log("newpaths", newpaths);
        const config = createConfig(root, {});
        log("config", config);
        //return rollup(config);
    }


config.plugins = [
    replace(replaceStrings),
    executable(),
    evaluate(),
    json(),
    bundle.alias && alias(bundle.alias),
    bundle.target === "universal" &&
      nativeShims(path.resolve(__dirname, "shims")),
    resolve({
      extensions: [".js", ".json"],
      preferBuiltins: bundle.target === "node"
    }),
    commonjs(
      Object.assign(
        bundle.target === "node" ? { ignoreGlobal: true } : {},
        bundle.commonjs
      )
    ),
    bundle.target === "universal" && nodeGlobals(),
    babelConfig && babel(babelConfig),
    bundle.type === "plugin" && uglify()
  ].filter(Boolean);
 */