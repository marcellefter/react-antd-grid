"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBreakpoint = void 0;
const react_1 = require("react");
const utils_1 = require("utils");
const useForceUpdate_1 = require("./useForceUpdate");
function useBreakpoint(refreshOnChange = true) {
    const screensRef = (0, react_1.useRef)({});
    const forceUpdate = (0, useForceUpdate_1.useForceUpdate)();
    (0, react_1.useEffect)(() => {
        const token = utils_1.responsiveObserve.subscribe((supportScreens) => {
            screensRef.current = supportScreens;
            if (refreshOnChange) {
                forceUpdate();
            }
        });
        return () => utils_1.responsiveObserve.unsubscribe(token);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return screensRef.current;
}
exports.useBreakpoint = useBreakpoint;
//# sourceMappingURL=useBreakpoint.js.map