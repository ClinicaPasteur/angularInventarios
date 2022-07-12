import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './Equipos/listado/listado.component';
import { ProductoComponent } from './Equipos/producto/producto.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './Seguridad/login/login.component';
import { PedidoComponent } from './Pedidos/pedido/pedido.component';
import { ComparativoComponent } from './Reportes/comparativo/comparativo.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { RolesComponent } from './Configuracion/roles/roles.component';
import { CompraComponent } from './Compras/compra/compra.component';
import { CrearProductoComponent } from './Equipos/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './Equipos/editar-producto/editar-producto.component';
import { FiltroProductoComponent } from './Equipos/filtro-producto/filtro-producto.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'inicio', component: InicioComponent},
  { path: 'Equipos/listado', component: ListadoComponent},
  { path: 'producto', component: ProductoComponent},
  { path: 'pedido', component: PedidoComponent},
  { path: 'comparativo', component: ComparativoComponent},
  { path: 'dashboard', component:DashboardComponent},
  { path: 'roles', component: RolesComponent},
  { path: 'compra', component: CompraComponent},
  { path: 'Equipos/crear', component: CrearProductoComponent},
  { path: 'Equipos/editar/:id', component: EditarProductoComponent},
  { path: 'Equipos/buscar', component: FiltroProductoComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
