"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStyleSupport = void 0;
const canUseDom_1 = require("./canUseDom");
const isStyleNameSupport = (styleName) => {
    if ((0, canUseDom_1.canUseDom)() && window.document.documentElement) {
        const styleNameList = Array.isArray(styleName) ? styleName : [styleName];
        const { documentElement } = window.document;
        return styleNameList.some((name) => name in documentElement.style);
    }
    return false;
};
const isStyleValueSupport = (styleName, value) => {
    if (!isStyleNameSupport(styleName)) {
        return false;
    }
    const ele = document.createElement("div");
    // FIXME: Fix any
    const origin = ele.style[styleName];
    ele.style[styleName] = value;
    return ele.style[styleName] !== origin;
};
function isStyleSupport(styleName, styleValue) {
    if (!Array.isArray(styleName) && styleValue !== undefined) {
        return isStyleValueSupport(styleName, styleValue);
    }
    return isStyleNameSupport(styleName);
}
exports.isStyleSupport = isStyleSupport;
//# sourceMappingURL=styleChecker.js.map