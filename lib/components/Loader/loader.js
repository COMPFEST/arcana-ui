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
import { useState, useEffect } from 'react';
import LOADERSTYLES from './style';
var switchCaseComponentSelect = function (type) {
    switch (type) {
        // TODO: Maybe add more loader styles here!
        case 'spinner':
            return LOADERSTYLES.StyledSpinner;
        default:
            return LOADERSTYLES.StyledSpinner;
    }
};
var Loader = function (props) {
    var _a = props.type, type = _a === void 0 ? 'spinner' : _a, _b = props.visible, visible = _b === void 0 ? true : _b, _c = props.parentBackground, parentBackground = _c === void 0 ? 'white' : _c, _d = props.height, height = _d === void 0 ? '80px' : _d, _e = props.width, width = _e === void 0 ? '80px' : _e, _f = props.color, color = _f === void 0 ? 'black' : _f, _g = props.timeout, timeout = _g === void 0 ? 0 : _g, className = props.className, _h = props.speed, speed = _h === void 0 ? 'slow' : _h;
    var _j = useState(visible), loaderActive = _j[0], setLoaderActive = _j[1];
    useEffect(function () {
        // visible is overriden by setTimeout
        if (timeout > 0) {
            setTimeout(function () {
                setLoaderActive(false);
            }, timeout);
        }
    }, [timeout]);
    var StyledLoader = switchCaseComponentSelect(type);
    var styledLoaderProps = {
        className: (loaderActive ? 'active' : 'inactive') + " " + (className !== null && className !== void 0 ? className : ''),
        color: color,
        width: width,
        height: height,
        parentBackground: parentBackground,
        speed: speed,
    };
    return _jsx(StyledLoader, __assign({}, styledLoaderProps), void 0);
};
export default Loader;
//# sourceMappingURL=loader.js.map