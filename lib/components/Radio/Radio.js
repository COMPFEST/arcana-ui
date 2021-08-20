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
import { RadioContainer, StyledLabel, StyledRadioButton, StyledRadioText } from './style';
import { useForm } from 'react-hook-form';
var Radio = function (props) {
    var options = props.options, name = props.name;
    var register = useForm().register;
    return (_jsx(RadioContainer, { children: options.map(function (e, i) {
            return (_jsx(StyledRadioButton, { children: _jsxs(StyledLabel, { children: [_jsx("input", __assign({ type: "radio" }, register(name, { required: true }), { name: name, value: e.value }), void 0),
                        _jsx(StyledRadioText, { children: e.text }, void 0)] }, void 0) }, i));
        }) }, void 0));
};
export default Radio;
//# sourceMappingURL=Radio.js.map