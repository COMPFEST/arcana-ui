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
import { motion } from 'framer-motion';
import tw from 'twin.macro';
var containerMap = {
    default: tw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["container mx-auto flex flex-col md:flex-row 2xl:max-w-screen-2xl! items-center"], ["container mx-auto flex flex-col md:flex-row 2xl:max-w-screen-2xl! items-center"]))),
};
var containerMarginMap = {
    sm: tw(templateObject_2 || (templateObject_2 = __makeTemplateObject(["mt-16 md:mt-40  px-3 md:px-12"], ["mt-16 md:mt-40  px-3 md:px-12"]))),
    base: tw(templateObject_3 || (templateObject_3 = __makeTemplateObject(["mt-24 md:mt-48  px-6 md:px-16"], ["mt-24 md:mt-48  px-6 md:px-16"]))),
    lg: tw(templateObject_4 || (templateObject_4 = __makeTemplateObject(["mt-28 md:mt-52  px-8 md:px-20"], ["mt-28 md:mt-52  px-8 md:px-20"]))),
};
var containerSpaceMap = {
    sparse: tw(templateObject_5 || (templateObject_5 = __makeTemplateObject(["space-y-10 md:space-y-2 space-x-2 md:space-x-14!"], ["space-y-10 md:space-y-2 space-x-2 md:space-x-14!"]))),
    base: tw(templateObject_6 || (templateObject_6 = __makeTemplateObject(["space-y-8 md:space-y-0 space-x-0 md:space-x-12!"], ["space-y-8 md:space-y-0 space-x-0 md:space-x-12!"]))),
    tight: tw(templateObject_7 || (templateObject_7 = __makeTemplateObject(["space-y-6 md:space-y-0 space-x-0 md:space-x-8!"], ["space-y-6 md:space-y-0 space-x-0 md:space-x-8!"]))),
};
var imgMap = {
    xs: tw(templateObject_8 || (templateObject_8 = __makeTemplateObject(["w-40 h-40"], ["w-40 h-40"]))),
    sm: tw(templateObject_9 || (templateObject_9 = __makeTemplateObject(["w-48 h-48"], ["w-48 h-48"]))),
    base: tw(templateObject_10 || (templateObject_10 = __makeTemplateObject(["w-52 h-52"], ["w-52 h-52"]))),
    lg: tw(templateObject_11 || (templateObject_11 = __makeTemplateObject(["w-56 h-56"], ["w-56 h-56"]))),
};
var messageMap = {
    sm: tw(templateObject_12 || (templateObject_12 = __makeTemplateObject(["font-bold text-lg lg:text-xl leading-relaxed!"], ["font-bold text-lg lg:text-xl leading-relaxed!"]))),
    base: tw(templateObject_13 || (templateObject_13 = __makeTemplateObject(["font-bold text-2xl lg:text-3xl leading-relaxed!"], ["font-bold text-2xl lg:text-3xl leading-relaxed!"]))),
    lg: tw(templateObject_14 || (templateObject_14 = __makeTemplateObject(["font-bold text-3xl lg:text-5xl leading-relaxed!"], ["font-bold text-3xl lg:text-5xl leading-relaxed!"]))),
};
var TestimonyView = function (_a) {
    var _b = _a.selected, selected = _b === void 0 ? 0 : _b, _c = _a.containerSpace, containerSpace = _c === void 0 ? 'base' : _c, _d = _a.containerMargin, containerMargin = _d === void 0 ? 'base' : _d, _e = _a.imgSize, imgSize = _e === void 0 ? 'base' : _e, _f = _a.messageMode, messageMode = _f === void 0 ? 'base' : _f, testiList = _a.testiList;
    var initial = { x: 200, opacity: 0 };
    var animate = { x: 0, opacity: 1 };
    var transition = {
        type: 'spring',
        duration: 0.8,
        bounce: 1,
        stiffness: 400,
        damping: 30,
    };
    console.log(testiList);
    return (_jsx("div", { children: _jsxs(motion.div, __assign({ initial: initial, animate: animate, transition: transition, css: [containerMap['default'], containerMarginMap[containerMargin], containerSpaceMap[containerSpace]] }, { children: [_jsxs("div", __assign({ tw: "flex text-lg sm:(text-xl)  md:hidden justify-center items-center" }, { children: [_jsx("h3", { children: "Kata Mereka Tentang" }, void 0),
                        _jsx("img", { tw: "h-5 sm:(h-7) ml-2", src: "/images/Testimony/cf-logo.svg" }, void 0)] }), void 0),
                _jsx("img", { src: testiList[selected].src, css: imgMap[imgSize], alt: testiList[selected].nama }, void 0),
                _jsxs("div", __assign({ css: tw(templateObject_15 || (templateObject_15 = __makeTemplateObject(["flex flex-col items-start justify-between space-y-4"], ["flex flex-col items-start justify-between space-y-4"]))) }, { children: [_jsx("div", __assign({ tw: "hidden md:flex justify-center items-center" }, { children: _jsxs("div", __assign({ tw: "flex" }, { children: [_jsx("h3", __assign({ tw: "text-sm lg:text-base xl:text-lg" }, { children: "Yang Mereka Katakan Tentang" }), void 0),
                                    _jsx("img", { tw: "h-3 md:(h-4 ml-1) lg:(h-6 ml-4) ml-3", src: "/images/Testimony/cf-logo.svg" }, void 0)] }), void 0) }), void 0),
                        _jsx("h1", __assign({ css: messageMap[messageMode] }, { children: testiList[selected].message }), void 0),
                        _jsxs("h1", __assign({ tw: "" }, { children: ["-", _jsxs("span", { children: [testiList[selected].nama, ", ", testiList[selected].position] }, void 0)] }), void 0)] }), void 0)] }), selected) }, void 0));
};
export default TestimonyView;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15;
//# sourceMappingURL=index.js.map