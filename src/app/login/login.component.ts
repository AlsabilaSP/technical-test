import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    if(this.username == 'Alsabila' && this.password == 'testing') {

    } else {
      alert('Wrong username or password');
    }
  }

}
