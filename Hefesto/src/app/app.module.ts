import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './Seguridad/login/login.component';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { SeguridadService } from './Seguridad/seguridad.service';
import { MenuComponent } from './Menu/menu/menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { ListadoComponent } from './Equipos/listado/listado.component';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { ProductoComponent } from './Equipos/producto/producto.component';
import { PedidoComponent } from './Pedidos/pedido/pedido.component';
import { CompraComponent } from './Compras/compra/compra.component';
import { ComparativoComponent } from './Reportes/comparativo/comparativo.component';
import { RolesComponent } from './Configuracion/roles/roles.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ListadoComponent,
    InicioComponent,
    DashboardComponent,
    ProductoComponent,
    PedidoComponent,
    CompraComponent,
    ComparativoComponent,
    RolesComponent,
  ],
  exports:[
    LoginComponent,
    MenuComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule, 
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatIconModule,
    FontAwesomeModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
