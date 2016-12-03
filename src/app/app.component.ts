import { Component } from '@angular/core';

import { Http } from '@angular/http';

import { profinal } from './model/final.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pruebasList:Array<profinal> =new Array<profinal>();

  constructor(private http:Http){

  }

  listarPruebas(){
    this.http
    .get("http://stiven-web2.net16.net/Electiva2ProFinal/test.php")
    .subscribe((response)=>{
      this.pruebasList = response.json();
      console.log(this.pruebasList);
      let modalPruebas = document.getElementById("modal_listado_pruebas");
      modalPruebas.style.visibility = "visible";
    });
  }
  
}
