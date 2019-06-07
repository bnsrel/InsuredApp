import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyServerService } from '../../../services/my-server.service';
var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(http, server) {
        this.http = http;
        this.server = server;
        console.log(this.server);
    }
    AddUserComponent.prototype.ngOnInit = function () { };
    // without service
    // add() {
    //   this.http
    //     .post('http://localhost:8080/api/users/registerUser', {
    //       firstName: this.firstName,
    //       lastName: this.lastName
    //     })
    //     .subscribe(
    //       data => {
    //         console.log(data);
    //       },
    //       err => {
    //         console.log(err);
    //       }
    //     );
    //   console.log(this.firstName);
    // }
    AddUserComponent.prototype.add = function () {
        this.server
            .addUser({
            firstName: this.firstName,
            lastName: this.lastName
        })
            .subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
        console.log(this.firstName);
    };
    AddUserComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-user',
            templateUrl: './add-user.component.html',
            styleUrls: ['./add-user.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, MyServerService])
    ], AddUserComponent);
    return AddUserComponent;
}());
export { AddUserComponent };
//# sourceMappingURL=add-user.component.js.map