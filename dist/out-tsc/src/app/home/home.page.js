import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormArray } from '@angular/forms';
import { AppServiceManager } from '../services/rest.app';
var HomePage = /** @class */ (function () {
    function HomePage(productServiceManager, formBuilder) {
        var _this = this;
        this.productServiceManager = productServiceManager;
        this.formBuilder = formBuilder;
        this.form = this.formBuilder.group({
            orders: new FormArray([])
        });
        this.productServiceManager.getAllActive().subscribe(function (listProducts) {
            _this.orders = listProducts;
            _this.orders.map(function (o, i) {
                var control = new FormControl(); // if first item set to true, else false
                _this.form.controls.orders.push(control);
            });
        });
    }
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.submit = function () {
        var _this = this;
        var selected = this.form.value.orders
            .map(function (value, index) { return (value ? _this.orders[index] : null); })
            .filter(function (value) { return value !== null; });
        console.log('Selected: ', selected);
        console.log('Form value: ', this.form.value);
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AppServiceManager, FormBuilder])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map