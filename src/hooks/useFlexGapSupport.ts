import * as React from "react";
import { detectFlexGapSupported } from "utils";

export function useFlexGapSupport() {
  const [flexible, setFlexible] = React.useState(false);

  React.useEffect(() => {
    setFlexible(detectFlexGapSupported());
  }, []);

  return flexible;
}
