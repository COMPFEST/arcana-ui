var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { styled } from 'twin.macro';
var sizeDict = {
    small: '16px',
    medium: '20px',
    default: '24px',
    large: '36px',
};
var StyledDivCSS = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: ", ";\n    height: ", ";\n\n    svg {\n        width: 100%;\n        height: 100%;\n    }\n"], ["\n    width: ", ";\n    height: ", ";\n\n    svg {\n        width: 100%;\n        height: 100%;\n    }\n"])), function (props) { return sizeDict[props.size]; }, function (props) { return sizeDict[props.size]; });
export var StyledDiv = function (props) {
    var size = props.size, children = props.children;
    return _jsx(StyledDivCSS, __assign({ size: size }, { children: children }), void 0);
};
var templateObject_1;
//# sourceMappingURL=style.js.map