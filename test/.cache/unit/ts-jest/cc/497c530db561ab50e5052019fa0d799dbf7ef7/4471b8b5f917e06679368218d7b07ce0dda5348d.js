"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
exports.mergeL = lodash_1.merge;
exports.mergeWithL = lodash_1.mergeWith;
var immutable_1 = require("immutable");
exports.mergeDeep = immutable_1.mergeDeep;
exports.mergeDeepWith = immutable_1.mergeDeepWith;
exports.merge = immutable_1.merge;
exports.mergeWith = immutable_1.mergeWith;
/*
function deepCopy(obj: object) {
    if (!obj || typeof obj != "object") {
        return obj;
    } else {
        var emptyCopy = Object.create(Object.getPrototypeOf(obj));
        return deepMerge(emptyCopy, obj);
    }
}
function deepMerge(target, ...srcObjects) {
    for (var i = 1; i < arguments.length; i++) {
        var obj = arguments[i];
        for (var k in obj) {
            // hasOwnProperty checking is not needed for our non-OOP stuff
            var value = obj[k];
            if (!value || typeof value != "object") {
                target[k] = value;
            } else if (k in target) {
                deepMerge(target[k], value);
            } else {
                target[k] = deepCopy(value);
            }
        }
    }
    return target;
} */ 
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvam0vUHJvamVjdHMvTW9kdWxlcy9mcC9zcmMvb2JqZWN0cy9tZXJnZS50cyIsIm1hcHBpbmdzIjoiOztBQUFBLGlDQUFtRjtBQUEzRSwwQkFBQSxLQUFLLENBQVU7QUFBQyw4QkFBQSxTQUFTLENBQWM7QUFDL0MsdUNBQWtFO0FBQTFELGdDQUFBLFNBQVMsQ0FBQTtBQUFDLG9DQUFBLGFBQWEsQ0FBQTtBQUFDLDRCQUFBLEtBQUssQ0FBQTtBQUFDLGdDQUFBLFNBQVMsQ0FBQTtBQUkvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXlCSSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9qbS9Qcm9qZWN0cy9Nb2R1bGVzL2ZwL3NyYy9vYmplY3RzL21lcmdlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7bWVyZ2UgYXMgbWVyZ2VMLG1lcmdlV2l0aCBhcyBtZXJnZVdpdGhMLE1lcmdlV2l0aEN1c3RvbWl6ZXJ9IGZyb20gJ2xvZGFzaCc7XG5leHBvcnQge21lcmdlRGVlcCxtZXJnZURlZXBXaXRoLG1lcmdlLG1lcmdlV2l0aH0gZnJvbSAnaW1tdXRhYmxlJztcblxuIFxuXG4vKiBcbmZ1bmN0aW9uIGRlZXBDb3B5KG9iajogb2JqZWN0KSB7XG5cdGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT0gXCJvYmplY3RcIikge1xuXHRcdHJldHVybiBvYmo7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGVtcHR5Q29weSA9IE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikpO1xuXHRcdHJldHVybiBkZWVwTWVyZ2UoZW1wdHlDb3B5LCBvYmopO1xuXHR9XG59XG5mdW5jdGlvbiBkZWVwTWVyZ2UodGFyZ2V0LCAuLi5zcmNPYmplY3RzKSB7XG5cdGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIG9iaiA9IGFyZ3VtZW50c1tpXTtcblx0XHRmb3IgKHZhciBrIGluIG9iaikge1xuXHRcdFx0Ly8gaGFzT3duUHJvcGVydHkgY2hlY2tpbmcgaXMgbm90IG5lZWRlZCBmb3Igb3VyIG5vbi1PT1Agc3R1ZmZcblx0XHRcdHZhciB2YWx1ZSA9IG9ialtrXTtcblx0XHRcdGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9IFwib2JqZWN0XCIpIHtcblx0XHRcdFx0dGFyZ2V0W2tdID0gdmFsdWU7XG5cdFx0XHR9IGVsc2UgaWYgKGsgaW4gdGFyZ2V0KSB7XG5cdFx0XHRcdGRlZXBNZXJnZSh0YXJnZXRba10sIHZhbHVlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRhcmdldFtrXSA9IGRlZXBDb3B5KHZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHRhcmdldDtcbn0gKi8iXSwidmVyc2lvbiI6M30=