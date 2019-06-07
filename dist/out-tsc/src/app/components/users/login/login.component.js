import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { MyServerService } from '../../../services/my-server.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(server, route, dialog) {
        this.server = server;
        this.route = route;
        this.dialog = dialog;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        var _this = this;
        // const dialogRef = this.dialog.open(LoginDialogComponent, {
        //   width: '500px'
        // });
        // if (5 < 6) {
        //   return;
        // }
        this.server.login(this.userName, this.password).subscribe(function (data) {
            if (data) {
                //goto home
                _this.route.navigate(['/addUser']);
            }
        }, function (err) {
            console.log(err);
            alert('try again');
        });
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [MyServerService,
            Router,
            MatDialog])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
var LoginDialogComponent = /** @class */ (function () {
    function LoginDialogComponent(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
    }
    LoginDialogComponent.prototype.ngOnInit = function () { };
    LoginDialogComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login-dialog',
            templateUrl: './loginDialog.html'
        }),
        tslib_1.__param(0, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [Object, MatDialogRef])
    ], LoginDialogComponent);
    return LoginDialogComponent;
}());
export { LoginDialogComponent };
//# sourceMappingURL=login.component.js.map