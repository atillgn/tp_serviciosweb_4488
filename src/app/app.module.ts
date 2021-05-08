import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { CotizacionComponent } from './components/cotizacion/cotizacion.component';
import { EstadisticaComponent } from './components/estadistica/estadistica.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { TraductorComponent } from './components/traductor/traductor.component';
import { ValidacionDirective } from './directives/validacion.directive';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxDataTableModule} from "angular-9-datatable";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CotizacionComponent,
    EstadisticaComponent,
    PeliculaComponent,
    TraductorComponent,
    ValidacionDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxDataTableModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
