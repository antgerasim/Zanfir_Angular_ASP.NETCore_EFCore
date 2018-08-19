import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form;

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.form = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(formValue) {
    console.log(formValue);
    this.auth.login(formValue);
    console.log(this.form);

  }

  ngOnInit() {
  }

}
