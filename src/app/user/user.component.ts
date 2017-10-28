import { UserModel } from './../model/user.model';
import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  private users: Array<UserModel>;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.userService.getUsers().subscribe(res => {
      this.users = res;      
    });
  }

}
