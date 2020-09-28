(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-edit-user-edit-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/user-edit/user-edit.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-edit/user-edit.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUserEditUserEditPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>userEdit</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"!user\">\n  <ion-label ion-text-center>\n    <ion-spinner></ion-spinner>\n  </ion-label>\n</ion-content>\n\n<ion-content *ngIf=\"user\">\n  \n  <ion-input [(ngModel)]=\"user._id\" name=\"_id\" type=\"hidden\"></ion-input>\n  \n  <ion-item>\n    <ion-label>Email</ion-label>\n    <ion-input [(ngModel)]=\"user.email\" name=\"email\" type=\"email\"></ion-input>\n    <div *ngIf=\"errors.email\"> {{ errors.email }} </div>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Username</ion-label>\n    <ion-input [(ngModel)]=\"user.username\" name=\"username\" type=\"text\"></ion-input>\n    <div *ngIf=\"errors.username\"> {{ errors.username }} </div>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>First Name</ion-label>\n    <ion-input [(ngModel)]=\"user.first_name\" name=\"first_name\" type=\"text\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Last Name</ion-label>\n    <ion-input [(ngModel)]=\"user.last_name\" name=\"last_name\" type=\"text\"></ion-input>\n  </ion-item>\n\n  <ion-button color=\"primary\" expand=\"full\" (click)=\"onSubmit()\">Submit</ion-button>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/user-edit/user-edit-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/user-edit/user-edit-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: UserEditPageRoutingModule */

    /***/
    function srcAppUserEditUserEditRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserEditPageRoutingModule", function () {
        return UserEditPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _user_edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-edit.page */
      "./src/app/user-edit/user-edit.page.ts");

      var routes = [{
        path: '',
        component: _user_edit_page__WEBPACK_IMPORTED_MODULE_3__["UserEditPage"]
      }];

      var UserEditPageRoutingModule = function UserEditPageRoutingModule() {
        _classCallCheck(this, UserEditPageRoutingModule);
      };

      UserEditPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserEditPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/user-edit/user-edit.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/user-edit/user-edit.module.ts ***!
      \***********************************************/

    /*! exports provided: UserEditPageModule */

    /***/
    function srcAppUserEditUserEditModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserEditPageModule", function () {
        return UserEditPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _user_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-edit-routing.module */
      "./src/app/user-edit/user-edit-routing.module.ts");
      /* harmony import */


      var _user_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-edit.page */
      "./src/app/user-edit/user-edit.page.ts");

      var UserEditPageModule = function UserEditPageModule() {
        _classCallCheck(this, UserEditPageModule);
      };

      UserEditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _user_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserEditPageRoutingModule"]],
        declarations: [_user_edit_page__WEBPACK_IMPORTED_MODULE_6__["UserEditPage"]]
      })], UserEditPageModule);
      /***/
    },

    /***/
    "./src/app/user-edit/user-edit.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/user-edit/user-edit.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppUserEditUserEditPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZWRpdC91c2VyLWVkaXQucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/user-edit/user-edit.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/user-edit/user-edit.page.ts ***!
      \*********************************************/

    /*! exports provided: UserEditPage */

    /***/
    function srcAppUserEditUserEditPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserEditPage", function () {
        return UserEditPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../users.service */
      "./src/app/users.service.ts");

      var UserEditPage = /*#__PURE__*/function () {
        function UserEditPage(activatedRoute, usersService, router) {
          _classCallCheck(this, UserEditPage);

          this.activatedRoute = activatedRoute;
          this.usersService = usersService;
          this.router = router;
          this.errors = {};
        }

        _createClass(UserEditPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this.getUser(params['userId']);
            });
          }
        }, {
          key: "response",
          value: function response(_response) {
            if (_response.success === false) {
              if (_response.errors.name == 'MissingUsernameError') {
                this.errors.username = 'Please enter a username';
              }

              if (_response.errors.name == 'UserExistsError') {
                this.errors.username = 'A user with the given username is already registered';
              }

              if (_response.errors.email) {
                this.errors.email = _response.errors.errors.email.message;
              }
            }

            if (_response.success === true) {
              this.router.navigate(['/users']);
            }
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this2 = this;

            this.usersService.updateUser(this.user).subscribe(function (response) {
              _this2.response(response);
            });
          }
        }, {
          key: "getUser",
          value: function getUser(id) {
            var _this3 = this;

            this.usersService.getUser(id).subscribe(function (response) {
              _this3.user = response.user;
            });
          }
        }]);

        return UserEditPage;
      }();

      UserEditPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      UserEditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./user-edit.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/user-edit/user-edit.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./user-edit.page.scss */
        "./src/app/user-edit/user-edit.page.scss"))["default"]]
      })], UserEditPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-edit-user-edit-module-es5.js.map