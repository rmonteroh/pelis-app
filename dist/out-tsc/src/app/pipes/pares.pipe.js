import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var ParesPipe = /** @class */ (function () {
    function ParesPipe() {
    }
    ParesPipe.prototype.transform = function (arr) {
        var pares = arr.reduce(function (result, value, index, array) {
            if (index % 2 === 0) {
                result.push(array.slice(index, index + 2));
            }
            return result;
        }, []);
        return pares;
    };
    ParesPipe = tslib_1.__decorate([
        Pipe({
            name: 'pares'
        })
    ], ParesPipe);
    return ParesPipe;
}());
export { ParesPipe };
//# sourceMappingURL=pares.pipe.js.map