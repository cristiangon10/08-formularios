import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  forma: FormGroup;

  usuario: any = {
    nombreCompleto: {
      nombre: "Cristian",
      apellido: "Gonzalez"
    },
    correo: "crisgonza2903@gmail.com"
  }

  constructor() {

    console.log(this.usuario);

    this.forma = new FormGroup({
      'nombreCompleto': new FormGroup({
        'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
        'apellido': new FormControl('', [Validators.required, Validators.minLength(3), this.noSuMadre])
      }),
      'correo': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'pasatiempos': new FormArray([
        new FormControl('', Validators.required)
      ]),
      'username': new FormControl('', Validators.required, this.usuarioExistente),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl('', Validators.required)
    })

    this.forma.controls['password2'].setValidators([
      Validators.required, this.contraseñasRepetidas.bind(this.forma)
    ])
    // Seteo de data
    // this.forma.setValue(this.usuario);

    this.forma.controls['username'].valueChanges.subscribe(data => { console.log(data); })
    this.forma.controls['username'].statusChanges.subscribe(data => { console.log(data); })
    
  }

  guardarCambios() {
    console.log(this.forma.value);
    console.log(this.forma);

    //  restauracion de capos de informacion
    this.forma.reset({
      nombreCompleto: {
        nombre: "",
        apellido: ""
      },
      correo: ""
    });
  }

  noSuMadre(control: FormControl): { [s: string]: boolean } {
    if (control.value === "Su Madre") {
      return {
        noSuMadre: true
      }
    }
    return null;
  }

  contraseñasRepetidas(control: FormControl): { [s: string]: boolean } {
    let forma: any = this;
    if (control.value !== forma.controls['password1'].value) {
      return {
        contraseñasRepetidas: true
      }
    }
    return null;
  }

  usuarioExistente(control: FormControl): Promise<any> | Observable<any> {
    let promesa = new Promise(
      (resolve, reject) => {

        setTimeout(() => {
          if (control.value === "su madre") {
            resolve({ existe: true })
          } else {
            resolve(null)
          }
        }, 3000)
      }
    )

    return promesa;
  }


  agregarPasatiempo() {
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    )
  }

}

// this.usuario.nombreCompleto.nombre
// this.usuario.nombreCompleto.apellido
// this.usuario.correo