"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFlex = void 0;
function parseFlex(flex) {
    if (typeof flex === "number") {
        return `${flex} ${flex} auto`;
    }
    if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
        return `0 0 ${flex}`;
    }
    return flex;
}
exports.parseFlex = parseFlex;
//# sourceMappingURL=flex.js.map