import { RollupError, SerializedTimings, RollupWarning } from '@/types';
export declare const stderr: {
    (message?: any, ...optionalParams: any[]): void;
    (message?: any, ...optionalParams: any[]): void;
};
export declare function handleError(err: RollupError, recover?: boolean): void;
export interface BatchWarnings {
    add: (warning: string | RollupWarning) => void;
    readonly count: number;
    flush: () => void;
}
export declare function batchWarnings(): {
    readonly count: number;
    add: (warning: string | RollupWarning) => void;
    flush: () => void;
};
export declare function printTimings(timings: SerializedTimings): void;
//# sourceMappingURL=logging.d.ts.map