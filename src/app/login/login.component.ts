import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick() {
    if(this.username == 'Alsabila' && this.password == 'testing') {
      this.router.navigate(['table']);
    } else {
      alert('Wrong username or password');
    }
  }

}
