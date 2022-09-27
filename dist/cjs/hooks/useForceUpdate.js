"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useForceUpdate = void 0;
const react_1 = require("react");
function useForceUpdate() {
    const [, forceUpdate] = (0, react_1.useReducer)((x) => x + 1, 0);
    return forceUpdate;
}
exports.useForceUpdate = useForceUpdate;
//# sourceMappingURL=useForceUpdate.js.map