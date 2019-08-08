import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { AppSettings } from '../app.settings';
var webSite = AppSettings.APIURL;
var AppServiceManager = /** @class */ (function () {
    function AppServiceManager(httpClient) {
        this.httpClient = httpClient;
    }
    AppServiceManager.prototype.getAllActive = function () {
        return this.httpClient.get(webSite + '/product');
    };
    AppServiceManager.prototype.getHeaders = function (method) {
        var headers = new HttpHeaders()
            .append('Access-Control-Allow-Origin', '*')
            .append('Access-Control-Allow-Methods', method);
        return headers;
    };
    AppServiceManager = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], AppServiceManager);
    return AppServiceManager;
}());
export { AppServiceManager };
//# sourceMappingURL=rest.app.js.map