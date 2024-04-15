import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: BehaviorSubject<string> = new BehaviorSubject<string>('no user');
  public user$ = this.user.asObservable();

  constructor() { }
  login(email: string, password: string): void {
   
    this.user.next(email);
  }
}
