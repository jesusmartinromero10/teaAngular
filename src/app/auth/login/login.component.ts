import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  myForm:FormGroup;

  constructor(){
    this.myForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password : new FormControl("", [Validators.required])
    })
  }
  sendForm(){
    if(this.myForm.valid){

      console.log(this.myForm.value)
    }
  }
}
