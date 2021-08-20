var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { styled, css } from 'twin.macro';
export var SpeedMap = {
    slow: '1.5s',
    medium: '1s',
    fast: '0.5s',
};
export var BackgroundMap = {
    blue: '#0266D3',
    'light-blue': '#DCEDFE',
    black: '#000000',
    white: '#FFFFFF',
};
export var OutlineMap = {
    blue: 'rgba(2, 102, 211, 0)',
    'light-blue': 'rgba(220, 237, 254, 0)',
    black: 'rgba(0, 0, 0, 0)',
    white: 'rgba(255, 255, 255, 0)',
};
// emotion linear background best practice
var linearGradients = function (solid, outline) { return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background: -moz-linear-gradient(left, ", " 10%, ", " 42%);\n    background: -webkit-linear-gradient(left, ", " 10%, ", " 42%);\n    background: -o-linear-gradient(left, ", " 10%, ", " 42%);\n    background: -ms-linear-gradient(left, ", " 10%, ", " 42%);\n    background: linear-gradient(to right, ", " 10%, ", " 42%);\n"], ["\n    background: -moz-linear-gradient(left, ", " 10%, ", " 42%);\n    background: -webkit-linear-gradient(left, ", " 10%, ", " 42%);\n    background: -o-linear-gradient(left, ", " 10%, ", " 42%);\n    background: -ms-linear-gradient(left, ", " 10%, ", " 42%);\n    background: linear-gradient(to right, ", " 10%, ", " 42%);\n"])), solid, outline, solid, outline, solid, outline, solid, outline, solid, outline); };
var StyledSpinner = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    &.inactive {\n        display: none;\n    }\n\n    font-size: 10px;\n    text-indent: -9999em;\n    width: ", ";\n    height: ", ";\n    border-radius: 50%;\n    background: ", ";\n    ", "\n    position: relative;\n    -webkit-animation: load3 ", " infinite linear;\n    animation: load3 ", " infinite linear;\n    -webkit-transform: translateZ(0);\n    -ms-transform: translateZ(0);\n    transform: translateZ(0);\n    &:before {\n        width: 50%;\n        height: 50%;\n        background: ", ";\n        border-radius: 100% 0 0 0;\n        position: absolute;\n        top: 0;\n        left: 0;\n        content: '';\n    }\n    &:after {\n        background: ", ";\n        width: 75%;\n        height: 75%;\n        border-radius: 50%;\n        content: '';\n        margin: auto;\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n    }\n    @-webkit-keyframes load3 {\n        0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        100% {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n        }\n    }\n    @keyframes load3 {\n        0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        100% {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n        }\n    }\n"], ["\n    &.inactive {\n        display: none;\n    }\n\n    font-size: 10px;\n    text-indent: -9999em;\n    width: ", ";\n    height: ", ";\n    border-radius: 50%;\n    background: ", ";\n    ", "\n    position: relative;\n    -webkit-animation: load3 ", " infinite linear;\n    animation: load3 ", " infinite linear;\n    -webkit-transform: translateZ(0);\n    -ms-transform: translateZ(0);\n    transform: translateZ(0);\n    &:before {\n        width: 50%;\n        height: 50%;\n        background: ", ";\n        border-radius: 100% 0 0 0;\n        position: absolute;\n        top: 0;\n        left: 0;\n        content: '';\n    }\n    &:after {\n        background: ", ";\n        width: 75%;\n        height: 75%;\n        border-radius: 50%;\n        content: '';\n        margin: auto;\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n    }\n    @-webkit-keyframes load3 {\n        0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        100% {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n        }\n    }\n    @keyframes load3 {\n        0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        100% {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n        }\n    }\n"])), function (props) { return props.width; }, function (props) { return props.height; }, function (props) { return BackgroundMap[props.color]; }, function (props) { return linearGradients(BackgroundMap[props.color], OutlineMap[props.color]); }, function (props) { return SpeedMap[props.speed]; }, function (props) { return SpeedMap[props.speed]; }, function (props) { return BackgroundMap[props.color]; }, function (props) { return props.parentBackground; });
export default { StyledSpinner: StyledSpinner };
var templateObject_1, templateObject_2;
//# sourceMappingURL=style.js.map