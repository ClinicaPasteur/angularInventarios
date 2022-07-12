import { Component, OnInit } from '@angular/core';
import { EquiposService } from '../equipos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
})
export class ProductoComponent implements OnInit {

  constructor(private equipoService: EquiposService) { }

  ngOnInit(): void {
    this.equipoService.obtenerTodos()
    .subscribe(equipos => {
      console.log(equipos);
    }, error => console.error(error));
  }

}
