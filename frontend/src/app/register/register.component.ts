import { FormsModule, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form;

  constructor(private fb: FormBuilder, private auth: AuthService ) {
    this.form = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  register(formValue) {
    console.log(formValue);
    this.auth.register(formValue);
    console.log(this.form);

  }

  ngOnInit() {
  }

}
