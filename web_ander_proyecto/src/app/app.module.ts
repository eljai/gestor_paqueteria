import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FacturasComponent } from './facturas/facturas.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import  {  FontAwesomeModule  }  from  '@fortawesome/angular-fontawesome' ;

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    FacturasComponent,
    SucursalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
 }
