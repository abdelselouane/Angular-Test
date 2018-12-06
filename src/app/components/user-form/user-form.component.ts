import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(private  usersService: UsersService,
              private router: Router) { }

  ngOnInit() {
  }

  model: any = {};

  onSubmit() {
    this.createUser(this.model)
  }

  public createUser(body){
    this.usersService.createUser(body).subscribe(res => {
      this.router.navigate(['/users'])
    }, error => console.log(`There was an error: ${error}`));
  }

}
