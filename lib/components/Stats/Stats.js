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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { css } from 'twin.macro';
import { InView } from 'react-intersection-observer';
import StatCard from './StatCard';
var RecordSection = function (props) {
    return (_jsxs(_Fragment, { children: [_jsx("div", __assign({ tw: "container mx-auto mt-24 md:mt-48 hidden md:flex items-center justify-center" }, { children: _jsx("img", { src: "/images/stats/rekor-desktop.svg", alt: "rekor compfest selama 12 tahun" }, void 0) }), void 0),
            _jsx("div", __assign({ tw: "container mx-auto mt-24 md:mt-48 flex md:hidden items-center justify-center" }, { children: _jsx("img", { src: "/images/stats/rekor-mobile.svg", alt: "rekor compfest selama 12 tahun" }, void 0) }), void 0),
            _jsx(InView, __assign({ as: "div", threshold: 0.25 }, { children: function (_a) {
                    var inView = _a.inView, ref = _a.ref;
                    return (_jsxs("div", __assign({ ref: ref }, { children: [_jsxs("div", __assign({ tw: "hidden md:flex flex-col space-y-4 \r\n                lg:space-y-8 mt-10 items-center justify-center", css: css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                                    min-width: 0px;\n                                "], ["\n                                    min-width: 0px;\n                                "]))) }, { children: [_jsxs("div", __assign({ tw: "flex flex-row items-center space-x-4 lg:space-x-8", css: css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                                        height: 220px;\n                                    "], ["\n                                        height: 220px;\n                                    "]))) }, { children: [_jsx(StatCard, __assign({}, props, { mode: "desktop", img: {
                                                    imgSrc: '/images/stats/pengunjung.svg',
                                                    imgAlt: 'pengunjung',
                                                }, data: {
                                                    figures: 8500,
                                                    title: 'PENGUNJUNG',
                                                    suffix: '+',
                                                }, inView: inView }), void 0),
                                            _jsx(StatCard, __assign({}, props, { mode: "desktop", img: {
                                                    imgSrc: '/images/stats/pendaftar-job-fair.svg',
                                                    imgAlt: 'Pendaftar Job Fair',
                                                }, data: {
                                                    figures: 3800,
                                                    suffix: '+',
                                                    title: 'PENDAFTAR JOB FAIR',
                                                }, inView: inView }), void 0),
                                            _jsx(StatCard, __assign({}, props, { mode: "desktop", img: {
                                                    imgSrc: '/images/stats/page-view.svg',
                                                    imgAlt: 'Page Views',
                                                }, data: {
                                                    figures: '1.9',
                                                    suffix: '+ Juta',
                                                    title: 'PAGE VIEWS',
                                                }, isStatic: true }), void 0)] }), void 0),
                                    _jsxs("div", __assign({ tw: "flex flex-row items-center space-x-4 lg:space-x-8", css: css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                                        height: 220px;\n                                    "], ["\n                                        height: 220px;\n                                    "]))) }, { children: [_jsx(StatCard, __assign({}, props, { mode: "desktop", img: {
                                                    imgSrc: '/images/stats/peserta-acad-compe.svg',
                                                    imgAlt: 'Peserta Academy & Competition',
                                                }, data: {
                                                    figures: 3300,
                                                    suffix: '+',
                                                    title: 'PESERTA ACADEMY & COMPETITION',
                                                }, inView: inView }), void 0),
                                            _jsx(StatCard, __assign({}, props, { mode: "desktop", img: {
                                                    imgSrc: '/images/stats/pembicara.svg',
                                                    imgAlt: 'Pembicara',
                                                }, data: {
                                                    figures: 250,
                                                    startFigures: 100,
                                                    suffix: '+',
                                                    title: 'PEMBICARA',
                                                }, inView: inView }), void 0),
                                            _jsx(StatCard, __assign({}, props, { mode: "desktop", img: {
                                                    imgSrc: '/images/stats/total-follower.svg',
                                                    imgAlt: 'Total Followers Sosial Media',
                                                }, data: {
                                                    figures: 3300,
                                                    suffix: '+',
                                                    title: 'TOTAL FOLLOWERS SOSIAL MEDIA',
                                                }, inView: inView }), void 0)] }), void 0)] }), void 0),
                            _jsx("div", __assign({ tw: "block md:hidden mt-9 mb-9 mx-auto", css: css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n                                    max-width: 296px;\n                                "], ["\n                                    max-width: 296px;\n                                "]))) }, { children: _jsxs("div", __assign({ tw: "grid grid-cols-2 gap-4", css: css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n                                        grid-template-rows: masonry;\n                                    "], ["\n                                        grid-template-rows: masonry;\n                                    "]))) }, { children: [_jsx(StatCard, __assign({}, props, { mode: "mobile", cardStyle: css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n                                            height: 119px;\n                                        "], ["\n                                            height: 119px;\n                                        "]))), img: {
                                                imgSrc: '/images/stats/pengunjung.svg',
                                                imgAlt: 'pengunjung',
                                            }, data: {
                                                figures: 8500,
                                                title: 'PENGUNJUNG',
                                                suffix: '+',
                                            }, inView: inView }), void 0),
                                        _jsx(StatCard, __assign({}, props, { mode: "mobile", cardStyle: css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n                                            height: 134px;\n                                        "], ["\n                                            height: 134px;\n                                        "]))), img: {
                                                imgSrc: '/images/stats/pendaftar-job-fair.svg',
                                                imgAlt: 'Pendaftar Job Fair',
                                            }, data: {
                                                figures: 3800,
                                                suffix: '+',
                                                title: 'PENDAFTAR JOB FAIR',
                                            }, inView: inView }), void 0),
                                        _jsx(StatCard, __assign({}, props, { mode: "mobile", cardStyle: css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n                                            height: 117px;\n                                            margin-top: -1rem;\n                                        "], ["\n                                            height: 117px;\n                                            margin-top: -1rem;\n                                        "]))), img: {
                                                imgSrc: '/images/stats/page-view.svg',
                                                imgAlt: 'Page Views',
                                            }, data: {
                                                figures: '1.9',
                                                suffix: '+ Juta',
                                                title: 'PAGE VIEWS',
                                            }, isStatic: true }), void 0),
                                        _jsx(StatCard, __assign({}, props, { mode: "mobile", cardStyle: css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n                                            height: 147px;\n                                        "], ["\n                                            height: 147px;\n                                        "]))), img: {
                                                imgSrc: '/images/stats/peserta-acad-compe.svg',
                                                imgAlt: 'Peserta Academy & Competition',
                                            }, data: {
                                                figures: 3300,
                                                suffix: '+',
                                                title: 'PESERTA ACADEMY & COMPETITION',
                                            }, inView: inView }), void 0),
                                        _jsx(StatCard, __assign({}, props, { mode: "mobile", cardStyle: css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n                                            height: 117px;\n                                            margin-top: -3rem;\n                                        "], ["\n                                            height: 117px;\n                                            margin-top: -3rem;\n                                        "]))), img: {
                                                imgSrc: '/images/stats/pembicara.svg',
                                                imgAlt: 'Pembicara',
                                            }, data: {
                                                figures: 250,
                                                startFigures: 100,
                                                suffix: '+',
                                                title: 'PEMBICARA',
                                            }, inView: inView }), void 0),
                                        _jsx(StatCard, __assign({}, props, { mode: "mobile", cardStyle: css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n                                            height: 147px;\n                                        "], ["\n                                            height: 147px;\n                                        "]))), img: {
                                                imgSrc: '/images/stats/total-follower.svg',
                                                imgAlt: 'Total Followers Sosial Media',
                                            }, data: {
                                                figures: 3300,
                                                suffix: '+',
                                                title: 'TOTAL FOLLOWERS SOSIAL MEDIA',
                                            }, inView: inView }), void 0)] }), void 0) }), void 0)] }), void 0));
                } }), void 0)] }, void 0));
};
export default RecordSection;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
//# sourceMappingURL=Stats.js.map