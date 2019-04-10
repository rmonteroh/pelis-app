import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { environment } from 'src/environments/environment';
var Tab1Page = /** @class */ (function () {
    function Tab1Page(serviceMovie) {
        this.serviceMovie = serviceMovie;
        this.peliculasRecientes = [];
        this.populares = [];
        this.imgURI = environment.imgUrl;
    }
    Tab1Page.prototype.ngOnInit = function () {
        var _this = this;
        this.serviceMovie.getFeatures()
            .subscribe(function (resp) {
            var _a;
            (_a = _this.peliculasRecientes).push.apply(_a, resp.results);
        });
        this.getPopulares();
    };
    Tab1Page.prototype.cargarMas = function () {
        this.getPopulares();
    };
    Tab1Page.prototype.getPopulares = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.serviceMovie.getPopulares()
                            .subscribe(function (resp) {
                            var tempArray = _this.populares.concat(resp.results);
                            _this.populares = tempArray;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab1Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab1',
            templateUrl: 'tab1.page.html',
            styleUrls: ['tab1.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [MoviesService])
    ], Tab1Page);
    return Tab1Page;
}());
export { Tab1Page };
//# sourceMappingURL=tab1.page.js.map