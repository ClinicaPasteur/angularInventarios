import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [],
  exports: [
    MatToolbarModule
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class MaterialModule { }
