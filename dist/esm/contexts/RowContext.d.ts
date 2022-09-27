import type { Context } from "react";
export interface RowContextState {
    gutter?: [number, number];
    wrap?: boolean;
    supportFlexGap?: boolean;
}
export declare const RowContext: Context<RowContextState>;
