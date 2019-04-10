import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataLocalService } from '../services/data-local.service';
import { MoviesService } from '../services/movies.service';
var Tab3Page = /** @class */ (function () {
    function Tab3Page(dataLocal, dataMovies) {
        this.dataLocal = dataLocal;
        this.dataMovies = dataMovies;
        this.peliculas = [];
        this.generos = [];
        this.pelisPorGenero = [];
    }
    Tab3Page.prototype.ngOnInit = function () {
        var _this = this;
        this.dataLocal.cargarPeliculas()
            .then(function (resp) {
            var _a;
            (_a = _this.peliculas).push.apply(_a, resp);
        });
        this.dataMovies.getGeneros()
            .subscribe(function (resp) {
            var _a;
            (_a = _this.generos).push.apply(_a, resp.genres);
        });
        this.peliculasPorGenero(this.generos, this.peliculas);
    };
    Tab3Page.prototype.peliculasPorGenero = function (generos, peliculas) {
        console.log('generos', generos);
        console.log('peliculas', peliculas);
    };
    Tab3Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab3',
            templateUrl: 'tab3.page.html',
            styleUrls: ['tab3.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [DataLocalService,
            MoviesService])
    ], Tab3Page);
    return Tab3Page;
}());
export { Tab3Page };
//# sourceMappingURL=tab3.page.js.map