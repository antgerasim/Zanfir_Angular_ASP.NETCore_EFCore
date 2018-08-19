import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  isAuthenticated() {
    //debugger;
    this.auth.isAuthenticated;
  }

  logout() {
    this.auth.logout();
  }

}
