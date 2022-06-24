import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './Equipos/listado/listado.component';
import { ProductoComponent } from './Equipos/producto/producto.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './Seguridad/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'inicio', component: InicioComponent},
  { path: 'listado', component: ListadoComponent},
  { path: 'producto', component: ProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
