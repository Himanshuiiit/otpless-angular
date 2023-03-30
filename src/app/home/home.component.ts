import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetUserService } from '../getUser.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userNumber: string | undefined;
  user: any;
  constructor(private getUserService : GetUserService,private route: ActivatedRoute, private router : Router) {}

  ngOnInit() {
    this.userNumber = this.route.snapshot.queryParams['userNumber'];
    if(!this.userNumber) {
      this.router.navigate(['/']);
    }
    this.getUserService.getUser(this.userNumber).subscribe((data) => {
      this.user = data[0];
    });
  }
}
