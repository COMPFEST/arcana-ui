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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import tw, { css } from 'twin.macro';
import StyledCard from './style';
var TitleSizeMap = {
    default: css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        width: unset;\n    "], ["\n        width: unset;\n    "]))),
    full: tw(templateObject_2 || (templateObject_2 = __makeTemplateObject(["w-full"], ["w-full"]))),
};
var BodySizeMap = {
    default: css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        width: unset;\n    "], ["\n        width: unset;\n    "]))),
    full: tw(templateObject_4 || (templateObject_4 = __makeTemplateObject(["w-full"], ["w-full"]))),
};
var CardSizeMap = {
    default: css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        width: fit-content;\n    "], ["\n        width: fit-content;\n    "]))),
    full: tw(templateObject_6 || (templateObject_6 = __makeTemplateObject(["w-full"], ["w-full"]))),
};
var Card = function (props) {
    var title = props.title, _a = props.size, size = _a === void 0 ? 'default' : _a, _b = props.isMobile, isMobile = _b === void 0 ? false : _b, children = props.children, other = __rest(props, ["title", "size", "isMobile", "children"]);
    var cardCss = [CardSizeMap[size]];
    var titleCss = [
        isMobile ? tw(templateObject_7 || (templateObject_7 = __makeTemplateObject(["pt-2 px-3"], ["pt-2 px-3"]))) : tw(templateObject_8 || (templateObject_8 = __makeTemplateObject(["pt-4 px-4"], ["pt-4 px-4"]))),
        css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n            .title {\n                display: inline-block;\n                font-weight: bold;\n                background: linear-gradient(44.65deg, #ff50a2 1.8%, #cd33d5 50.9%, #5824fe 100%);\n                background-clip: text;\n                -webkit-background-clip: text;\n                -webkit-text-fill-color: transparent;\n                ", "\n            }\n        "], ["\n            .title {\n                display: inline-block;\n                font-weight: bold;\n                background: linear-gradient(44.65deg, #ff50a2 1.8%, #cd33d5 50.9%, #5824fe 100%);\n                background-clip: text;\n                -webkit-background-clip: text;\n                -webkit-text-fill-color: transparent;\n                ", "\n            }\n        "])), tw(templateObject_9 || (templateObject_9 = __makeTemplateObject(["text-xs"], ["text-xs"])))),
        tw(templateObject_11 || (templateObject_11 = __makeTemplateObject(["pb-3"], ["pb-3"]))),
        TitleSizeMap[size],
    ];
    var bodyCss = [
        isMobile
            ? css(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n                  ", "\n                  ", "\n              "], ["\n                  ", "\n                  ", "\n              "])), title && tw(templateObject_12 || (templateObject_12 = __makeTemplateObject(["pt-2"], ["pt-2"]))), tw(templateObject_13 || (templateObject_13 = __makeTemplateObject(["pb-2 px-3"], ["pb-2 px-3"])))) : css(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n                  ", "\n                  ", "\n              "], ["\n                  ", "\n                  ", "\n              "])), title && tw(templateObject_15 || (templateObject_15 = __makeTemplateObject(["pt-4"], ["pt-4"]))), tw(templateObject_16 || (templateObject_16 = __makeTemplateObject(["pb-4 px-4"], ["pb-4 px-4"])))),
        BodySizeMap[size],
        tw(templateObject_18 || (templateObject_18 = __makeTemplateObject(["text-xs"], ["text-xs"]))),
    ];
    return (_jsxs(StyledCard, __assign({ css: cardCss }, other, { children: [title && (_jsx("div", __assign({ css: titleCss, className: "card-title" }, { children: _jsx("p", __assign({ className: "title" }, { children: title }), void 0) }), void 0)),
            _jsx("div", __assign({ css: bodyCss, className: "card-body" }, { children: children }), void 0)] }), void 0));
};
export default Card;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18;
//# sourceMappingURL=card.js.map