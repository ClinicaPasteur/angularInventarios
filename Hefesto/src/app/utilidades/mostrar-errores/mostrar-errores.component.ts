import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-errores',
  templateUrl: './mostrar-errores.component.html',
})
export class MostrarErroresComponent implements OnInit {

  @Input()
  errores: string[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
