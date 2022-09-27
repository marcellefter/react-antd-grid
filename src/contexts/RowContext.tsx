import type { Context } from "react";
import { createContext } from "react";

export interface RowContextState {
  gutter?: [number, number];
  wrap?: boolean;
  supportFlexGap?: boolean;
}

export const RowContext: Context<RowContextState> = createContext({});
