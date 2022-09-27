import * as React from "react";
import { FlexType } from "types";
declare type ColSpanType = number | string;
export interface ColSize {
    flex?: FlexType;
    span?: ColSpanType;
    order?: ColSpanType;
    offset?: ColSpanType;
    push?: ColSpanType;
    pull?: ColSpanType;
}
export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
    flex?: FlexType;
    span?: ColSpanType;
    order?: ColSpanType;
    offset?: ColSpanType;
    push?: ColSpanType;
    pull?: ColSpanType;
    xs?: ColSpanType | ColSize;
    sm?: ColSpanType | ColSize;
    md?: ColSpanType | ColSize;
    lg?: ColSpanType | ColSize;
    xl?: ColSpanType | ColSize;
    xxl?: ColSpanType | ColSize;
}
export declare const Col: React.ForwardRefExoticComponent<ColProps & React.RefAttributes<HTMLDivElement>>;
export {};
