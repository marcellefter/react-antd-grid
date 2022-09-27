export function parseFlex(flex) {
    if (typeof flex === "number") {
        return `${flex} ${flex} auto`;
    }
    if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
        return `0 0 ${flex}`;
    }
    return flex;
}
//# sourceMappingURL=flex.js.map