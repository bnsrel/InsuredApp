import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Inject
} from '@angular/core';
import { MyServerService } from '../../../services/my-server.service';
import { Router } from '@angular/router';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  constructor(
    private server: MyServerService,
    private route: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {}

  login() {
    // const dialogRef = this.dialog.open(LoginDialogComponent, {
    //   width: '500px'
    // });
    // if (5 < 6) {
    //   return;
    // }
    this.server.login(this.userName, this.password).subscribe(
      data => {
        if (data) {
          //goto home
          this.route.navigate(['/addUser']);
        }
      },
      err => {
        console.log(err);
        alert('try again');
      }
    );
  }
}

@Component({
  selector: 'app-login-dialog',
  templateUrl: './loginDialog.html'
})
export class LoginDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<LoginDialogComponent>
  ) {}

  ngOnInit() {}
}
