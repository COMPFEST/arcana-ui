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
import { Disclosure } from '@headlessui/react';
// import ArrowDown from "../../stories/assets/arrow-down.svg";
import { AnimatePresence, motion } from 'framer-motion';
import { StyledTimeIcon } from './style';
var AccordionItem = function (props) {
    var idx = props.idx, title = props.title, content = props.content, imgName = props.imgName;
    return (_jsx(Disclosure, { children: function (_a) {
            var open = _a.open;
            return (_jsxs(motion.div, __assign({ animate: { backgroundColor: open ? '#F0F7FE' : '#FFF' }, tw: "flex flex-col md:(px-4 text-xs)" }, { children: [_jsx("div", { css: [
                            css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                                --tw-divide-y-reverse: 0;\n                                border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));\n                                border-bottom-width: calc(1px * var(--tw-divide-y-reverse));\n                            "], ["\n                                --tw-divide-y-reverse: 0;\n                                border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));\n                                border-bottom-width: calc(1px * var(--tw-divide-y-reverse));\n                            "]))),
                            idx == 0 && tw(templateObject_2 || (templateObject_2 = __makeTemplateObject(["border-t-0"], ["border-t-0"]))),
                        ] }, void 0),
                    _jsx(Disclosure.Button, { children: _jsxs(motion.div, __assign({ tw: "flex justify-between items-center text-left font-bold pt-8 pb-4 md:(pt-4 pb-0 px-10) px-2", animate: { marginBottom: open ? 0 : '1rem' }, transition: { duration: 0.35 } }, { children: [title, _jsx(motion.div, __assign({ tw: "md:(ml-4)", animate: { rotate: open ? 180 : 0 } }, { children: _jsx(StyledTimeIcon, { src: "/" + imgName }, void 0) }), void 0)] }), void 0) }, void 0),
                    _jsx(AnimatePresence, __assign({ initial: false }, { children: open && (_jsx(motion.div, __assign({ initial: "collapsed", animate: "open", exit: "collapsed", variants: {
                                open: { opacity: 1, height: 'auto' },
                                collapsed: { opacity: 0, height: 0 },
                            }, transition: { duration: 0.2 } }, { children: _jsx(Disclosure.Panel, __assign({ static: true }, { children: _jsx("div", __assign({ tw: "mb-8 pr-6 md:(mb-4 px-10) px-2" }, { children: content }), void 0) }), void 0) }), void 0)) }), void 0)] }), void 0));
        } }, void 0));
};
export default AccordionItem;
var templateObject_1, templateObject_2;
//# sourceMappingURL=AccordionItem.js.map