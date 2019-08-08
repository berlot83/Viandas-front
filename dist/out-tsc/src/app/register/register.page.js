import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
    }
    RegisterPage.prototype.ngOnInit = function () {
        this.user_form = this.formBuilder.group({
            email: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new FormControl('', Validators.compose([
                Validators.minLength(5),
                Validators.required,
                Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
            ])),
            passwordValidator: new FormControl('', Validators.compose([
                Validators.minLength(5),
                Validators.required,
                Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
            ])),
            name: new FormControl('', Validators.compose([
                Validators.maxLength(25),
                Validators.minLength(5),
                Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
                Validators.required
            ])),
            lastname: new FormControl('', Validators.compose([
                Validators.maxLength(25),
                Validators.minLength(5),
                Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
                Validators.required
            ])),
            phone: new FormControl('', Validators.compose([
                Validators.required,
            ])),
            alternativePhone: new FormControl(),
            address: new FormControl('', Validators.compose([
                Validators.required,
            ])),
            number: new FormControl('', Validators.compose([
                Validators.required,
            ])),
            floor: new FormControl(),
            office: new FormControl(),
            addressOne: new FormControl('', Validators.compose([
                Validators.required,
            ])),
            addressTwo: new FormControl('', Validators.compose([
                Validators.required,
            ])),
            terms: new FormControl(true, Validators.pattern('true'))
        });
    };
    RegisterPage.prototype.onSubmit = function (values) {
        console.log(values);
        this.router.navigate(["/home"]);
    };
    RegisterPage = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.page.html',
            styleUrls: ['./register.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            Router])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.page.js.map