"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
exports.groupBy = lodash_1.groupBy;
exports.uniq = lodash_1.uniq;
exports.uniqBy = lodash_1.uniqBy;
exports.uniqWith = lodash_1.uniqWith;
exports.sortedUniq = lodash_1.sortedUniq;
exports.sortedUniqBy = lodash_1.sortedUniqBy;
const forEach = require("lodash/forEach");
exports.forEach = forEach;
const clone = require("lodash/clone");
exports.clone = clone;
const compact = require("lodash/compact");
exports.compact = compact;
const extend = require("lodash/extend");
exports.extend = extend;
const last = require("lodash/last");
exports.last = last;
const map = require("lodash/map");
exports.map = map;
const max = require("lodash/max");
exports.max = max;
const omit = require("lodash/omit");
exports.omit = omit;
const union = require("lodash/union");
exports.union = union;
exports.toArray = (value) => {
    if (value === null || value === undefined) {
        return [];
    }
    if (Array.isArray(value)) {
        return value;
    }
    if (typeof value === 'string') {
        return [value];
    }
    if (typeof value[Symbol.iterator] === 'function') {
        return [...value];
    }
    return [value];
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvam0vUHJvamVjdHMvTW9kdWxlcy9mcC9zcmMvY29sbGVjdGlvbnMvYXJyYXktdXRpbHMudHMiLCJtYXBwaW5ncyI6Ijs7QUFDQSxpQ0FFZ0I7QUFEZiwyQkFBQSxPQUFPLENBQUE7QUFBRSx3QkFBQSxJQUFJLENBQUE7QUFBRSwwQkFBQSxNQUFNLENBQUE7QUFBRSw0QkFBQSxRQUFRLENBQUE7QUFBRSw4QkFBQSxVQUFVLENBQUE7QUFBRSxnQ0FBQSxZQUFZLENBQUE7QUFJMUQsMENBQTJDO0FBYTFDLDBCQUFPO0FBVlIsc0NBQXVDO0FBV25DLHNCQUFLO0FBVlQsMENBQTJDO0FBV3ZDLDBCQUFPO0FBVlgsd0NBQXlDO0FBV3JDLHdCQUFNO0FBVFYsb0NBQXFDO0FBV2pDLG9CQUFJO0FBVlIsa0NBQW1DO0FBVy9CLGtCQUFHO0FBVlAsa0NBQW1DO0FBVy9CLGtCQUFHO0FBVlAsb0NBQXFDO0FBV2pDLG9CQUFJO0FBVlIsc0NBQXVDO0FBV25DLHNCQUFLO0FBSUksUUFBQSxPQUFPLEdBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRTtJQUNyQyxJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtRQUMxQyxPQUFPLEVBQUUsQ0FBQztLQUNWO0lBRUQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3pCLE9BQU8sS0FBSyxDQUFDO0tBQ2I7SUFFRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUM5QixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDZjtJQUVELElBQUksT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLFVBQVUsRUFBRTtRQUNqRCxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztLQUNsQjtJQUVELE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNoQixDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvam0vUHJvamVjdHMvTW9kdWxlcy9mcC9zcmMvY29sbGVjdGlvbnMvYXJyYXktdXRpbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQge1xuXHRncm91cEJ5LCB1bmlxLCB1bmlxQnksIHVuaXFXaXRoLCBzb3J0ZWRVbmlxLCBzb3J0ZWRVbmlxQnlcbn0gZnJvbSAnbG9kYXNoJztcblxuXG5pbXBvcnQgZm9yRWFjaCA9IHJlcXVpcmUoJ2xvZGFzaC9mb3JFYWNoJyk7XG5cblxuaW1wb3J0IGNsb25lID0gcmVxdWlyZSgnbG9kYXNoL2Nsb25lJyk7XG5pbXBvcnQgY29tcGFjdCA9IHJlcXVpcmUoJ2xvZGFzaC9jb21wYWN0Jyk7XG5pbXBvcnQgZXh0ZW5kID0gcmVxdWlyZSgnbG9kYXNoL2V4dGVuZCcpO1xuIFxuaW1wb3J0IGxhc3QgPSByZXF1aXJlKCdsb2Rhc2gvbGFzdCcpO1xuaW1wb3J0IG1hcCA9IHJlcXVpcmUoJ2xvZGFzaC9tYXAnKTtcbmltcG9ydCBtYXggPSByZXF1aXJlKCdsb2Rhc2gvbWF4Jyk7XG5pbXBvcnQgb21pdCA9IHJlcXVpcmUoJ2xvZGFzaC9vbWl0Jyk7XG5pbXBvcnQgdW5pb24gPSByZXF1aXJlKCdsb2Rhc2gvdW5pb24nKTtcbmV4cG9ydCB7XG5cdGZvckVhY2gsXG4gICAgY2xvbmUsXG4gICAgY29tcGFjdCxcbiAgICBleHRlbmQsXG5cbiAgICBsYXN0LFxuICAgIG1hcCxcbiAgICBtYXgsXG4gICAgb21pdCxcbiAgICB1bmlvblxufTtcblxuXG5leHBvcnQgY29uc3QgdG9BcnJheSA9ICh2YWx1ZTogYW55KSA9PiB7XG5cdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0aWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gW3ZhbHVlXTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWVbU3ltYm9sLml0ZXJhdG9yXSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHJldHVybiBbLi4udmFsdWVdO1xuXHR9XG5cblx0cmV0dXJuIFt2YWx1ZV07XG59OyJdLCJ2ZXJzaW9uIjozfQ==