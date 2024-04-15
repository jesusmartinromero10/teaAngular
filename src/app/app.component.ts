import { Component, inject } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tea-minder';
  authService: AuthService = inject(AuthService);
  userName = "";

  constructor(){
    this.authService.user$.subscribe({
      next:(value:string) =>{
        console.log('authService', value)
        this.userName = value
      }
    })
  }
}
