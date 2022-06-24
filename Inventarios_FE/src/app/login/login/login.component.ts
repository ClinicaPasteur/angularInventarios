import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  // AQUI DEFINIRESEMOS LA TEMANTICA DE NUESTA IMAGEN DE FONDO
  styleImage = 'medical';
  form: FormGroup | any;

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): any{
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  unsplashClass():any {
    return{
      'min-height': '100%',
      //LLAMARA ALEATOREAMENTE AL SERVICIO DE IMAGENES DE UNSPLASH -CON IMAGENES DE TAMANIO 1200X900
      //SE LE AGREGA LA VARIABLE DE styleUrls PARA ESTABLECER LA TEMATICA
      background: `url("https://source.unsplash.com/random/1200X900?"${this.styleImage}) no-repeat center center`,
      'background-size': 'cover',
      position: 'relative',
    };
  }

  login(event: Event):any{
    event.preventDefault();
    if(this.form.valid){
      const value = this.form.value;
      console.log(`'%c'USER: ${value.email} - PASSWORD: ${value.password}`, 'background: #222; color: #bada55');
    }
  }
}
