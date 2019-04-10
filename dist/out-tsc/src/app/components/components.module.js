import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowPostersComponent } from './slideshow-posters/slideshow-posters.component';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';
import { DetallesComponent } from './detalles/detalles.component';
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib_1.__decorate([
        NgModule({
            entryComponents: [
                DetallesComponent
            ],
            declarations: [
                PeliculasComponent,
                PeliculaComponent,
                SlideshowPostersComponent,
                SlideshowParesComponent,
                DetallesComponent
            ],
            imports: [
                CommonModule,
                IonicModule,
                PipesModule
            ],
            exports: [
                PeliculasComponent,
                PeliculaComponent,
                SlideshowPostersComponent,
                SlideshowParesComponent,
                DetallesComponent
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());
export { ComponentsModule };
//# sourceMappingURL=components.module.js.map