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
  pruebasNombre:Array<profinal> =new Array<profinal>();
  pruebasCedula:Array<profinal> =new Array<profinal>();
  pruebasNaturaleza:Array<profinal> =new Array<profinal>();

  private busqueda:string;
  private busqueda1:number;
  private busqueda3:string;

  constructor(private http:Http){

  }

  listarPruebas(){
    this.http
    .get("http://stiven-web2.net16.net/Electiva2ProFinal/test.php?nombre="+this.busqueda)
    .subscribe((response)=>{
      this.pruebasNombre = response.json();
      console.log(this.pruebasNombre);
      let listarP = document.getElementById("nombre");
      
    });
  } 

  listarCedula(){
    this.http
    .get("http://stiven-web2.net16.net/Electiva2ProFinal/cedula.php?cedula="+this.busqueda1)
    .subscribe((response)=>{
      this.pruebasCedula = response.json();
      console.log(this.pruebasCedula);
      let listarC = document.getElementById("cedula");
      
    });
  } 

   listarNaturaleza(){
    this.http
    .get("http://stiven-web2.net16.net/Electiva2ProFinal/naturaleza.php?naturaleza="+this.busqueda3)
    .subscribe((response)=>{
      this.pruebasNaturaleza = response.json();
      console.log(this.pruebasNaturaleza);
      let listarN = document.getElementById("naturaleza");
    });
  } 

  listartodo(){
    this.http
    .get("http://stiven-web2.net16.net/Electiva2ProFinal/todo.php")
    .subscribe((response)=>{
      this.pruebasList = response.json();
      console.log(this.pruebasList);
      let listarT = document.getElementById("listarT");
    });
  } 
}
