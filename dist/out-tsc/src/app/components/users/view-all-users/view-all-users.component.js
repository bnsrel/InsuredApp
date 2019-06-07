import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MyServerService } from '../../../services/my-server.service';
var ViewAllUsersComponent = /** @class */ (function () {
    function ViewAllUsersComponent(server) {
        this.server = server;
        this.users = [];
    }
    ViewAllUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.server.getAllUsers().subscribe(function (data) {
            //console.log(data);
            _this.users = data;
        });
    };
    ViewAllUsersComponent = tslib_1.__decorate([
        Component({
            selector: 'app-view-all-users',
            templateUrl: './view-all-users.component.html',
            styleUrls: ['./view-all-users.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [MyServerService])
    ], ViewAllUsersComponent);
    return ViewAllUsersComponent;
}());
export { ViewAllUsersComponent };
//# sourceMappingURL=view-all-users.component.js.map