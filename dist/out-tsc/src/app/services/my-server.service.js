import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var MyServerService = /** @class */ (function () {
    function MyServerService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/api/users/';
    }
    MyServerService.prototype.addUser = function (data) {
        return this.http.post(this.baseUrl + 'registerUser', data);
    };
    MyServerService.prototype.getAllUsers = function () {
        return this.http.get(this.baseUrl + 'getAllUsers');
    };
    MyServerService.prototype.login = function (userName, password) {
        return this.http.post(this.baseUrl + 'login', {
            userName: userName,
            password: password
        });
    };
    MyServerService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], MyServerService);
    return MyServerService;
}());
export { MyServerService };
//# sourceMappingURL=my-server.service.js.map