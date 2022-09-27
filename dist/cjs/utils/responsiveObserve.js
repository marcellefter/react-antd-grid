"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responsiveObserve = exports.responsiveMap = exports.responsiveArray = void 0;
exports.responsiveArray = ["xxl", "xl", "lg", "md", "sm", "xs"];
exports.responsiveMap = {
    xs: "(max-width: 575px)",
    sm: "(min-width: 576px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 992px)",
    xl: "(min-width: 1200px)",
    xxl: "(min-width: 1600px)",
};
const subscribers = new Map();
let subUid = -1;
let screens = {};
exports.responsiveObserve = {
    matchHandlers: {},
    dispatch(pointMap) {
        screens = pointMap;
        subscribers.forEach((func) => func(screens));
        return subscribers.size >= 1;
    },
    subscribe(func) {
        if (!subscribers.size)
            this.register();
        subUid += 1;
        subscribers.set(subUid, func);
        func(screens);
        return subUid;
    },
    unsubscribe(token) {
        subscribers.delete(token);
        if (!subscribers.size)
            this.unregister();
    },
    unregister() {
        Object.keys(exports.responsiveMap).forEach((screen) => {
            const matchMediaQuery = exports.responsiveMap[screen];
            const handler = this.matchHandlers[matchMediaQuery];
            handler === null || handler === void 0 ? void 0 : handler.mql.removeListener(handler === null || handler === void 0 ? void 0 : handler.listener);
        });
        subscribers.clear();
    },
    register() {
        Object.keys(exports.responsiveMap).forEach((screen) => {
            const matchMediaQuery = exports.responsiveMap[screen];
            const listener = ({ matches }) => {
                this.dispatch({
                    ...screens,
                    [screen]: matches,
                });
            };
            const mql = window.matchMedia(matchMediaQuery);
            mql.addListener(listener);
            this.matchHandlers[matchMediaQuery] = {
                mql,
                listener,
            };
            listener(mql);
        });
    },
};
//# sourceMappingURL=responsiveObserve.js.map