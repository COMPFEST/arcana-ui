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
import { useState, useEffect, useRef } from 'react';
import { animate } from 'framer-motion';
var getDigits = function (endDate) {
    var delta = Math.floor((endDate.getTime() - Date.now()) / 1000);
    var days = Math.floor(delta / 86400);
    var hourDivisor = delta % 86400;
    var hours = Math.floor(hourDivisor / 3600);
    var minuteDivisor = hourDivisor % 3600;
    var minutes = Math.floor(minuteDivisor / 60);
    var seconds = minuteDivisor % 60;
    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
    };
};
var Digit = function (_a) {
    var digit = _a.digit, title = _a.title, initDuration = _a.initDuration, animated = _a.animated;
    var nodeRef = useRef(null);
    var _b = useState(0), initial = _b[0], setInitial = _b[1];
    useEffect(function () {
        var node = nodeRef.current;
        var controls = animate(initial, digit, {
            duration: animated && digit != 59 ? initDuration : 0,
            ease: 'easeInOut',
            onUpdate: function (value) {
                if (node)
                    node.textContent = Math.floor(value).toLocaleString('id-ID');
            },
        });
        setInitial(digit);
        return function () { return controls.stop(); };
    }, [digit]);
    return (_jsxs("div", __assign({ tw: "mx-4 font-extrabold text-center bg-gray-100 p-4 rounded-lg" }, { children: [_jsx("p", { tw: "text-4xl", ref: nodeRef }, void 0),
            _jsx("p", { children: title }, void 0)] }), void 0));
};
var Countdown = function (_a) {
    var endDate = _a.endDate, initDuration = _a.initDuration, animated = _a.animated, title = _a.title, _b = _a.digits, digits = _b === void 0 ? { seconds: true, minutes: true, hours: true } : _b;
    var _c = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    }), timeLeft = _c[0], setTimeLeft = _c[1];
    useEffect(function () {
        setTimeLeft(getDigits(endDate));
        var timer = setInterval(function () {
            var k = getDigits(endDate);
            if (k.seconds < 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
            else {
                setTimeLeft(k);
            }
        }, 1000);
        return function () { return clearInterval(timer); };
    }, []);
    return (_jsxs("div", __assign({ tw: "flex flex-col justify-center items-center select-none" }, { children: [_jsx("h2", __assign({ tw: "uppercase font-semibold text-center mb-2 font-bold -mr-2 tracking-superwide" }, { children: title }), void 0),
            _jsxs("div", __assign({ tw: "flex justify-center items-center" }, { children: [digits.days && (_jsx(Digit, { digit: timeLeft.days, initDuration: initDuration, title: "Hari", animated: animated }, void 0)),
                    digits.hours && (_jsx(Digit, { digit: timeLeft.hours, initDuration: initDuration, title: "Jam", animated: animated }, void 0)),
                    digits.minutes && (_jsx(Digit, { digit: timeLeft.minutes, initDuration: initDuration, title: "Menit", animated: animated }, void 0)),
                    digits.seconds && (_jsx(Digit, { digit: timeLeft.seconds, initDuration: initDuration, title: "Detik", animated: animated }, void 0))] }), void 0)] }), void 0));
};
export default Countdown;
//# sourceMappingURL=Countdown.js.map