import { Component } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  myForm : FormGroup;

  constructor(){
    this.myForm= new FormGroup({
      email: new FormControl("",[Validators.email, Validators.minLength(8), Validators.required]),
      texto: new FormControl("",[Validators.minLength(2)]),
      password: new FormControl("", [Validators.minLength(8), Validators.required])

    })

  }

  sendForm(){
    if(this.myForm.valid){

      console.log(this.myForm.value)
    }
  }

}
