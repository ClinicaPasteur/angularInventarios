import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  faFloppyDisk = faFloppyDisk;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  Nuevo(){
    this.router.navigate(['Equipos/crear']);
  }
}
