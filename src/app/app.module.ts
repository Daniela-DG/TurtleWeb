import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioComponent } from './Paginas/inicio/inicio.component';
import { FYFComponent } from './Paginas/fyf/fyf.component';
import { NoticiasComponent } from './Paginas/noticias/noticias.component';
import { MitologiaComponent } from './Paginas/mitologia/mitologia.component';
import { GaleriaComponent } from './Paginas/galeria/galeria.component';
import { DatosCuComponent } from './Paginas/datos-cu/datos-cu.component';
import { NosotrosComponent } from './Paginas/nosotros/nosotros.component';
import { MenuComponent } from './Paginas/menu/menu.component';
import { FooterComponent } from './Paginas/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FYFComponent,
    NoticiasComponent,
    MitologiaComponent,
    GaleriaComponent,
    DatosCuComponent,
    NosotrosComponent,
    MenuComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
