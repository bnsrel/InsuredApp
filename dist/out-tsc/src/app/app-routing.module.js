import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { ViewAllUsersComponent } from './components/users/view-all-users/view-all-users.component';
import { LoginComponent } from './components/users/login/login.component';
var routes = [
    { path: 'addUser', component: AddUserComponent },
    { path: 'getAllUsers', component: ViewAllUsersComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map