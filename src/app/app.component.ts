import { Component, OnInit } from '@angular/core';
import { GetUserService } from './getUser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  user: any;
  constructor(private getUserservice: GetUserService) {}

  ngOnInit() {
    this.getUserservice.getUser().subscribe((user) => {
      this.user = user;
      console.log('this.user', this.user);
    });
  }
}
