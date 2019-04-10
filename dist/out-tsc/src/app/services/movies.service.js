import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
var URL = environment.url;
var apiKey = environment.apiKey;
var MoviesService = /** @class */ (function () {
    function MoviesService(http) {
        this.http = http;
        this.popularesPage = 0;
    }
    MoviesService.prototype.makeQuery = function (query) {
        query = URL + query;
        query += "&api_key=" + apiKey + "&language=es&include_image_language=es";
        console.log(query);
        return this.http.get(query);
    };
    // Url completa de la api moviedb
    // tslint:disable-next-line:max-line-length
    // https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2019-01-01&primary_release_date.lte=2019-01-30&language=es&include_image_language=es&api_key=ab447e64065a4c8a7a826a62eb951942
    MoviesService.prototype.getFeatures = function () {
        var hoy = new Date();
        // A date  se le pasa el año, el mes actual mas 1 para obtener el proximo mes y el 0 indica el ultimo dia del mes anterior.
        var ultimoDia = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0).getDate();
        var mes = hoy.getMonth();
        var mesString;
        if (mes < 10) {
            mesString = '0' + mes;
        }
        else {
            mesString = mes;
        }
        var inicio = hoy.getFullYear() + "-" + mesString + "-01";
        var fin = hoy.getFullYear() + "-" + mesString + "-" + ultimoDia;
        return this.makeQuery("/discover/movie?primary_release_date.gte=" + inicio + "&primary_release_date.lte=" + fin);
    };
    MoviesService.prototype.getPopulares = function () {
        this.popularesPage++;
        var query = "/discover/movie?sort_by=popularity.desc&page=" + this.popularesPage;
        return this.makeQuery(query);
    };
    // El parametro a=1 la api no le va a hacer caso, solo esta puesto para q la url tenga el
    // simbolo de ? y concatene las demas parametros con el simbolo &.
    MoviesService.prototype.getDetallePeli = function (id) {
        var query = "/movie/" + id + "?a=1";
        return this.makeQuery(query);
    };
    MoviesService.prototype.getActoresPeli = function (id) {
        var query = "/movie/" + id + "/credits?a=1";
        return this.makeQuery(query);
    };
    MoviesService.prototype.buscarPelicula = function (name) {
        var query = "/search/movie?query=" + name;
        return this.makeQuery(query);
    };
    MoviesService.prototype.getGeneros = function () {
        var query = "/genre/movie/list?a=1";
        return this.makeQuery(query);
    };
    MoviesService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], MoviesService);
    return MoviesService;
}());
export { MoviesService };
//# sourceMappingURL=movies.service.js.map