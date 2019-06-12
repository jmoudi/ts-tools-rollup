"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const path = tslib_1.__importStar(require("path"));
//export * from 'path';
/* import path = require('path');
import findUp = require('find-up');

export const findPkg = cwd => findUp('package.json', {cwd}).then(fp => fp ? path.dirname(fp) : null);

export const sync = cwd => {
    const fp = findUp.sync('package.json', {cwd});
    return fp ? path.dirname(fp) : null;
};
 */
exports.toAbsolute = (filepath) => path.resolve(filepath);
//export const exists = (path: PathLike) => existsSync(path);
exports.ensureSlash = (filepath, needsSlash) => {
    const hasSlash = filepath.endsWith('/');
    if (hasSlash && !needsSlash) {
        return filepath.substr(filepath, filepath.length - 1);
    }
    else if (!hasSlash && needsSlash) {
        return `${filepath}/`;
    }
    else {
        return filepath;
    }
};
exports.isDir = (filepath) => /\/$/.test(filepath);
exports.isDirectory = (filepath) => filepath.endsWith("/");
exports.isFile = (filepath) => !filepath.endsWith("/");
/* const toDest = (file: string) => {
    return path.format({
            dir,
         name: path.parse.
         ext: '.code-workspace' });


const dir = path.parse(src).dir;
const name = path.parse(src).name; */
function parsePackageName(name) {
    /@\w*(\*)/;
}
exports.parsePackageName = parsePackageName;
function normalizePath(path, options) {
    if (typeof path !== 'string') {
        throw new TypeError('expected path to be a string');
    }
    if (path === '\\' || path === '/')
        return '/';
    let len = path.length;
    if (len <= 1)
        return path;
    // ensure that win32 namespaces has two leading slashes, so that the path is
    // handled properly by the win32 version of path.parse() after being normalized
    // https://msdn.microsoft.com/library/windows/desktop/aa365247(v=vs.85).aspx#namespaces
    let prefix = '';
    if (len > 4 && path[3] === '\\') {
        var ch = path[2];
        if ((ch === '?' || ch === '.') && path.slice(0, 2) === '\\\\') {
            path = path.slice(2);
            prefix = '//';
        }
    }
    const segs = path.split(/[/\\]+/);
    if (options && options.stripTrailing !== false && segs[segs.length - 1] === '') {
        segs.pop();
    }
    return prefix + segs.join('/');
}
exports.normalizePath = normalizePath;
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvam0vUHJvamVjdHMvTW9kdWxlcy9wYXRoL3NyYy9wYXRoVXRpbHMudHMiLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbURBQTZCO0FBRTdCLHVCQUF1QjtBQUd2Qjs7Ozs7Ozs7O0dBU0c7QUFFVSxRQUFBLFVBQVUsR0FBRyxDQUFDLFFBQWdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUE7QUFDdEUsNkRBQTZEO0FBR2hELFFBQUEsV0FBVyxHQUFHLENBQUMsUUFBYSxFQUFFLFVBQW1CLEVBQUUsRUFBRTtJQUNoRSxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBRXZDLElBQUksUUFBUSxJQUFJLENBQUMsVUFBVSxFQUFFO1FBQzNCLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQTtLQUN0RDtTQUFNLElBQUksQ0FBQyxRQUFRLElBQUksVUFBVSxFQUFFO1FBQ2xDLE9BQU8sR0FBRyxRQUFRLEdBQUcsQ0FBQTtLQUN0QjtTQUFNO1FBQ0wsT0FBTyxRQUFRLENBQUE7S0FDaEI7QUFDSCxDQUFDLENBQUE7QUFJWSxRQUFBLEtBQUssR0FBRyxDQUFDLFFBQWdCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDbkQsUUFBQSxXQUFXLEdBQUcsQ0FBQyxRQUFnQixFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzNELFFBQUEsTUFBTSxHQUFHLENBQUMsUUFBZ0IsRUFBRSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BFOzs7Ozs7OztxQ0FRcUM7QUFDckMsU0FBZ0IsZ0JBQWdCLENBQUMsSUFBWTtJQUN6QyxVQUFVLENBQUE7QUFDZCxDQUFDO0FBRkQsNENBRUM7QUFFRCxTQUFnQixhQUFhLENBQUMsSUFBWSxFQUFFLE9BQW9DO0lBQzVFLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1FBQzVCLE1BQU0sSUFBSSxTQUFTLENBQUMsOEJBQThCLENBQUMsQ0FBQztLQUNyRDtJQUVELElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssR0FBRztRQUFFLE9BQU8sR0FBRyxDQUFDO0lBRTlDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdEIsSUFBSSxHQUFHLElBQUksQ0FBQztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBRTFCLDRFQUE0RTtJQUM1RSwrRUFBK0U7SUFDL0UsdUZBQXVGO0lBQ3ZGLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNoQixJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRTtRQUMvQixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksRUFBRSxLQUFLLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLE1BQU0sRUFBRTtZQUM3RCxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQixNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ2Y7S0FDRjtJQUVELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEMsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLGFBQWEsS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQzlFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUNaO0lBQ0QsT0FBTyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBM0JILHNDQTJCRztBQUFBLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvam0vUHJvamVjdHMvTW9kdWxlcy9wYXRoL3NyYy9wYXRoVXRpbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IHsgUGF0aExpa2UgfSBmcm9tICdmcyc7XHJcbi8vZXhwb3J0ICogZnJvbSAncGF0aCc7XHJcblxyXG5cclxuLyogaW1wb3J0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XHJcbmltcG9ydCBmaW5kVXAgPSByZXF1aXJlKCdmaW5kLXVwJyk7XHJcblxyXG5leHBvcnQgY29uc3QgZmluZFBrZyA9IGN3ZCA9PiBmaW5kVXAoJ3BhY2thZ2UuanNvbicsIHtjd2R9KS50aGVuKGZwID0+IGZwID8gcGF0aC5kaXJuYW1lKGZwKSA6IG51bGwpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN5bmMgPSBjd2QgPT4ge1xyXG5cdGNvbnN0IGZwID0gZmluZFVwLnN5bmMoJ3BhY2thZ2UuanNvbicsIHtjd2R9KTtcclxuXHRyZXR1cm4gZnAgPyBwYXRoLmRpcm5hbWUoZnApIDogbnVsbDtcclxufTtcclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgdG9BYnNvbHV0ZSA9IChmaWxlcGF0aDogc3RyaW5nKSA9PiBwYXRoLnJlc29sdmUoZmlsZXBhdGgpXHJcbi8vZXhwb3J0IGNvbnN0IGV4aXN0cyA9IChwYXRoOiBQYXRoTGlrZSkgPT4gZXhpc3RzU3luYyhwYXRoKTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZW5zdXJlU2xhc2ggPSAoZmlsZXBhdGg6IGFueSwgbmVlZHNTbGFzaDogYm9vbGVhbikgPT4ge1xyXG4gIGNvbnN0IGhhc1NsYXNoID0gZmlsZXBhdGguZW5kc1dpdGgoJy8nKVxyXG5cclxuICBpZiAoaGFzU2xhc2ggJiYgIW5lZWRzU2xhc2gpIHtcclxuICAgIHJldHVybiBmaWxlcGF0aC5zdWJzdHIoZmlsZXBhdGgsIGZpbGVwYXRoLmxlbmd0aCAtIDEpXHJcbiAgfSBlbHNlIGlmICghaGFzU2xhc2ggJiYgbmVlZHNTbGFzaCkge1xyXG4gICAgcmV0dXJuIGAke2ZpbGVwYXRofS9gXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBmaWxlcGF0aFxyXG4gIH1cclxufVxyXG5cclxuIFxyXG5cclxuZXhwb3J0IGNvbnN0IGlzRGlyID0gKGZpbGVwYXRoOiBzdHJpbmcpID0+IC9cXC8kLy50ZXN0KGZpbGVwYXRoKTtcclxuZXhwb3J0IGNvbnN0IGlzRGlyZWN0b3J5ID0gKGZpbGVwYXRoOiBzdHJpbmcpID0+IGZpbGVwYXRoLmVuZHNXaXRoKFwiL1wiKTtcclxuZXhwb3J0IGNvbnN0IGlzRmlsZSA9IChmaWxlcGF0aDogc3RyaW5nKSA9PiAhZmlsZXBhdGguZW5kc1dpdGgoXCIvXCIpO1xyXG4vKiBjb25zdCB0b0Rlc3QgPSAoZmlsZTogc3RyaW5nKSA9PiB7XHJcbiAgICByZXR1cm4gcGF0aC5mb3JtYXQoeyBcclxuICAgICAgICAgICAgZGlyLFxyXG4gICAgICAgICBuYW1lOiBwYXRoLnBhcnNlLlxyXG4gICAgICAgICBleHQ6ICcuY29kZS13b3Jrc3BhY2UnIH0pO1xyXG5cclxuXHJcbmNvbnN0IGRpciA9IHBhdGgucGFyc2Uoc3JjKS5kaXI7XHJcbmNvbnN0IG5hbWUgPSBwYXRoLnBhcnNlKHNyYykubmFtZTsgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGFja2FnZU5hbWUobmFtZTogc3RyaW5nKXtcclxuICAgIC9AXFx3KihcXCopL1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplUGF0aChwYXRoOiBzdHJpbmcsIG9wdGlvbnM/OiB7IHN0cmlwVHJhaWxpbmc6IGJvb2xlYW4gfSkge1xyXG4gICAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleHBlY3RlZCBwYXRoIHRvIGJlIGEgc3RyaW5nJyk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpZiAocGF0aCA9PT0gJ1xcXFwnIHx8IHBhdGggPT09ICcvJykgcmV0dXJuICcvJztcclxuICBcclxuICAgIGxldCBsZW4gPSBwYXRoLmxlbmd0aDtcclxuICAgIGlmIChsZW4gPD0gMSkgcmV0dXJuIHBhdGg7XHJcbiAgXHJcbiAgICAvLyBlbnN1cmUgdGhhdCB3aW4zMiBuYW1lc3BhY2VzIGhhcyB0d28gbGVhZGluZyBzbGFzaGVzLCBzbyB0aGF0IHRoZSBwYXRoIGlzXHJcbiAgICAvLyBoYW5kbGVkIHByb3Blcmx5IGJ5IHRoZSB3aW4zMiB2ZXJzaW9uIG9mIHBhdGgucGFyc2UoKSBhZnRlciBiZWluZyBub3JtYWxpemVkXHJcbiAgICAvLyBodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9saWJyYXJ5L3dpbmRvd3MvZGVza3RvcC9hYTM2NTI0Nyh2PXZzLjg1KS5hc3B4I25hbWVzcGFjZXNcclxuICAgIGxldCBwcmVmaXggPSAnJztcclxuICAgIGlmIChsZW4gPiA0ICYmIHBhdGhbM10gPT09ICdcXFxcJykge1xyXG4gICAgICB2YXIgY2ggPSBwYXRoWzJdO1xyXG4gICAgICBpZiAoKGNoID09PSAnPycgfHwgY2ggPT09ICcuJykgJiYgcGF0aC5zbGljZSgwLCAyKSA9PT0gJ1xcXFxcXFxcJykge1xyXG4gICAgICAgIHBhdGggPSBwYXRoLnNsaWNlKDIpO1xyXG4gICAgICAgIHByZWZpeCA9ICcvLyc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IHNlZ3MgPSBwYXRoLnNwbGl0KC9bL1xcXFxdKy8pO1xyXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5zdHJpcFRyYWlsaW5nICE9PSBmYWxzZSAmJiBzZWdzW3NlZ3MubGVuZ3RoIC0gMV0gPT09ICcnKSB7XHJcbiAgICAgIHNlZ3MucG9wKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJlZml4ICsgc2Vncy5qb2luKCcvJyk7XHJcbiAgfTtcclxuXHJcbiJdLCJ2ZXJzaW9uIjozfQ==