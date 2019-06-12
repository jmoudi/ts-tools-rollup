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
        const mc = rollup_2.merge(rollup_1.baseConfig(), rollup_config_1.default);
        console.log(`mc`, mc);
        expect(mc).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvam0vUHJvamVjdHMvTW9kdWxlcy90b29scy9yb2xsdXAvdGVzdC9idWlsZC50ZXN0LnRzIiwibWFwcGluZ3MiOiI7OztBQUFBLDREQUEyRDtBQUMzRCxpRkFBMkQ7QUFDM0QsbUVBR2tEO0FBRWxELFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO0lBQ2YsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUU7UUFDcEIsTUFBTSxJQUFJLEdBQUcsbUJBQVUsRUFBRSxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUU5QixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFDO0FBR0gsUUFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7SUFFbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUU7UUFDbEIsTUFBTSxFQUFFLEdBQUcsY0FBSyxDQUFDLG1CQUFVLEVBQUUsRUFBRSx1QkFBVSxDQUFDLENBQUM7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBRTVCLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvam0vUHJvamVjdHMvTW9kdWxlcy90b29scy9yb2xsdXAvdGVzdC9idWlsZC50ZXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmFzZUNvbmZpZ30gZnJvbSAnL2hvbWUvam0vUHJvamVjdHMvQ29uZmlnL3JvbGx1cCc7XG5pbXBvcnQge2RlZmF1bHQgYXMgY3VzdG9tQ29uZn0gZnJvbSAnLi9kYXRhL3JvbGx1cC5jb25maWcnO1xuaW1wb3J0IHsgXG4gICAgUm9sbHVwT3B0aW9ucyxcbiAgICBtZXJnZSxcbiAgfSBmcm9tICcvaG9tZS9qbS9Qcm9qZWN0cy9Nb2R1bGVzL3Rvb2xzL3JvbGx1cCc7XG5cbmRlc2NyaWJlKGBjYCwgKCkgPT4ge1xuICAgIHRlc3QoYGJhc2VDb25maWdgLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbmYgPSBiYXNlQ29uZmlnKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBiYXNlQ29uZmAsIGNvbmYpO1xuICAgICAgICBleHBlY3QoY29uZikudG9CZVRydXRoeSgpO1xuXG4gICAgfSlcbn0pO1xuXG5cbmRlc2NyaWJlKGBtZXJnZWAsICgpID0+IHtcbiAgICBcbiAgICB0ZXN0KGBtZXJnZWQgY2AsICgpID0+IHtcbiAgICAgICAgY29uc3QgbWMgPSBtZXJnZShiYXNlQ29uZmlnKCksIGN1c3RvbUNvbmYpOyBcbiAgICAgICAgY29uc29sZS5sb2coYG1jYCwgbWMpO1xuICAgICAgICBleHBlY3QobWMpLnRvQmVUcnV0aHkoKTtcblxuICAgIH0pXG59KTtcblxuICJdLCJ2ZXJzaW9uIjozfQ==