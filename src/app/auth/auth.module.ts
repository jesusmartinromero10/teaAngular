import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes:Routes = [
  {
    path: 'login',
    component:LoginComponent

  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'**',
    component:LoginComponent
  }
]
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
