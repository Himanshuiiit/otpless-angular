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
    this.getUserservice.getUser().subscribe((user) => {
      this.user = user;
      if(this.user!=undefined){
        this.router.navigate(['/home']);
      }
      console.log('this.user', this.user);
    });
  }

}
