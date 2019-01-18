import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }

  `]
})
export class TemplateComponent  {

  usuario:Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: null,
    genero: null,
    acepto: false
  }

  generos:string[] = ["Masculino","Femenino","Otro"]

  paises = [{
    codigo: "CRI",
    nombre: "Costa Rica"
  },
  {
    codigo: "ARG",
    nombre: "Argentina"
  },
  {
    codigo: "COL",
    nombre: "Colombia"
  },
  {
    codigo: "CUB",
    nombre: "Cuba"
  },
  {
    codigo: "URS",
    nombre: "Union Sovietica"
  },
  {
    codigo: "VEN",
    nombre: "Venezuela"
  },
  {
    codigo: "BRA",
    nombre: "Brasil"
  },
  {
    codigo: "MEX",
    nombre: "Mexico"
  },
  {
    codigo: "ESP",
    nombre: "España"
  },
  {
    codigo: "POR",
    nombre: "Portugal"
  },
  {
    codigo: "ITA",
    nombre: "Italia"
  },
  {
    codigo: "FRA",
    nombre: "Francia"
  },
  {
    codigo: "ALE",
    nombre: "Alemania"
  },
]

  constructor() { }

  

  guardar( forma:NgForm){
    
    console.log(" NgForm ",forma);
    console.log("Valor forma", forma.value);

    console.log("Usuario", this.usuario);
  }
}
