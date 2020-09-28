(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-delete-user-delete-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-delete/user-delete.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-delete/user-delete.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>userDelete</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngIf=\"user\">\n\n    <ion-card-header>\n      <ion-card-title color=\"danger\">\n        Are you sure you want to delete {{user.username}}?\n      </ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-button color=\"danger\" expand=\"full\" (click)=\"deleteUser(user._id)\">\n        Delete {{user.username}}\n      </ion-button>\n    </ion-card-content>\n\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/user-delete/user-delete-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/user-delete/user-delete-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: UserDeletePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDeletePageRoutingModule", function() { return UserDeletePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_delete_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-delete.page */ "./src/app/user-delete/user-delete.page.ts");




const routes = [
    {
        path: '',
        component: _user_delete_page__WEBPACK_IMPORTED_MODULE_3__["UserDeletePage"]
    }
];
let UserDeletePageRoutingModule = class UserDeletePageRoutingModule {
};
UserDeletePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserDeletePageRoutingModule);



/***/ }),

/***/ "./src/app/user-delete/user-delete.module.ts":
/*!***************************************************!*\
  !*** ./src/app/user-delete/user-delete.module.ts ***!
  \***************************************************/
/*! exports provided: UserDeletePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDeletePageModule", function() { return UserDeletePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _user_delete_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-delete-routing.module */ "./src/app/user-delete/user-delete-routing.module.ts");
/* harmony import */ var _user_delete_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-delete.page */ "./src/app/user-delete/user-delete.page.ts");







let UserDeletePageModule = class UserDeletePageModule {
};
UserDeletePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _user_delete_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserDeletePageRoutingModule"]
        ],
        declarations: [_user_delete_page__WEBPACK_IMPORTED_MODULE_6__["UserDeletePage"]]
    })
], UserDeletePageModule);



/***/ }),

/***/ "./src/app/user-delete/user-delete.page.scss":
/*!***************************************************!*\
  !*** ./src/app/user-delete/user-delete.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZGVsZXRlL3VzZXItZGVsZXRlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/user-delete/user-delete.page.ts":
/*!*************************************************!*\
  !*** ./src/app/user-delete/user-delete.page.ts ***!
  \*************************************************/
/*! exports provided: UserDeletePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDeletePage", function() { return UserDeletePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");




let UserDeletePage = class UserDeletePage {
    constructor(activatedRoute, router, usersService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.usersService = usersService;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.getUser(params['userId']);
        });
    }
    deleteUser(id) {
        this.usersService.deleteUser(id).subscribe((response) => {
            if (response.success == true) {
                this.router.navigate(['/users']);
            }
        });
    }
    getUser(id) {
        this.usersService.getUser(id).subscribe((response) => {
            this.user = response.user;
        });
    }
};
UserDeletePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] }
];
UserDeletePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-delete',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-delete.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-delete/user-delete.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-delete.page.scss */ "./src/app/user-delete/user-delete.page.scss")).default]
    })
], UserDeletePage);



/***/ })

}]);
//# sourceMappingURL=user-delete-user-delete-module-es2015.js.map