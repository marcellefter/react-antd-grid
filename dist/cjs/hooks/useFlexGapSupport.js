"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFlexGapSupport = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const utils_1 = require("utils");
function useFlexGapSupport() {
    const [flexible, setFlexible] = React.useState(false);
    React.useEffect(() => {
        setFlexible((0, utils_1.detectFlexGapSupported)());
    }, []);
    return flexible;
}
exports.useFlexGapSupport = useFlexGapSupport;
//# sourceMappingURL=useFlexGapSupport.js.map