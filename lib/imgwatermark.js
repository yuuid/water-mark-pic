
// //canvas 实现图片水印
// const imgwatermark = ({
//     url = '',
//     textAlign = 'center',
//     textBaseline = 'middle',
//     font = "20px Microsoft Yahei",
//     shadowColor = 'rgba(0, 0, 255, 0.5)',
//     content = 'Open Components',
//     cb = null,
//     textX = 100,
//     textY = 50,
// } = {}) => {
//     const img = new Image();
//     img.src = url;
//     img.crossOrigin = 'anonymous';
//     img.onload = function () {
//         const canvas = document.createElement('canvas');
//         canvas.width = img.width;
//         canvas.height = img.height;
//         const ctx = canvas.getContext('2d');

//         ctx.drawImage(img, 0, 0);
//         ctx.textAlign = textAlign;
//         ctx.textBaseline = textBaseline;
//         ctx.font = font;
//         ctx.shadowColor = shadowColor;
//             ctx.fillText(content, img.width - textX, img.height - textY);

//         const base64Url = canvas.toDataURL();
//         cb && cb(base64Url);
//     }
// }

// export default imgwatermark;

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//canvas 实现图片水印
var imgwatermark = function imgwatermark() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$url = _ref.url,
        url = _ref$url === undefined ? '' : _ref$url,
        _ref$textAlign = _ref.textAlign,
        textAlign = _ref$textAlign === undefined ? 'center' : _ref$textAlign,
        _ref$textBaseline = _ref.textBaseline,
        textBaseline = _ref$textBaseline === undefined ? 'middle' : _ref$textBaseline,
        _ref$font = _ref.font,
        font = _ref$font === undefined ? "20px Microsoft Yahei" : _ref$font,
        _ref$fillStyle = _ref.fillStyle,
        fillStyle = _ref$fillStyle === undefined ? 'rgba(184, 184, 184, 0.8)' : _ref$fillStyle,
        _ref$content = _ref.content,
        content = _ref$content === undefined ? 'Open Components' : _ref$content,
        _ref$cb = _ref.cb,
        cb = _ref$cb === undefined ? null : _ref$cb,
        _ref$textX = _ref.textX,
        textX = _ref$textX === undefined ? 100 : _ref$textX,
        _ref$textY = _ref.textY,
        textY = _ref$textY === undefined ? 50 : _ref$textY;

    var img = new Image();
    img.src = url;
    img.crossOrigin = 'anonymous';
    img.onload = function () {
        var canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext('2d');

        ctx.drawImage(img, 0, 0);
        ctx.textAlign = textAlign;
        ctx.textBaseline = textBaseline;
        ctx.font = font;
        ctx.fillStyle = fillStyle;
        ctx.fillText(content, img.width - textX, img.height - textY);

        var base64Url = canvas.toDataURL();
        cb && cb(base64Url);
    };
};

exports.default = imgwatermark;
