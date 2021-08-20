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
import tw, { css } from 'twin.macro';
import { TextColorMap } from './Tag';
var iconSizeMap = {
    sm: tw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["w-3 h-3"], ["w-3 h-3"]))),
    base: tw(templateObject_2 || (templateObject_2 = __makeTemplateObject(["w-4 h-5"], ["w-4 h-5"]))),
    lg: tw(templateObject_3 || (templateObject_3 = __makeTemplateObject(["w-6 h-6"], ["w-6 h-6"]))),
    xl: tw(templateObject_4 || (templateObject_4 = __makeTemplateObject(["w-8 h-8"], ["w-8 h-8"]))),
};
export var Icon = function (_a) {
    var buttonMode = _a.buttonMode, iconSize = _a.iconSize, Asset = _a.Asset;
    return (_jsx("div", __assign({ css: [
            css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n                    svg path {\n                        fill: currentColor;\n                    }\n                "], ["\n                    svg path {\n                        fill: currentColor;\n                    }\n                "]))),
            tw(templateObject_6 || (templateObject_6 = __makeTemplateObject(["mr-2"], ["mr-2"]))),
            TextColorMap[buttonMode],
        ] }, { children: _jsx(Asset, { css: iconSizeMap[iconSize] }, void 0) }), void 0));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=Icon.js.map