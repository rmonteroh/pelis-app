import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ModalController } from '@ionic/angular';
import { DataLocalService } from 'src/app/services/data-local.service';
var DetallesComponent = /** @class */ (function () {
    function DetallesComponent(movieService, modalCtrl, dataLocal) {
        this.movieService = movieService;
        this.modalCtrl = modalCtrl;
        this.dataLocal = dataLocal;
        this.pelicula = {};
        this.oculto = 150;
        this.actores = [];
        this.slidesOpt = {
            slidesPerView: 3.3,
            freeMode: true
        };
        this.existe = false;
    }
    DetallesComponent.prototype.ngOnInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.dataLocal.existepelicula(this.id)];
                    case 1:
                        _a.existe = _b.sent();
                        this.movieService.getDetallePeli(this.id)
                            .subscribe(function (resp) {
                            _this.pelicula = resp;
                        });
                        this.movieService.getActoresPeli(this.id)
                            .subscribe(function (resp) {
                            _this.actores = resp.cast;
                            console.log('actores', resp);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    DetallesComponent.prototype.regresar = function () {
        this.modalCtrl.dismiss();
    };
    DetallesComponent.prototype.favorito = function () {
        var done = this.dataLocal.guardarPelicula(this.pelicula);
        if (done) {
            this.existe = true;
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], DetallesComponent.prototype, "id", void 0);
    DetallesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-detalles',
            templateUrl: './detalles.component.html',
            styleUrls: ['./detalles.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [MoviesService,
            ModalController,
            DataLocalService])
    ], DetallesComponent);
    return DetallesComponent;
}());
export { DetallesComponent };
//# sourceMappingURL=detalles.component.js.map