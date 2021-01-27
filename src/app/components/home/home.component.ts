import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  text = 'home page';
  quoteText = 'this text is meant to be quoted';
  users;

  constructor(private usersService: UserService) { }

  ngOnInit(): void {
    this.usersService.all().subscribe(res => {
      this.users = res;
    });
  }

}
