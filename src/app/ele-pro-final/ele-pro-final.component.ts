import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';

import { profinal } from '../model/final.model';
@Component({
  selector: 'ele-pro-final',
  templateUrl: './ele-pro-final.component.html',
  styleUrls: ['./ele-pro-final.component.css']
})
export class EleProFinalComponent implements OnInit {
  
  private prestamoACrear:profinal;

  constructor(private http:Http) {
    this.prestamoACrear = new profinal();
   }

  ngOnInit() {
  }


  public guardarPrestamo()
  {
    this.http.post(
      "http://stiven-web2.net16.net/Electiva2ProFinal/test.php",
      this.prestamoACrear
    ).subscribe((response)=>{
      let respuesta = response.json();
      if(respuesta.resultado == 1){
        alert('Prestamo guardado con éxito');
      }      
      else{
        alert("Hubo un error al guardar el prestamo");
      }
    });

      
  }

}
