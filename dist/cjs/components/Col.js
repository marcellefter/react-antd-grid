"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Col = void 0;
const tslib_1 = require("tslib");
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const React = tslib_1.__importStar(require("react"));
const contexts_1 = require("contexts");
const utils_1 = require("utils");
const sizes = ["xs", "sm", "md", "lg", "xl", "xxl"];
exports.Col = React.forwardRef((props, ref) => {
    const { gutter, wrap, supportFlexGap } = React.useContext(contexts_1.RowContext);
    const { span, order, offset, push, pull, className, children, flex, style, ...others } = props;
    const prefixCls = "col";
    let sizeClassObj = {};
    sizes.forEach((size) => {
        let sizeProps = {};
        const propSize = props[size];
        if (typeof propSize === "number") {
            sizeProps.span = propSize;
        }
        else if (typeof propSize === "object") {
            sizeProps = propSize || {};
        }
        sizeClassObj = {
            ...sizeClassObj,
            [`${prefixCls}-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
            [`${prefixCls}-${size}-order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
            [`${prefixCls}-${size}-offset-${sizeProps.offset}`]: sizeProps.offset || sizeProps.offset === 0,
            [`${prefixCls}-${size}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
            [`${prefixCls}-${size}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0,
        };
    });
    const classes = (0, classnames_1.default)({
        [`${prefixCls}-${span}`]: span !== undefined,
        [`${prefixCls}-order-${order}`]: order,
        [`${prefixCls}-offset-${offset}`]: offset,
        [`${prefixCls}-push-${push}`]: push,
        [`${prefixCls}-pull-${pull}`]: pull,
    }, className, sizeClassObj);
    const mergedStyle = {};
    // Horizontal gutter use padding
    if (gutter && gutter[0] > 0) {
        const horizontalGutter = gutter[0] / 2;
        mergedStyle.paddingLeft = horizontalGutter;
        mergedStyle.paddingRight = horizontalGutter;
    }
    // Vertical gutter use padding when gap not support
    if (gutter && gutter[1] > 0 && !supportFlexGap) {
        const verticalGutter = gutter[1] / 2;
        mergedStyle.paddingTop = verticalGutter;
        mergedStyle.paddingBottom = verticalGutter;
    }
    if (flex) {
        mergedStyle.flex = (0, utils_1.parseFlex)(flex);
        // Hack for Firefox to avoid size issue
        // https://github.com/ant-design/ant-design/pull/20023#issuecomment-564389553
        if (wrap === false && !mergedStyle.minWidth) {
            mergedStyle.minWidth = 0;
        }
    }
    return (React.createElement("div", { ...others, style: { ...mergedStyle, ...style }, className: classes, ref: ref }, children));
});
exports.Col.displayName = "Col";
//# sourceMappingURL=Col.js.map