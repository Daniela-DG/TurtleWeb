import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{Routes, RouterModule} from '@angular/router';
import {ReactiveFormsModule, FormsModule}from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';

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



const routesApp: Routes = [
  { path: '', component:InicioComponent},
  { path: 'inicio', component:InicioComponent},
  { path: 'fauna-y-flora', component:FYFComponent},
  { path: 'noticias', component:NoticiasComponent},
  { path: 'mitologia', component:MitologiaComponent},
  { path: 'galeria', component:GaleriaComponent},
  { path: 'datos-curiosos', component:DatosCuComponent},
  { path: 'nosotros', component:NosotrosComponent},  
]

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
    BrowserModule,
    RouterModule.forRoot(routesApp),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
