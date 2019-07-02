"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const rollup_1 = require("/home/jm/Projects/Config/rollup");
const rollup_config_1 = tslib_1.__importDefault(require("./data/rollup.config"));
const rollup_2 = require("/home/jm/Projects/Modules/tools/rollup");
describe(`c`, () => {
    test(`baseConfig`, () => {
        const conf = rollup_1.baseConfig();
        console.log(`baseConf`, conf);
        expect(conf).toBeTruthy();
    });
});
describe(`merge`, () => {
    test(`merged c`, () => {
        console.log(`customConf`, rollup_config_1.default);
        const mc = rollup_2.merge(rollup_1.baseConfig(), rollup_config_1.default);
        console.log(`mc`, mc);
        expect(mc).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvam0vUHJvamVjdHMvTW9kdWxlcy90b29scy9yb2xsdXAvdGVzdC9idWlsZC50ZXN0LnRzIiwibWFwcGluZ3MiOiI7OztBQUFBLDREQUEyRDtBQUMzRCxpRkFBMkQ7QUFDM0QsbUVBR2tEO0FBRWxELFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO0lBQ2YsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUU7UUFDcEIsTUFBTSxJQUFJLEdBQUcsbUJBQVUsRUFBRSxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUU5QixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFDO0FBR0gsUUFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7SUFFbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUU7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsdUJBQVUsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sRUFBRSxHQUFHLGNBQUssQ0FBQyxtQkFBVSxFQUFFLEVBQUUsdUJBQVUsQ0FBQyxDQUFDO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUU1QixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL2ptL1Byb2plY3RzL01vZHVsZXMvdG9vbHMvcm9sbHVwL3Rlc3QvYnVpbGQudGVzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Jhc2VDb25maWd9IGZyb20gJy9ob21lL2ptL1Byb2plY3RzL0NvbmZpZy9yb2xsdXAnO1xuaW1wb3J0IHtkZWZhdWx0IGFzIGN1c3RvbUNvbmZ9IGZyb20gJy4vZGF0YS9yb2xsdXAuY29uZmlnJztcbmltcG9ydCB7IFxuICAgIFJvbGx1cE9wdGlvbnMsXG4gICAgbWVyZ2UsXG4gIH0gZnJvbSAnL2hvbWUvam0vUHJvamVjdHMvTW9kdWxlcy90b29scy9yb2xsdXAnO1xuXG5kZXNjcmliZShgY2AsICgpID0+IHtcbiAgICB0ZXN0KGBiYXNlQ29uZmlnYCwgKCkgPT4ge1xuICAgICAgICBjb25zdCBjb25mID0gYmFzZUNvbmZpZygpO1xuICAgICAgICBjb25zb2xlLmxvZyhgYmFzZUNvbmZgLCBjb25mKTtcbiAgICAgICAgZXhwZWN0KGNvbmYpLnRvQmVUcnV0aHkoKTtcblxuICAgIH0pXG59KTtcblxuXG5kZXNjcmliZShgbWVyZ2VgLCAoKSA9PiB7XG4gICAgXG4gICAgdGVzdChgbWVyZ2VkIGNgLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBjdXN0b21Db25mYCwgY3VzdG9tQ29uZik7XG4gICAgICAgIGNvbnN0IG1jID0gbWVyZ2UoYmFzZUNvbmZpZygpLCBjdXN0b21Db25mKTsgXG4gICAgICAgIGNvbnNvbGUubG9nKGBtY2AsIG1jKTtcbiAgICAgICAgZXhwZWN0KG1jKS50b0JlVHJ1dGh5KCk7XG5cbiAgICB9KVxufSk7XG5cbiAiXSwidmVyc2lvbiI6M30=