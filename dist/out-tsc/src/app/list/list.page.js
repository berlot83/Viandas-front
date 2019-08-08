import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var ListPage = /** @class */ (function () {
    function ListPage() {
        this.icons = [
            'pizza',
            'wine',
            'beer',
            'ice-cream',
            'pint',
            'nutrition',
        ];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Producto ' + i,
                note: '$ ' + Math.round(i * Math.random() + Math.random() + Math.random() * Math.random()).toFixed(2),
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.ngOnInit = function () {
    };
    ListPage = tslib_1.__decorate([
        Component({
            selector: 'app-list',
            templateUrl: 'list.page.html',
            styleUrls: ['list.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ListPage);
    return ListPage;
}());
export { ListPage };
//# sourceMappingURL=list.page.js.map