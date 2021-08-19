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
var textClip = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-size: 100%;\n    -webkit-background-clip: text;\n    -moz-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -moz-text-fill-color: transparent;\n"], ["\n    background-size: 100%;\n    -webkit-background-clip: text;\n    -moz-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -moz-text-fill-color: transparent;\n"])));
var Item = function (_a) {
    var title = _a.title, date = _a.date, line = _a.line, started = _a.started, upcoming = _a.upcoming, gradient = _a.gradient, ringColor = _a.ringColor;
    return (_jsxs("div", __assign({ tw: "flex justify-center -mt-1 select-none" }, { children: [_jsxs("div", __assign({ tw: "flex flex-col items-center mt-1 mr-8" }, { children: [_jsx("div", __assign({ tw: "flex justify-center items-center rounded-full w-7 h-7 bg-gray-300 bg-opacity-50" }, { children: _jsx("div", __assign({ tw: "flex justify-center items-center w-6 h-6 rounded-full", css: [
                                started && tw(templateObject_2 || (templateObject_2 = __makeTemplateObject(["border-2"], ["border-2"]))),
                                started && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                                border-color: ", ";\n                            "], ["\n                                border-color: ", ";\n                            "])), ringColor),
                                !upcoming && !started && tw(templateObject_4 || (templateObject_4 = __makeTemplateObject(["hidden"], ["hidden"]))),
                            ] }, { children: _jsx("div", { tw: "w-2.5 h-2.5 rounded-full", css: [started && gradient, upcoming && tw(templateObject_5 || (templateObject_5 = __makeTemplateObject(["bg-academypurple"], ["bg-academypurple"])))] }, void 0) }), void 0) }), void 0),
                    line && _jsx("div", { tw: "w-1 h-full bg-gray-300" }, void 0)] }), void 0),
            _jsxs("div", __assign({ tw: "mb-6" }, { children: [_jsx("h1", __assign({ tw: "font-bold text-xl", css: [started && textClip, started && gradient, !upcoming && !started && tw(templateObject_6 || (templateObject_6 = __makeTemplateObject(["text-gray-300"], ["text-gray-300"])))] }, { children: title }), void 0),
                    started && (_jsxs("div", __assign({ tw: "flex items-center animate-pulse" }, { children: [_jsx("div", { tw: "w-2.5 h-2.5 mr-1 bg-red-600 rounded-full" }, void 0),
                            _jsx("span", __assign({ tw: "uppercase text-xs text-red-600 font-bold" }, { children: "Berlangsung" }), void 0)] }), void 0)),
                    _jsx("p", __assign({ css: [!upcoming && !started && tw(templateObject_7 || (templateObject_7 = __makeTemplateObject(["text-gray-300"], ["text-gray-300"])))] }, { children: typeof date == 'string' ? date : date.map(function (item) { return _jsx("p", { children: item }, item); }) }), void 0)] }), void 0)] }), void 0));
};
var Timeline = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, items = _a.items, gradient = _a.gradient, ringColor = _a.ringColor;
    return (_jsxs("div", __assign({ tw: "flex flex-col items-center w-full max-w-4xl" }, { children: [_jsxs("div", __assign({ tw: "text-center mb-12" }, { children: [_jsx("h1", __assign({ tw: "font-bold text-3xl" }, { children: title }), void 0),
                    _jsx("p", { children: subtitle }, void 0)] }), void 0),
            _jsx("div", __assign({ tw: "flex flex-col items-start" }, { children: items.map(function (item, index) { return (_jsx(Item, { title: item.title, date: item.date, started: (index == items.length - 1 && new Date() > item.startAt) ||
                        (new Date() >= item.startAt && new Date() < item.endAt), upcoming: new Date() < item.startAt, line: index != items.length - 1, gradient: gradient, ringColor: ringColor }, item.id)); }) }), void 0)] }), void 0));
};
export default Timeline;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=Timeline.js.map