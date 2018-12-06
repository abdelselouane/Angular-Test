import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../services/users.service';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { DialogComponent} from '../dialog/dialog.component';

export interface User {
  id: string;
  email: string;
  firstname: string;
  lastname: string;
  profession: string;
  dob: string;
}

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  title: string = 'User Management';
  displayedColumns: string[] = ['id', 'email', 'firstname', 'lastname', 'profession', 'dob', 'actions'];
  users:any = [];
  showAlert: boolean = false;
  bgColor: string = '#F8F8FF';

  constructor(
    private  usersService:  UsersService,
    private dialog: MatDialog) { }

  openDialog(item) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '400px';
      dialogConfig.height = '600px';
      dialogConfig.data = item;
      const dialogRef = this.dialog.open(DialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed', result);
        if(result.message === "success"){
          this.showAlert = true;
        }
      });
  }


  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.usersService.getUsers().subscribe((data:  Array<object>) => {
      this.users = data;
    });
  }

  editUser(id) {
    const item = this.users.filter(user => user.id === id);
    this.openDialog(item[0]);
  }

  deleteUser(id) {
    if(confirm("Are you sure you want to delete this user?")){
      this.usersService.deleteUser(id).subscribe((response) => {
        if(response.status === 200){
          this.users = this.users.filter((user) => id !== user.id);
        } else {
          throw Error('Sorry we can process your request a this moment...');
        }
      });
      this.showAlert = true;
    }
  }

}

