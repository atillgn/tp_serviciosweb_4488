import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { CotizacionComponent } from './components/cotizacion/cotizacion.component';
import { EstadisticaComponent } from './components/estadistica/estadistica.component';
import { TraductorComponent } from './components/traductor/traductor.component';

const routes: Routes = [
  {path: 'peliculas', component: PeliculaComponent},
  {path: 'cotizacion', component: CotizacionComponent},
  {path: 'estadisticas', component: EstadisticaComponent},
  {path: 'translate', component: TraductorComponent},
  { path: '**', pathMatch:'full',redirectTo:'peliculas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
