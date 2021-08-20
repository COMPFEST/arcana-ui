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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import tw, { css } from 'twin.macro';
import { Icon } from './Icon';
var iconSizeMap = {
    sm: tw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["w-3 h-3"], ["w-3 h-3"]))),
    base: tw(templateObject_2 || (templateObject_2 = __makeTemplateObject(["w-4 h-5"], ["w-4 h-5"]))),
    lg: tw(templateObject_3 || (templateObject_3 = __makeTemplateObject(["w-6 h-6"], ["w-6 h-6"]))),
    xl: tw(templateObject_4 || (templateObject_4 = __makeTemplateObject(["w-8 h-8"], ["w-8 h-8"]))),
};
var textSizeMap = {
    xs: tw(templateObject_5 || (templateObject_5 = __makeTemplateObject(["text-xs"], ["text-xs"]))),
    sm: tw(templateObject_6 || (templateObject_6 = __makeTemplateObject(["text-sm"], ["text-sm"]))),
    base: tw(templateObject_7 || (templateObject_7 = __makeTemplateObject(["text-base"], ["text-base"]))),
};
export var ButtonThemeMap = {
    primary: tw(templateObject_8 || (templateObject_8 = __makeTemplateObject(["bg-blue hover:bg-blue-lighter"], ["bg-blue hover:bg-blue-lighter"]))),
    secondary: tw(templateObject_9 || (templateObject_9 = __makeTemplateObject(["bg-lightBlue hover:bg-lightBlue-lighter"], ["bg-lightBlue hover:bg-lightBlue-lighter"]))),
    warning: css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n        background-color: rgba(254, 244, 244, 1);\n        &:hover {\n            background-color: rgba(254, 244, 244, 0.5);\n        }\n    "], ["\n        background-color: rgba(254, 244, 244, 1);\n        &:hover {\n            background-color: rgba(254, 244, 244, 0.5);\n        }\n    "]))),
    neutral: css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n        background-color: rgba(218, 218, 218, 0.22);\n        &:hover {\n            background-color: rgba(218, 218, 218, 0.5);\n        }\n    "], ["\n        background-color: rgba(218, 218, 218, 0.22);\n        &:hover {\n            background-color: rgba(218, 218, 218, 0.5);\n        }\n    "]))),
};
export var TextColorMap = {
    neutral: tw(templateObject_12 || (templateObject_12 = __makeTemplateObject(["text-black-100 font-bold"], ["text-black-100 font-bold"]))),
    warning: tw(templateObject_13 || (templateObject_13 = __makeTemplateObject(["text-error font-bold"], ["text-error font-bold"]))),
    primary: tw(templateObject_14 || (templateObject_14 = __makeTemplateObject(["text-white font-bold"], ["text-white font-bold"]))),
    secondary: tw(templateObject_15 || (templateObject_15 = __makeTemplateObject(["text-blue font-bold"], ["text-blue font-bold"]))),
};
var TagButton = function (_a) {
    var buttonMode = _a.buttonMode, icon = _a.icon, iconSize = _a.iconSize, text = _a.text, textSize = _a.textSize;
    return (_jsxs("button", __assign({ tw: "py-2 px-3 rounded-2xl flex items-center cursor-default focus:outline-none", css: [
            ButtonThemeMap[buttonMode],
            TextColorMap[buttonMode],
            css(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n                    transition: background-color 0.5s ease;\n                    &:hover {\n                        transition: background-color 0.5s ease;\n                    }\n                "], ["\n                    transition: background-color 0.5s ease;\n                    &:hover {\n                        transition: background-color 0.5s ease;\n                    }\n                "]))),
        ] }, { children: [_jsx(Icon, { buttonMode: buttonMode, iconSize: iconSize, Asset: icon }, void 0),
            _jsx("h6", __assign({ css: [textSizeMap[textSize]] }, { children: text }), void 0)] }), void 0));
};
export default TagButton;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16;
//# sourceMappingURL=Tag.js.map