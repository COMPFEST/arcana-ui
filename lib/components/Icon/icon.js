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
import { StyledDiv } from './style';
var Icon = function (props, ref) {
    var _a = props.size, size = _a === void 0 ? 'default' : _a, src = props.src;
    if (typeof src === 'string') {
        return (_jsx(StyledDiv, __assign({ size: size }, { children: _jsx("img", { src: src, ref: ref, tw: "min-h-full min-w-full object-cover" }, void 0) }), void 0));
    }
    else {
        return _jsx(StyledDiv, __assign({ size: size }, { children: src }), void 0);
    }
};
export default React.forwardRef(Icon);
//# sourceMappingURL=icon.js.map