import { Component } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { noToledoValidator } from '../utils/validators';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  formulariocontacto: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formulariocontacto = this.formBuilder.group({
      name: [''],
      lastname: ['',noToledoValidator],
      email: ['',Validators.email],
      codigopostal: [null],
      username: [''],
      ciudad: [''],
      provincia: [''],
      contraseña: [""] 
    });
  }
get emailcontrol (){
  return this.formulariocontacto.get("email")
}
get nombrecontrol (){
  return this.formulariocontacto.get("name")
}
get apellidocontrol (){
  return this.formulariocontacto.get("lastname")
}
get codigopostalcontrol (){
  return this.formulariocontacto.get("codigopostal")
}
get usernamecontrol (){
  return this.formulariocontacto.get("username")
}
get ciudadcontrol (){
  return this.formulariocontacto.get("ciudad")
}
get provinciacontrol (){
  return this.formulariocontacto.get("provincia")
}
get contrasenacontrol (){
  return this.formulariocontacto.get("contraseña")
}

  onsubmit():void {
    alert("registro completado"+ JSON.stringify(this.formulariocontacto.value))

  }
}