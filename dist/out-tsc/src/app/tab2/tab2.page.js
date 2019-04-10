import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { ModalController } from '@ionic/angular';
import { DetallesComponent } from '../components/detalles/detalles.component';
var Tab2Page = /** @class */ (function () {
    function Tab2Page(movieService, modalCtrl) {
        this.movieService = movieService;
        this.modalCtrl = modalCtrl;
        this.textoBuscar = '';
        this.ideas = ['Avenger', 'Mujer maravilla', 'Hull', 'Capitan América'];
        this.peliculas = [];
        this.buscando = false;
        this.detallePelicula = {};
    }
    Tab2Page.prototype.buscar = function (event) {
        var _this = this;
        var valor = event.detail.value;
        if (valor) {
            this.buscando = true;
            this.movieService.buscarPelicula(valor)
                .subscribe(function (resp) {
                _this.peliculas = resp['results'];
                _this.buscando = false;
            });
        }
    };
    Tab2Page.prototype.detalles = function (id) {
        var _this = this;
        this.movieService.getDetallePeli(id)
            .subscribe(function (resp) {
            _this.verDetalles(id);
        });
    };
    Tab2Page.prototype.verDetalles = function (id) {
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
    Tab2Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab2',
            templateUrl: 'tab2.page.html',
            styleUrls: ['tab2.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [MoviesService,
            ModalController])
    ], Tab2Page);
    return Tab2Page;
}());
export { Tab2Page };
//# sourceMappingURL=tab2.page.js.map