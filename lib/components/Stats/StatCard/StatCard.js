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
import { animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
var imgSizeMap = {
    sm: {
        mobile: '20px',
        desktop: '32px',
    },
    base: {
        mobile: '24px',
        desktop: '36px',
    },
    lg: {
        mobile: '32px',
        desktop: '44px',
    },
};
var textSizeMap = {
    sm: {
        figures: tw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["text-lg md:text-3xl"], ["text-lg md:text-3xl"]))),
        title: tw(templateObject_2 || (templateObject_2 = __makeTemplateObject(["text-xs md:text-xl "], ["text-xs md:text-xl "]))),
    },
    base: {
        figures: tw(templateObject_3 || (templateObject_3 = __makeTemplateObject(["text-2xl md:text-5xl"], ["text-2xl md:text-5xl"]))),
        title: tw(templateObject_4 || (templateObject_4 = __makeTemplateObject(["text-xs md:text-xl lg:text-2xl"], ["text-xs md:text-xl lg:text-2xl"]))),
    },
    lg: {
        figures: tw(templateObject_5 || (templateObject_5 = __makeTemplateObject(["text-2xl md:text-6xl"], ["text-2xl md:text-6xl"]))),
        title: tw(templateObject_6 || (templateObject_6 = __makeTemplateObject(["text-base md:text-4xl"], ["text-base md:text-4xl"]))),
    },
};
var StatCard = function (_a) {
    var _b = _a.isStatic, isStatic = _b === void 0 ? false : _b, inView = _a.inView, _c = _a.data, figures = _c.figures, _d = _c.startFigures, startFigures = _d === void 0 ? 1000 : _d, title = _c.title, suffix = _c.suffix, _e = _a.img, imgSrc = _e.imgSrc, imgAlt = _e.imgAlt, imgStyle = _e.imgStyle, mode = _a.mode, cardStyle = _a.cardStyle, imgSize = _a.imgSize, textSize = _a.textSize;
    console.log(cardStyle);
    return (_jsxs("div", __assign({ css: [
            mode === 'desktop'
                ? css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n                          max-width: 326px;\n                      "], ["\n                          max-width: 326px;\n                      "]))) : css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n                          break-inside: avoid;\n                      "], ["\n                          break-inside: avoid;\n                      "]))),
            css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n                    background-color: #f2f2f2;\n                "], ["\n                    background-color: #f2f2f2;\n                "]))),
            cardStyle,
            tw(templateObject_10 || (templateObject_10 = __makeTemplateObject(["flex flex-col rounded-2xl font-bold items-start justify-between p-4 md:(px-9 py-5 h-full items-stretch)"], ["flex flex-col rounded-2xl font-bold items-start justify-between p-4 md:(px-9 py-5 h-full items-stretch)"]))),
        ] }, { children: [_jsx("img", { style: imgStyle
                    ? imgStyle
                    : mode === 'desktop'
                        ? { width: "" + imgSizeMap[imgSize].desktop }
                        : { width: "" + imgSizeMap[imgSize].mobile }, src: imgSrc, alt: imgAlt }, void 0),
            !isStatic ? (_jsxs("h1", __assign({ css: textSizeMap[textSize].figures }, { children: [!!inView && _jsx(Counter, { from: startFigures, to: Number(figures) }, void 0), suffix] }), void 0)) : (_jsxs("h1", __assign({ css: textSizeMap[textSize].figures }, { children: [figures, suffix] }), void 0)),
            _jsx("h1", __assign({ css: [
                    css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n                        color: #999999;\n                    "], ["\n                        color: #999999;\n                    "]))),
                    textSizeMap[textSize].title,
                ] }, { children: title }), void 0)] }), void 0));
};
export default StatCard;
export var Counter = function (_a) {
    var from = _a.from, to = _a.to;
    var ref = useRef(null);
    useEffect(function () {
        var controls = animate(from, to, {
            duration: 1,
            onUpdate: function (value) {
                if (value && ref.current) {
                    ref.current.textContent = value.toFixed();
                }
            },
        });
        return function () { return controls.stop(); };
    }, [from, to]);
    return _jsx("span", { ref: ref }, void 0);
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
//# sourceMappingURL=StatCard.js.map