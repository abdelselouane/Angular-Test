import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { UsersService } from './../../services/users.service';
import { Router } from '@angular/router';

@Component({
    selector: 'edit-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

    title: string;
    model: any = {};
    @Input() showAlert: boolean = false;


    constructor(
        private  usersService: UsersService,
        private router: Router,
        private dialogRef: MatDialogRef<DialogComponent>,
        @Inject(MAT_DIALOG_DATA) data) {
            this.model = data;

    }

    ngOnInit() {
        this.title = 'Edit User';
    }

    onSubmit() {
        this.updateUser(this.model);
        this.dialogRef.close({
            message: 'success'
        });
    }

    close(msg = '') {
        this.dialogRef.close({
            message: msg
        });
    }
  
    updateUser(body){
        this.usersService.updateUser(body).subscribe(res => {
          //this.router.navigate(['/users'])
        }, error => console.log(`There was an error: ${error}`));
    }
}