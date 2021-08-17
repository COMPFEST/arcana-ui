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
import { css } from 'twin.macro';
import AccordionItem from './AccordionItem';
import { AnimateSharedLayout } from 'framer-motion';
var Accordion = function (props) {
    var items = props.items, _a = props.imgName, imgName = _a === void 0 ? 'arrow-down.svg' : _a;
    return (_jsx(AnimateSharedLayout, __assign({ type: "crossfade" }, { children: _jsx("div", __assign({ tw: "flex flex-col justify-center items-center container mx-auto px-16 w-screen md:(px-0 w-auto)", css: css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                    @media (min-width: 1536px) {\n                        max-width: 1536px !important;\n                    }\n                "], ["\n                    @media (min-width: 1536px) {\n                        max-width: 1536px !important;\n                    }\n                "]))), id: "faq" }, { children: _jsx("div", __assign({ tw: "w-full" }, { children: items.map(function (item, key) { return (_jsx(AccordionItem, { idx: key, title: item.title, content: item.content, imgName: imgName }, key)); }) }), void 0) }), void 0) }), void 0));
};
export default Accordion;
var templateObject_1;
//# sourceMappingURL=Accordion.js.map