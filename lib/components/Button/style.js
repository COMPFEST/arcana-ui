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
import tw, { styled } from 'twin.macro';
export var ButtonThemeMap = {
    default: tw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["bg-blue hover:bg-blue-lighter"], ["bg-blue hover:bg-blue-lighter"]))),
    primary: tw(templateObject_2 || (templateObject_2 = __makeTemplateObject(["bg-blue hover:bg-blue-lighter"], ["bg-blue hover:bg-blue-lighter"]))),
    secondary: tw(templateObject_3 || (templateObject_3 = __makeTemplateObject(["bg-lightBlue rounded-lg"], ["bg-lightBlue rounded-lg"]))),
    tertiary: tw(templateObject_4 || (templateObject_4 = __makeTemplateObject(["rounded-lg bg-transparent"], ["rounded-lg bg-transparent"]))),
};
export var TextColorMap = {
    default: tw(templateObject_5 || (templateObject_5 = __makeTemplateObject(["text-white font-bold"], ["text-white font-bold"]))),
    primary: tw(templateObject_6 || (templateObject_6 = __makeTemplateObject(["text-white font-bold"], ["text-white font-bold"]))),
    secondary: tw(templateObject_7 || (templateObject_7 = __makeTemplateObject(["text-blue hover:bg-lightBlue-lighter"], ["text-blue hover:bg-lightBlue-lighter"]))),
    tertiary: tw(templateObject_8 || (templateObject_8 = __makeTemplateObject(["text-blue hover:py-0.5 hover:underline"], ["text-blue hover:py-0.5 hover:underline"]))),
};
export var ComponentSizeMap = {
    base: tw(templateObject_9 || (templateObject_9 = __makeTemplateObject([""], [""]))),
    full: tw(templateObject_10 || (templateObject_10 = __makeTemplateObject(["w-full text-center justify-center"], ["w-full text-center justify-center"]))),
    half: tw(templateObject_11 || (templateObject_11 = __makeTemplateObject(["w-1/2 text-center justify-center"], ["w-1/2 text-center justify-center"]))),
};
var StyledIconCSS = styled.div(templateObject_12 || (templateObject_12 = __makeTemplateObject([""], [""])));
var StyledButton = styled.button(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n    border: none;\n    &:focus {\n        outline: none;\n    }\n    &:hover {\n        background-position: 100% 50%;\n        box-shadow: ", ";\n    }\n    &:active {\n        transition: all ease 0.1s;\n        transform: scale(0.9, 0.9);\n        box-shadow: ", ";\n    }\n    &:disabled {\n        cursor: not-allowed;\n    }\n    transition: all ease 0.3s;\n"], ["\n    border: none;\n    &:focus {\n        outline: none;\n    }\n    &:hover {\n        background-position: 100% 50%;\n        box-shadow: ", ";\n    }\n    &:active {\n        transition: all ease 0.1s;\n        transform: scale(0.9, 0.9);\n        box-shadow: ", ";\n    }\n    &:disabled {\n        cursor: not-allowed;\n    }\n    transition: all ease 0.3s;\n"])), function (props) { return (props.shadow ? '0 8px 8px 0 rgba(0, 0, 0, 0.2)' : '0'); }, function (props) { return (props.shadow ? '0px 4px 4px 0px rgba(0, 0, 0, 0.2)' : '0'); });
export var StyledIcon = function (props) {
    var alignment = props.alignment, children = props.children, icon = props.icon;
    return (_jsxs(StyledIconCSS, __assign({ tw: "flex justify-start items-center" }, { children: [icon && alignment === 'left' && _jsx("div", __assign({ className: "icon-placeholder" }, { children: icon }), void 0), children, icon && alignment === 'right' && _jsx("div", __assign({ className: "icon-placeholder" }, { children: icon }), void 0)] }), void 0));
};
export default StyledButton;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;
//# sourceMappingURL=style.js.map