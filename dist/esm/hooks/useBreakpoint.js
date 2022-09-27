import { useEffect, useRef } from "react";
import { responsiveObserve } from "utils";
import { useForceUpdate } from "./useForceUpdate";
export function useBreakpoint(refreshOnChange = true) {
    const screensRef = useRef({});
    const forceUpdate = useForceUpdate();
    useEffect(() => {
        const token = responsiveObserve.subscribe((supportScreens) => {
            screensRef.current = supportScreens;
            if (refreshOnChange) {
                forceUpdate();
            }
        });
        return () => responsiveObserve.unsubscribe(token);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return screensRef.current;
}
//# sourceMappingURL=useBreakpoint.js.map