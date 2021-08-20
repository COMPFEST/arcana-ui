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
import tw from 'twin.macro';
import { GradientText } from '../util';
var imgContainerMap = {
    base: tw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["w-20 h-20"], ["w-20 h-20"]))),
    sm: tw(templateObject_2 || (templateObject_2 = __makeTemplateObject(["w-16 h-16"], ["w-16 h-16"]))),
    lg: tw(templateObject_3 || (templateObject_3 = __makeTemplateObject(["w-24 h-24"], ["w-24 h-24"]))),
};
var imgBorderMap = {
    full: tw(templateObject_4 || (templateObject_4 = __makeTemplateObject(["rounded-full"], ["rounded-full"]))),
    none: tw(templateObject_5 || (templateObject_5 = __makeTemplateObject(["rounded-none"], ["rounded-none"]))),
    xl: tw(templateObject_6 || (templateObject_6 = __makeTemplateObject(["rounded-xl"], ["rounded-xl"]))),
};
var TestimonyController = function (_a) {
    var testiList = _a.testiList, selector = _a.selector, _b = _a.selected, selected = _b === void 0 ? 0 : _b, onSelected = _a.onSelected, _c = _a.imgBorder, imgBorder = _c === void 0 ? 'full' : _c, _d = _a.imgContainer, imgContainer = _d === void 0 ? 'base' : _d, _e = _a.imgHeight, imgHeight = _e === void 0 ? '100%' : _e, _f = _a.imgWidth, imgWidth = _f === void 0 ? '100%' : _f;
    return (_jsxs("div", __assign({ tw: "container mx-auto flex flex-col space-y-10 md:space-y-0 items-center justify-center md:px-4 px-16 mt-0 md:mt-16 mb-24 md:mb-48" }, { children: [_jsx("div", __assign({ tw: "hidden md:flex flex-row space-x-8" }, { children: testiList.map(function (val, index) { return (_jsxs("div", __assign({ css: [index === selected && onSelected, tw(templateObject_7 || (templateObject_7 = __makeTemplateObject(["relative"], ["relative"]))), imgContainerMap[imgContainer]] }, { children: [_jsx("img", { css: [imgBorderMap[imgBorder], tw(templateObject_8 || (templateObject_8 = __makeTemplateObject(["bg-white cursor-pointer"], ["bg-white cursor-pointer"])))], src: val.src, alt: "image testimoni", style: {
                                width: imgWidth,
                                height: imgHeight,
                            }, onClick: function () {
                                selector && selector(index);
                            } }, void 0),
                        _jsx("h1", __assign({ tw: "text-center pt-2" }, { children: val.namaPanggilan }), void 0)] }), index)); }) }), void 0),
            _jsx("div", __assign({ tw: "flex md:hidden flex-row space-x-8 pb-6" }, { children: testiList.map(function (val, index) {
                    if (index < 3) {
                        return (_jsxs("div", __assign({ css: [index === selected && onSelected, tw(templateObject_9 || (templateObject_9 = __makeTemplateObject(["relative"], ["relative"]))), imgContainerMap[imgContainer]] }, { children: [_jsx("img", { css: [imgBorderMap[imgBorder], tw(templateObject_10 || (templateObject_10 = __makeTemplateObject(["bg-white cursor-pointer"], ["bg-white cursor-pointer"])))], src: val.src, alt: "image testimoni", style: {
                                        width: imgWidth,
                                        height: imgHeight,
                                    }, onClick: function () {
                                        selector && selector(index);
                                    } }, void 0),
                                _jsx("h1", __assign({ tw: "text-center pt-2" }, { children: val.namaPanggilan }), void 0)] }), index));
                    }
                }) }), void 0),
            _jsx("div", __assign({ tw: "flex md:hidden flex-row space-x-8" }, { children: testiList.map(function (val, index) {
                    if (index > 2) {
                        return (_jsxs("div", __assign({ css: [index === selected && onSelected, tw(templateObject_11 || (templateObject_11 = __makeTemplateObject(["relative"], ["relative"]))), imgContainerMap[imgContainer]] }, { children: [_jsx("img", { css: [imgBorderMap[imgBorder], tw(templateObject_12 || (templateObject_12 = __makeTemplateObject(["bg-white cursor-pointer"], ["bg-white cursor-pointer"])))], src: val.src, alt: "image testimoni", style: {
                                        width: imgWidth,
                                        height: imgHeight,
                                    }, onClick: function () {
                                        selector && selector(index);
                                    } }, void 0),
                                _jsx("h1", __assign({ tw: "text-center pt-2" }, { children: val.namaPanggilan }), void 0)] }), index));
                    }
                }) }), void 0)] }), void 0));
};
export default TestimonyController;
var dataTesti = [
    {
        nama: 'Veronika Xaveria',
        namaPanggilan: 'Veronika',
        position: 'Champion of Business-IT Case',
        message: (_jsxs("span", { children: ["\u201CCOMPFEST membantu saya mengasah skill", _jsxs(GradientText, __assign({ gr1: 'ed1c7d', gr2: 'cd33d5', gr3: '5824fe', tw: "inline font-bold" }, { children: [' ', "Product Management, Brand Management, dan Design Thinking.", ' '] }), void 0), "Pengetahuan tersebut membantu saya mendapatkan", _jsxs(GradientText, __assign({ gr1: 'ed1c7d', gr2: 'cd33d5', gr3: '5824fe', tw: "inline font-bold" }, { children: [' ', "kesempatan magang di perusahaan multinasional di industri teknologi dan FMCG."] }), void 0), "\u201D"] }, void 0)),
        src: '/images/testimony/veronica.png',
    },
    {
        nama: 'Ilham Nugroho',
        namaPanggilan: 'Ilham',
        position: 'Champion of Indie Game Ignite',
        message: (_jsxs("span", { children: ["\u201CCOMPFEST membantu saya", _jsxs(GradientText, __assign({ gr1: 'ed1c7d', gr2: 'cd33d5', gr3: '5824fe', tw: "inline font-bold" }, { children: [' ', "mendapat dukungan dan kerjasama dengan pihak profesional", ' '] }), void 0), "untuk membantu proyek game yang sedang saya kerjakan, hal tersebut", _jsxs(GradientText, __assign({ gr1: 'ed1c7d', gr2: 'cd33d5', gr3: '5824fe', tw: "inline font-bold" }, { children: [' ', "berkat channel-channel yg didapatkan", ' '] }), void 0), "sewaktu mengikuti COMPFEST.\u201D"] }, void 0)),
        src: '/images/testimony/ilham.png',
    },
    {
        nama: 'Giri Kuncoro',
        namaPanggilan: 'Giri',
        position: 'Software Developer at GOJEK',
        message: (_jsxs("span", { children: ["\u201CCOMPFEST adalah acara yang keren,", _jsxs(GradientText, __assign({ gr1: 'ed1c7d', gr2: 'cd33d5', gr3: '5824fe', tw: "inline font-bold" }, { children: [' ', "dapat menjembatani akademik dan Industri."] }), void 0), "\u201D"] }, void 0)),
        src: '/images/testimony/giri.png',
    },
    {
        nama: 'Sofian Hadiwijaya',
        namaPanggilan: 'Sofian',
        position: 'Co-Founder of Warung Pintar',
        message: (_jsxs("span", { children: ["\u201CMelalui acara ini, saya menemukan berbagai masalah yang tidak saya sadari sebelumnya dan", _jsxs(GradientText, __assign({ gr1: 'ed1c7d', gr2: 'cd33d5', gr3: '5824fe', tw: "inline font-bold" }, { children: [' ', "menemukan berbagai ide solusi", ' '] }), void 0), "masalah tersebut dari para", _jsxs(GradientText, __assign({ gr1: 'ed1c7d', gr2: 'cd33d5', gr3: '5824fe', tw: "inline font-bold" }, { children: [' ', "peserta - peserta yang sangat antusias."] }), void 0), "\u201D"] }, void 0)),
        src: '/images/testimony/sofian.png',
    },
    {
        nama: 'Dira Shafa A',
        namaPanggilan: 'Dira',
        position: 'STEI Student at Institut Teknologi Bandung',
        message: (_jsxs("span", { children: ["\u201CUX Academy COMPFEST memberiku", _jsxs(GradientText, __assign({ gr1: 'ed1c7d', gr2: 'cd33d5', gr3: '5824fe', tw: "inline font-bold" }, { children: [' ', "banyak pelatihan dan lingkungan yang suportif", ' '] }), void 0), "untuk meningkatkan pengetahuan UX-ku. Seneng banget karena bisa bertemu dengan", _jsxs(GradientText, __assign({ gr1: 'ed1c7d', gr2: 'cd33d5', gr3: '5824fe', tw: "inline font-bold" }, { children: [' ', "mentor-mentor hebat dari Tokopedia, GOJEK, dan Giza Lab."] }), void 0), "\u201D"] }, void 0)),
        src: '/images/testimony/dira.png',
    },
    {
        nama: 'William Chang',
        namaPanggilan: 'William',
        position: 'Computer Science Student at Binus University',
        message: (_jsxs("span", { children: ["\u201CSoftware Engineering Academy COMPFEST merupakan tempat belajar Software Engineering dengan cara yang seru. Aku mendapat banyak", _jsxs(GradientText, __assign({ gr1: 'ed1c7d', gr2: 'cd33d5', gr3: '5824fe', tw: "inline font-bold" }, { children: [' ', "network dengan berbagai mentor dari perusahaan besar", ' '] }), void 0), "serta ilmu dari", _jsxs(GradientText, __assign({ gr1: 'ed1c7d', gr2: 'cd33d5', gr3: '5824fe', tw: "inline font-bold" }, { children: [' ', "sesi mentoring, seminar dan workshop."] }), void 0), "\u201D"] }, void 0)),
        src: '/images/testimony/william.png',
    },
];
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
//# sourceMappingURL=index.js.map