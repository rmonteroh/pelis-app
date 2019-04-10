import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DetallesComponent } from '../detalles/detalles.component';
import { ModalController } from '@ionic/angular';
var SlideshowParesComponent = /** @class */ (function () {
    function SlideshowParesComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.peliculas = [];
        this.cargarmas = new EventEmitter();
        this.slidesOpt = {
            slidesPerView: 3.3,
            freeMode: true,
            spaceBetween: -10
        };
    }
    SlideshowParesComponent.prototype.ngOnInit = function () {
    };
    SlideshowParesComponent.prototype.cargarMas = function () {
        console.log('mas');
        this.cargarmas.emit();
    };
    SlideshowParesComponent.prototype.verDetalles = function (id) {
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
    ], SlideshowParesComponent.prototype, "peliculas", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], SlideshowParesComponent.prototype, "cargarmas", void 0);
    SlideshowParesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-slideshow-pares',
            templateUrl: './slideshow-pares.component.html',
            styleUrls: ['./slideshow-pares.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController])
    ], SlideshowParesComponent);
    return SlideshowParesComponent;
}());
export { SlideshowParesComponent };
//# sourceMappingURL=slideshow-pares.component.js.map