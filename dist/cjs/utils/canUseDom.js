"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canUseDom = void 0;
function canUseDom() {
    return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
exports.canUseDom = canUseDom;
//# sourceMappingURL=canUseDom.js.map