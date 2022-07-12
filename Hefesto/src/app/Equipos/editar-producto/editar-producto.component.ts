import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { equiposCreacionDTO } from '../equipos';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
})
export class EditarProductoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  modelo: equiposCreacionDTO = {PRO_ID: 4, PRO_FECHA_INGRESO: new Date(), PRO_MARCA: 'Hp', PRO_MODELO: 'ALL-IN-ONE 22-B009LA',
          PRO_SERIAL: '8CC6431JGQ', PRO_COD_ACTIVO: '(8004)2000008215', 
          PRO_CPU: 'INTEL CORE I3', PRO_GEN: "6", PRO_NUC: "2",
          PRO_ASIGNADO: "Edgar Ramos", PRO_USO: "Normal", PRO_USER_WIN: "PROSISTEMAS", PRO_WIN_CON: "S/C", 
          PRO_NOMBRE_PRODUCTO: "xEDGARx", PRO_DIRECCION_IP: "192.168.0.112", PRO_ANYDESK: "pro-sistemas@ad",
          PRO_CON_ANYDESK: "clinica", PRO_SO: "WINDOWS 11 PRO", PRO_OFFICE: "365", PRO_FILESERVER: "SISTEMAS", 
          PRO_ANTIVIRUS: false
        };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      // alert(params['id']);
    })
  }
  guardarCambios(equipo: equiposCreacionDTO){
    console.log(equipo);
    this.router.navigate(['Equipos/listado']);
  }
}
