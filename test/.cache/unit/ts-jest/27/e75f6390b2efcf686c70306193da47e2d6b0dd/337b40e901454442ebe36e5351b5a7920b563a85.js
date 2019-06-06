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
describe(`build`, () => {
    test(`build c`, () => {
        const mc = rollup_2.merge(rollup_1.baseConfig(), rollup_config_1.default);
        console.log(`mc`, mc);
        expect(mc).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvam0vUHJvamVjdHMvTW9kdWxlcy90b29scy9yb2xsdXAvdGVzdC9idWlsZC50ZXN0LnRzIiwibWFwcGluZ3MiOiI7OztBQUFBLDREQUEyRDtBQUMzRCxpRkFBMkQ7QUFDM0QsbUVBR2tEO0FBRWxELFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO0lBQ2YsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUU7UUFDcEIsTUFBTSxJQUFJLEdBQUcsbUJBQVUsRUFBRSxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUU5QixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFDO0FBR0gsUUFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7SUFFbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUU7UUFDbEIsTUFBTSxFQUFFLEdBQUcsY0FBSyxDQUFDLG1CQUFVLEVBQUUsRUFBRSx1QkFBVSxDQUFDLENBQUM7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBRTVCLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUM7QUFFSCxRQUFRLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtJQUVuQixJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRTtRQUNqQixNQUFNLEVBQUUsR0FBRyxjQUFLLENBQUMsbUJBQVUsRUFBRSxFQUFFLHVCQUFVLENBQUMsQ0FBQztRQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0QixNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFJNUIsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9qbS9Qcm9qZWN0cy9Nb2R1bGVzL3Rvb2xzL3JvbGx1cC90ZXN0L2J1aWxkLnRlc3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiYXNlQ29uZmlnfSBmcm9tICcvaG9tZS9qbS9Qcm9qZWN0cy9Db25maWcvcm9sbHVwJztcbmltcG9ydCB7ZGVmYXVsdCBhcyBjdXN0b21Db25mfSBmcm9tICcuL2RhdGEvcm9sbHVwLmNvbmZpZyc7XG5pbXBvcnQgeyBcbiAgICBSb2xsdXBPcHRpb25zLFxuICAgIG1lcmdlLFxuICB9IGZyb20gJy9ob21lL2ptL1Byb2plY3RzL01vZHVsZXMvdG9vbHMvcm9sbHVwJztcblxuZGVzY3JpYmUoYGNgLCAoKSA9PiB7XG4gICAgdGVzdChgYmFzZUNvbmZpZ2AsICgpID0+IHtcbiAgICAgICAgY29uc3QgY29uZiA9IGJhc2VDb25maWcoKTtcbiAgICAgICAgY29uc29sZS5sb2coYGJhc2VDb25mYCwgY29uZik7XG4gICAgICAgIGV4cGVjdChjb25mKS50b0JlVHJ1dGh5KCk7XG5cbiAgICB9KVxufSk7XG5cblxuZGVzY3JpYmUoYG1lcmdlYCwgKCkgPT4ge1xuICAgIFxuICAgIHRlc3QoYG1lcmdlZCBjYCwgKCkgPT4ge1xuICAgICAgICBjb25zdCBtYyA9IG1lcmdlKGJhc2VDb25maWcoKSwgY3VzdG9tQ29uZik7IFxuICAgICAgICBjb25zb2xlLmxvZyhgbWNgLCBtYyk7XG4gICAgICAgIGV4cGVjdChtYykudG9CZVRydXRoeSgpO1xuXG4gICAgfSlcbn0pO1xuXG5kZXNjcmliZShgYnVpbGRgLCAoKSA9PiB7XG4gICAgXG4gICAgdGVzdChgYnVpbGQgY2AsICgpID0+IHtcbiAgICAgICAgY29uc3QgbWMgPSBtZXJnZShiYXNlQ29uZmlnKCksIGN1c3RvbUNvbmYpOyBcbiAgICAgICAgY29uc29sZS5sb2coYG1jYCwgbWMpO1xuICAgICAgICBleHBlY3QobWMpLnRvQmVUcnV0aHkoKTtcblxuXG5cbiAgICB9KVxufSk7Il0sInZlcnNpb24iOjN9