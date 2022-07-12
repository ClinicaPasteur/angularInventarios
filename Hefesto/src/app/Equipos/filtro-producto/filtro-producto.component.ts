import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-producto',
  templateUrl: './filtro-producto.component.html',
  styleUrls: ['./filtro-producto.component.scss']
})
export class FiltroProductoComponent implements OnInit {

  constructor(private formbuilder: FormBuilder,
    private location: Location,
    private activatedRoute: ActivatedRoute) { }

  form : FormGroup |  any;

  tipos = [
    {id: 1, tipo: 'ESCRITORIO'}, 
    {id: 2, tipo: 'IMPRESORA'}, 
    {id: 3, tipo: 'MONITOR'}, 
    {id: 4, tipo: 'LAPTOP'}];

    equipos = [
      { marca : 'Hp', serial: '8CC6431JGQ', model: 'ALL-IN-ONE 22-B009LA', codigo: 1 },
      { marca : 'ACER', serial: '8CC6431JGQ123', model: 'B009LA', codigo: 2 }
    ]

    equiposOriginales = this.equipos;

    formularioOriginal = {
      marca: '',
      serial: '',
      model: '', 
      codigo: 0
    };

  ngOnInit(): void {
    this.form = this.formbuilder.group(this.formularioOriginal);
    this.leerValoresURL();
    this.buscarEquipos(this.form.value);

    this.form.valueChanges
    .subscribe((valores: any) => {
      this.equipos = this.equiposOriginales;
      this.buscarEquipos(valores);
      this.escribirParametroBusquedaURL();
    })
  }
  limpiar(){
    this.form.patchValue(this.formularioOriginal);
  }

  private leerValoresURL(){
    this.activatedRoute.queryParams.subscribe((params) => {
      var objecto: any = {};
      if(params['marca']){
        objecto.marca = params['marca'];
      }

      if(params['codigo']){
        objecto.codigo = Number(params['codigo']);
      }

      this.form.patchValue(objecto);
    })
  }
  private escribirParametroBusquedaURL(){
    var query = [];
    var valoresFormularios = this.form.value;

    //ESTO ME AYUDA MOSTRAR EN LA URL DEPENDIENDO DE EL TIPO DE FILTRO APLICADOS.
    if(valoresFormularios.marca){
      query.push(`marca=${valoresFormularios.marca}`);
    }
    if(valoresFormularios.codigo !== 0){
      query.push(`codigo=${valoresFormularios.codigo}`);
    }

    this.location.replaceState('Equipos/buscar', query.join('&'));
  }
  buscarEquipos(valores: any){
    if(valores.marca){
      this.equipos = this.equipos.filter(equipo => equipo.marca.indexOf(valores.marca) !== -1);
    }
  }
}
