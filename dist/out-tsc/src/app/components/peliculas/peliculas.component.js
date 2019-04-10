import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var PeliculasComponent = /** @class */ (function () {
    function PeliculasComponent() {
        this.slidesOpt = {
            slidesPerView: 1.1,
            freeMode: true
        };
    }
    PeliculasComponent.prototype.ngOnInit = function () { };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], PeliculasComponent.prototype, "peliculasRecientes", void 0);
    PeliculasComponent = tslib_1.__decorate([
        Component({
            selector: 'app-peliculas',
            templateUrl: './peliculas.component.html',
            styleUrls: ['./peliculas.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], PeliculasComponent);
    return PeliculasComponent;
}());
export { PeliculasComponent };
//# sourceMappingURL=peliculas.component.js.map