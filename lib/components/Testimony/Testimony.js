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
import { useState } from 'react';
import { onSelected } from './Style';
import TestimonyController from './TestimonyController';
import TestimonyView from './TestimonyView';
var TestimonyLayout = function (_a) {
    var controllerImgBorder = _a.controllerImgBorder, viewContainerSpace = _a.viewContainerSpace, controllerImgContainer = _a.controllerImgContainer, controllerImgHeight = _a.controllerImgHeight, controllerImgWidth = _a.controllerImgWidth, viewContainerMargin = _a.viewContainerMargin, viewImgSize = _a.viewImgSize, viewMessageMode = _a.viewMessageMode, testiList = _a.testiList;
    var _b = useState(0), selected = _b[0], setSelected = _b[1];
    var view = {
        testiList: testiList,
        selected: selected,
        containerSpace: viewContainerSpace,
        containerMargin: viewContainerMargin,
        imgSize: viewImgSize,
        messageMode: viewMessageMode,
    };
    var controller = {
        testiList: testiList,
        selected: selected,
        selector: setSelected,
        onSelected: onSelected,
        imgBorder: controllerImgBorder,
        imgContainer: controllerImgContainer,
        imgHeight: controllerImgHeight,
        imgWidth: controllerImgWidth,
    };
    return (_jsxs("div", __assign({ tw: "overflow-x-hidden" }, { children: [_jsx(TestimonyView, __assign({}, view), void 0),
            _jsx(TestimonyController, __assign({}, controller), void 0)] }), void 0));
};
export default TestimonyLayout;
//# sourceMappingURL=Testimony.js.map