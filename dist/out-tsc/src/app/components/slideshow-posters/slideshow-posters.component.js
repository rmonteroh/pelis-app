import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetallesComponent } from '../detalles/detalles.component';
var SlideshowPostersComponent = /** @class */ (function () {
    function SlideshowPostersComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.peliculas = [];
        this.slidesOpt = {
            slidesPerView: 3.3,
            freeMode: true
        };
    }
    SlideshowPostersComponent.prototype.ngOnInit = function () { };
    SlideshowPostersComponent.prototype.verDetalles = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: DetallesComponent,
                            componentProps: {
                                id: id
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], SlideshowPostersComponent.prototype, "peliculas", void 0);
    SlideshowPostersComponent = tslib_1.__decorate([
        Component({
            selector: 'app-slideshow-posters',
            templateUrl: './slideshow-posters.component.html',
            styleUrls: ['./slideshow-posters.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController])
    ], SlideshowPostersComponent);
    return SlideshowPostersComponent;
}());
export { SlideshowPostersComponent };
//# sourceMappingURL=slideshow-posters.component.js.map