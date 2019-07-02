"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
exports.groupBy = lodash_1.groupBy;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvam0vUHJvamVjdHMvTW9kdWxlcy9mcC9zcmMvY29sbGVjdGlvbnMvYXJyYXktdXRpbHMudHMiLCJtYXBwaW5ncyI6Ijs7QUFDQSxpQ0FBK0I7QUFBdkIsMkJBQUEsT0FBTyxDQUFBO0FBRWYsMENBQTJDO0FBYTFDLDBCQUFPO0FBVlIsc0NBQXVDO0FBV25DLHNCQUFLO0FBVlQsMENBQTJDO0FBV3ZDLDBCQUFPO0FBVlgsd0NBQXlDO0FBV3JDLHdCQUFNO0FBVFYsb0NBQXFDO0FBV2pDLG9CQUFJO0FBVlIsa0NBQW1DO0FBVy9CLGtCQUFHO0FBVlAsa0NBQW1DO0FBVy9CLGtCQUFHO0FBVlAsb0NBQXFDO0FBV2pDLG9CQUFJO0FBVlIsc0NBQXVDO0FBV25DLHNCQUFLO0FBSUksUUFBQSxPQUFPLEdBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRTtJQUNyQyxJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtRQUMxQyxPQUFPLEVBQUUsQ0FBQztLQUNWO0lBRUQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3pCLE9BQU8sS0FBSyxDQUFDO0tBQ2I7SUFFRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUM5QixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDZjtJQUVELElBQUksT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLFVBQVUsRUFBRTtRQUNqRCxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztLQUNsQjtJQUVELE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNoQixDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvam0vUHJvamVjdHMvTW9kdWxlcy9mcC9zcmMvY29sbGVjdGlvbnMvYXJyYXktdXRpbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQge2dyb3VwQnl9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCBmb3JFYWNoID0gcmVxdWlyZSgnbG9kYXNoL2ZvckVhY2gnKTtcblxuXG5pbXBvcnQgY2xvbmUgPSByZXF1aXJlKCdsb2Rhc2gvY2xvbmUnKTtcbmltcG9ydCBjb21wYWN0ID0gcmVxdWlyZSgnbG9kYXNoL2NvbXBhY3QnKTtcbmltcG9ydCBleHRlbmQgPSByZXF1aXJlKCdsb2Rhc2gvZXh0ZW5kJyk7XG4gXG5pbXBvcnQgbGFzdCA9IHJlcXVpcmUoJ2xvZGFzaC9sYXN0Jyk7XG5pbXBvcnQgbWFwID0gcmVxdWlyZSgnbG9kYXNoL21hcCcpO1xuaW1wb3J0IG1heCA9IHJlcXVpcmUoJ2xvZGFzaC9tYXgnKTtcbmltcG9ydCBvbWl0ID0gcmVxdWlyZSgnbG9kYXNoL29taXQnKTtcbmltcG9ydCB1bmlvbiA9IHJlcXVpcmUoJ2xvZGFzaC91bmlvbicpO1xuZXhwb3J0IHtcblx0Zm9yRWFjaCxcbiAgICBjbG9uZSxcbiAgICBjb21wYWN0LFxuICAgIGV4dGVuZCxcblxuICAgIGxhc3QsXG4gICAgbWFwLFxuICAgIG1heCxcbiAgICBvbWl0LFxuICAgIHVuaW9uXG59O1xuXG5cbmV4cG9ydCBjb25zdCB0b0FycmF5ID0gKHZhbHVlOiBhbnkpID0+IHtcblx0aWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiBbdmFsdWVdO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZVtTeW1ib2wuaXRlcmF0b3JdID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0cmV0dXJuIFsuLi52YWx1ZV07XG5cdH1cblxuXHRyZXR1cm4gW3ZhbHVlXTtcbn07Il0sInZlcnNpb24iOjN9