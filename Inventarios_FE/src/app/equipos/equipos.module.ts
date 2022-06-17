import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoEquiposComponent } from './listado-equipos/listado-equipos.component';



@NgModule({
  declarations: [
    ListadoEquiposComponent
  ],
  exports: [
    ListadoEquiposComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EquiposModule { }
