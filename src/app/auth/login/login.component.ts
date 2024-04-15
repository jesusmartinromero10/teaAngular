import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private authService: AuthService = inject(AuthService)
  myForm:FormGroup;

  constructor(){
    this.myForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password : new FormControl("", [Validators.required])
    })
  }
  sendForm(){
    if(this.myForm.valid){
      this.authService.login(this.myForm.value.email, this.myForm.value.password)

      console.log(this.myForm.value)
    }
  }
}
