"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const rollup_1 = require("/home/jm/Projects/Config/rollup");
const rollup_config_1 = tslib_1.__importDefault(require("./data/rollup.config"));
const rollup_2 = require("/home/jm/Projects/Tools/rollup");
const customConfig = {
    input: `./test/data/index.ts`,
};
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
        const mc = rollup_2.merge(rollup_1.baseConfig(), customConfig);
        console.log(`mc`, mc);
        expect(mc).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvam0vUHJvamVjdHMvVG9vbHMvcm9sbHVwL3Rlc3QvYnVpbGQudGVzdC50cyIsIm1hcHBpbmdzIjoiOzs7QUFBQSw0REFBMkQ7QUFDM0QsaUZBQTJEO0FBQzNELDJEQUcwQztBQUUxQyxNQUFNLFlBQVksR0FBRztJQUNqQixLQUFLLEVBQUUsc0JBQXNCO0NBQ2hDLENBQUE7QUFHRCxRQUFRLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRTtJQUNmLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFO1FBQ3BCLE1BQU0sSUFBSSxHQUFHLG1CQUFVLEVBQUUsQ0FBQztRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFFOUIsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQztBQUdILFFBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO0lBRW5CLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLHVCQUFVLENBQUMsQ0FBQztRQUN0QyxNQUFNLEVBQUUsR0FBRyxjQUFLLENBQUMsbUJBQVUsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUU1QixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL2ptL1Byb2plY3RzL1Rvb2xzL3JvbGx1cC90ZXN0L2J1aWxkLnRlc3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiYXNlQ29uZmlnfSBmcm9tICcvaG9tZS9qbS9Qcm9qZWN0cy9Db25maWcvcm9sbHVwJztcbmltcG9ydCB7ZGVmYXVsdCBhcyBjdXN0b21Db25mfSBmcm9tICcuL2RhdGEvcm9sbHVwLmNvbmZpZyc7XG5pbXBvcnQgeyBcbiAgICBSb2xsdXBPcHRpb25zLFxuICAgIG1lcmdlLFxuICB9IGZyb20gJy9ob21lL2ptL1Byb2plY3RzL1Rvb2xzL3JvbGx1cCc7XG5cbmNvbnN0IGN1c3RvbUNvbmZpZyA9IHtcbiAgICBpbnB1dDogYC4vdGVzdC9kYXRhL2luZGV4LnRzYCxcbn1cblxuXG5kZXNjcmliZShgY2AsICgpID0+IHtcbiAgICB0ZXN0KGBiYXNlQ29uZmlnYCwgKCkgPT4ge1xuICAgICAgICBjb25zdCBjb25mID0gYmFzZUNvbmZpZygpO1xuICAgICAgICBjb25zb2xlLmxvZyhgYmFzZUNvbmZgLCBjb25mKTtcbiAgICAgICAgZXhwZWN0KGNvbmYpLnRvQmVUcnV0aHkoKTtcblxuICAgIH0pXG59KTtcblxuXG5kZXNjcmliZShgbWVyZ2VgLCAoKSA9PiB7XG4gICAgXG4gICAgdGVzdChgbWVyZ2VkIGNgLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBjdXN0b21Db25mYCwgY3VzdG9tQ29uZik7XG4gICAgICAgIGNvbnN0IG1jID0gbWVyZ2UoYmFzZUNvbmZpZygpLCBjdXN0b21Db25maWcpOyBcbiAgICAgICAgY29uc29sZS5sb2coYG1jYCwgbWMpO1xuICAgICAgICBleHBlY3QobWMpLnRvQmVUcnV0aHkoKTtcblxuICAgIH0pXG59KTtcblxuICJdLCJ2ZXJzaW9uIjozfQ==