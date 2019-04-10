import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var PeliculaComponent = /** @class */ (function () {
    function PeliculaComponent() {
    }
    PeliculaComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], PeliculaComponent.prototype, "pelicula", void 0);
    PeliculaComponent = tslib_1.__decorate([
        Component({
            selector: 'app-pelicula',
            templateUrl: './pelicula.component.html',
            styleUrls: ['./pelicula.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], PeliculaComponent);
    return PeliculaComponent;
}());
export { PeliculaComponent };
//# sourceMappingURL=pelicula.component.js.map