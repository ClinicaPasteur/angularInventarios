import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { equiposCreacionDTO } from '../equipos';
import { EquiposService } from '../equipos.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.scss']
})
export class CrearProductoComponent  {

  errores :string[] = [];
  faMundo = faEarthAmericas;
  constructor(private router: Router, private equipoService: EquiposService) { }

  guardarCambios(equipo: equiposCreacionDTO){
    this.equipoService.crear(equipo).subscribe(() =>
    {
      this.router.navigate(['Equipos/listado']);
    },
    (error) => this.errores = parsearErroresAPI(error));
  }
  
  Cancelar(){
    this.router.navigate(['Equipos/listado']);
  }
}
