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
import React from 'react';
import tw from 'twin.macro';
import StyledButton, { StyledIcon, ButtonThemeMap, TextColorMap, ComponentSizeMap } from './style';
var Button = function (props, ref) {
    var _a = props.buttonTheme, buttonTheme = _a === void 0 ? 'default' : _a, icon = props.icon, _b = props.iconAlignment, iconAlignment = _b === void 0 ? 'left' : _b, _c = props.size, size = _c === void 0 ? 'base' : _c, _d = props.className, className = _d === void 0 ? '' : _d, children = props.children, _e = props.disabled, disabled = _e === void 0 ? false : _e, _f = props.shadow, shadow = _f === void 0 ? false : _f, _g = props.loading, loading = _g === void 0 ? false : _g, _h = props.mt, mt = _h === void 0 ? false : _h, _j = props.ml, ml = _j === void 0 ? false : _j, onClick = props.onClick, _k = props.type, type = _k === void 0 ? 'button' : _k, href = props.href, _l = props.rel, rel = _l === void 0 ? '' : _l, _m = props.target, target = _m === void 0 ? '' : _m;
    var styles = {
        innerType: buttonTheme,
        size: size,
        disabled: disabled,
        shadow: shadow,
        withText: children !== null,
    };
    var iconOptions = {
        icon: icon,
        alignment: iconAlignment,
    };
    if (href && !disabled) {
        return (_jsx("a", __assign({ href: href, rel: rel, target: target, ref: ref }, { children: _jsx(StyledButton, __assign({ type: type, onClick: onClick, ref: ref, className: className, css: [
                    ButtonThemeMap[buttonTheme],
                    TextColorMap[buttonTheme],
                    ml && tw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["ml-5"], ["ml-5"]))),
                    mt && tw(templateObject_2 || (templateObject_2 = __makeTemplateObject(["mt-5"], ["mt-5"]))),
                    ComponentSizeMap[size],
                    tw(templateObject_3 || (templateObject_3 = __makeTemplateObject(["font-bold rounded-lg flex items-center"], ["font-bold rounded-lg flex items-center"]))),
                    buttonTheme !== 'tertiary' && tw(templateObject_4 || (templateObject_4 = __makeTemplateObject(["py-3 px-6"], ["py-3 px-6"]))),
                    disabled && tw(templateObject_5 || (templateObject_5 = __makeTemplateObject(["text-gray-400 hover:bg-gray-200"], ["text-gray-400 hover:bg-gray-200"]))),
                    disabled && buttonTheme !== 'tertiary' && tw(templateObject_6 || (templateObject_6 = __makeTemplateObject(["bg-gray-200"], ["bg-gray-200"]))),
                ] }, styles, { children: _jsx(StyledIcon, __assign({}, iconOptions, { children: children }), void 0) }), void 0) }), void 0));
    }
    return (_jsx(StyledButton, __assign({ type: type, onClick: onClick, ref: ref, className: className, css: [
            ButtonThemeMap[buttonTheme],
            TextColorMap[buttonTheme],
            ml && tw(templateObject_7 || (templateObject_7 = __makeTemplateObject(["ml-5"], ["ml-5"]))),
            mt && tw(templateObject_8 || (templateObject_8 = __makeTemplateObject(["mt-5"], ["mt-5"]))),
            ComponentSizeMap[size],
            tw(templateObject_9 || (templateObject_9 = __makeTemplateObject(["font-bold rounded-lg flex items-center"], ["font-bold rounded-lg flex items-center"]))),
            buttonTheme !== 'tertiary' && tw(templateObject_10 || (templateObject_10 = __makeTemplateObject(["py-3 px-6"], ["py-3 px-6"]))),
            disabled && tw(templateObject_11 || (templateObject_11 = __makeTemplateObject(["text-gray-400 hover:bg-gray-200"], ["text-gray-400 hover:bg-gray-200"]))),
            disabled && buttonTheme !== 'tertiary' && tw(templateObject_12 || (templateObject_12 = __makeTemplateObject(["bg-gray-200"], ["bg-gray-200"]))),
        ] }, styles, { children: _jsx(StyledIcon, __assign({}, iconOptions, { children: _jsx("div", __assign({ css: [tw(templateObject_13 || (templateObject_13 = __makeTemplateObject(["text-sm lg:text-base flex items-center"], ["text-sm lg:text-base flex items-center"]))), ComponentSizeMap['full']] }, { children: children }), void 0) }), void 0) }), void 0));
};
export default React.forwardRef(Button);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;
//# sourceMappingURL=button.js.map