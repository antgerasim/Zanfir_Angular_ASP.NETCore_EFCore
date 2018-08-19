import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  get isAuthenticated() {
    return !!localStorage.getItem('token'); //!! gives (bool) true if it does exist, since its a double negative
  }


  register(credentials) {
    return this.http.post<any>('http://localhost:55981/api/account', credentials).subscribe(res => {
      this.authenticate(res);
    });
  }

  login(credentials) {
    return this.http.post<any>('http://localhost:55981/api/account/login', credentials).subscribe(res => {
      this.authenticate(res);
    });
  }

  authenticate(res: any) {
    localStorage.setItem('token', res);
    this.router.navigate(['/']);
  }

  logout() {
    localStorage.removeItem('token');
  }

}
