"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Row = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const hooks_1 = require("hooks");
const utils_1 = require("utils");
const contexts_1 = require("contexts");
const RowAligns = (0, utils_1.tuple)("top", "middle", "bottom", "stretch");
const RowJustify = (0, utils_1.tuple)("start", "end", "center", "space-around", "space-between", "space-evenly");
exports.Row = React.forwardRef((props, ref) => {
    const { justify, align, className, style, children, gutter = 0, wrap, ...others } = props;
    const [screens, setScreens] = React.useState({
        xs: true,
        sm: true,
        md: true,
        lg: true,
        xl: true,
        xxl: true,
    });
    const supportFlexGap = (0, hooks_1.useFlexGapSupport)();
    const gutterRef = React.useRef(gutter);
    // ================================== Effect ==================================
    React.useEffect(() => {
        const token = utils_1.responsiveObserve.subscribe((screen) => {
            const currentGutter = gutterRef.current || 0;
            if ((!Array.isArray(currentGutter) && typeof currentGutter === "object") ||
                (Array.isArray(currentGutter) && (typeof currentGutter[0] === "object" || typeof currentGutter[1] === "object"))) {
                setScreens(screen);
            }
        });
        return () => utils_1.responsiveObserve.unsubscribe(token);
    }, []);
    // ================================== Render ==================================
    const getGutter = () => {
        const results = [undefined, undefined];
        const normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, undefined];
        normalizedGutter.forEach((g, index) => {
            if (typeof g === "object") {
                for (let i = 0; i < utils_1.responsiveArray.length; i++) {
                    const breakpoint = utils_1.responsiveArray[i];
                    if (screens[breakpoint] && g[breakpoint] !== undefined) {
                        results[index] = g[breakpoint];
                        break;
                    }
                }
            }
            else {
                results[index] = g;
            }
        });
        return results;
    };
    const prefixCls = "row";
    const gutters = getGutter();
    const classes = (0, classnames_1.default)(prefixCls, {
        [`${prefixCls}-no-wrap`]: wrap === false,
        [`${prefixCls}-${justify}`]: justify,
        [`${prefixCls}-${align}`]: align,
    }, className);
    // Add gutter related style
    const rowStyle = {};
    const horizontalGutter = gutters[0] != null && gutters[0] > 0 ? gutters[0] / -2 : undefined;
    const verticalGutter = gutters[1] != null && gutters[1] > 0 ? gutters[1] / -2 : undefined;
    if (horizontalGutter) {
        rowStyle.marginLeft = horizontalGutter;
        rowStyle.marginRight = horizontalGutter;
    }
    if (supportFlexGap) {
        // Set gap direct if flex gap support
        [, rowStyle.rowGap] = gutters;
    }
    else if (verticalGutter) {
        rowStyle.marginTop = verticalGutter;
        rowStyle.marginBottom = verticalGutter;
    }
    // "gutters" is a new array in each rendering phase, it'll make 'React.useMemo' effectless.
    // So we deconstruct "gutters" variable here.
    const [gutterH, gutterV] = gutters;
    const rowContext = React.useMemo(() => ({
        gutter: [gutterH, gutterV],
        wrap,
        supportFlexGap,
    }), [gutterH, gutterV, wrap, supportFlexGap]);
    return (React.createElement(contexts_1.RowContext.Provider, { value: rowContext },
        React.createElement("div", { ...others, className: classes, style: { ...rowStyle, ...style }, ref: ref }, children)));
});
exports.Row.displayName = "Row";
//# sourceMappingURL=Row.js.map