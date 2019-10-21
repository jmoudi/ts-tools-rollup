"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rollup_1 = require("/home/jm/Projects/Config/rollup");
//import {default as customConf} from './data/rollup.config';
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
        console.log(`customConf`, customConfig);
        const mc = rollup_2.merge(rollup_1.baseConfig(), customConfig);
        console.log(`mc`, mc);
        expect(mc).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvam0vUHJvamVjdHMvVG9vbHMvcm9sbHVwL3Rlc3QvYnVpbGQudGVzdC50cyIsIm1hcHBpbmdzIjoiOztBQUFBLDREQUEyRDtBQUMzRCw2REFBNkQ7QUFDN0QsMkRBRzBDO0FBRTFDLE1BQU0sWUFBWSxHQUFHO0lBQ2pCLEtBQUssRUFBRSxzQkFBc0I7Q0FDaEMsQ0FBQTtBQUdELFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO0lBQ2YsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUU7UUFDcEIsTUFBTSxJQUFJLEdBQUcsbUJBQVUsRUFBRSxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUU5QixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFDO0FBR0gsUUFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7SUFFbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUU7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDeEMsTUFBTSxFQUFFLEdBQUcsY0FBSyxDQUFDLG1CQUFVLEVBQUUsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0QixNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFFNUIsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9qbS9Qcm9qZWN0cy9Ub29scy9yb2xsdXAvdGVzdC9idWlsZC50ZXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmFzZUNvbmZpZ30gZnJvbSAnL2hvbWUvam0vUHJvamVjdHMvQ29uZmlnL3JvbGx1cCc7XG4vL2ltcG9ydCB7ZGVmYXVsdCBhcyBjdXN0b21Db25mfSBmcm9tICcuL2RhdGEvcm9sbHVwLmNvbmZpZyc7XG5pbXBvcnQgeyBcbiAgICBSb2xsdXBPcHRpb25zLFxuICAgIG1lcmdlLFxuICB9IGZyb20gJy9ob21lL2ptL1Byb2plY3RzL1Rvb2xzL3JvbGx1cCc7XG5cbmNvbnN0IGN1c3RvbUNvbmZpZyA9IHtcbiAgICBpbnB1dDogYC4vdGVzdC9kYXRhL2luZGV4LnRzYCxcbn1cblxuXG5kZXNjcmliZShgY2AsICgpID0+IHtcbiAgICB0ZXN0KGBiYXNlQ29uZmlnYCwgKCkgPT4ge1xuICAgICAgICBjb25zdCBjb25mID0gYmFzZUNvbmZpZygpO1xuICAgICAgICBjb25zb2xlLmxvZyhgYmFzZUNvbmZgLCBjb25mKTtcbiAgICAgICAgZXhwZWN0KGNvbmYpLnRvQmVUcnV0aHkoKTtcblxuICAgIH0pXG59KTtcblxuXG5kZXNjcmliZShgbWVyZ2VgLCAoKSA9PiB7XG4gICAgXG4gICAgdGVzdChgbWVyZ2VkIGNgLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBjdXN0b21Db25mYCwgY3VzdG9tQ29uZmlnKTtcbiAgICAgICAgY29uc3QgbWMgPSBtZXJnZShiYXNlQ29uZmlnKCksIGN1c3RvbUNvbmZpZyk7IFxuICAgICAgICBjb25zb2xlLmxvZyhgbWNgLCBtYyk7XG4gICAgICAgIGV4cGVjdChtYykudG9CZVRydXRoeSgpO1xuXG4gICAgfSlcbn0pO1xuXG4gIl0sInZlcnNpb24iOjN9