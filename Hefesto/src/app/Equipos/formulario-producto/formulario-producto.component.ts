import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { letraCapital } from 'src/app/utilidades/validadores/letraCapital';
import { equiposCreacionDTO } from '../equipos';

@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.scss']
})
export class FormularioProductoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup | any;

  @Input()
  errores: string[] = [];
  
  @Input()
  modelo: equiposCreacionDTO | any;
  @Output()
  onSubmit: EventEmitter<equiposCreacionDTO> = new EventEmitter<equiposCreacionDTO>();

  tipos = [
    {tip_codigo: 1, tipo_descripcion: 'ESCRITORIO'}, 
    {tip_codigo: 2, tipo_descripcion: 'IMPRESORA'}, 
    {tip_codigo: 3, tipo_descripcion: 'MONITOR'}, 
    {tip_codigo: 4, tipo_descripcion: 'LAPTOP'}];
  
  tipos_disco = [
    {id: 1, tipo: 'HDD'},
    {id: 2, tipo: 'SSD'}];

  rams =[
    {id: 1, tipo: 'DDR3'},
    {id: 2, tipo: 'DD3'},
    {id: 3, tipo: 'DDR4'}
  ]

  edificios = [
    {id: 1, tipo: 'ANTIGUO' },
    {id: 2, tipo: 'AMPLIACION'}];

  pisos = [
    {id: 1, tipo: 'S1'},
    {id: 2, tipo: 'PB'},
    {id: 3, tipo: 'P1'},
    {id: 4, tipo: 'P2'},
    {id: 5, tipo: 'P3'},
    {id: 6, tipo: 'P4'}
  ]

  areas = [
    {id: 1, tipo: 'SISTEMAS'},
    {id: 2, tipo: 'QUIROFANO'},
    {id: 3, tipo: 'TALENTO HUMANO'},
    {id: 4, tipo: 'MUSHUÑAN'},
    {id: 5, tipo: 'MATENIMIENTO'},
    {id: 6, tipo: 'LABORATORIO'},
    {id: 7, tipo: 'ADMINISTRATIVA'}
  ]
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      marca: ['', {
        validators: [Validators.required, Validators.minLength(2), letraCapital()]
      }],
      fecha: ['', {
        validators: [Validators.required]
      }],
      // equipo_tipo: ['', {
      //   validators: [Validators.required]}],
      model: ['', {
        validators: [Validators.required]
      }],
      serie:['', {
        validators: [Validators.required]
      }],
      codActivo: ['',{
        validators: [Validators.required]
      }],
      cpu: '',
      generacion: '',
      nucleos: '',
      asignado: '',
      uso: '',
      user_win: '',
      win_con: '',
      nombre_producto: '',
      ip: '',
      anydesk: '',
      anydesk_con: '',
      so: '',
      office: '',
      fileserver: '',
      // ram:'',
      // ram_tipo:'',
      // capacidad: '',
      // disco_tipo :'',
      // edificio_tipo: ['', {
      //   validators: [Validators.required]
      // }],
      // piso_tipo: ['', {
      //   validators: [Validators.required]
      // }],
      // area_tipo: ['', {
      //   validators: [Validators.required]
      // }],
      antivirus: false,
    });
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }
  guardarCambios(){
    this.onSubmit.emit(this.form.value);
  }
  Cancelar(){

  }
  obtenerErrorCampoMarca(){
    var campo = this.form.get('marca');
    if(campo.hasError('required')){
      return 'El campo marca es requerido'
    }
    if(campo.hasError('minlength')){
      return 'Minimo son 2 caracteres'
    }
    if(campo.hasError('letraCapital')){
      return campo.getError('letraCapital').mensaje;
    }
    return '';
  }

  onlyNumber(event: any){
    var codigo = (event.which)?event.which: event.keyCode;
    if(codigo < 48 || codigo > 57){
      event.preventDefault();
      return false;
    }
    else{
      return true;
    }
  }
  onsubmit(){
    this.onSubmit.emit(this.form.value);
  }
}
