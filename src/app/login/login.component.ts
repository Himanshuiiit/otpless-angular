import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetUserService } from '../getUser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any;
  constructor(private getUserservice: GetUserService, private router : Router) {}

  ngOnInit() {
    //@ts-ignore
    window.otpless = (otplessUser) => {
      this.getUserservice.setUser(otplessUser);
      this.router.navigate(['/home'], { queryParams: { userNumber: otplessUser.waNumber } });
    };
  }

}
