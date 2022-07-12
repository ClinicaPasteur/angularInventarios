import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-autocomplete-equipos',
  templateUrl: './autocomplete-equipos.component.html',
  styleUrls: ['./autocomplete-equipos.component.scss']
})
export class AutocompleteEquiposComponent implements OnInit {

  constructor() { }
  control: FormControl = new FormControl();
  areas = [
    {id: 1, tipo: 'SISTEMAS'},
    {id: 2, tipo: 'QUIROFANO'},
    {id: 3, tipo: 'TALENTO HUMANO'},
    {id: 4, tipo: 'MUSHUÑAN'},
    {id: 5, tipo: 'MANTENIMIENTO'},
    {id: 6, tipo: 'LABORATORIO'},
    {id: 7, tipo: 'ADMINISTRATIVA'}]

  areasOriginal = this.areas;
  ngOnInit(): void {
    this.control.valueChanges.subscribe(valor => {
      valor = valor.toUpperCase();
      this.areas = this.areasOriginal;
      this.areas = this.areas.filter(ar => ar.tipo.indexOf(valor) !== -1);
    })
  }

  optionSelected(event: MatAutocompleteSelectedEvent){
    console.log(event.option.value);
  }

}
