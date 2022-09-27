"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectFlexGapSupported = exports.isStyleSupport = exports.canUseDocElement = void 0;
const canUseDom_1 = require("./canUseDom");
const styleChecker_1 = require("./styleChecker");
Object.defineProperty(exports, "isStyleSupport", { enumerable: true, get: function () { return styleChecker_1.isStyleSupport; } });
const canUseDocElement = () => (0, canUseDom_1.canUseDom)() && window.document.documentElement;
exports.canUseDocElement = canUseDocElement;
let flexGapSupported;
const detectFlexGapSupported = () => {
    if (!(0, exports.canUseDocElement)()) {
        return false;
    }
    if (flexGapSupported !== undefined) {
        return flexGapSupported;
    }
    // create flex container with row-gap set
    const flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";
    // create two, elements inside it
    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));
    // append to the DOM (needed to obtain scrollHeight)
    document.body.appendChild(flex);
    flexGapSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap
    document.body.removeChild(flex);
    return flexGapSupported;
};
exports.detectFlexGapSupported = detectFlexGapSupported;
//# sourceMappingURL=detectFlexGapSupported.js.map