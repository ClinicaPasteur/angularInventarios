import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faComputer } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
})
export class InicioComponent implements OnInit {

  faComputer = faComputer;
  
  opciones:string[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  VerEquipos(){
    this.router.navigate(['Equipos/listado'])
  }
}
