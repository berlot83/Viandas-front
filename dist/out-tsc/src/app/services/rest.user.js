import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { AppSettings } from '../app.settings';
var webSite = AppSettings.APIURL;
var UserServiceManager = /** @class */ (function () {
    function UserServiceManager(httpClient) {
        this.httpClient = httpClient;
    }
    UserServiceManager.prototype.setUser = function (user) { this.user = user; };
    UserServiceManager.prototype.getUser = function () { return this.user; };
    UserServiceManager = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], UserServiceManager);
    return UserServiceManager;
}());
export { UserServiceManager };
//# sourceMappingURL=rest.user.js.map