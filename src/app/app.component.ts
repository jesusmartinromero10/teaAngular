import { Component, inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { HttpClient } from '@angular/common/http';
import { UserInfoResponse, UserInfoService } from './services/user-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tea-minder';
  authService: AuthService = inject(AuthService);
  userName = "";
  private userInfoService: UserInfoService=inject(UserInfoService);
  chistes!: string;

  chiste(){
    this.userInfoService.getUserInfo().subscribe({
      next:(res:string)=>{
        console.log('aaaa', res)
        this.chistes = res
      }
    });
  }
  constructor(){
    this.authService.user$.subscribe({
      next:(value:string) =>{
        console.log('authService', value)
        this.userName = value
      }
    })
  }
  
}
