import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  user = {
    loggedIn: true,
    name: 'brighamband',
  };

  logOut() {
    this.user.loggedIn = false;
    this.user.name = 'N/A';
  }
}
