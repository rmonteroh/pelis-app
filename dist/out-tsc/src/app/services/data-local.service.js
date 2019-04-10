import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
var DataLocalService = /** @class */ (function () {
    function DataLocalService(storage, toastCtrl) {
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.peliculas = [];
    }
    DataLocalService.prototype.guardarPelicula = function (pelicula) {
        var existe = this.peliculas.find(function (peli) { return peli.id === pelicula.id; });
        if (!existe) {
            this.peliculas.push(pelicula);
            this.storage.set('peliculas', this.peliculas);
            this.presentToast('Pelicula agregada a favoritos.');
            return true;
        }
        else {
            this.presentToast('La pelicula ya existe en favoritos.');
            return false;
        }
    };
    DataLocalService.prototype.cargarPeliculas = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var peliculas;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('peliculas')];
                    case 1:
                        peliculas = _a.sent();
                        this.peliculas = peliculas || [];
                        return [2 /*return*/, this.peliculas];
                }
            });
        });
    };
    DataLocalService.prototype.existepelicula = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var existe;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = Number(id);
                        return [4 /*yield*/, this.cargarPeliculas()];
                    case 1:
                        _a.sent();
                        existe = this.peliculas.find(function (peli) { return peli.id === id; });
                        return [2 /*return*/, (existe) ? true : false];
                }
            });
        });
    };
    DataLocalService.prototype.presentToast = function (message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: message,
                            duration: 2000,
                            position: 'top',
                            showCloseButton: true,
                            closeButtonText: 'Ok'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    DataLocalService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Storage,
            ToastController])
    ], DataLocalService);
    return DataLocalService;
}());
export { DataLocalService };
//# sourceMappingURL=data-local.service.js.map