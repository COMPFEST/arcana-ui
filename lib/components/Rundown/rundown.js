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
import { RundownContainer, StyledRundown, StyledTime, StyledTimeIcon } from './style';
var Rundown = function (props) {
    var classname = props.classname, _a = props.backgroundColor, backgroundColor = _a === void 0 ? 'default' : _a, _b = props.textColor, textColor = _b === void 0 ? 'black' : _b, _c = props.timeBgColor, timeBgColor = _c === void 0 ? '#7033f3' : _c, timeColor = props.timeColor, dataRundown = props.dataRundown, _d = props.timeFormat, timeFormat = _d === void 0 ? 'WIB' : _d, _e = props.imgName, imgName = _e === void 0 ? 'clock.svg' : _e;
    var styledRundownProps = {
        classname: classname,
        backgroundColor: backgroundColor,
        textColor: textColor,
    };
    var styledTimeProps = {
        timeBgColor: timeBgColor,
        timeColor: timeColor,
    };
    // Add rundown data first before rendering
    return dataRundown.map(function (e) {
        return (_jsx(RundownContainer, { children: _jsxs(StyledRundown, __assign({}, styledRundownProps, { children: [_jsxs(StyledTime, __assign({}, styledTimeProps, { children: [_jsx(StyledTimeIcon, { src: "/" + imgName }, void 0),
                            e.timeStart + " - " + e.timeEnd + " " + timeFormat] }), void 0),
                    _jsx("div", __assign({ tw: "text-base md:text-lg lg:text-xl" }, { children: e.event }), void 0)] }), void 0) }, e));
    });
};
export default Rundown;
//# sourceMappingURL=rundown.js.map