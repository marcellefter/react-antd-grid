import * as React from "react";
import type { Breakpoint } from "utils";
declare const RowAligns: ["top", "middle", "bottom", "stretch"];
declare const RowJustify: ["start", "end", "center", "space-around", "space-between", "space-evenly"];
export declare type Gutter = number | undefined | Partial<Record<Breakpoint, number>>;
export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
    gutter?: Gutter | [Gutter, Gutter];
    align?: typeof RowAligns[number];
    justify?: typeof RowJustify[number];
    prefixCls?: string;
    wrap?: boolean;
}
export declare const Row: React.ForwardRefExoticComponent<RowProps & React.RefAttributes<HTMLDivElement>>;
export {};
