var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { css } from 'twin.macro';
export var onSelected = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    :after {\n        display: block;\n        border-radius: 9999px;\n        content: '';\n        width: 110%;\n        height: 110%;\n        position: absolute;\n        z-index: -1;\n        left: -5%;\n        top: -5%;\n        background-image: conic-gradient(#ed1c7d, #fff, #5824fe, #fff, #cd33d5);\n        animation: spin 5s linear infinite;\n    }\n\n    @keyframes spin {\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n"], ["\n    :after {\n        display: block;\n        border-radius: 9999px;\n        content: '';\n        width: 110%;\n        height: 110%;\n        position: absolute;\n        z-index: -1;\n        left: -5%;\n        top: -5%;\n        background-image: conic-gradient(#ed1c7d, #fff, #5824fe, #fff, #cd33d5);\n        animation: spin 5s linear infinite;\n    }\n\n    @keyframes spin {\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n"])));
var templateObject_1;
//# sourceMappingURL=Style.js.map