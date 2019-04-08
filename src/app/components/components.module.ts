import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowPostersComponent } from './slideshow-posters/slideshow-posters.component';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';
import { DetallesComponent } from './detalles/detalles.component';

@NgModule({
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
export class ComponentsModule { }
