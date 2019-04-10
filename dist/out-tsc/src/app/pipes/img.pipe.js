import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { environment } from 'src/environments/environment';
var url = environment.imgUrl;
var ImgPipe = /** @class */ (function () {
    function ImgPipe() {
    }
    ImgPipe.prototype.transform = function (img, size) {
        if (size === void 0) { size = 'w500'; }
        if (!img) {
            return './assets/img/no-image-banner.jpg';
        }
        var imgUrl = url + "/" + size + img;
        return imgUrl;
    };
    ImgPipe = tslib_1.__decorate([
        Pipe({
            name: 'img'
        })
    ], ImgPipe);
    return ImgPipe;
}());
export { ImgPipe };
//# sourceMappingURL=img.pipe.js.map