(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_directives/alert.component.html":
/*!**************************************************!*\
  !*** ./src/app/_directives/alert.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "./src/app/_directives/alert.component.ts":
/*!************************************************!*\
  !*** ./src/app/_directives/alert.component.ts ***!
  \************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/_directives/alert.component.html")
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/_directives/index.ts":
/*!**************************************!*\
  !*** ./src/app/_directives/index.ts ***!
  \**************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "./src/app/_directives/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });




/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/index.ts":
/*!**********************************!*\
  !*** ./src/app/_guards/index.ts ***!
  \**********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/fake-backend.ts":
/*!******************************************!*\
  !*** ./src/app/_helpers/fake-backend.ts ***!
  \******************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FakeBackendInterceptor = /** @class */ (function () {
    function FakeBackendInterceptor() {
    }
    FakeBackendInterceptor.prototype.intercept = function (request, next) {
        // array in local storage for registered users
        var users = JSON.parse(localStorage.getItem('users')) || [];
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () {
            // authenticate
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                // find if any user matches login credentials
                var filteredUsers = users.filter(function (user) {
                    return user.username === request.body.username && user.password === request.body.password;
                });
                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    var user = filteredUsers[0];
                    var body = {
                        id: user.id,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token'
                    };
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: body }));
                }
                else {
                    // else return 400 bad request
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Username or password is incorrect' } });
                }
            }
            // get users
            if (request.url.endsWith('/users') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: users }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Unauthorised' } });
                }
            }
            // get user by id
            if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id_1 = parseInt(urlParts[urlParts.length - 1]);
                    var matchedUsers = users.filter(function (user) { return user.id === id_1; });
                    var user = matchedUsers.length ? matchedUsers[0] : null;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: user }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Unauthorised' } });
                }
            }
            // register user
            if (request.url.endsWith('/users/register') && request.method === 'POST') {
                // get new user object from post body
                var newUser_1 = request.body;
                // validation
                var duplicateUser = users.filter(function (user) { return user.username === newUser_1.username; }).length;
                if (duplicateUser) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Username "' + newUser_1.username + '" is already taken' } });
                }
                // save new user
                newUser_1.id = users.length + 1;
                users.push(newUser_1);
                localStorage.setItem('users', JSON.stringify(users));
                // respond 200 OK
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200 }));
            }
            // delete user
            if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id = parseInt(urlParts[urlParts.length - 1]);
                    for (var i = 0; i < users.length; i++) {
                        var user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }
                    // respond 200 OK
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200 }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Unauthorised' } });
                }
            }
            // pass through any requests not handled above
            return next.handle(request);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])());
    };
    FakeBackendInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FakeBackendInterceptor);
    return FakeBackendInterceptor;
}());

var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: ErrorInterceptor, JwtInterceptor, FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_0__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"]; });

/* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fake-backend */ "./src/app/_helpers/fake-backend.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["FakeBackendInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["fakeBackendProvider"]; });






/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post("payroll/authenticate/", { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            console.log('hello arshiya');
            console.log(data);
            // login successful if there's a jwt token in the response
           /*if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }*/
            return data;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AlertService, AuthenticationService, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "./src/app/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });






/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users");
    };
    UserService.prototype.getById = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/" + id);
    };
    UserService.prototype.register = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/register", user);
    };
    UserService.prototype.update = function (user) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/" + user.id, user);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/" + id);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- main app container -->\n<div class=\"jumbotron\" style=\"height: 560px;\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-6 offset-sm-3\">\n                <alert></alert>\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"footer-copyright text-center py-3\">© 2018 Copyright:\n    <a href=\"#\"> Deloitte</a>\n  </div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_directives */ "./src/app/_directives/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_guards */ "./src/app/_guards/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register */ "./src/app/register/index.ts");
/* harmony import */ var _employee_employee_employee_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./employee/employee/employee.module */ "./src/app/employee/employee/employee.module.ts");
/* harmony import */ var _upload_file_upload_file_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./upload-file/upload-file.module */ "./src/app/upload-file/upload-file.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// used to create fake backend












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["routing"],
                _upload_file_upload_file_module__WEBPACK_IMPORTED_MODULE_14__["UploadFileModule"],
                _employee_employee_employee_module__WEBPACK_IMPORTED_MODULE_13__["EmployeeModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _directives__WEBPACK_IMPORTED_MODULE_7__["AlertComponent"],
                _home__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _login__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _register__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"]
            ],
            providers: [
                _guards__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"],
                _services__WEBPACK_IMPORTED_MODULE_9__["AlertService"],
                _services__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"],
                _services__WEBPACK_IMPORTED_MODULE_9__["UserService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_4__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_4__["ErrorInterceptor"], multi: true },
                // provider used to create fake backend
                _helpers__WEBPACK_IMPORTED_MODULE_4__["fakeBackendProvider"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register */ "./src/app/register/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_guards */ "./src/app/_guards/index.ts");
/* harmony import */ var _employee_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee/dashboard/dashboard.component */ "./src/app/employee/dashboard/dashboard.component.ts");
/* harmony import */ var _upload_file_form_upload_form_upload_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./upload-file/form-upload/form-upload.component */ "./src/app/upload-file/form-upload/form-upload.component.ts");







var appRoutes = [
    { path: '', component: _home__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'login', component: _login__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'uploadFile', component: _upload_file_form_upload_form_upload_component__WEBPACK_IMPORTED_MODULE_6__["FormUploadComponent"] },
    { path: 'employeeDashboard', component: _employee_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/employee/dashboard/dashboard.component.html":
/*!*************************************************************!*\
  !*** ./src/app/employee/dashboard/dashboard.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ag-grid-angular \nstyle=\"width: 800px; height: 250px;\" \n    class=\"ag-theme-balham\"\n    [rowData]=\"rowData\" \n    [columnDefs]=\"columnDefs\"\n    [enableSorting]=\"true\"\n    [enableFilter]=\"true\"\n    >\n</ag-grid-angular>"

/***/ }),

/***/ "./src/app/employee/dashboard/dashboard.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/employee/dashboard/dashboard.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ag-grid-angular {\n  display: block; }\n\nag-grid-ng2 {\n  display: block; }\n\nag-grid {\n  display: block; }\n\nag-grid-polymer {\n  display: block; }\n\nag-grid-aurelia {\n  display: block; }\n\n.ag-rtl {\n  direction: rtl; }\n\n.ag-ltr {\n  direction: ltr; }\n\n.ag-select-agg-func-popup {\n  position: absolute; }\n\n.ag-body-no-select {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.ag-root-wrapper {\n  position: relative; }\n\n.ag-root-wrapper.ag-layout-normal {\n  height: 100%;\n  display: flex;\n  flex-direction: column; }\n\n.ag-root-wrapper-body {\n  display: flex;\n  flex-direction: row; }\n\n.ag-layout-normal.ag-root-wrapper-body {\n  flex-grow: 1;\n  height: 0px;\n  min-height: 0px; }\n\n.ag-root {\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n  display: inline-block;\n  width: 0px;\n  min-width: 0px;\n  flex: 1; }\n\n.ag-layout-normal.ag-root {\n  height: 100%;\n  display: flex;\n  flex-direction: column; }\n\n.ag-font-style {\n  cursor: default;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.ag-popup-backdrop {\n  height: 100%;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100%; }\n\n.ag-header {\n  box-sizing: border-box;\n  white-space: nowrap;\n  width: 100%;\n  display: flex; }\n\n.ag-pinned-left-header {\n  box-sizing: border-box;\n  display: inline-block;\n  height: 100%;\n  overflow: hidden; }\n\n.ag-pinned-right-header {\n  box-sizing: border-box;\n  display: inline-block;\n  height: 100%;\n  overflow: hidden; }\n\n.ag-header-viewport {\n  box-sizing: border-box;\n  height: 100%;\n  overflow: hidden;\n  width: 0px;\n  min-width: 0px;\n  flex: 1; }\n\n.ag-header-row {\n  position: absolute; }\n\n.ag-header-container {\n  box-sizing: border-box;\n  height: 100%;\n  position: relative;\n  white-space: nowrap; }\n\n.ag-header-overlay {\n  display: block;\n  position: absolute; }\n\n.ag-header-cell {\n  box-sizing: border-box;\n  display: inline-block;\n  height: 100%;\n  position: absolute;\n  vertical-align: bottom; }\n\n.ag-floating-filter {\n  box-sizing: border-box;\n  display: inline-block;\n  position: absolute; }\n\n.ag-floating-filter-body {\n  height: 20px;\n  margin-right: 25px; }\n\n.ag-floating-filter-full-body {\n  height: 20px;\n  width: 100%; }\n\n.ag-floating-filter-input {\n  width: 100%; }\n\n.ag-floating-filter-input:-moz-read-only {\n  background-color: #eee; }\n\n.ag-floating-filter-input:read-only {\n  background-color: #eee; }\n\n.ag-floating-filter-menu {\n  position: absolute;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.ag-dnd-ghost {\n  background: #e5e5e5;\n  border: 1px solid black;\n  box-sizing: border-box;\n  cursor: move;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.4;\n  overflow: hidden;\n  padding: 3px;\n  position: absolute;\n  text-overflow: ellipsis;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.ag-dnd-ghost-icon {\n  display: inline-block;\n  float: left;\n  padding: 2px; }\n\n.ag-dnd-ghost-label {\n  display: inline-block; }\n\n.ag-header-group-cell {\n  box-sizing: border-box;\n  display: inline-block;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n  text-overflow: ellipsis; }\n\n.ag-header-group-cell-label {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: flex; }\n\n.ag-header-cell-label {\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.ag-header-cell-resize {\n  cursor: col-resize;\n  height: 100%;\n  width: 4px; }\n\n.ag-ltr .ag-header-cell-resize {\n  float: right; }\n\n.ag-ltr .ag-pinned-right-header .ag-header-cell-resize {\n  float: left; }\n\n.ag-rtl .ag-header-cell-resize {\n  float: left; }\n\n.ag-rtl .ag-pinned-left-header .ag-header-cell-resize {\n  float: right; }\n\n.ag-ltr .ag-header-select-all {\n  float: left; }\n\n.ag-rtl .ag-header-select-all {\n  float: right; }\n\n.ag-header-expand-icon {\n  padding-left: 4px; }\n\n.ag-header-cell-menu-button {\n  float: right; }\n\n.ag-overlay {\n  height: 100%;\n  left: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  width: 100%; }\n\n.ag-overlay-panel {\n  display: table;\n  height: 100%;\n  pointer-events: none;\n  width: 100%; }\n\n.ag-overlay-wrapper {\n  display: table-cell;\n  text-align: center;\n  vertical-align: middle; }\n\n.ag-column-panel {\n  display: flex;\n  overflow-y: auto; }\n\n.ag-column-panel-center {\n  display: flex;\n  min-height: 400px;\n  flex-direction: column;\n  flex-grow: 1;\n  overflow-x: hidden;\n  max-height: 100vh; }\n\n.ag-layout-auto-height.ag-body-container {\n  min-height: 50px; }\n\n.ag-layout-auto-height.ag-overlay-no-rows-wrapper {\n  padding-top: 30px; }\n\n.ag-body {\n  box-sizing: border-box;\n  display: flex;\n  position: relative; }\n\n.ag-layout-normal.ag-body {\n  flex: 1;\n  height: 0px;\n  min-height: 0px; }\n\n.ag-rtl .ag-body {\n  flex-direction: row-reverse; }\n\n.ag-ltr .ag-body {\n  flex-direction: row; }\n\n.ag-rtl .ag-floating-top {\n  flex-direction: row-reverse; }\n\n.ag-ltr .ag-floating-top {\n  flex-direction: row; }\n\n.ag-ltr .ag-header {\n  flex-direction: row; }\n\n.ag-rtl .ag-header {\n  flex-direction: row-reverse; }\n\n.ag-floating-top {\n  box-sizing: border-box;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n  position: relative;\n  display: flex; }\n\n.ag-pinned-left-floating-top {\n  box-sizing: border-box;\n  display: inline-block;\n  overflow: hidden;\n  position: relative; }\n\n.ag-pinned-right-floating-top {\n  box-sizing: border-box;\n  display: inline-block;\n  overflow: hidden;\n  position: relative; }\n\n.ag-floating-top-viewport {\n  box-sizing: border-box;\n  overflow: hidden;\n  width: 0px;\n  min-width: 0px;\n  flex: 1; }\n\n.ag-layout-normal.ag-floating-top-viewport {\n  height: 100%; }\n\n.ag-floating-top-container {\n  box-sizing: border-box;\n  position: relative;\n  white-space: nowrap; }\n\n.ag-floating-bottom {\n  box-sizing: border-box;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n  position: relative;\n  display: flex; }\n\n.ag-pinned-left-floating-bottom {\n  box-sizing: border-box;\n  display: inline-block;\n  overflow: hidden;\n  position: relative; }\n\n.ag-pinned-right-floating-bottom {\n  box-sizing: border-box;\n  display: inline-block;\n  overflow: hidden;\n  position: relative; }\n\n.ag-floating-bottom-viewport {\n  box-sizing: border-box;\n  overflow: hidden;\n  flex: 1;\n  width: 0px;\n  min-width: 0px; }\n\n.ag-floating-bottom-container {\n  box-sizing: border-box;\n  position: relative;\n  white-space: nowrap; }\n\n.ag-pinned-left-cols-container {\n  display: inline-block;\n  position: relative; }\n\n.ag-pinned-right-cols-viewport {\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.ag-pinned-left-cols-viewport {\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.ag-pinned-right-cols-container {\n  display: inline-block;\n  position: relative; }\n\n.ag-pinned-left-cols-viewport-wrapper {\n  height: 100%;\n  overflow: hidden; }\n\n.ag-body-viewport-wrapper {\n  height: 100%;\n  width: 0px;\n  min-width: 0px;\n  flex: 1;\n  overflow: hidden; }\n\n.ag-body-viewport {\n  overflow-x: auto;\n  overflow-y: auto; }\n\n.ag-layout-normal.ag-body-viewport {\n  height: 100%; }\n\n.ag-full-width-viewport-wrapper {\n  height: 100%;\n  width: 100%;\n  display: inline-block;\n  pointer-events: none;\n  overflow: hidden;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  box-sizing: border-box; }\n\n.ag-full-width-viewport {\n  box-sizing: border-box;\n  height: 100%;\n  pointer-events: none;\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.ag-full-width-container {\n  overflow: hidden;\n  position: relative;\n  width: 100%; }\n\n.ag-floating-bottom-full-width-container {\n  display: inline;\n  height: 100%;\n  left: 0;\n  overflow: hidden;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  width: 100%; }\n\n.ag-floating-top-full-width-container {\n  display: inline;\n  height: 100%;\n  left: 0;\n  overflow: hidden;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  width: 100%; }\n\n.ag-full-width-row {\n  overflow: hidden;\n  pointer-events: all; }\n\n.ag-body-container {\n  display: inline-block;\n  margin-bottom: -2px;\n  position: relative; }\n\n.ag-row-animation .ag-row {\n  transition: top 0.4s, height 0.4s, background-color 0.1s, opacity 0.2s, -webkit-transform 0.4s;\n  transition: transform 0.4s, top 0.4s, height 0.4s, background-color 0.1s, opacity 0.2s;\n  transition: transform 0.4s, top 0.4s, height 0.4s, background-color 0.1s, opacity 0.2s, -webkit-transform 0.4s; }\n\n.ag-row-no-animation .ag-row {\n  transition: background-color 0.1s; }\n\n.ag-row {\n  box-sizing: border-box;\n  position: absolute;\n  white-space: nowrap;\n  width: 100%; }\n\n.ag-column-moving .ag-cell {\n  transition: left 0.2s; }\n\n.ag-column-moving .ag-header-cell {\n  transition: left 0.2s; }\n\n.ag-column-moving .ag-header-group-cell {\n  transition: left 0.2s, width 0.2s; }\n\n.ag-column-drop {\n  box-sizing: border-box;\n  width: 100%; }\n\n.ag-column-drop-vertical {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  height: 50px;\n  overflow: hidden; }\n\n.ag-column-drop-vertical .ag-column-drop-list {\n    flex-grow: 1;\n    height: 20px;\n    overflow-x: auto; }\n\n.ag-column-drop-vertical .ag-column-drop-cell {\n    display: flex; }\n\n.ag-column-drop-vertical .ag-column-drop-cell .ag-column-drop-cell-text {\n      overflow: hidden;\n      flex: 1;\n      text-overflow: ellipsis;\n      white-space: nowrap; }\n\n.ag-column-drop-vertical .ag-column-drop-empty-message {\n    display: block; }\n\n.ag-column-drop-vertical .ag-column-drop-cell-button {\n    line-height: 16px; }\n\n.ag-ltr .ag-column-drop-vertical .ag-column-drop-cell-button {\n  float: right; }\n\n.ag-rtl .ag-column-drop-vertical .ag-column-drop-cell-button {\n  float: left; }\n\n.ag-column-drop-horizontal {\n  white-space: nowrap;\n  overflow: hidden; }\n\n.ag-column-drop-horizontal .ag-column-drop-cell {\n    display: inline-block; }\n\n.ag-column-drop-horizontal .ag-column-drop-empty-message {\n    display: inline-block; }\n\n.ag-column-drop-horizontal .ag-column-drop-list {\n    height: 100%; }\n\n.ag-cell {\n  box-sizing: border-box;\n  display: inline-block;\n  overflow: hidden;\n  position: absolute;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.ag-cell-with-height {\n  height: 100%; }\n\n.ag-value-slide-out {\n  margin-right: 5px;\n  opacity: 1;\n  transition: opacity 3s, margin-right 3s;\n  transition-timing-function: linear; }\n\n.ag-value-slide-out-end {\n  margin-right: 10px;\n  opacity: 0; }\n\n.ag-opacity-zero {\n  opacity: 0; }\n\n.ag-cell-edit-input {\n  height: 100%;\n  width: 100%; }\n\n.ag-group-cell-entire-row {\n  box-sizing: border-box;\n  display: inline-block;\n  height: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%; }\n\n.ag-footer-cell-entire-row {\n  box-sizing: border-box;\n  display: inline-block;\n  height: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%; }\n\n.ag-popup-editor {\n  position: absolute;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.ag-menu {\n  max-height: 100%;\n  overflow-y: auto;\n  position: absolute;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.ag-menu-column-select-wrapper {\n  height: 300px;\n  overflow: auto;\n  width: 200px; }\n\n.ag-menu-list {\n  border-collapse: collapse;\n  display: table; }\n\n.ag-menu-option {\n  display: table-row; }\n\n.ag-menu-option-text {\n  display: table-cell; }\n\n.ag-menu-option-shortcut {\n  display: table-cell; }\n\n.ag-menu-option-icon {\n  display: table-cell; }\n\n.ag-menu-option-popup-pointer {\n  display: table-cell; }\n\n.ag-menu-separator {\n  display: table-row; }\n\n.ag-menu-separator-cell {\n  display: table-cell; }\n\n.ag-virtual-list-viewport {\n  height: 100%;\n  overflow-x: auto;\n  width: 100%; }\n\n.ag-virtual-list-container {\n  overflow: hidden;\n  position: relative; }\n\n.ag-rich-select {\n  cursor: default;\n  outline: none; }\n\n.ag-rich-select-row {\n  white-space: nowrap; }\n\n.ag-rich-select-list {\n  height: 200px;\n  width: 200px; }\n\n.ag-set-filter-list {\n  height: 200px;\n  width: 200px; }\n\n.ag-set-filter-item {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.ag-virtual-list-item {\n  position: absolute;\n  width: 100%; }\n\n.ag-virtual-list-item span:empty:not(.ag-icon) {\n    border-left: 1px solid transparent; }\n\n.ag-filter-filter {\n  box-sizing: border-box;\n  width: 100%; }\n\n.ag-floating-filter-body input {\n  height: 19px;\n  margin: 0;\n  width: 100%; }\n\n.ag-floating-filter-full-body input {\n  height: 19px;\n  margin: 0;\n  width: 100%; }\n\n.ag-filter-select {\n  margin: 4px 4px 0 4px;\n  width: 110px; }\n\n.ag-list-selection {\n  cursor: default;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.ag-column-panel {\n  box-sizing: border-box;\n  cursor: default;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  width: 200px; }\n\n.ag-column-container {\n  flex-grow: 1;\n  height: 50px;\n  overflow: auto; }\n\n.ag-column-select-indent {\n  display: inline-block; }\n\n.ag-ltr .ag-column-select-column {\n  margin-left: 16px; }\n\n.ag-rtl .ag-column-select-column {\n  margin-right: 16px; }\n\n.ag-column-select-column,\n.ag-column-select-column-group {\n  align-items: stretch;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.ag-column-select-column .ag-column-select-label,\n  .ag-column-select-column .ag-column-select-column-group-label,\n  .ag-column-select-column-group .ag-column-select-label,\n  .ag-column-select-column-group .ag-column-select-column-group-label {\n    flex-grow: 1;\n    flex-shrink: 1;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n\n.ag-column-select-column .ag-column-drag,\n  .ag-column-select-column-group .ag-column-drag {\n    min-width: 16px;\n    flex-grow: 0;\n    flex-shrink: 0; }\n\n.ag-column-select-panel {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden; }\n\n.ag-tool-panel .ag-column-select-panel {\n  flex-grow: 4; }\n\n.ag-tool-panel-horizontal-resize {\n  cursor: col-resize;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  width: 5px;\n  z-index: 1; }\n\n.ag-rtl .ag-tool-panel-horizontal-resize {\n  float: right;\n  -webkit-transform: translateX(3px);\n  transform: translateX(3px); }\n\n.ag-ltr .ag-tool-panel-horizontal-resize {\n  float: left;\n  -webkit-transform: translateX(-3px);\n  transform: translateX(-3px); }\n\n.ag-menu-column-select-wrapper .ag-column-select-panel {\n  height: 100%; }\n\n.ag-hidden {\n  display: none !important; }\n\n.ag-visibility-hidden {\n  visibility: hidden !important; }\n\n.ag-faded {\n  opacity: 0.3; }\n\n.ag-width-half {\n  display: inline-block;\n  width: 50%; }\n\n.ag-shake-left-to-right {\n  -webkit-animation-direction: alternate;\n  animation-direction: alternate;\n  -webkit-animation-duration: 0.2s;\n  animation-duration: 0.2s;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  -webkit-animation-name: ag-shake-left-to-right;\n  animation-name: ag-shake-left-to-right; }\n\n@-webkit-keyframes ag-shake-left-to-right {\n  from {\n    padding-left: 6px;\n    padding-right: 2px; }\n  to {\n    padding-left: 2px;\n    padding-right: 6px; } }\n\n@keyframes ag-shake-left-to-right {\n  from {\n    padding-left: 6px;\n    padding-right: 2px; }\n  to {\n    padding-left: 2px;\n    padding-right: 6px; } }\n\n/* icons are used outside of the grid root (in the ghost) */\n\n.ag-icon-aggregation {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOS41IDIuNWgtNmwyIDMuNS0yIDMuNWg2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iIzAwMCIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-arrows {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTYgNmwtMS40MSAxLjQxTDE2LjE3IDlINHYyaDEyLjE3bC0xLjU4IDEuNTlMMTYgMTRsNC00eiIvPjxwYXRoIGQ9Ik00IDZsMS40MSAxLjQxTDMuODMgOUgxNnYySDMuODNsMS41OCAxLjU5TDQgMTRsLTQtNHoiLz48cGF0aCBkPSJNNiAxNmwxLjQxLTEuNDFMOSAxNi4xN1Y0aDJ2MTIuMTdsMS41OS0xLjU4TDE0IDE2bC00IDR6Ii8+PHBhdGggZD0iTTE0IDRsLTEuNDEgMS40MUwxMSAzLjgzVjE2SDlWMy44M0w3LjQxIDUuNDEgNiA0bDQtNHoiLz48L3N2Zz4=) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-asc {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik01IDNoMnY5SDV6Ii8+PHBhdGggZD0iTTguOTkzIDUuMlYzLjQ5M2gtNnY2SDQuN1Y1LjJoNC4yOTN6IiBpZD0iYiIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjx1c2UgZmlsbD0iI0Q4RDhEOCIgeGxpbms6aHJlZj0iI2EiLz48cGF0aCBzdHJva2U9IiMwMDAiIGQ9Ik01LjUgMy41aDF2OGgtMXoiLz48ZyB0cmFuc2Zvcm09InJvdGF0ZSg0NSA1Ljk5MyA2LjQ5MykiPjx1c2UgZmlsbD0iI0Q4RDhEOCIgeGxpbms6aHJlZj0iI2IiLz48cGF0aCBzdHJva2U9IiMwMDAiIGQ9Ik04LjQ5MyA0Ljd2LS43MDdoLTV2NUg0LjJWNC43aDQuMjkzeiIvPjwvZz48L2c+PC9zdmc+) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-checkbox-checked-readonly {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHJlY3QgaWQ9ImEiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjEiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48dXNlIGZpbGw9IiNEOEQ4RDgiIHhsaW5rOmhyZWY9IiNhIi8+PHJlY3Qgc3Ryb2tlPSIjMDAwIiB4PSIuNSIgeT0iLjUiIHdpZHRoPSIxMSIgaGVpZ2h0PSIxMSIgcng9IjEiLz48cGF0aCBzdHJva2U9IiMwMDAiIGQ9Ik05IDNMNiA4LjVsLTIuNS0yIi8+PC9nPjwvc3ZnPg==) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-checkbox-checked {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHJlY3QgaWQ9ImEiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjEiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNhIi8+PHJlY3Qgc3Ryb2tlPSIjMDAwIiB4PSIuNSIgeT0iLjUiIHdpZHRoPSIxMSIgaGVpZ2h0PSIxMSIgcng9IjEiLz48cGF0aCBzdHJva2U9IiMwMDAiIGQ9Ik05IDNMNiA4LjVsLTIuNS0yIi8+PC9nPjwvc3ZnPg==) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-checkbox-indeterminate-readonly {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHJlY3QgaWQ9ImEiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjEiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48dXNlIGZpbGw9IiNEOEQ4RDgiIHhsaW5rOmhyZWY9IiNhIi8+PHJlY3Qgc3Ryb2tlPSIjMDAwIiB4PSIuNSIgeT0iLjUiIHdpZHRoPSIxMSIgaGVpZ2h0PSIxMSIgcng9IjEiLz48cGF0aCBmaWxsPSIjMDAwIiBkPSJNNCA1aDR2Mkg0eiIvPjwvZz48L3N2Zz4=) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-checkbox-indeterminate {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHJlY3QgaWQ9ImEiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjEiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNhIi8+PHJlY3Qgc3Ryb2tlPSIjMDAwIiB4PSIuNSIgeT0iLjUiIHdpZHRoPSIxMSIgaGVpZ2h0PSIxMSIgcng9IjEiLz48cGF0aCBmaWxsPSIjMDAwIiBkPSJNNCA1aDR2Mkg0eiIvPjwvZz48L3N2Zz4=) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-checkbox-unchecked-readonly {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHJlY3QgaWQ9ImEiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjEiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48dXNlIGZpbGw9IiNEOEQ4RDgiIHhsaW5rOmhyZWY9IiNhIi8+PHJlY3Qgc3Ryb2tlPSIjMDAwIiB4PSIuNSIgeT0iLjUiIHdpZHRoPSIxMSIgaGVpZ2h0PSIxMSIgcng9IjEiLz48L2c+PC9zdmc+) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-checkbox-unchecked {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHJlY3QgaWQ9ImEiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjEiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNhIi8+PHJlY3Qgc3Ryb2tlPSIjMDAwIiB4PSIuNSIgeT0iLjUiIHdpZHRoPSIxMSIgaGVpZ2h0PSIxMSIgcng9IjEiLz48L2c+PC9zdmc+) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-column {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMSAxaDR2Mkgxem0wIDNoNHY3SDF6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-columns {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMSAxaDR2Mkgxem02IDBoNHYySDd6TTEgNWg0djJIMXptNiAwaDR2Mkg3ek0xIDloNHYySDF6bTYgMGg0djJIN3oiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-contracted {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxyZWN0IHN0cm9rZS1vcGFjaXR5PSIuNSIgc3Ryb2tlPSIjMDAwIiB4PSIxLjUiIHk9IjEuNSIgd2lkdGg9IjkiIGhlaWdodD0iOSIgcng9IjEiLz48cGF0aCBmaWxsPSIjMDAwIiBkPSJNOSA1djJIM1Y1eiIvPjwvZz48L3N2Zz4=) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-copy {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMwMDAiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTQuNSA0LjVoNXY1aC01eiIvPjxwYXRoIGQ9Ik03LjUgMi41aC01djVoMnYyaDV2LTVoLTJ2LTJ6Ii8+PC9nPjwvc3ZnPg==) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-cut {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMwMDAiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTMgMy4xMmMuNjY3LjA3OCAzIDEuNzQ1IDcgNS0uMzI2LjIwNC0uNjU5LjIwNC0xIDAtLjM0MS0uMjA2LTEuNjc0LTEuMjA2LTQtMyAwIC42NjYtLjY2Ny42NjYtMiAwLTItMS0xLTIuMTIgMC0yeiIvPjxwYXRoIGQ9Ik0zIDguMjY0Yy42NjctLjA4IDMtMS43NDYgNy01LS4zMjYtLjIwNS0uNjU5LS4yMDUtMSAwLS4zNDEuMjA0LTEuNjc0IDEuMjA0LTQgMyAwLS42NjctLjY2Ny0uNjY3LTIgMC0yIDEtMSAyLjExOSAwIDJ6Ii8+PC9nPjwvc3ZnPg==) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-desc {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik01IDJoMnY5SDV6Ii8+PHBhdGggZD0iTTguOTkzIDYuMVY0LjM5M2gtNnY2SDQuN1Y2LjFoNC4yOTN6IiBpZD0iYiIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjx1c2UgZmlsbD0iI0Q4RDhEOCIgeGxpbms6aHJlZj0iI2EiLz48cGF0aCBzdHJva2U9IiMwMDAiIGQ9Ik01LjUgMi41aDF2OGgtMXoiLz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgtMTM1IDUuOTkzIDcuMzkzKSI+PHVzZSBmaWxsPSIjRDhEOEQ4IiB4bGluazpocmVmPSIjYiIvPjxwYXRoIHN0cm9rZT0iIzAwMCIgZD0iTTguNDkzIDUuNnYtLjcwN2gtNXY1SDQuMlY1LjZoNC4yOTN6Ii8+PC9nPjwvZz48L3N2Zz4=) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-expanded {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxyZWN0IHN0cm9rZS1vcGFjaXR5PSIuNSIgc3Ryb2tlPSIjMDAwIiB4PSIxLjUiIHk9IjEuNSIgd2lkdGg9IjkiIGhlaWdodD0iOSIgcng9IjEiLz48cGF0aCBmaWxsPSIjMDAwIiBkPSJNNSAzaDJ2Nkg1eiIvPjxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik05IDV2MkgzVjV6Ii8+PC9nPjwvc3ZnPg==) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-eye-slash {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zLjAwMSAzLjkwOEwzIDRhMyAzIDAgMSAwIDUuOTk5LS4wOTJBNS4yNDggNS4yNDggMCAwIDAgNiAzYy0xLjEgMC0yLjEuMzAzLTIuOTk5LjkwOHoiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNNCA0LjVjLjY2Ny0uMzMzIDEuNjY3LS41IDMtLjUiIHN0cm9rZT0iIzk3OTc5NyIvPjxwYXRoIGQ9Ik0xIDZjMS4zMzMtMiAzLTMgNS0zczMuNjY3IDEgNSAzQzkuNjY3IDggOCA5IDYgOVMyLjMzMyA4IDEgNnoiIHN0cm9rZT0iIzAwMCIvPjxwYXRoIGQ9Ik00LjAwNCAyLjgzNWw0Ljk5MiA2LjMzIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiLz48cGF0aCBkPSJNMy4wMDQgMi44MzVsNC45OTIgNi4zMyIgc3Ryb2tlPSIjRkZGIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIi8+PC9nPjwvc3ZnPg==) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-eye {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zLjAwMSAzLjkwOEwzIDRhMyAzIDAgMSAwIDUuOTk5LS4wOTJBNS4yNDggNS4yNDggMCAwIDAgNiAzYy0xLjEgMC0yLjEuMzAzLTIuOTk5LjkwOHoiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNNCA0LjVjLjY2Ny0uMzMzIDEuNjY3LS41IDMtLjUiIHN0cm9rZT0iIzk3OTc5NyIvPjxwYXRoIGQ9Ik0xIDZjMS4zMzMtMiAzLTMgNS0zczMuNjY3IDEgNSAzQzkuNjY3IDggOCA5IDYgOVMyLjMzMyA4IDEgNnoiIHN0cm9rZT0iIzAwMCIvPjwvZz48L3N2Zz4=) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-filter {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMSAyaDEwTDcgNnY1TDUgOVY2TDEgMnptNCA0djFoMlY2SDV6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-group {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIHN0cm9rZT0iIzAwMCIgZD0iTTcuNSAxLjVoM3YyaC0zem0wIDRoM3YyaC0zem0wIDRoM3YyaC0zeiIvPjxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0yIDNoMXY4SDJ6bTEgM2g0djFIM3ptMi00aDN2MUg1eiIvPjxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0yIDEwaDV2MUgyeiIvPjxwYXRoIHN0cm9rZT0iIzAwMCIgZD0iTTEuNSAxLjVoM3YyaC0zeiIvPjwvZz48L3N2Zz4=) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-indeterminate {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zLjA1NiA0LjU4MWEzLjAwMSAzLjAwMSAwIDAgMCA1Ljg4OCAwQzguMDU5IDQuMTk0IDcuMDc4IDQgNiA0Yy0xLjA3OCAwLTIuMDYuMTk0LTIuOTQ0LjU4MXoiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNNCA1LjVjLjY2Ny0uMzMzIDEuNjY3LS41IDMtLjUiIHN0cm9rZT0iIzk3OTc5NyIvPjxwYXRoIGQ9Ik0xIDZjMS4zMzMtMS4zMzMgMy0yIDUtMnMzLjY2Ny42NjcgNSAyQzkuNjY3IDcuMzMzIDggOCA2IDhzLTMuNjY3LS42NjctNS0yeiIgc3Ryb2tlPSIjMDAwIi8+PC9nPjwvc3ZnPg==) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-left {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik01LjUgMS41aDJ2OWgtMnoiLz48cGF0aCBkPSJNNy45OTMgNC43VjIuOTkzaC02djZIMy43VjQuN2g0LjI5M3oiIGlkPSJiIi8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoOTAgNi41IDYpIj48dXNlIGZpbGw9IiNEOEQ4RDgiIHhsaW5rOmhyZWY9IiNhIi8+PHBhdGggc3Ryb2tlPSIjMDAwIiBkPSJNNiAyaDF2OEg2eiIvPjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgtNDUgNC45OTMgNS45OTMpIj48dXNlIGZpbGw9IiNEOEQ4RDgiIHhsaW5rOmhyZWY9IiNiIi8+PHBhdGggc3Ryb2tlPSIjMDAwIiBkPSJNNy40OTMgNC4ydi0uNzA3aC01djVIMy4yVjQuMmg0LjI5M3oiLz48L2c+PC9nPjwvc3ZnPg==) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-loading {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik01IDFoMnYzSDV6Ii8+PHBhdGggaWQ9ImIiIGQ9Ik01IDhoMnYzSDV6Ii8+PHBhdGggaWQ9ImMiIGQ9Ik0xIDVoM3YySDF6Ii8+PHBhdGggaWQ9ImQiIGQ9Ik04IDVoM3YySDh6Ii8+PHBhdGggaWQ9ImUiIGQ9Ik00IDBoMnYzSDR6Ii8+PHBhdGggaWQ9ImYiIGQ9Ik00IDdoMnYzSDR6Ii8+PHBhdGggaWQ9ImciIGQ9Ik0wIDRoM3YySDB6Ii8+PHBhdGggaWQ9ImgiIGQ9Ik03IDRoM3YySDd6Ii8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHVzZSBmaWxsPSIjRDhEOEQ4IiB4bGluazpocmVmPSIjYSIvPjxwYXRoIHN0cm9rZT0iIzk3OTc5NyIgZD0iTTUuNSAxLjVoMXYyaC0xeiIvPjx1c2UgZmlsbD0iI0Q4RDhEOCIgeGxpbms6aHJlZj0iI2IiLz48cGF0aCBzdHJva2U9IiM5Nzk3OTciIGQ9Ik01LjUgOC41aDF2MmgtMXoiLz48dXNlIGZpbGw9IiNEOEQ4RDgiIHhsaW5rOmhyZWY9IiNjIi8+PHBhdGggc3Ryb2tlPSIjOTc5Nzk3IiBkPSJNMS41IDUuNWgydjFoLTJ6Ii8+PHVzZSBmaWxsPSIjRDhEOEQ4IiB4bGluazpocmVmPSIjZCIvPjxwYXRoIHN0cm9rZT0iIzk3OTc5NyIgZD0iTTguNSA1LjVoMnYxaC0yeiIvPjxnIG9wYWNpdHk9Ii43MTQiPjxnIHRyYW5zZm9ybT0icm90YXRlKDQ1IDQuMjkzIDYuNzA3KSI+PHVzZSBmaWxsPSIjRDhEOEQ4IiB4bGluazpocmVmPSIjZSIvPjxwYXRoIHN0cm9rZT0iIzk3OTc5NyIgZD0iTTQuNS41aDF2MmgtMXoiLz48L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUgNC4yOTMgNi43MDcpIj48dXNlIGZpbGw9IiNEOEQ4RDgiIHhsaW5rOmhyZWY9IiNmIi8+PHBhdGggc3Ryb2tlPSIjOTc5Nzk3IiBkPSJNNC41IDcuNWgxdjJoLTF6Ii8+PC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDQ1IDQuMjkzIDYuNzA3KSI+PHVzZSBmaWxsPSIjRDhEOEQ4IiB4bGluazpocmVmPSIjZyIvPjxwYXRoIHN0cm9rZT0iIzk3OTc5NyIgZD0iTS41IDQuNWgydjFoLTJ6Ii8+PC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDQ1IDQuMjkzIDYuNzA3KSI+PHVzZSBmaWxsPSIjRDhEOEQ4IiB4bGluazpocmVmPSIjaCIvPjxwYXRoIHN0cm9rZT0iIzk3OTc5NyIgZD0iTTcuNSA0LjVoMnYxaC0yeiIvPjwvZz48L2c+PC9nPjwvc3ZnPg==) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-menu {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMSAxaDEwdjJIMXptMCA0aDEwdjJIMXptMCA0aDEwdjJIMXoiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-minus {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMiA1aDh2MkgyeiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-none {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik01IDNoMnY2SDV6Ii8+PHBhdGggZD0iTTguMTQ2IDguMTgyVjYuNDc1aC01djVoMS43MDhWOC4xODJoMy4yOTJ6IiBpZD0iYiIvPjxwYXRoIGQ9Ik04LjUgMi45MTRWMS4yMDdoLTV2NWgxLjcwN1YyLjkxNEg4LjV6IiBpZD0iYyIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjx1c2UgZmlsbD0iI0Q4RDhEOCIgeGxpbms6aHJlZj0iI2EiLz48cGF0aCBzdHJva2U9IiMwMDAiIGQ9Ik01LjUgMy41aDF2NWgtMXoiLz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgtMTM1IDUuNjQ2IDguNDc1KSI+PHVzZSBmaWxsPSIjRDhEOEQ4IiB4bGluazpocmVmPSIjYiIvPjxwYXRoIHN0cm9rZT0iIzAwMCIgZD0iTTcuNjQ2IDcuNjgydi0uNzA3aC00djRoLjcwOFY3LjY4MmgzLjI5MnoiLz48L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUgNiAzLjcwNykiPjx1c2UgZmlsbD0iI0Q4RDhEOCIgeGxpbms6aHJlZj0iI2MiLz48cGF0aCBzdHJva2U9IiMwMDAiIGQ9Ik04IDIuNDE0di0uNzA3SDR2NGguNzA3VjIuNDE0SDh6Ii8+PC9nPjwvZz48L3N2Zz4=) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-not-allowed {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMwMDAiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBjeD0iNiIgY3k9IjYiIHI9IjQiLz48cGF0aCBkPSJNOC41IDMuNUwzLjQwMSA4LjU5OSIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIvPjwvZz48L3N2Zz4=) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-paste {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMwMDAiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTIuNSAyLjVoN3Y3aC03eiIvPjxwYXRoIGQ9Ik02LjUgMS41aC0xdjJoLTF2MWgzdi0xaC0xdi0yeiIvPjwvZz48L3N2Zz4=) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-pin {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0zIDJoNnYxSDh2NGwyIDFIN2wtMSAzLTEtM0gybDItMVYzSDN6Ii8+PHBhdGggZmlsbC1vcGFjaXR5PSIuNSIgZmlsbD0iI0ZGRiIgZD0iTTUgM2gxdjRINXoiLz48cGF0aCBmaWxsLW9wYWNpdHk9Ii4yOCIgZmlsbD0iI0ZGRiIgZD0iTTQgM2gxdjNINHoiLz48L2c+PC9zdmc+) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-pivot {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMwMDAiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHJlY3QgeD0iMS41IiB5PSIxLjUiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHJ4PSIxIi8+PHBhdGggZD0iTTEwLjUgMy41aC05bTItMnY5IiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIi8+PHBhdGggZD0iTTcuNSA2LjVsMS0xIDEgMW0tMyAxbC0xIDEgMSAxIi8+PHBhdGggZD0iTTguNSA1LjV2M2gtMyIvPjwvZz48L3N2Zz4=) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-plus {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik01IDJoMnY4SDV6Ii8+PHBhdGggZD0iTTIgNWg4djJIMnoiLz48L2c+PC9zdmc+) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-right {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik00LjUgMS41aDJ2OWgtMnoiLz48cGF0aCBkPSJNOS45OTMgNC43VjIuOTkzaC02djZINS43VjQuN2g0LjI5M3oiIGlkPSJiIi8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoOTAgNS41IDYpIj48dXNlIGZpbGw9IiNEOEQ4RDgiIHhsaW5rOmhyZWY9IiNhIi8+PHBhdGggc3Ryb2tlPSIjMDAwIiBkPSJNNSAyaDF2OEg1eiIvPjwvZz48ZyB0cmFuc2Zvcm09InNjYWxlKC0xIDEpIHJvdGF0ZSgtNDUgMCAyMi44NzQpIj48dXNlIGZpbGw9IiNEOEQ4RDgiIHhsaW5rOmhyZWY9IiNiIi8+PHBhdGggc3Ryb2tlPSIjMDAwIiBkPSJNOS40OTMgNC4ydi0uNzA3aC01djVINS4yVjQuMmg0LjI5M3oiLz48L2c+PC9nPjwvc3ZnPg==) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-small-left {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMyA2bDQtNHY4eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-small-right {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNSAybDQgNC00IDR6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-small-up {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMiA3bDQtNCA0IDR6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-small-down {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMiA1aDhMNiA5eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-tick {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMS41IDUuNWwzIDMgNi02IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iIzAwMCIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-cross {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMiAxMGw4LThtMCA4TDIgMiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48L3N2Zz4=) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-tree-open {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMiA1aDhMNiA5eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-tree-closed {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNSAybDQgNC00IDR6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.ag-icon-tree-indeterminate {\n  display: inline-block;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMiA1aDh2MkgyeiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+) center no-repeat;\n  background-size: 12px 12px;\n  -webkit-filter: \"initial\";\n  filter: \"initial\";\n  height: 12px;\n  width: 12px; }\n\n.loading-filter {\n  background-color: #e6e6e6;\n  height: 100%;\n  padding: 5px;\n  position: absolute;\n  top: 34px;\n  width: 100%;\n  z-index: 1; }\n\n.ag-details-row {\n  height: 100%;\n  width: 100%; }\n\n.ag-details-grid {\n  height: 100%;\n  width: 100%; }\n\n.ag-column-select-header {\n  display: flex;\n  flex-direction: row; }\n\n.ag-ltr .ag-toolpanel-indent-1 {\n  padding-left: 10px; }\n\n.ag-rtl .ag-toolpanel-indent-1 {\n  padding-right: 10px; }\n\n.ag-ltr .ag-row-group-indent-1 {\n  padding-left: 10px; }\n\n.ag-rtl .ag-row-group-indent-1 {\n  padding-right: 10px; }\n\n.ag-ltr .ag-toolpanel-indent-2 {\n  padding-left: 20px; }\n\n.ag-rtl .ag-toolpanel-indent-2 {\n  padding-right: 20px; }\n\n.ag-ltr .ag-row-group-indent-2 {\n  padding-left: 20px; }\n\n.ag-rtl .ag-row-group-indent-2 {\n  padding-right: 20px; }\n\n.ag-ltr .ag-toolpanel-indent-3 {\n  padding-left: 30px; }\n\n.ag-rtl .ag-toolpanel-indent-3 {\n  padding-right: 30px; }\n\n.ag-ltr .ag-row-group-indent-3 {\n  padding-left: 30px; }\n\n.ag-rtl .ag-row-group-indent-3 {\n  padding-right: 30px; }\n\n.ag-ltr .ag-toolpanel-indent-4 {\n  padding-left: 40px; }\n\n.ag-rtl .ag-toolpanel-indent-4 {\n  padding-right: 40px; }\n\n.ag-ltr .ag-row-group-indent-4 {\n  padding-left: 40px; }\n\n.ag-rtl .ag-row-group-indent-4 {\n  padding-right: 40px; }\n\n.ag-ltr .ag-toolpanel-indent-5 {\n  padding-left: 50px; }\n\n.ag-rtl .ag-toolpanel-indent-5 {\n  padding-right: 50px; }\n\n.ag-ltr .ag-row-group-indent-5 {\n  padding-left: 50px; }\n\n.ag-rtl .ag-row-group-indent-5 {\n  padding-right: 50px; }\n\n.ag-ltr .ag-toolpanel-indent-6 {\n  padding-left: 60px; }\n\n.ag-rtl .ag-toolpanel-indent-6 {\n  padding-right: 60px; }\n\n.ag-ltr .ag-row-group-indent-6 {\n  padding-left: 60px; }\n\n.ag-rtl .ag-row-group-indent-6 {\n  padding-right: 60px; }\n\n.ag-ltr .ag-toolpanel-indent-7 {\n  padding-left: 70px; }\n\n.ag-rtl .ag-toolpanel-indent-7 {\n  padding-right: 70px; }\n\n.ag-ltr .ag-row-group-indent-7 {\n  padding-left: 70px; }\n\n.ag-rtl .ag-row-group-indent-7 {\n  padding-right: 70px; }\n\n.ag-ltr .ag-toolpanel-indent-8 {\n  padding-left: 80px; }\n\n.ag-rtl .ag-toolpanel-indent-8 {\n  padding-right: 80px; }\n\n.ag-ltr .ag-row-group-indent-8 {\n  padding-left: 80px; }\n\n.ag-rtl .ag-row-group-indent-8 {\n  padding-right: 80px; }\n\n.ag-ltr .ag-toolpanel-indent-9 {\n  padding-left: 90px; }\n\n.ag-rtl .ag-toolpanel-indent-9 {\n  padding-right: 90px; }\n\n.ag-ltr .ag-row-group-indent-9 {\n  padding-left: 90px; }\n\n.ag-rtl .ag-row-group-indent-9 {\n  padding-right: 90px; }\n\n.ag-ltr .ag-toolpanel-indent-10 {\n  padding-left: 100px; }\n\n.ag-rtl .ag-toolpanel-indent-10 {\n  padding-right: 100px; }\n\n.ag-ltr .ag-row-group-indent-10 {\n  padding-left: 100px; }\n\n.ag-rtl .ag-row-group-indent-10 {\n  padding-right: 100px; }\n\n.ag-ltr .ag-toolpanel-indent-11 {\n  padding-left: 110px; }\n\n.ag-rtl .ag-toolpanel-indent-11 {\n  padding-right: 110px; }\n\n.ag-ltr .ag-row-group-indent-11 {\n  padding-left: 110px; }\n\n.ag-rtl .ag-row-group-indent-11 {\n  padding-right: 110px; }\n\n.ag-ltr .ag-toolpanel-indent-12 {\n  padding-left: 120px; }\n\n.ag-rtl .ag-toolpanel-indent-12 {\n  padding-right: 120px; }\n\n.ag-ltr .ag-row-group-indent-12 {\n  padding-left: 120px; }\n\n.ag-rtl .ag-row-group-indent-12 {\n  padding-right: 120px; }\n\n.ag-ltr .ag-toolpanel-indent-13 {\n  padding-left: 130px; }\n\n.ag-rtl .ag-toolpanel-indent-13 {\n  padding-right: 130px; }\n\n.ag-ltr .ag-row-group-indent-13 {\n  padding-left: 130px; }\n\n.ag-rtl .ag-row-group-indent-13 {\n  padding-right: 130px; }\n\n.ag-ltr .ag-toolpanel-indent-14 {\n  padding-left: 140px; }\n\n.ag-rtl .ag-toolpanel-indent-14 {\n  padding-right: 140px; }\n\n.ag-ltr .ag-row-group-indent-14 {\n  padding-left: 140px; }\n\n.ag-rtl .ag-row-group-indent-14 {\n  padding-right: 140px; }\n\n.ag-ltr .ag-toolpanel-indent-15 {\n  padding-left: 150px; }\n\n.ag-rtl .ag-toolpanel-indent-15 {\n  padding-right: 150px; }\n\n.ag-ltr .ag-row-group-indent-15 {\n  padding-left: 150px; }\n\n.ag-rtl .ag-row-group-indent-15 {\n  padding-right: 150px; }\n\n.ag-ltr .ag-toolpanel-indent-16 {\n  padding-left: 160px; }\n\n.ag-rtl .ag-toolpanel-indent-16 {\n  padding-right: 160px; }\n\n.ag-ltr .ag-row-group-indent-16 {\n  padding-left: 160px; }\n\n.ag-rtl .ag-row-group-indent-16 {\n  padding-right: 160px; }\n\n.ag-ltr .ag-toolpanel-indent-17 {\n  padding-left: 170px; }\n\n.ag-rtl .ag-toolpanel-indent-17 {\n  padding-right: 170px; }\n\n.ag-ltr .ag-row-group-indent-17 {\n  padding-left: 170px; }\n\n.ag-rtl .ag-row-group-indent-17 {\n  padding-right: 170px; }\n\n.ag-ltr .ag-toolpanel-indent-18 {\n  padding-left: 180px; }\n\n.ag-rtl .ag-toolpanel-indent-18 {\n  padding-right: 180px; }\n\n.ag-ltr .ag-row-group-indent-18 {\n  padding-left: 180px; }\n\n.ag-rtl .ag-row-group-indent-18 {\n  padding-right: 180px; }\n\n.ag-ltr .ag-toolpanel-indent-19 {\n  padding-left: 190px; }\n\n.ag-rtl .ag-toolpanel-indent-19 {\n  padding-right: 190px; }\n\n.ag-ltr .ag-row-group-indent-19 {\n  padding-left: 190px; }\n\n.ag-rtl .ag-row-group-indent-19 {\n  padding-right: 190px; }\n\n.ag-ltr .ag-toolpanel-indent-20 {\n  padding-left: 200px; }\n\n.ag-rtl .ag-toolpanel-indent-20 {\n  padding-right: 200px; }\n\n.ag-ltr .ag-row-group-indent-20 {\n  padding-left: 200px; }\n\n.ag-rtl .ag-row-group-indent-20 {\n  padding-right: 200px; }\n\n.ag-ltr .ag-toolpanel-indent-21 {\n  padding-left: 210px; }\n\n.ag-rtl .ag-toolpanel-indent-21 {\n  padding-right: 210px; }\n\n.ag-ltr .ag-row-group-indent-21 {\n  padding-left: 210px; }\n\n.ag-rtl .ag-row-group-indent-21 {\n  padding-right: 210px; }\n\n.ag-ltr .ag-toolpanel-indent-22 {\n  padding-left: 220px; }\n\n.ag-rtl .ag-toolpanel-indent-22 {\n  padding-right: 220px; }\n\n.ag-ltr .ag-row-group-indent-22 {\n  padding-left: 220px; }\n\n.ag-rtl .ag-row-group-indent-22 {\n  padding-right: 220px; }\n\n.ag-ltr .ag-toolpanel-indent-23 {\n  padding-left: 230px; }\n\n.ag-rtl .ag-toolpanel-indent-23 {\n  padding-right: 230px; }\n\n.ag-ltr .ag-row-group-indent-23 {\n  padding-left: 230px; }\n\n.ag-rtl .ag-row-group-indent-23 {\n  padding-right: 230px; }\n\n.ag-ltr .ag-toolpanel-indent-24 {\n  padding-left: 240px; }\n\n.ag-rtl .ag-toolpanel-indent-24 {\n  padding-right: 240px; }\n\n.ag-ltr .ag-row-group-indent-24 {\n  padding-left: 240px; }\n\n.ag-rtl .ag-row-group-indent-24 {\n  padding-right: 240px; }\n\n.ag-ltr .ag-toolpanel-indent-25 {\n  padding-left: 250px; }\n\n.ag-rtl .ag-toolpanel-indent-25 {\n  padding-right: 250px; }\n\n.ag-ltr .ag-row-group-indent-25 {\n  padding-left: 250px; }\n\n.ag-rtl .ag-row-group-indent-25 {\n  padding-right: 250px; }\n\n.ag-ltr .ag-toolpanel-indent-26 {\n  padding-left: 260px; }\n\n.ag-rtl .ag-toolpanel-indent-26 {\n  padding-right: 260px; }\n\n.ag-ltr .ag-row-group-indent-26 {\n  padding-left: 260px; }\n\n.ag-rtl .ag-row-group-indent-26 {\n  padding-right: 260px; }\n\n.ag-ltr .ag-toolpanel-indent-27 {\n  padding-left: 270px; }\n\n.ag-rtl .ag-toolpanel-indent-27 {\n  padding-right: 270px; }\n\n.ag-ltr .ag-row-group-indent-27 {\n  padding-left: 270px; }\n\n.ag-rtl .ag-row-group-indent-27 {\n  padding-right: 270px; }\n\n.ag-ltr .ag-toolpanel-indent-28 {\n  padding-left: 280px; }\n\n.ag-rtl .ag-toolpanel-indent-28 {\n  padding-right: 280px; }\n\n.ag-ltr .ag-row-group-indent-28 {\n  padding-left: 280px; }\n\n.ag-rtl .ag-row-group-indent-28 {\n  padding-right: 280px; }\n\n.ag-ltr .ag-toolpanel-indent-29 {\n  padding-left: 290px; }\n\n.ag-rtl .ag-toolpanel-indent-29 {\n  padding-right: 290px; }\n\n.ag-ltr .ag-row-group-indent-29 {\n  padding-left: 290px; }\n\n.ag-rtl .ag-row-group-indent-29 {\n  padding-right: 290px; }\n\n.ag-ltr .ag-toolpanel-indent-30 {\n  padding-left: 300px; }\n\n.ag-rtl .ag-toolpanel-indent-30 {\n  padding-right: 300px; }\n\n.ag-ltr .ag-row-group-indent-30 {\n  padding-left: 300px; }\n\n.ag-rtl .ag-row-group-indent-30 {\n  padding-right: 300px; }\n\n.ag-ltr .ag-toolpanel-indent-31 {\n  padding-left: 310px; }\n\n.ag-rtl .ag-toolpanel-indent-31 {\n  padding-right: 310px; }\n\n.ag-ltr .ag-row-group-indent-31 {\n  padding-left: 310px; }\n\n.ag-rtl .ag-row-group-indent-31 {\n  padding-right: 310px; }\n\n.ag-ltr .ag-toolpanel-indent-32 {\n  padding-left: 320px; }\n\n.ag-rtl .ag-toolpanel-indent-32 {\n  padding-right: 320px; }\n\n.ag-ltr .ag-row-group-indent-32 {\n  padding-left: 320px; }\n\n.ag-rtl .ag-row-group-indent-32 {\n  padding-right: 320px; }\n\n.ag-ltr .ag-toolpanel-indent-33 {\n  padding-left: 330px; }\n\n.ag-rtl .ag-toolpanel-indent-33 {\n  padding-right: 330px; }\n\n.ag-ltr .ag-row-group-indent-33 {\n  padding-left: 330px; }\n\n.ag-rtl .ag-row-group-indent-33 {\n  padding-right: 330px; }\n\n.ag-ltr .ag-toolpanel-indent-34 {\n  padding-left: 340px; }\n\n.ag-rtl .ag-toolpanel-indent-34 {\n  padding-right: 340px; }\n\n.ag-ltr .ag-row-group-indent-34 {\n  padding-left: 340px; }\n\n.ag-rtl .ag-row-group-indent-34 {\n  padding-right: 340px; }\n\n.ag-ltr .ag-toolpanel-indent-35 {\n  padding-left: 350px; }\n\n.ag-rtl .ag-toolpanel-indent-35 {\n  padding-right: 350px; }\n\n.ag-ltr .ag-row-group-indent-35 {\n  padding-left: 350px; }\n\n.ag-rtl .ag-row-group-indent-35 {\n  padding-right: 350px; }\n\n.ag-ltr .ag-toolpanel-indent-36 {\n  padding-left: 360px; }\n\n.ag-rtl .ag-toolpanel-indent-36 {\n  padding-right: 360px; }\n\n.ag-ltr .ag-row-group-indent-36 {\n  padding-left: 360px; }\n\n.ag-rtl .ag-row-group-indent-36 {\n  padding-right: 360px; }\n\n.ag-ltr .ag-toolpanel-indent-37 {\n  padding-left: 370px; }\n\n.ag-rtl .ag-toolpanel-indent-37 {\n  padding-right: 370px; }\n\n.ag-ltr .ag-row-group-indent-37 {\n  padding-left: 370px; }\n\n.ag-rtl .ag-row-group-indent-37 {\n  padding-right: 370px; }\n\n.ag-ltr .ag-toolpanel-indent-38 {\n  padding-left: 380px; }\n\n.ag-rtl .ag-toolpanel-indent-38 {\n  padding-right: 380px; }\n\n.ag-ltr .ag-row-group-indent-38 {\n  padding-left: 380px; }\n\n.ag-rtl .ag-row-group-indent-38 {\n  padding-right: 380px; }\n\n.ag-ltr .ag-toolpanel-indent-39 {\n  padding-left: 390px; }\n\n.ag-rtl .ag-toolpanel-indent-39 {\n  padding-right: 390px; }\n\n.ag-ltr .ag-row-group-indent-39 {\n  padding-left: 390px; }\n\n.ag-rtl .ag-row-group-indent-39 {\n  padding-right: 390px; }\n\n.ag-ltr .ag-toolpanel-indent-40 {\n  padding-left: 400px; }\n\n.ag-rtl .ag-toolpanel-indent-40 {\n  padding-right: 400px; }\n\n.ag-ltr .ag-row-group-indent-40 {\n  padding-left: 400px; }\n\n.ag-rtl .ag-row-group-indent-40 {\n  padding-right: 400px; }\n\n.ag-ltr .ag-toolpanel-indent-41 {\n  padding-left: 410px; }\n\n.ag-rtl .ag-toolpanel-indent-41 {\n  padding-right: 410px; }\n\n.ag-ltr .ag-row-group-indent-41 {\n  padding-left: 410px; }\n\n.ag-rtl .ag-row-group-indent-41 {\n  padding-right: 410px; }\n\n.ag-ltr .ag-toolpanel-indent-42 {\n  padding-left: 420px; }\n\n.ag-rtl .ag-toolpanel-indent-42 {\n  padding-right: 420px; }\n\n.ag-ltr .ag-row-group-indent-42 {\n  padding-left: 420px; }\n\n.ag-rtl .ag-row-group-indent-42 {\n  padding-right: 420px; }\n\n.ag-ltr .ag-toolpanel-indent-43 {\n  padding-left: 430px; }\n\n.ag-rtl .ag-toolpanel-indent-43 {\n  padding-right: 430px; }\n\n.ag-ltr .ag-row-group-indent-43 {\n  padding-left: 430px; }\n\n.ag-rtl .ag-row-group-indent-43 {\n  padding-right: 430px; }\n\n.ag-ltr .ag-toolpanel-indent-44 {\n  padding-left: 440px; }\n\n.ag-rtl .ag-toolpanel-indent-44 {\n  padding-right: 440px; }\n\n.ag-ltr .ag-row-group-indent-44 {\n  padding-left: 440px; }\n\n.ag-rtl .ag-row-group-indent-44 {\n  padding-right: 440px; }\n\n.ag-ltr .ag-toolpanel-indent-45 {\n  padding-left: 450px; }\n\n.ag-rtl .ag-toolpanel-indent-45 {\n  padding-right: 450px; }\n\n.ag-ltr .ag-row-group-indent-45 {\n  padding-left: 450px; }\n\n.ag-rtl .ag-row-group-indent-45 {\n  padding-right: 450px; }\n\n.ag-ltr .ag-toolpanel-indent-46 {\n  padding-left: 460px; }\n\n.ag-rtl .ag-toolpanel-indent-46 {\n  padding-right: 460px; }\n\n.ag-ltr .ag-row-group-indent-46 {\n  padding-left: 460px; }\n\n.ag-rtl .ag-row-group-indent-46 {\n  padding-right: 460px; }\n\n.ag-ltr .ag-toolpanel-indent-47 {\n  padding-left: 470px; }\n\n.ag-rtl .ag-toolpanel-indent-47 {\n  padding-right: 470px; }\n\n.ag-ltr .ag-row-group-indent-47 {\n  padding-left: 470px; }\n\n.ag-rtl .ag-row-group-indent-47 {\n  padding-right: 470px; }\n\n.ag-ltr .ag-toolpanel-indent-48 {\n  padding-left: 480px; }\n\n.ag-rtl .ag-toolpanel-indent-48 {\n  padding-right: 480px; }\n\n.ag-ltr .ag-row-group-indent-48 {\n  padding-left: 480px; }\n\n.ag-rtl .ag-row-group-indent-48 {\n  padding-right: 480px; }\n\n.ag-ltr .ag-toolpanel-indent-49 {\n  padding-left: 490px; }\n\n.ag-rtl .ag-toolpanel-indent-49 {\n  padding-right: 490px; }\n\n.ag-ltr .ag-row-group-indent-49 {\n  padding-left: 490px; }\n\n.ag-rtl .ag-row-group-indent-49 {\n  padding-right: 490px; }\n\n.ag-tool-panel {\n  display: flex;\n  flex-direction: row-reverse;\n  box-sizing: border-box; }\n\n.ag-tool-panel .ag-side-buttons {\n    width: 20px; }\n\n.ag-tool-panel .ag-side-buttons button {\n      display: block;\n      -webkit-transform: rotate(90deg) translateY(-20px);\n      transform: rotate(90deg) translateY(-20px);\n      -webkit-transform-origin: left top 0;\n      transform-origin: left top 0;\n      white-space: nowrap;\n      outline: none; }\n\n.ag-tool-panel .panel-container {\n    width: 180px; }\n\n.ag-tool-panel.full-width .panel-container {\n    width: 200px; }\n\n.ag-rtl .ag-tool-panel .ag-side-buttons button {\n  -webkit-transform: rotate(-90deg) translatex(20px);\n  transform: rotate(-90deg) translatex(20px);\n  -webkit-transform-origin: right bottom 0;\n  transform-origin: right bottom 0; }\n\n.ag-row-inline-editing {\n  z-index: 1; }\n\n.ag-theme-balham {\n  background-color: white;\n  color: #000;\n  font: 400 12px -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif; }\n\n.ag-theme-balham .ag-header,\n  .ag-theme-balham .ag-row,\n  .ag-theme-balham .ag-header-cell,\n  .ag-theme-balham .ag-header-group-cell,\n  .ag-theme-balham .ag-rich-select-value,\n  .ag-theme-balham .ag-root {\n    box-sizing: border-box; }\n\n.ag-theme-balham .ag-menu, .ag-theme-balham .ag-theme-balham.ag-dnd-ghost, .ag-theme-balham .ag-cell-inline-editing, .ag-theme-balham .ag-popup-editor, .ag-theme-balham .ag-select-agg-func-popup, .ag-theme-balham .ag-overlay-loading-center {\n    border: 1px solid #BDC3C7; }\n\n.ag-theme-balham .ag-tab-header .ag-tab {\n    border: 1px solid transparent;\n    border-bottom-width: 0;\n    display: inline-block;\n    margin: 4px;\n    margin-bottom: 0;\n    padding: 4px 8px; }\n\n.ag-theme-balham .ag-tab-header .ag-tab.ag-tab-selected {\n    background-color: white;\n    border-bottom: 2px solid #0091EA;\n    border-bottom: 2px solid white;\n    border-color: #BDC3C7; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-1 {\n    padding-left: 20px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-1 {\n    padding-right: 20px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-1 {\n    padding-left: 28px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-1 {\n    padding-right: 28px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-2 {\n    padding-left: 40px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-2 {\n    padding-right: 40px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-2 {\n    padding-left: 56px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-2 {\n    padding-right: 56px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-3 {\n    padding-left: 60px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-3 {\n    padding-right: 60px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-3 {\n    padding-left: 84px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-3 {\n    padding-right: 84px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-4 {\n    padding-left: 80px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-4 {\n    padding-right: 80px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-4 {\n    padding-left: 112px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-4 {\n    padding-right: 112px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-5 {\n    padding-left: 100px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-5 {\n    padding-right: 100px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-5 {\n    padding-left: 140px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-5 {\n    padding-right: 140px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-6 {\n    padding-left: 120px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-6 {\n    padding-right: 120px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-6 {\n    padding-left: 168px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-6 {\n    padding-right: 168px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-7 {\n    padding-left: 140px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-7 {\n    padding-right: 140px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-7 {\n    padding-left: 196px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-7 {\n    padding-right: 196px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-8 {\n    padding-left: 160px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-8 {\n    padding-right: 160px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-8 {\n    padding-left: 224px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-8 {\n    padding-right: 224px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-9 {\n    padding-left: 180px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-9 {\n    padding-right: 180px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-9 {\n    padding-left: 252px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-9 {\n    padding-right: 252px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-10 {\n    padding-left: 200px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-10 {\n    padding-right: 200px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-10 {\n    padding-left: 280px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-10 {\n    padding-right: 280px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-11 {\n    padding-left: 220px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-11 {\n    padding-right: 220px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-11 {\n    padding-left: 308px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-11 {\n    padding-right: 308px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-12 {\n    padding-left: 240px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-12 {\n    padding-right: 240px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-12 {\n    padding-left: 336px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-12 {\n    padding-right: 336px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-13 {\n    padding-left: 260px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-13 {\n    padding-right: 260px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-13 {\n    padding-left: 364px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-13 {\n    padding-right: 364px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-14 {\n    padding-left: 280px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-14 {\n    padding-right: 280px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-14 {\n    padding-left: 392px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-14 {\n    padding-right: 392px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-15 {\n    padding-left: 300px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-15 {\n    padding-right: 300px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-15 {\n    padding-left: 420px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-15 {\n    padding-right: 420px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-16 {\n    padding-left: 320px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-16 {\n    padding-right: 320px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-16 {\n    padding-left: 448px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-16 {\n    padding-right: 448px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-17 {\n    padding-left: 340px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-17 {\n    padding-right: 340px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-17 {\n    padding-left: 476px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-17 {\n    padding-right: 476px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-18 {\n    padding-left: 360px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-18 {\n    padding-right: 360px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-18 {\n    padding-left: 504px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-18 {\n    padding-right: 504px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-19 {\n    padding-left: 380px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-19 {\n    padding-right: 380px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-19 {\n    padding-left: 532px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-19 {\n    padding-right: 532px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-20 {\n    padding-left: 400px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-20 {\n    padding-right: 400px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-20 {\n    padding-left: 560px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-20 {\n    padding-right: 560px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-21 {\n    padding-left: 420px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-21 {\n    padding-right: 420px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-21 {\n    padding-left: 588px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-21 {\n    padding-right: 588px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-22 {\n    padding-left: 440px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-22 {\n    padding-right: 440px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-22 {\n    padding-left: 616px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-22 {\n    padding-right: 616px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-23 {\n    padding-left: 460px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-23 {\n    padding-right: 460px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-23 {\n    padding-left: 644px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-23 {\n    padding-right: 644px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-24 {\n    padding-left: 480px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-24 {\n    padding-right: 480px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-24 {\n    padding-left: 672px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-24 {\n    padding-right: 672px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-25 {\n    padding-left: 500px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-25 {\n    padding-right: 500px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-25 {\n    padding-left: 700px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-25 {\n    padding-right: 700px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-26 {\n    padding-left: 520px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-26 {\n    padding-right: 520px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-26 {\n    padding-left: 728px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-26 {\n    padding-right: 728px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-27 {\n    padding-left: 540px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-27 {\n    padding-right: 540px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-27 {\n    padding-left: 756px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-27 {\n    padding-right: 756px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-28 {\n    padding-left: 560px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-28 {\n    padding-right: 560px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-28 {\n    padding-left: 784px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-28 {\n    padding-right: 784px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-29 {\n    padding-left: 580px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-29 {\n    padding-right: 580px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-29 {\n    padding-left: 812px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-29 {\n    padding-right: 812px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-30 {\n    padding-left: 600px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-30 {\n    padding-right: 600px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-30 {\n    padding-left: 840px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-30 {\n    padding-right: 840px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-31 {\n    padding-left: 620px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-31 {\n    padding-right: 620px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-31 {\n    padding-left: 868px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-31 {\n    padding-right: 868px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-32 {\n    padding-left: 640px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-32 {\n    padding-right: 640px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-32 {\n    padding-left: 896px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-32 {\n    padding-right: 896px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-33 {\n    padding-left: 660px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-33 {\n    padding-right: 660px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-33 {\n    padding-left: 924px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-33 {\n    padding-right: 924px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-34 {\n    padding-left: 680px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-34 {\n    padding-right: 680px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-34 {\n    padding-left: 952px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-34 {\n    padding-right: 952px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-35 {\n    padding-left: 700px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-35 {\n    padding-right: 700px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-35 {\n    padding-left: 980px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-35 {\n    padding-right: 980px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-36 {\n    padding-left: 720px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-36 {\n    padding-right: 720px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-36 {\n    padding-left: 1008px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-36 {\n    padding-right: 1008px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-37 {\n    padding-left: 740px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-37 {\n    padding-right: 740px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-37 {\n    padding-left: 1036px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-37 {\n    padding-right: 1036px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-38 {\n    padding-left: 760px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-38 {\n    padding-right: 760px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-38 {\n    padding-left: 1064px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-38 {\n    padding-right: 1064px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-39 {\n    padding-left: 780px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-39 {\n    padding-right: 780px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-39 {\n    padding-left: 1092px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-39 {\n    padding-right: 1092px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-40 {\n    padding-left: 800px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-40 {\n    padding-right: 800px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-40 {\n    padding-left: 1120px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-40 {\n    padding-right: 1120px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-41 {\n    padding-left: 820px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-41 {\n    padding-right: 820px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-41 {\n    padding-left: 1148px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-41 {\n    padding-right: 1148px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-42 {\n    padding-left: 840px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-42 {\n    padding-right: 840px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-42 {\n    padding-left: 1176px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-42 {\n    padding-right: 1176px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-43 {\n    padding-left: 860px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-43 {\n    padding-right: 860px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-43 {\n    padding-left: 1204px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-43 {\n    padding-right: 1204px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-44 {\n    padding-left: 880px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-44 {\n    padding-right: 880px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-44 {\n    padding-left: 1232px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-44 {\n    padding-right: 1232px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-45 {\n    padding-left: 900px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-45 {\n    padding-right: 900px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-45 {\n    padding-left: 1260px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-45 {\n    padding-right: 1260px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-46 {\n    padding-left: 920px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-46 {\n    padding-right: 920px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-46 {\n    padding-left: 1288px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-46 {\n    padding-right: 1288px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-47 {\n    padding-left: 940px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-47 {\n    padding-right: 940px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-47 {\n    padding-left: 1316px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-47 {\n    padding-right: 1316px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-48 {\n    padding-left: 960px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-48 {\n    padding-right: 960px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-48 {\n    padding-left: 1344px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-48 {\n    padding-right: 1344px; }\n\n.ag-theme-balham .ag-ltr .ag-toolpanel-indent-49 {\n    padding-left: 980px; }\n\n.ag-theme-balham .ag-rtl .ag-toolpanel-indent-49 {\n    padding-right: 980px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-49 {\n    padding-left: 1372px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-49 {\n    padding-right: 1372px; }\n\n.ag-theme-balham .ag-ltr .ag-row-group-leaf-indent {\n    margin-left: 28px; }\n\n.ag-theme-balham .ag-rtl .ag-row-group-leaf-indent {\n    margin-right: 28px; }\n\n.ag-theme-balham .ag-rtl .ag-cell-first-right-pinned {\n    border-left: 1px solid #BDC3C7; }\n\n.ag-theme-balham .ag-ltr .ag-cell-first-right-pinned {\n    border-left: 1px solid #BDC3C7; }\n\n.ag-theme-balham .ag-rtl .ag-cell-last-left-pinned {\n    border-right: 1px solid #BDC3C7; }\n\n.ag-theme-balham .ag-ltr .ag-cell-last-left-pinned {\n    border-right: 1px solid #BDC3C7; }\n\n.ag-theme-balham .ag-value-change-delta {\n    padding-right: 2px; }\n\n.ag-theme-balham .ag-value-change-delta-up {\n    color: #43a047; }\n\n.ag-theme-balham .ag-value-change-delta-down {\n    color: #e53935; }\n\n.ag-theme-balham .ag-value-change-value {\n    background-color: transparent;\n    border-radius: 1px;\n    padding-left: 1px;\n    padding-right: 1px;\n    transition: background-color 1s; }\n\n.ag-theme-balham .ag-value-change-value-highlight {\n    background-color: rgba(22, 160, 133, 0.5);\n    transition: background-color 0.1s; }\n\n.ag-theme-balham .ag-header {\n    background-color: #f5f7f7;\n    color: rgba(0, 0, 0, 0.54);\n    font: 600 12px -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif; }\n\n.ag-theme-balham .ag-header-row {\n    border-bottom: 1px solid #BDC3C7;\n    box-sizing: border-box; }\n\n.ag-theme-balham .ag-row {\n    border-bottom: 1px solid #BDC3C7;\n    box-sizing: border-box; }\n\n.ag-theme-balham .ag-row-odd {\n    background-color: #fcfdfe; }\n\n.ag-theme-balham .ag-row-even {\n    background-color: white; }\n\n.ag-theme-balham .ag-row-hover {\n    background-color: #ECF0F1; }\n\n.ag-theme-balham .ag-numeric-cell {\n    text-align: right; }\n\n.ag-theme-balham .ag-header-cell-label {\n    display: flex;\n    float: left;\n    height: 100%;\n    width: calc(100% - 16px); }\n\n.ag-theme-balham .ag-header-cell-label span {\n      height: 100%; }\n\n.ag-theme-balham .ag-header-cell-label > span {\n      float: left; }\n\n.ag-theme-balham .ag-header-cell-label .ag-header-icon {\n      background-position-y: 10px;\n      background-size: 14px 14px;\n      height: 100%;\n      margin: 0;\n      margin-left: 4px;\n      opacity: 0.87; }\n\n.ag-theme-balham .ag-header-cell-label .ag-header-cell-text {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap; }\n\n.ag-theme-balham .ag-numeric-header .ag-header-cell-label {\n    flex-direction: row-reverse;\n    float: right; }\n\n.ag-theme-balham .ag-numeric-header .ag-header-cell-label > span {\n      float: right; }\n\n.ag-theme-balham .ag-numeric-header .ag-header-cell-menu-button {\n    float: left; }\n\n.ag-theme-balham .ag-header-group-text {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n\n.ag-theme-balham .ag-header-cell,\n  .ag-theme-balham .ag-header-group-cell {\n    line-height: 32px;\n    padding-left: 12px;\n    padding-right: 12px; }\n\n.ag-theme-balham .ag-cell {\n    line-height: 26px;\n    padding-left: 12px;\n    padding-right: 12px;\n    border: 1px solid transparent;\n    padding-left: 11px;\n    padding-right: 11px; }\n\n.ag-theme-balham .ag-row-drag {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMy41IDIuNXYxbTAgMnYxbTAgMnYxbTMtN3YxbTAgMnYxbTAgMnYxbTMtN3YxbTAgMnYxbTAgMnYxbTMtN3YxbTAgMnYxbTAgMnYxIiBzdHJva2U9IiM3RjhDOEQiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiLz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    background-position-x: left;\n    background-position-y: 4px;\n    float: left;\n    height: 100%;\n    width: 28px; }\n\n.ag-theme-balham .ag-column-drag {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMy41IDIuNXYxbTAgMnYxbTAgMnYxbTMtN3YxbTAgMnYxbTAgMnYxbTMtN3YxbTAgMnYxbTAgMnYxbTMtN3YxbTAgMnYxbTAgMnYxIiBzdHJva2U9IiM3RjhDOEQiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiLz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    background-position-x: left;\n    background-position-y: 4px !important;\n    height: 100%;\n    min-width: 20px; }\n\n.ag-theme-balham .ag-row-dragging {\n    opacity: 0.5;\n    z-index: 10000; }\n\n.ag-theme-balham .ag-ltr .ag-cell-focus {\n    border: 1px solid #0091EA;\n    outline: initial; }\n\n.ag-theme-balham .ag-rtl .ag-cell-focus {\n    border: 1px solid #0091EA;\n    outline: initial; }\n\n.ag-theme-balham .ag-header-cell-resize {\n    position: absolute;\n    right: -4px;\n    width: 8px;\n    z-index: 4; }\n\n.ag-theme-balham .ag-header-cell-resize::after {\n      border-right: 1px solid #BDC3C7;\n      box-sizing: content-box;\n      content: \"resize\";\n      display: block;\n      height: 16px;\n      margin-top: 8px;\n      overflow: hidden;\n      text-indent: 4px;\n      width: 4px; }\n\n.ag-theme-balham .ag-icon-aggregation {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiM3RjhDOEQiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTEwLjUgNlY0LjVoLTV2LjUzMmExIDEgMCAwIDAgLjM2Ljc2OGwxLjcxOCAxLjQzMmExIDEgMCAwIDEgMCAxLjUzNkw1Ljg2IDEwLjJhMSAxIDAgMCAwLS4zNi43Njh2LjUzMmg1VjEwIi8+PHJlY3QgeD0iMS41IiB5PSIxLjUiIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMyIgcng9IjIiLz48L2c+PC9zdmc+);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-arrows {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNy41IDE0VjNNMiA4LjVoMTFtLTcuNSA0bDIgMiAyLTJtMC04bC0yLTItMiAybS0yIDJsLTIgMiAyIDJtOCAwbDItMi0yLTIiIHN0cm9rZT0iIzdGOEM4RCIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-asc {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNy41IDEyVjRtMyAyLjVsLTMtMy0zIDMiIHN0cm9rZT0iIzdGOEM4RCIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-checkbox-checked-readonly {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHJlY3QgaWQ9ImEiIHg9IjEiIHk9IjEiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgcng9IjIiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIuNSI+PHVzZSBmaWxsPSIjRkZGIiB4bGluazpocmVmPSIjYSIvPjxyZWN0IHN0cm9rZT0iIzdGOEM4RCIgeD0iMS41IiB5PSIxLjUiIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMyIgcng9IjIiLz48cGF0aCBzdHJva2U9IiM3RjhDOEQiIGQ9Ik0xMiA1bC01LjUgNS41TDQgOCIvPjwvZz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-checkbox-checked {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHJlY3QgaWQ9ImEiIHg9IjEiIHk9IjEiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgcng9IjIiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNhIi8+PHJlY3Qgc3Ryb2tlPSIjN0Y4QzhEIiB4PSIxLjUiIHk9IjEuNSIgd2lkdGg9IjEzIiBoZWlnaHQ9IjEzIiByeD0iMiIvPjxwYXRoIHN0cm9rZT0iIzdGOEM4RCIgZD0iTTEyIDVsLTUuNSA1LjVMNCA4Ii8+PC9nPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-checkbox-indeterminate-readonly {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHJlY3QgaWQ9ImEiIHg9IjEiIHk9IjEiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgcng9IjIiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIuNSI+PHVzZSBmaWxsPSIjRkZGIiB4bGluazpocmVmPSIjYSIvPjxyZWN0IHN0cm9rZT0iIzdGOEM4RCIgeD0iMS41IiB5PSIxLjUiIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMyIgcng9IjIiLz48cGF0aCBkPSJNNCA4LjVoOCIgc3Ryb2tlPSIjN0Y4QzhEIi8+PC9nPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-checkbox-indeterminate {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHJlY3QgaWQ9ImEiIHg9IjEiIHk9IjEiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgcng9IjIiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNhIi8+PHJlY3Qgc3Ryb2tlPSIjN0Y4QzhEIiB4PSIxLjUiIHk9IjEuNSIgd2lkdGg9IjEzIiBoZWlnaHQ9IjEzIiByeD0iMiIvPjxwYXRoIGQ9Ik00IDguNWg4IiBzdHJva2U9IiM3RjhDOEQiLz48L2c+PC9zdmc+);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-checkbox-unchecked-readonly {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHJlY3QgaWQ9ImEiIHg9IjEiIHk9IjEiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgcng9IjIiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIuNSI+PHVzZSBmaWxsPSIjRkZGIiB4bGluazpocmVmPSIjYSIvPjxyZWN0IHN0cm9rZT0iIzdGOEM4RCIgeD0iMS41IiB5PSIxLjUiIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMyIgcng9IjIiLz48L2c+PC9zdmc+);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-checkbox-unchecked {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHJlY3QgaWQ9ImEiIHg9IjEiIHk9IjEiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgcng9IjIiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNhIi8+PHJlY3Qgc3Ryb2tlPSIjN0Y4QzhEIiB4PSIxLjUiIHk9IjEuNSIgd2lkdGg9IjEzIiBoZWlnaHQ9IjEzIiByeD0iMiIvPjwvZz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-column {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMy41IDMuNXY4aDN2LTh6IiBzdHJva2U9IiM3RjhDOEQiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiLz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-columns {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNi41IDMuNXY4bTMtOHY4bTMtOHY4bS05LTh2OCIgc3Ryb2tlPSIjN0Y4QzhEIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIi8+PC9zdmc+);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-contracted {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOSA0TDUgOGw0IDQiIHN0cm9rZT0iIzdGOEM4RCIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-copy {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiM3RjhDOEQiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHJlY3QgeD0iNC41IiB5PSI0LjUiIHdpZHRoPSI4IiBoZWlnaHQ9IjkiIHJ4PSIyIi8+PHBhdGggZD0iTTExIDIuNUg0LjVhMiAyIDAgMCAwLTIgMlYxMyIvPjwvZz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-cut {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNi4zNDggNC45NDhjLjE2MS0uMzUuMjUyLS43MzUuMjUyLTEuMTQ4YTIuOCAyLjggMCAxIDAtNS42IDAgMi44IDIuOCAwIDAgMCAyLjggMi44Yy40MTMgMCAuNzk4LS4wOTEgMS4xNDgtLjI1Mkw2LjYgOCA0Ljk0OCA5LjY1MkEyLjcyOCAyLjcyOCAwIDAgMCAzLjggOS40YTIuOCAyLjggMCAxIDAgMCA1LjYgMi44IDIuOCAwIDAgMCAyLjgtMi44YzAtLjQxMy0uMDkxLS43OTgtLjI1Mi0xLjE0OEw4IDkuNGw0LjkgNC45SDE1di0uN0w2LjM0OCA0Ljk0OHpNMy44IDUuMmExLjQgMS40IDAgMSAxIDAtMi44IDEuNCAxLjQgMCAwIDEgMCAyLjh6bTAgOC40YTEuNCAxLjQgMCAxIDEgMC0yLjggMS40IDEuNCAwIDAgMSAwIDIuOHpNOCA4LjM1QS4zNDcuMzQ3IDAgMCAxIDcuNjUgOGMwLS4xOTYuMTU0LS4zNS4zNS0uMzUuMTk2IDAgLjM1LjE1NC4zNS4zNSAwIC4xOTYtLjE1NC4zNS0uMzUuMzV6bTQuOS02LjY1TDguNyA1LjlsMS40IDEuNEwxNSAyLjR2LS43aC0yLjF6IiBmaWxsPSIjN0Y4QzhEIi8+PC9zdmc+);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-desc {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNy41IDExVjNtLTMgNS41bDMgMyAzLTMiIHN0cm9rZT0iIzdGOEM4RCIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-expanded {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAxMmw0LTQtNC00IiBzdHJva2U9IiM3RjhDOEQiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-eye-slash {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiM3RjhDOEQiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTggMy42MjVBNi44OTkgNi44OTkgMCAwIDAgMS41ODMgOCA2Ljg5OSA2Ljg5OSAwIDAgMCA4IDEyLjM3NSA2Ljg5OSA2Ljg5OSAwIDAgMCAxNC40MTcgOCA2Ljg5OSA2Ljg5OSAwIDAgMCA4IDMuNjI1eiIvPjxwYXRoIGQ9Ik04IDEwLjkxN2EyLjkxOCAyLjkxOCAwIDAgMSAwLTUuODM0IDIuOTE4IDIuOTE4IDAgMCAxIDAgNS44MzR6Ii8+PHBhdGggZD0iTTMuNSAzLjVsOSA5IiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIi8+PC9nPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-eye {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiM3RjhDOEQiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTggMy42MjVBNi44OTkgNi44OTkgMCAwIDAgMS41ODMgOCA2Ljg5OSA2Ljg5OSAwIDAgMCA4IDEyLjM3NSA2Ljg5OSA2Ljg5OSAwIDAgMCAxNC40MTcgOCA2Ljg5OSA2Ljg5OSAwIDAgMCA4IDMuNjI1eiIvPjxwYXRoIGQ9Ik04IDEwLjkxN2EyLjkxOCAyLjkxOCAwIDAgMSAwLTUuODM0IDIuOTE4IDIuOTE4IDAgMCAxIDAgNS44MzR6Ii8+PC9nPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-filter {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMy41IDMuNWg5di41ODZhMSAxIDAgMCAxLS4yOTMuNzA3TDkuMjkzIDcuNzA3QTEgMSAwIDAgMCA5IDguNDE0VjEwbC0yIDEuNVY4LjQxNGExIDEgMCAwIDAtLjI5My0uNzA3TDMuNzkzIDQuNzkzYTEgMSAwIDAgMS0uMjkzLS43MDdWMy41eiIgc3Ryb2tlPSIjN0Y4QzhEIiBmaWxsPSJub25lIi8+PC9zdmc+);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-group {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiM3RjhDOEQiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTMuNSA1LjVoMW0xIDJoMW0yIDBoNG0tNyAyaDFtMiAwaDRtLTYtNGg2IiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIi8+PHJlY3QgeD0iMS41IiB5PSIxLjUiIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMyIgcng9IjIiLz48L2c+PC9zdmc+);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-indeterminate {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiM3RjhDOEQiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTggNC42MjVjLTIuOTE3IDAtNS40MDguODE0LTYuNDE3IDMuMzc1IDEuMDEgMi41NiAzLjUgMy4zNzUgNi40MTcgMy4zNzVzNS40MDgtLjgxNCA2LjQxNy0zLjM3NWMtMS4wMS0yLjU2LTMuNS0zLjM3NS02LjQxNy0zLjM3NXoiLz48cGF0aCBkPSJNOCA5LjkxN0M2LjM5IDkuOTE3IDUuMDgzIDkuNjEgNS4wODMgOFM2LjM5IDYuMDgzIDggNi4wODNjMS42MSAwIDIuOTE3LjMwNyAyLjkxNyAxLjkxN1M5LjYxIDkuOTE3IDggOS45MTd6Ii8+PC9nPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-left {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMi41IDguNWw0LTRMOCA2IDYuNSA3LjVoN3YyaC03TDggMTFsLTEuNSAxLjV6IiBzdHJva2U9IiM3RjhDOEQiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-loading {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiM3RjhDOEQiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSI+PHBhdGggZD0iTTcuNSAxMC41djMiIG9wYWNpdHk9Ii44Ii8+PHBhdGggZD0iTTEwLjUgNy41aDMiIG9wYWNpdHk9Ii42Ii8+PHBhdGggZD0iTTEuNSA3LjVoMyIvPjxwYXRoIGQ9Ik03LjUgMS41djMiIG9wYWNpdHk9Ii40Ii8+PHBhdGggZD0iTTkuNSA1LjVMMTIgMyIgb3BhY2l0eT0iLjUiLz48cGF0aCBkPSJNOS41IDkuNUwxMiAxMiIgb3BhY2l0eT0iLjciLz48cGF0aCBkPSJNNS41IDkuNUwzIDEyIiBvcGFjaXR5PSIuOSIvPjxwYXRoIGQ9Ik01LjUgNS41TDMgMyIgb3BhY2l0eT0iLjMiLz48L2c+PC9zdmc+);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-menu {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMy41IDQuNWg5bS05IDNoOW0tOSAzaDkiIHN0cm9rZT0iIzdGOEM4RCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIvPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-minus {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMi41IDYuNWgxMXYyaC0xMXoiIHN0cm9rZT0iIzdGOEM4RCIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-none {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTEuNSAxMlY0bTMgMi41bC0zLTMtMyAzbS00IDQuNVYzbS0zIDUuNWwzIDMgMy0zIiBzdHJva2U9IiM3RjhDOEQiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-not-allowed {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNS45IDExLjAxMkEzLjc1IDMuNzUgMCAwIDAgMTEuMDEyIDUuOWwtNS4xMTQgNS4xMTN6TTQuNDg3IDkuNjAxTDkuNiA0LjQ4OEEzLjc1IDMuNzUgMCAwIDAgNC40ODggOS42ek03Ljc1IDEzLjVhNS43NSA1Ljc1IDAgMSAxIDAtMTEuNSA1Ljc1IDUuNzUgMCAwIDEgMCAxMS41eiIgc3Ryb2tlPSIjN0Y4QzhEIiBmaWxsPSJub25lIi8+PC9zdmc+);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-paste {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgM2MwLS41LS41LTEuNS0yLTEuNVM2IDIuNSA2IDNINGEyIDIgMCAwIDAtMiAydjdhMiAyIDAgMCAwIDIgMmg4YTIgMiAwIDAgMCAyLTJWNWEyIDIgMCAwIDAtMi0yaC0yem0tMiAuMjczYy4zNjcgMCAuNjY3LjI4Ni42NjcuNjM2IDAgLjM1LS4zLjYzNi0uNjY3LjYzNi0uMzY3IDAtLjY2Ny0uMjg2LS42NjctLjYzNiAwLS4zNS4zLS42MzYuNjY3LS42MzZ6TTEyIDEzSDRhMSAxIDAgMCAxLTEtMVY1YTEgMSAwIDAgMSAxLTFoMXYyaDZWNGgxYTEgMSAwIDAgMSAxIDF2N2ExIDEgMCAwIDEtMSAxeiIgZmlsbD0iIzdGOEM4RCIvPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-pin {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMi41IDEzLjVsNC00TTE0IDZjLS4zOS41MjktLjcyNC44NjItMSAxcy0uNjEuMTM4LTEgMGwtMiAyYy4xMzguOTIuMTM4IDEuNTg2IDAgMi0uMTM4LjQxNC0uNDcxLjc0OC0xIDFMNCA3Yy4wOC0uNDcxLjQxNC0uODA1IDEtMSAuNTg2LS4xOTUgMS4yNTItLjE5NSAyIDBsMi0yYy0uMTk1LS4yNzYtLjE5NS0uNjEgMC0xcy41MjktLjcyNCAxLTFsNCA0eiIgc3Ryb2tlPSIjN0Y4QzhEIiBmaWxsPSJub25lIi8+PC9zdmc+);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-pivot {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiM3RjhDOEQiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTEzLjUgNC41aC05bTAgMHY5IiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIi8+PHBhdGggZD0iTTcuNSAxMi41bC0xLTEgMS0xbTUtM2wtMS0xLTEgMSIvPjxwYXRoIGQ9Ik00LjUgMTEuNWgtMm02LTl2Mm0tMy0ydjJtNi0ydjIiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiLz48cGF0aCBkPSJNMTEuNSA2LjV2M2EyIDIgMCAwIDEtMiAyaC0zIi8+PHBhdGggZD0iTTQuNSA4LjVoLTJtMi0zaC0yIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIi8+PHJlY3QgeD0iMS41IiB5PSIxLjUiIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMyIgcng9IjIiLz48L2c+PC9zdmc+);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-plus {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMi41IDYuNWg0di00aDJ2NGg0djJoLTR2NGgtMnYtNGgtNHoiIHN0cm9rZT0iIzdGOEM4RCIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-right {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTMuNSA3LjVsLTQgNEw4IDEwbDEuNS0xLjVoLTd2LTJoN0w4IDVsMS41LTEuNXoiIHN0cm9rZT0iIzdGOEM4RCIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-small-left {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOCA0TDQgOGw0IDQiIHN0cm9rZT0iIzdGOEM4RCIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-small-right {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOCAxMmw0LTQtNC00IiBzdHJva2U9IiM3RjhDOEQiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-small-up {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgOEw4IDQgNCA4IiBzdHJva2U9IiM3RjhDOEQiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-small-down {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCA4bDQgNCA0LTQiIHN0cm9rZT0iIzdGOEM4RCIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-tick {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgNmwtNS41IDUuNUw0IDkiIHN0cm9rZT0iIzdGOEM4RCIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-cross {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAuNSA1LjVsLTYgNm0wLTZsNiA2IiBzdHJva2U9IiM3RjhDOEQiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-tree-open {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCA3bDQgNCA0LTQiIHN0cm9rZT0iIzdGOEM4RCIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-tree-closed {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAxMmw0LTQtNC00IiBzdHJva2U9IiM3RjhDOEQiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-icon-tree-indeterminate {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMy41IDcuNWg5IiBzdHJva2U9IiM3RjhDOEQiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiLz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n\n.ag-theme-balham .ag-header-cell-menu-button .ag-icon-menu {\n    display: block;\n    height: 32px; }\n\n.ag-theme-balham .ag-icon-checkbox-checked:empty {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHJlY3QgaWQ9ImEiIHg9IjEiIHk9IjEiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgcng9IjIiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNhIi8+PHJlY3Qgc3Ryb2tlPSIjMDA5MUVBIiB4PSIxLjUiIHk9IjEuNSIgd2lkdGg9IjEzIiBoZWlnaHQ9IjEzIiByeD0iMiIvPjxwYXRoIHN0cm9rZT0iIzAwOTFFQSIgZD0iTTEyIDVsLTUuNSA1LjVMNCA4Ii8+PC9nPjwvc3ZnPg==); }\n\n.ag-theme-balham .ag-menu {\n    background: white;\n    border-radius: 2px;\n    box-shadow: none;\n    padding: 4px;\n    padding: 0;\n    z-index: 5; }\n\n.ag-theme-balham .ag-menu .ag-menu-list {\n      cursor: default;\n      margin-bottom: 4px;\n      margin-top: 4px;\n      width: 100%; }\n\n.ag-theme-balham .ag-menu .ag-menu-option {\n      line-height: 16px;\n      padding-left: 8px;\n      padding-right: 8px; }\n\n.ag-theme-balham .ag-menu .ag-menu-option > span {\n        display: table-cell;\n        vertical-align: middle; }\n\n.ag-theme-balham .ag-menu .ag-menu-option-active {\n      background: #ECF0F1; }\n\n.ag-theme-balham .ag-menu .ag-menu-option-disabled {\n      opacity: 0.5; }\n\n.ag-theme-balham .ag-menu .ag-menu-option-icon {\n      padding-left: 4px;\n      padding-right: 4px; }\n\n.ag-theme-balham .ag-menu .ag-menu-option-icon span {\n        height: 16px;\n        line-height: 0;\n        margin-top: 4px; }\n\n.ag-theme-balham .ag-menu .ag-menu-option-shortcut {\n      padding-left: 8px; }\n\n.ag-theme-balham .ag-menu .ag-menu-separator {\n      margin-left: -4px; }\n\n.ag-theme-balham .ag-menu .ag-menu-separator > span {\n        background-image: url(\"data:image/svg+xml;utf8,<svg width='1' height='8px' viewBox='0 0 1 8px' xmlns='http://www.w3.org/2000/svg'> <line x1='0' y1='4px' x2='1' y2='4px' stroke-width='1' stroke='#BDC3C7'/> </svg>\");\n        height: 8px; }\n\n.ag-theme-balham .ag-menu .ag-menu-option-popup-pointer {\n      width: 24px; }\n\n.ag-theme-balham.ag-dnd-ghost {\n    background: white;\n    border-radius: 2px;\n    box-shadow: none;\n    padding: 4px;\n    border: 1px solid #BDC3C7;\n    color: rgba(0, 0, 0, 0.54);\n    font: 600 12px -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;\n    height: 32px !important;\n    line-height: 32px;\n    margin: 0;\n    padding: 0 8px;\n    -webkit-transform: translateY(8px);\n            transform: translateY(8px);\n    z-index: 5; }\n\n.ag-theme-balham.ag-dnd-ghost span,\n    .ag-theme-balham.ag-dnd-ghost div {\n      float: left;\n      height: 100%;\n      margin: 0;\n      padding: 0; }\n\n.ag-theme-balham.ag-dnd-ghost .ag-dnd-ghost-icon {\n      margin-right: 4px;\n      opacity: 0.87; }\n\n.ag-theme-balham .ag-tab-header {\n    background: #f5f7f7;\n    min-width: 220px;\n    width: 100%; }\n\n.ag-theme-balham .ag-tab-header .ag-tab {\n      border-bottom: 2px solid transparent;\n      height: 16px;\n      text-align: center;\n      vertical-align: middle; }\n\n.ag-theme-balham .ag-tab-header .ag-tab.ag-tab-selected .ag-icon-filter {\n        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMy41IDMuNWg5di41ODZhMSAxIDAgMCAxLS4yOTMuNzA3TDkuMjkzIDcuNzA3QTEgMSAwIDAgMCA5IDguNDE0VjEwbC0yIDEuNVY4LjQxNGExIDEgMCAwIDAtLjI5My0uNzA3TDMuNzkzIDQuNzkzYTEgMSAwIDAgMS0uMjkzLS43MDdWMy41eiIgc3Ryb2tlPSIjMDA5MUVBIiBmaWxsPSJub25lIi8+PC9zdmc+);\n        display: inline-block; }\n\n.ag-theme-balham .ag-tab-header .ag-tab.ag-tab-selected .ag-icon-columns {\n        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNi41IDMuNXY4bTMtOHY4bTMtOHY4bS05LTh2OCIgc3Ryb2tlPSIjMDA5MUVBIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIi8+PC9zdmc+);\n        display: inline-block; }\n\n.ag-theme-balham .ag-tab-header .ag-tab.ag-tab-selected .ag-icon-menu {\n        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMy41IDQuNWg5bS05IDNoOW0tOSAzaDkiIHN0cm9rZT0iIzAwOTFFQSIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIvPjwvc3ZnPg==);\n        display: inline-block; }\n\n.ag-theme-balham .ag-tab-body {\n    padding: 4px 0; }\n\n.ag-theme-balham .ag-tab-body .ag-filter-select {\n      margin: 4px;\n      width: calc(100% - 8px); }\n\n.ag-theme-balham .ag-tab-body .ag-menu-list {\n      margin-bottom: 0;\n      margin-top: 0; }\n\n.ag-theme-balham .ag-tab-body .ag-menu-list > div:first-child > span {\n        padding-top: 0; }\n\n.ag-theme-balham .ag-tab-body .ag-menu-list > div:last-child > span {\n        padding-bottom: 0; }\n\n.ag-theme-balham .ag-tab-body .ag-menu-list > div:last-child > .ag-menu-option-popup-pointer {\n        background-position-y: 0; }\n\n.ag-theme-balham .ag-filter-select {\n    margin: 4px;\n    width: calc(100% - 8px); }\n\n.ag-theme-balham .ag-filter input[type=\"radio\"] {\n    margin: 0 3px 0 6px;\n    width: 12px;\n    height: 17px;\n    vertical-align: top; }\n\n.ag-theme-balham .ag-filter input[type=\"text\"],\n  .ag-theme-balham .ag-filter input[type=\"date\"] {\n    padding-left: 4px; }\n\n.ag-theme-balham .ag-filter label {\n    display: block;\n    padding-left: 4px; }\n\n.ag-theme-balham .ag-filter .ag-set-filter-list {\n    height: 182px;\n    padding-top: 4px; }\n\n.ag-theme-balham .ag-filter .ag-filter-header-container {\n    box-sizing: border-box;\n    height: 28px; }\n\n.ag-theme-balham .ag-filter .ag-filter-header-container:nth-child(2) {\n    border-bottom: 1px solid #BDC3C7; }\n\n.ag-theme-balham .ag-filter .ag-filter-checkbox {\n    float: left;\n    height: 28px;\n    margin-right: 4px;\n    padding-top: 2px; }\n\n.ag-theme-balham .ag-filter .ag-filter-value {\n    height: 28px;\n    line-height: 14px; }\n\n.ag-theme-balham .ag-filter .ag-filter-apply-panel {\n    display: flex;\n    justify-content: flex-end;\n    padding: 4px;\n    padding-top: 8px; }\n\n.ag-theme-balham .ag-filter .ag-filter-apply-panel button + button {\n      margin-left: 8px; }\n\n.ag-theme-balham .ag-column-select-panel .ag-column-select-column-group,\n  .ag-theme-balham .ag-column-select-panel .ag-column-select-column {\n    height: 16px;\n    line-height: 16px;\n    margin-left: 0; }\n\n.ag-theme-balham .ag-column-select-panel .ag-column-select-column-group span,\n    .ag-theme-balham .ag-column-select-panel .ag-column-select-column span {\n      float: left;\n      height: 100%; }\n\n.ag-theme-balham .ag-column-select-panel .ag-column-select-column-group .ag-column-select-indent,\n    .ag-theme-balham .ag-column-select-panel .ag-column-select-column .ag-column-select-indent {\n      width: 8px; }\n\n.ag-theme-balham .ag-column-select-panel .ag-column-select-column-group .ag-column-select-checkbox,\n    .ag-theme-balham .ag-column-select-panel .ag-column-select-column-group .ag-column-group-icons,\n    .ag-theme-balham .ag-column-select-panel .ag-column-select-column .ag-column-select-checkbox,\n    .ag-theme-balham .ag-column-select-panel .ag-column-select-column .ag-column-group-icons {\n      margin-left: 4px;\n      margin-right: 4px; }\n\n.ag-theme-balham .ag-column-select-panel .ag-column-container {\n    padding-top: 4px; }\n\n.ag-theme-balham .ag-column-select-panel .ag-column-select-column.ag-toolpanel-add-group-indent {\n    margin-left: 24px; }\n\n.ag-theme-balham .ag-column-tool-panel {\n    display: flex; }\n\n.ag-theme-balham .ag-filter-body {\n    flex-grow: 1;\n    flex-shrink: 1;\n    padding-right: 4px; }\n\n.ag-theme-balham .ag-column-tool-panel-item button {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;\n    font-size: 12px;\n    height: 100%; }\n\n.ag-theme-balham .ag-filter-filter {\n    margin-bottom: 4px; }\n\n.ag-theme-balham .ag-column-select-header {\n    border-bottom: 1px solid #BDC3C7;\n    box-sizing: border-box;\n    height: 32px;\n    padding-top: 4px; }\n\n.ag-theme-balham .ag-column-select-header label {\n      display: block;\n      padding-left: 4px; }\n\n.ag-theme-balham .ag-column-select-header label .ag-filter-checkbox {\n        float: left;\n        margin-right: 4px; }\n\n.ag-theme-balham .ag-column-select-header .ag-column-tool-panel a {\n      margin: 0 4px;\n      padding-top: 2px; }\n\n.ag-theme-balham .ag-group-child-count::before {\n    content: \" \"; }\n\n.ag-theme-balham .ag-column-panel {\n    border-right: 0; }\n\n.ag-theme-balham .ag-column-panel .ag-pivot-mode {\n      border-bottom: 1px solid #BDC3C7;\n      box-sizing: border-box;\n      height: 32px;\n      line-height: 32px; }\n\n.ag-theme-balham .ag-column-panel .ag-pivot-mode span {\n        float: left;\n        height: 100%; }\n\n.ag-theme-balham .ag-column-panel .ag-pivot-mode .ag-pivot-mode-select {\n        margin-left: 4px; }\n\n.ag-theme-balham .ag-column-panel .ag-pivot-mode .ag-pivot-mode-select .ag-checkbox-label {\n          margin-left: 4px; }\n\n.ag-theme-balham .ag-column-panel .ag-column-select-panel {\n      border-bottom: 1px solid #BDC3C7;\n      padding-bottom: 3px;\n      padding-top: 0; }\n\n.ag-theme-balham .ag-column-panel .ag-column-drop {\n      border-bottom: 1px solid #BDC3C7;\n      clear: both;\n      overflow: auto;\n      padding: 4px 0;\n      padding-bottom: 8px; }\n\n.ag-theme-balham .ag-column-panel .ag-column-drop .ag-icon {\n        float: left;\n        height: 20px;\n        margin: 0 4px; }\n\n.ag-theme-balham .ag-column-panel .ag-column-drop .ag-column-drop-title {\n        clear: right;\n        float: left;\n        height: 20px;\n        line-height: 20px;\n        width: calc(100% - 24px); }\n\n.ag-theme-balham .ag-column-panel .ag-column-drop .ag-column-drop-empty-message {\n        clear: both;\n        color: rgba(0, 0, 0, 0.38);\n        font: 600 12px -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;\n        line-height: 8px;\n        padding-left: 16px;\n        padding-right: 4px; }\n\n.ag-theme-balham .ag-column-panel .ag-column-drop:last-child {\n        border-bottom: 0; }\n\n.ag-theme-balham .ag-filter-icon:empty {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMy41IDMuNWg5di41ODZhMSAxIDAgMCAxLS4yOTMuNzA3TDkuMjkzIDcuNzA3QTEgMSAwIDAgMCA5IDguNDE0VjEwbC0yIDEuNVY4LjQxNGExIDEgMCAwIDAtLjI5My0uNzA3TDMuNzkzIDQuNzkzYTEgMSAwIDAgMS0uMjkzLS43MDdWMy41eiIgc3Ryb2tlPSIjN0Y4QzhEIiBmaWxsPSJub25lIi8+PC9zdmc+);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px; }\n\n.ag-theme-balham .ag-sort-ascending-icon:empty {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNy41IDEyVjRtMyAyLjVsLTMtMy0zIDMiIHN0cm9rZT0iIzdGOEM4RCIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px; }\n\n.ag-theme-balham .ag-sort-descending-icon:empty {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNy41IDExVjNtLTMgNS41bDMgMyAzLTMiIHN0cm9rZT0iIzdGOEM4RCIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px; }\n\n.ag-theme-balham .ag-sort-none-icon:empty {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTEuNSAxMlY0bTMgMi41bC0zLTMtMyAzbS00IDQuNVYzbS0zIDUuNWwzIDMgMy0zIiBzdHJva2U9IiM3RjhDOEQiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px; }\n\n.ag-theme-balham .ag-numeric-header .ag-header-cell-label .ag-header-icon {\n    margin-left: 0;\n    margin-right: 4px; }\n\n.ag-theme-balham .ag-paging-panel {\n    align-items: center;\n    border-top: 1px solid #BDC3C7;\n    color: rgba(0, 0, 0, 0.54);\n    display: flex;\n    height: 32px;\n    justify-content: flex-end;\n    padding: 0 12px; }\n\n.ag-theme-balham .ag-paging-panel > span {\n      margin-left: 16px; }\n\n.ag-theme-balham button[ref=\"btFirst\"] {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgNEw4IDhsNCA0TTQuNSA0djgiIHN0cm9rZT0iIzdGOEM4RCIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    overflow: hidden;\n    text-indent: 100%;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    border: 0;\n    opacity: 0.54;\n    padding: 0; }\n\n.ag-theme-balham button[ref=\"btFirst\"][disabled] {\n      opacity: 0.38; }\n\n.ag-theme-balham button[ref=\"btPrevious\"] {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOSA0TDUgOGw0IDQiIHN0cm9rZT0iIzdGOEM4RCIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    overflow: hidden;\n    text-indent: 100%;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    border: 0;\n    opacity: 0.54;\n    padding: 0; }\n\n.ag-theme-balham button[ref=\"btPrevious\"][disabled] {\n      opacity: 0.38; }\n\n.ag-theme-balham button[ref=\"btLast\"] {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCAxMmw0LTQtNC00bTcuNSAwdjgiIHN0cm9rZT0iIzdGOEM4RCIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    overflow: hidden;\n    text-indent: 100%;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    border: 0;\n    opacity: 0.54;\n    padding: 0; }\n\n.ag-theme-balham button[ref=\"btLast\"][disabled] {\n      opacity: 0.38; }\n\n.ag-theme-balham button[ref=\"btNext\"] {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAxMmw0LTQtNC00IiBzdHJva2U9IiM3RjhDOEQiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    overflow: hidden;\n    text-indent: 100%;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    border: 0;\n    opacity: 0.54;\n    padding: 0; }\n\n.ag-theme-balham button[ref=\"btNext\"][disabled] {\n      opacity: 0.38; }\n\n.ag-theme-balham .ag-rtl button[ref=\"btFirst\"] {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCAxMmw0LTQtNC00bTcuNSAwdjgiIHN0cm9rZT0iIzdGOEM4RCIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px; }\n\n.ag-theme-balham .ag-rtl button[ref=\"btPrevious\"] {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAxMmw0LTQtNC00IiBzdHJva2U9IiM3RjhDOEQiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px; }\n\n.ag-theme-balham .ag-rtl button[ref=\"btLast\"] {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgNEw4IDhsNCA0TTQuNSA0djgiIHN0cm9rZT0iIzdGOEM4RCIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px; }\n\n.ag-theme-balham .ag-rtl button[ref=\"btNext\"] {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOSA0TDUgOGw0IDQiIHN0cm9rZT0iIzdGOEM4RCIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px; }\n\n.ag-theme-balham .ag-row-selected {\n    background-color: #b7e4ff; }\n\n.ag-theme-balham .ag-cell-range-selected:not(.ag-cell-focus) {\n    background-color: rgba(0, 145, 234, 0.2); }\n\n.ag-theme-balham .ag-cell-inline-editing {\n    background: white;\n    border-radius: 2px;\n    box-shadow: none;\n    padding: 4px;\n    background: #f5f7f7;\n    height: 40px;\n    line-height: normal;\n    padding: 12px;\n    z-index: 2; }\n\n.ag-theme-balham .ag-cell-inline-editing select {\n      height: auto; }\n\n.ag-theme-balham .ag-popup-editor {\n    background: white;\n    border-radius: 2px;\n    box-shadow: none;\n    padding: 4px;\n    background: #f5f7f7;\n    padding: 0;\n    z-index: 1; }\n\n.ag-theme-balham .ag-popup-editor .ag-large-textarea textarea {\n      height: auto;\n      padding: 12px; }\n\n.ag-theme-balham .ag-rich-select {\n    background-color: #f5f7f7;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCA3bDQgNCA0LTQiIHN0cm9rZT0iIzdGOEM4RCIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);\n    background-position-x: calc(100% - 4px);\n    background-position-y: 8px;\n    background-repeat: no-repeat; }\n\n.ag-theme-balham .ag-rich-select .ag-rich-select-list {\n      height: 182px; }\n\n.ag-theme-balham .ag-rich-select .ag-rich-select-value {\n      height: 28px;\n      line-height: 28px;\n      padding-left: 12px; }\n\n.ag-theme-balham .ag-rich-select .ag-virtual-list-item {\n      cursor: default;\n      height: 28px;\n      line-height: 28px; }\n\n.ag-theme-balham .ag-rich-select .ag-virtual-list-item:hover {\n        background-color: #ECF0F1; }\n\n.ag-theme-balham .ag-rich-select .ag-rich-select-row {\n      padding-left: 12px; }\n\n.ag-theme-balham .ag-rich-select .ag-rich-select-row-selected {\n      background-color: #b7e4ff; }\n\n.ag-theme-balham .ag-floating-filter-body {\n    float: left;\n    height: 100%;\n    margin-right: 0;\n    width: calc(100% - 24px); }\n\n.ag-theme-balham .ag-floating-filter-body input {\n      box-sizing: border-box; }\n\n.ag-theme-balham .ag-floating-filter-full-body input {\n    box-sizing: border-box; }\n\n.ag-theme-balham .ag-floating-filter-button {\n    float: right;\n    line-height: 16px;\n    margin-top: 10px; }\n\n.ag-theme-balham .ag-floating-filter-button button {\n      -webkit-appearance: none;\n         -moz-appearance: none;\n              appearance: none;\n      background: transparent;\n      border: 0;\n      height: 16px;\n      padding: 0;\n      width: 16px; }\n\n.ag-theme-balham .ag-cell-label-container {\n    height: 100%; }\n\n.ag-theme-balham .ag-header-group-cell-label {\n    height: 100%; }\n\n.ag-theme-balham .ag-header-group-cell-label span {\n      float: left;\n      height: 100%; }\n\n.ag-theme-balham .ag-header-select-all {\n    height: 100%;\n    margin-right: 12px; }\n\n.ag-theme-balham .ag-header-select-all span {\n      height: 100%; }\n\n.ag-theme-balham .ag-header-select-all:not(.ag-hidden) + .ag-cell-label-container {\n    float: left;\n    width: calc(100% - 16px - 12px); }\n\n.ag-theme-balham .ag-selection-checkbox span,\n  .ag-theme-balham .ag-group-expanded span,\n  .ag-theme-balham .ag-group-contracted span {\n    margin-right: 12px; }\n\n.ag-theme-balham .ag-selection-checkbox span {\n    position: relative;\n    top: 2px; }\n\n.ag-theme-balham .ag-group-expanded .ag-icon-contracted:empty {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCA3bDQgNCA0LTQiIHN0cm9rZT0iIzdGOEM4RCIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px; }\n\n.ag-theme-balham .ag-column-drop-horizontal {\n    background-color: #f5f7f7;\n    height: 28px;\n    line-height: 16px;\n    padding-left: 12px; }\n\n.ag-theme-balham .ag-column-drop-horizontal.ag-width-half {\n      margin-bottom: -3px; }\n\n.ag-theme-balham .ag-column-drop-horizontal span {\n      float: left;\n      height: 100%; }\n\n.ag-theme-balham .ag-column-drop-horizontal > div:first-child {\n      float: left;\n      height: 100%; }\n\n.ag-theme-balham .ag-column-drop-horizontal .ag-icon-group,\n    .ag-theme-balham .ag-column-drop-horizontal .ag-icon-pivot {\n      margin-right: 12px; }\n\n.ag-theme-balham .ag-column-drop-horizontal .ag-right-arrow {\n      background-color: transparent;\n      background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTMuNSA3LjVsLTQgNEw4IDEwbDEuNS0xLjVoLTd2LTJoN0w4IDVsMS41LTEuNXoiIHN0cm9rZT0iIzdGOEM4RCIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);\n      background-position: center;\n      background-repeat: no-repeat;\n      background-size: 16px 16px;\n      height: 16px;\n      opacity: 0.87;\n      width: 16px; }\n\n.ag-theme-balham .ag-column-drop-horizontal .ag-left-arrow {\n      background-color: transparent;\n      background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMi41IDguNWw0LTRMOCA2IDYuNSA3LjVoN3YyaC03TDggMTFsLTEuNSAxLjV6IiBzdHJva2U9IiM3RjhDOEQiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);\n      background-position: center;\n      background-repeat: no-repeat;\n      background-size: 16px 16px;\n      height: 16px;\n      opacity: 0.87;\n      width: 16px; }\n\n.ag-theme-balham .ag-column-drop-horizontal .ag-left-arrow,\n    .ag-theme-balham .ag-column-drop-horizontal .ag-right-arrow {\n      overflow: hidden;\n      text-indent: 100%;\n      height: 100%;\n      margin: 0 4px;\n      opacity: 0.54; }\n\n.ag-theme-balham .ag-column-drop-horizontal .ag-column-drop-empty-message {\n      height: 100%;\n      line-height: 28px;\n      opacity: 0.38; }\n\n.ag-theme-balham .ag-column-drop-cell {\n    background: #dde4e6;\n    border-radius: 16px;\n    box-sizing: border-box;\n    height: 16px !important;\n    margin-top: 4px;\n    padding: 0 2px; }\n\n.ag-theme-balham .ag-column-drop-cell .ag-column-drop-cell-text {\n      height: 100%;\n      line-height: 16px;\n      margin: 0 4px; }\n\n.ag-theme-balham .ag-column-drop-cell .ag-column-drop-cell-button {\n      background-color: transparent;\n      background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiM3RjhDOEQiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTEwLjUgNC41bC02IDYiLz48Y2lyY2xlIGN4PSI3LjUiIGN5PSI3LjUiIHI9IjUuNSIvPjxwYXRoIGQ9Ik00LjUgNC41bDYgNiIvPjwvZz48L3N2Zz4=);\n      background-position: center;\n      background-repeat: no-repeat;\n      background-size: 16px 16px;\n      height: 16px;\n      opacity: 0.87;\n      width: 16px;\n      overflow: hidden;\n      text-indent: 100%;\n      min-width: 16px;\n      height: 100%;\n      margin: 0 2px;\n      opacity: 0.54; }\n\n.ag-theme-balham .ag-column-drop-cell .ag-column-drop-cell-button:hover {\n        opacity: 0.87; }\n\n.ag-theme-balham .ag-column-drop-cell .ag-column-drag {\n      margin-left: 8px;\n      margin-top: 2px;\n      width: 16px; }\n\n.ag-theme-balham .ag-select-agg-func-popup {\n    background: white;\n    border-radius: 2px;\n    box-shadow: none;\n    padding: 4px;\n    background: white;\n    height: 70px;\n    padding: 0; }\n\n.ag-theme-balham .ag-select-agg-func-popup .ag-virtual-list-item {\n      cursor: default;\n      line-height: 20px;\n      padding-left: 8px; }\n\n.ag-theme-balham .ag-set-filter-list,\n  .ag-theme-balham .ag-menu-column-select-wrapper {\n    width: auto; }\n\n.ag-theme-balham .ag-column-drop-vertical > .ag-column-drop-cell {\n    float: left;\n    margin-bottom: 4px;\n    margin-left: 4px;\n    margin-top: 0; }\n\n.ag-theme-balham .ag-cell-data-changed {\n    background-color: rgba(22, 160, 133, 0.5) !important; }\n\n.ag-theme-balham .ag-cell-data-changed-animation {\n    background-color: transparent;\n    transition: background-color 1s; }\n\n.ag-theme-balham .ag-stub-cell {\n    padding-left: 12px;\n    padding-top: 4px; }\n\n.ag-theme-balham .ag-stub-cell .ag-loading-icon {\n      float: left;\n      height: 100%; }\n\n.ag-theme-balham .ag-stub-cell .ag-loading-text {\n      float: left;\n      height: 100%;\n      margin-left: 4px;\n      margin-top: 4px; }\n\n.ag-theme-balham .ag-rtl .ag-numeric-cell {\n    text-align: left; }\n\n.ag-theme-balham .ag-rtl .ag-header-cell-menu-button {\n    float: left; }\n\n.ag-theme-balham .ag-rtl .ag-header-cell-label {\n    float: right;\n    width: calc(100% - 16px); }\n\n.ag-theme-balham .ag-rtl .ag-header-cell-label > span {\n      float: right; }\n\n.ag-theme-balham .ag-rtl .ag-header-cell-label .ag-header-icon {\n      margin-top: 2px; }\n\n.ag-theme-balham .ag-rtl .ag-numeric-header .ag-header-cell-menu-button {\n    float: right; }\n\n.ag-theme-balham .ag-rtl .ag-numeric-header .ag-header-cell-label {\n    float: left; }\n\n.ag-theme-balham .ag-rtl .ag-numeric-header .ag-header-cell-label > span {\n      float: left; }\n\n.ag-theme-balham .ag-rtl .ag-column-panel .ag-pivot-mode span {\n    float: right; }\n\n.ag-theme-balham .ag-rtl .ag-column-panel .ag-pivot-mode .ag-pivot-mode-select {\n    margin-right: 4px; }\n\n.ag-theme-balham .ag-rtl .ag-column-panel .ag-pivot-mode .ag-pivot-mode-select .ag-checkbox-label {\n      margin-right: 4px; }\n\n.ag-theme-balham .ag-rtl .ag-column-panel .ag-column-drop .ag-icon {\n    float: right; }\n\n.ag-theme-balham .ag-rtl .ag-column-panel .ag-column-drop .ag-column-drop-title {\n    clear: left;\n    float: right; }\n\n.ag-theme-balham .ag-rtl .ag-column-panel .ag-column-drop .ag-column-drop-empty-message {\n    padding-left: 4px;\n    padding-right: 16px; }\n\n.ag-theme-balham .ag-rtl .ag-filter-checkbox {\n    float: right;\n    margin-left: 4px; }\n\n.ag-theme-balham .ag-rtl .ag-column-select-panel .ag-column-select-column-group span,\n  .ag-theme-balham .ag-rtl .ag-column-select-panel .ag-column-select-column span {\n    float: right; }\n\n.ag-theme-balham .ag-rtl .ag-column-select-panel .ag-column-select-column-group .ag-column-select-checkbox,\n  .ag-theme-balham .ag-rtl .ag-column-select-panel .ag-column-select-column-group .ag-column-group-icons,\n  .ag-theme-balham .ag-rtl .ag-column-select-panel .ag-column-select-column .ag-column-select-checkbox,\n  .ag-theme-balham .ag-rtl .ag-column-select-panel .ag-column-select-column .ag-column-group-icons {\n    margin-left: 4px;\n    margin-right: 4px; }\n\n.ag-theme-balham .ag-rtl .ag-column-select-panel .ag-column-select-column.ag-toolpanel-add-group-indent {\n    margin-left: 0;\n    margin-right: 24px; }\n\n.ag-theme-balham .ag-rtl .ag-icon-tree-closed {\n    background-color: transparent;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOSA0TDUgOGw0IDQiIHN0cm9rZT0iIzdGOEM4RCIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px; }\n\n.ag-theme-balham .ag-rtl .ag-header-group-cell-label {\n    height: 100%; }\n\n.ag-theme-balham .ag-rtl .ag-header-group-cell-label span {\n      float: right;\n      height: 100%; }\n\n.ag-theme-balham .ag-rtl .ag-header-select-all:not(.ag-hidden) + .ag-cell-label-container {\n    float: right; }\n\n.ag-theme-balham .ag-rtl .ag-header-select-all {\n    margin-left: 12px;\n    margin-right: 0; }\n\n.ag-theme-balham .ag-rtl .ag-selection-checkbox span,\n  .ag-theme-balham .ag-rtl .ag-group-expanded span,\n  .ag-theme-balham .ag-rtl .ag-group-contracted span {\n    margin-left: 12px;\n    margin-right: 0; }\n\n.ag-theme-balham .ag-rtl .ag-column-drop-horizontal {\n    padding-right: 12px; }\n\n.ag-theme-balham .ag-rtl .ag-column-drop-horizontal span {\n      float: right; }\n\n.ag-theme-balham .ag-rtl .ag-column-drop-horizontal > div:first-child {\n      float: right; }\n\n.ag-theme-balham .ag-rtl .ag-column-drop-horizontal .ag-icon-group,\n    .ag-theme-balham .ag-rtl .ag-column-drop-horizontal .ag-icon-pivot {\n      margin-left: 12px;\n      margin-right: 0; }\n\n.ag-theme-balham .ag-rtl .ag-column-drop-horizontal .ag-right-arrow {\n      background-color: transparent;\n      background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTMuNSA3LjVsLTQgNEw4IDEwbDEuNS0xLjVoLTd2LTJoN0w4IDVsMS41LTEuNXoiIHN0cm9rZT0iIzdGOEM4RCIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);\n      background-position: center;\n      background-repeat: no-repeat;\n      background-size: 16px 16px;\n      height: 16px;\n      opacity: 0.87;\n      width: 16px;\n      height: 100%; }\n\n.ag-theme-balham .ag-rtl .ag-column-drop-horizontal .ag-left-arrow {\n      background-color: transparent;\n      background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMi41IDguNWw0LTRMOCA2IDYuNSA3LjVoN3YyaC03TDggMTFsLTEuNSAxLjV6IiBzdHJva2U9IiM3RjhDOEQiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);\n      background-position: center;\n      background-repeat: no-repeat;\n      background-size: 16px 16px;\n      height: 16px;\n      opacity: 0.87;\n      width: 16px;\n      height: 100%; }\n\n.ag-theme-balham .ag-rtl .ag-floating-filter-body {\n    float: right;\n    margin-left: 0; }\n\n.ag-theme-balham .ag-rtl .ag-floating-filter-button {\n    float: left; }\n\n.ag-theme-balham .ag-rtl .ag-header .ag-header-cell-resize {\n    left: -4px;\n    right: auto; }\n\n.ag-theme-balham .ag-rtl .ag-header .ag-header-cell-resize::after {\n    border-left: 1px solid #BDC3C7;\n    border-right: 0; }\n\n.ag-theme-balham .ag-rtl .ag-column-select-header .ag-filter-body {\n    margin-left: 4px;\n    margin-right: 0; }\n\n.ag-theme-balham .ag-rtl .ag-column-drag {\n    background-position-x: right; }\n\n.ag-theme-balham .ag-status-bar {\n    background: white;\n    border: 1px solid #BDC3C7;\n    border-top: 0;\n    color: rgba(0, 0, 0, 0.38);\n    display: flex;\n    font: 600 12px -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;\n    justify-content: flex-end;\n    padding: 8px 16px; }\n\n.ag-theme-balham .ag-status-bar .ag-status-bar-item {\n      margin-right: 8px; }\n\n.ag-theme-balham .ag-status-bar .ag-status-bar-item span:nth-child(1)::after {\n        content: \":\"; }\n\n.ag-theme-balham .ag-status-bar .ag-status-bar-item span:nth-child(2) {\n        color: #000; }\n\n.ag-theme-balham .ag-details-row {\n    box-sizing: border-box;\n    padding: 20px; }\n\n.ag-theme-balham .ag-overlay-loading-wrapper {\n    background-color: rgba(255, 255, 255, 0.5); }\n\n.ag-theme-balham .ag-overlay-loading-center {\n    background: white;\n    border-radius: 2px;\n    box-shadow: none;\n    padding: 4px; }\n\n.ag-theme-balham .ag-tool-panel {\n    background-color: #f5f7f7;\n    border-right: 1px solid #BDC3C7;\n    border-top: 1px solid #BDC3C7; }\n\n.ag-theme-balham .ag-tool-panel .ag-side-buttons {\n      border-bottom: 1px solid #BDC3C7; }\n\n.ag-theme-balham .ag-tool-panel .ag-side-buttons button {\n        background: transparent;\n        border: 0;\n        border-right: 1px solid #BDC3C7;\n        color: #000;\n        height: 20px; }\n\n.ag-theme-balham .ag-tool-panel .ag-panel-container {\n      border-right: 1px solid #BDC3C7;\n      box-sizing: border-box; }\n\n.ag-theme-balham .ag-tool-panel.full-width .ag-panel-container {\n      border-right: 0; }\n\n.ag-theme-balham .ag-tool-panel .ag-column-drop {\n      min-height: 50px; }\n\n.ag-theme-balham .ag-rtl .ag-tool-panel .ag-panel-container {\n    border-left: 1px solid #BDC3C7;\n    border-right: 0; }\n\n.ag-theme-balham .ag-rtl .ag-tool-panel.full-width .ag-panel-container {\n    border-left: 0; }\n\n.ag-theme-balham .ag-rtl .ag-tool-panel .ag-side-buttons button {\n    border-left: 1px solid #BDC3C7;\n    border-right: 0; }\n\n.ag-theme-balham .ag-column-name-filter {\n    box-sizing: border-box;\n    width: 100%; }\n\n.ag-theme-balham .sass-variables::after {\n    content: '{ \"autoSizePadding\": \"12px\", \"headerHeight\": \"32px\", \"groupPaddingSize\": \"28px\", \"footerPaddingAddition\": \"16px\", \"virtualItemHeight\": \"28px\", \"aggFuncPopupHeight\": \"98px\", \"checkboxIndentWidth\": \"20px\", \"leafNodePadding\": \"12px\", \"rowHeight\": \"28px\", \"gridSize\": \"4px\", \"iconSize\": \"16px\" }';\n    display: none; }\n\n.ag-theme-balham .ag-header {\n    background-color: #f5f7f7;\n    border-bottom: 1px solid #BDC3C7; }\n\n.ag-theme-balham .ag-cell-highlight {\n    background-color: #0091EA !important; }\n\n.ag-theme-balham .ag-header-cell-resize {\n    right: -3px; }\n\n.ag-theme-balham .ag-rtl .ag-header .ag-header-cell-resize {\n    left: -4px; }\n\n.ag-theme-balham .ag-header-cell-resize::after {\n    height: 16px;\n    margin-top: 8px; }\n\n.ag-theme-balham .ag-header-cell::after,\n  .ag-theme-balham .ag-header-group-cell::after {\n    border-right: 1px solid rgba(189, 195, 199, 0.5);\n    content: \" \";\n    height: 16px;\n    margin-top: 8px;\n    position: absolute;\n    right: 0;\n    text-indent: -2000px;\n    top: 0; }\n\n.ag-theme-balham .ag-column-drop-horizontal.ag-column-drop {\n    border: 1px solid #BDC3C7;\n    border-bottom: 0; }\n\n.ag-theme-balham .ag-column-drop-horizontal.ag-column-drop.ag-width-half:first-child {\n    border-right: 0; }\n\n.ag-theme-balham .ag-row {\n    border-bottom-color: #d9dcde; }\n\n.ag-theme-balham .ag-row-selected {\n    border-bottom-color: #b7e4ff; }\n\n.ag-theme-balham .ag-row-drag {\n    background-position-y: center; }\n\n.ag-theme-balham .ag-column-drag {\n    background-position-y: center; }\n\n.ag-theme-balham .ag-column-drop-cell {\n    height: 24px !important; }\n\n.ag-theme-balham .ag-column-drop-cell .ag-column-drop-cell-button {\n      box-sizing: border-box;\n      height: calc(100% - 4px);\n      margin-bottom: 2px;\n      margin-top: 2px; }\n\n.ag-theme-balham .ag-column-drop-cell .ag-column-drop-cell-button:hover {\n      opacity: 1; }\n\n.ag-theme-balham .ag-column-drop-vertical .ag-column-drop-cell {\n    margin-left: 8px;\n    margin-right: 8px; }\n\n.ag-theme-balham .ag-column-drop-vertical .ag-column-drop-cell .ag-column-drop-cell-text {\n      line-height: 24px;\n      margin-left: 8px; }\n\n.ag-theme-balham .ag-column-drop-horizontal {\n    background-color: #f5f7f7;\n    height: 32px; }\n\n.ag-theme-balham .ag-column-drop-horizontal .ag-column-drop-empty-message {\n      line-height: 32px; }\n\n.ag-theme-balham .ag-column-drop-horizontal .ag-column-drop-cell-text {\n      line-height: 24px;\n      margin-left: 8px; }\n\n.ag-theme-balham .ag-filter .ag-filter-header-container {\n    height: 24px; }\n\n.ag-theme-balham .ag-root {\n    border: 1px solid #BDC3C7; }\n\n.ag-theme-balham .ag-tab {\n    box-sizing: initial; }\n\n.ag-theme-balham .ag-filter .ag-filter-value {\n    line-height: 20px; }\n\n.ag-theme-balham .ag-column-panel {\n    border-right: 1px solid #BDC3C7;\n    border-bottom: 1px solid #BDC3C7; }\n\n.ag-theme-balham .ag-column-panel .ag-column-select-panel {\n      padding-bottom: 8px; }\n\n.ag-theme-balham .ag-column-panel .ag-column-select-panel .ag-column-select-column-group,\n      .ag-theme-balham .ag-column-panel .ag-column-select-panel .ag-column-select-column {\n        height: 20px;\n        line-height: 20px; }\n\n.ag-theme-balham .ag-column-panel .ag-column-drop {\n      padding-bottom: 8px;\n      padding-top: 8px; }\n\n.ag-theme-balham .ag-column-panel .ag-column-drop .ag-icon {\n        margin-bottom: 4px; }\n\n.ag-theme-balham .ag-column-panel .ag-column-drop .ag-column-drop-title {\n        display: inline-block;\n        float: none;\n        margin-bottom: 4px; }\n\n.ag-theme-balham .ag-column-panel .ag-column-drop .ag-column-drop-empty-message {\n        height: 16px;\n        line-height: 16px;\n        padding-left: 24px; }\n\n.ag-theme-balham .ag-rtl .ag-tool-panel,\n  .ag-theme-balham .ag-rtl .ag-column-panel {\n    border-left: 1px solid #BDC3C7;\n    border-right: 0; }\n\n.ag-theme-balham .ag-icon-expanded,\n  .ag-theme-balham .ag-icon-contracted {\n    -webkit-transform: translateY(2px);\n            transform: translateY(2px); }\n\n.ag-theme-balham .ag-rtl .ag-icon-expanded {\n    -webkit-transform: translateY(2px) rotate(180deg);\n            transform: translateY(2px) rotate(180deg); }\n\n.ag-theme-balham .ag-menu-option {\n    height: 28px;\n    line-height: 28px; }\n\n.ag-theme-balham .ag-column-select-panel .ag-column-select-column-group,\n  .ag-theme-balham .ag-column-select-panel .ag-column-select-column {\n    height: 20px;\n    line-height: 20px; }\n\n.ag-theme-balham .ag-filter-filter {\n    margin-left: 4px;\n    margin-right: 4px;\n    width: calc(100% - 8px); }\n\n.ag-theme-balham .ag-tab-header {\n    border-bottom: 1px solid #BDC3C7; }\n\n.ag-theme-balham .ag-tab-header .ag-tab {\n      margin-bottom: -2px; }\n\n.ag-theme-balham .ag-tab-header .ag-tab.ag-tab-selected {\n      background-color: white;\n      border-bottom-color: transparent; }\n\n.ag-theme-balham .ag-tab-body,\n  .ag-theme-balham .ag-popup-editor,\n  .ag-theme-balham .ag-menu {\n    background-color: white;\n    color: #000; }\n\n.ag-theme-balham .ag-cell-inline-editing {\n    height: 28px;\n    padding: 0; }\n\n.ag-theme-balham .ag-cell-inline-editing input {\n      box-sizing: border-box; }\n\n.ag-theme-balham .ag-details-row {\n    background-color: white; }\n\n.ag-theme-balham .ag-overlay-loading-wrapper {\n    background-color: rgba(255, 255, 255, 0.5); }\n\n.ag-theme-balham .ag-overlay-loading-center {\n    background-color: #fff;\n    border: 1px solid #BDC3C7;\n    color: #000;\n    padding: 16px; }\n\n.ag-theme-balham .ag-cell-range-selected-1:not(.ag-cell-focus) {\n    background-color: rgba(0, 145, 234, 0.3); }\n\n.ag-theme-balham .ag-cell-range-selected-2:not(.ag-cell-focus) {\n    background-color: rgba(0, 145, 234, 0.4); }\n\n.ag-theme-balham .ag-cell-range-selected-3:not(.ag-cell-focus) {\n    background-color: rgba(0, 145, 234, 0.5); }\n\n.ag-theme-balham .ag-cell-range-selected-4:not(.ag-cell-focus) {\n    background-color: rgba(0, 145, 234, 0.6); }\n\n.ag-theme-balham .ag-rich-select-value {\n    border-bottom: 1px solid #BDC3C7; }\n\n.ag-theme-balham .ag-filter-apply-panel {\n    border-top: 1px solid #BDC3C7; }\n\n.ag-theme-balham .ag-header-cell-moving {\n    background-color: white; }\n"

/***/ }),

/***/ "./src/app/employee/dashboard/dashboard.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/employee/dashboard/dashboard.component.ts ***!
  \***********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _employee_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../employee-dashboard.service */ "./src/app/employee/employee-dashboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(empDasboardService,route, router) {
        this.route = route;
        this.router = router;
        this.columnDefs = [
            { headerName: 'Employee ID', field: 'employee_id' },
            { headerName: 'First Name', field: 'first_name' },
            { headerName: 'Last Name', field: 'last_name' },
            { headerName: 'Gender', field: 'gender' },
            { headerName: 'Age', field: 'age' },
            { headerName: 'Salary', field: 'salary' }
        ];
        this.dasboardService = empDasboardService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
       this.activatedRoute.params.subscribe(params => {
       this.id = +params['id'];
       console.log("mine",this.id)
        });
        //this.dasboardService.getData().then(dataaa => {
       // this.rowData = this.dasboardService.getFiles();
       this.rowData = this.dasboardService.getData();
        //});
        //= this.dasboardService.getFiles();

    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/employee/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/employee/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_employee_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeDashboardService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/employee/employee-dashboard.service.ts":
/*!********************************************************!*\
  !*** ./src/app/employee/employee-dashboard.service.ts ***!
  \********************************************************/
/*! exports provided: EmployeeDashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDashboardService", function() { return EmployeeDashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeeDashboardService = /** @class */ (function () {
    function EmployeeDashboardService(httpc, route) {
        this.httpc = httpc;
        this.route = route;
        //this.url = 'payroll/employee/'+id;
        this.employeeDetails = {};
    }
    EmployeeDashboardService.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
            //this.url = 'payroll/employee/'+this.id;
            console.log("my id is",_this.id);
            // In a real app: dispatch action to load the details here.
        });
    };

    EmployeeDashboardService.prototype.getData = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.httpc.get('payroll/employee/'+_this.id).subscribe(function (data) {
                resolve(data);
                console.log(data)
                _this.employeeDetails = data;
            }, function (err) {
                console.error(err);
            });
        });
    };
    EmployeeDashboardService.prototype.getEmployeeDetails = function () {
        return this.employeeDetails;
    };
    EmployeeDashboardService.prototype.getFiles = function () {
        var rowData = [
            {
                "employee_id": 198429,
                "first_name": "Serafina",
                "last_name": "Bumgarner",
                "gender": "F",
                "age": 34.87,
                "salary": 69294.0
            }, {
                "employee_id": 260736,
                "first_name": "Zelda",
                "last_name": "Forest",
                "gender": "F",
                "age": 57.71,
                "salary": 176642.0
            }, {
                "employee_id": 178566,
                "first_name": "Juliette",
                "last_name": "Rojo",
                "gender": "F",
                "age": 50.26,
                "salary": 193912.0
            }, {
                "employee_id": 847634,
                "first_name": "Elmer",
                "last_name": "Jason",
                "gender": "M",
                "age": 21.32,
                "salary": 93504.0
            }, {
                "employee_id": 647173,
                "first_name": "Milan",
                "last_name": "Krawczyk",
                "gender": "M",
                "age": 37.34,
                "salary": 123681.0
            }
        ];
        return rowData;
        //return this.http.get('/getallfiles')
    };
    EmployeeDashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EmployeeDashboardService);
    return EmployeeDashboardService;
}());



/***/ }),

/***/ "./src/app/employee/employee/employee.module.ts":
/*!******************************************************!*\
  !*** ./src/app/employee/employee/employee.module.ts ***!
  \******************************************************/
/*! exports provided: EmployeeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeModule", function() { return EmployeeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard/dashboard.component */ "./src/app/employee/dashboard/dashboard.component.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _employee_dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../employee-dashboard.service */ "./src/app/employee/employee-dashboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var EmployeeModule = /** @class */ (function () {
    function EmployeeModule() {
    }
    EmployeeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__["AgGridModule"].withComponents([_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]])
            ],
            declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]],
            providers: [_employee_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeDashboardService"]],
            exports: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]]
        })
    ], EmployeeModule);
    return EmployeeModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Hi {{currentUser.firstName}}!</h1>\n<p>You're logged in with Angular 6!!</p>\n<h3>All registered users:</h3>\n<ul>\n    <li *ngFor=\"let user of users\">\n        {{user.username}} ({{user.firstName}} {{user.lastName}})\n        - <a (click)=\"deleteUser(user.id)\" class=\"text-danger\">Delete</a>\n    </li>\n</ul>\n<p><a [routerLink]=\"['/login']\">Logout</a></p>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService) {
        this.userService = userService;
        this.users = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
    };
    HomeComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.delete(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function () {
            _this.loadAllUsers();
        });
    };
    HomeComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (users) {
            _this.users = users;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html") }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/index.ts":
/*!*******************************!*\
  !*** ./src/app/home/index.ts ***!
  \*******************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });




/***/ }),

/***/ "./src/app/login/index.ts":
/*!********************************!*\
  !*** ./src/app/login/index.ts ***!
  \********************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Login</h2>\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authenticationService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
           if(data['status']==='OK'){
           var em;
           em=data['employeeId'];
           console.log("id is",em);

                        if(data['role']==='ADMIN'){
                            _this.router.navigate(['employeeDashboard',{id:em}]);
                        }
                        else if(data['role']==='EMPLOYEE'){
                            _this.router.navigate(['employeeDashboard']);
                        }
                    }
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html") }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register/index.ts":
/*!***********************************!*\
  !*** ./src/app/register/index.ts ***!
  \***********************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component */ "./src/app/register/register.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return _register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"]; });




/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Register</h2>\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"firstName\">First Name</label>\n        <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n        <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"lastName\">Last Name</label>\n        <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n        <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, userService, alertService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html") }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/upload-file/details-upload/details-upload.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/upload-file/details-upload/details-upload.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/upload-file/details-upload/details-upload.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/upload-file/details-upload/details-upload.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"{{fileUpload}}\">{{fileUpload}}</a>"

/***/ }),

/***/ "./src/app/upload-file/details-upload/details-upload.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/upload-file/details-upload/details-upload.component.ts ***!
  \************************************************************************/
/*! exports provided: DetailsUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsUploadComponent", function() { return DetailsUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DetailsUploadComponent = /** @class */ (function () {
    function DetailsUploadComponent() {
    }
    DetailsUploadComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DetailsUploadComponent.prototype, "fileUpload", void 0);
    DetailsUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'details-upload',
            template: __webpack_require__(/*! ./details-upload.component.html */ "./src/app/upload-file/details-upload/details-upload.component.html"),
            styles: [__webpack_require__(/*! ./details-upload.component.css */ "./src/app/upload-file/details-upload/details-upload.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DetailsUploadComponent);
    return DetailsUploadComponent;
}());



/***/ }),

/***/ "./src/app/upload-file/form-upload/form-upload.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/upload-file/form-upload/form-upload.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/upload-file/form-upload/form-upload.component.html":
/*!********************************************************************!*\
  !*** ./src/app/upload-file/form-upload/form-upload.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"currentFileUpload\" class=\"progress\">\n\t<div class=\"progress-bar progress-bar-info progress-bar-striped\"\n\t\trole=\"progressbar\" attr.aria-valuenow=\"{{progress.percentage}}\"\n\t\taria-valuemin=\"0\" aria-valuemax=\"100\"\n\t\t[ngStyle]=\"{width:progress.percentage+'%'}\">\n\t\t{{progress.percentage}}%</div>\n</div>\n\n<label class=\"btn btn-default\">\n\t<input type=\"file\" (change)=\"selectFile($event)\">\n</label>\n\n<button class=\"btn btn-success\" [disabled]=\"!selectedFiles\"\n\t(click)=\"upload()\">Upload</button>\n"

/***/ }),

/***/ "./src/app/upload-file/form-upload/form-upload.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/upload-file/form-upload/form-upload.component.ts ***!
  \******************************************************************/
/*! exports provided: FormUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormUploadComponent", function() { return FormUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _upload_upload_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../upload/upload-file.service */ "./src/app/upload/upload-file.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormUploadComponent = /** @class */ (function () {
    function FormUploadComponent(uploadService) {
        this.uploadService = uploadService;
        this.progress = { percentage: 0 };
    }
    FormUploadComponent.prototype.ngOnInit = function () {
    };
    FormUploadComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
    };
    FormUploadComponent.prototype.upload = function () {
        var _this = this;
        this.progress.percentage = 0;
        this.currentFileUpload = this.selectedFiles.item(0);
        this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
                _this.progress.percentage = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                console.log('File is completely uploaded!');
            }
        });
        this.selectedFiles = undefined;
    };
    FormUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-upload',
            template: __webpack_require__(/*! ./form-upload.component.html */ "./src/app/upload-file/form-upload/form-upload.component.html"),
            styles: [__webpack_require__(/*! ./form-upload.component.css */ "./src/app/upload-file/form-upload/form-upload.component.css")]
        }),
        __metadata("design:paramtypes", [_upload_upload_file_service__WEBPACK_IMPORTED_MODULE_2__["UploadFileService"]])
    ], FormUploadComponent);
    return FormUploadComponent;
}());



/***/ }),

/***/ "./src/app/upload-file/list-upload/list-upload.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/upload-file/list-upload/list-upload.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/upload-file/list-upload/list-upload.component.html":
/*!********************************************************************!*\
  !*** ./src/app/upload-file/list-upload/list-upload.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"button btn-info\" *ngIf='showFile'\n\t(click)='showFiles(false)'>Hide Files</button>\n\n<button class=\"button btn-info\" *ngIf='!showFile'\n\t(click)='showFiles(true)'>Show Files</button>\n\n<div [hidden]=\"!showFile\">\n\t<div class=\"panel panel-primary\">\n\t\t<div class=\"panel-heading\">List of Files</div>\n\t\t<div *ngFor=\"let file of fileUploads | async\">\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<details-upload [fileUpload]='file'></details-upload>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/upload-file/list-upload/list-upload.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/upload-file/list-upload/list-upload.component.ts ***!
  \******************************************************************/
/*! exports provided: ListUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListUploadComponent", function() { return ListUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _upload_upload_file_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../upload/upload-file.service */ "./src/app/upload/upload-file.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import {Observable} from 'rxjs

var ListUploadComponent = /** @class */ (function () {
    function ListUploadComponent(uploadService) {
        this.uploadService = uploadService;
        this.showFile = false;
    }
    ListUploadComponent.prototype.ngOnInit = function () {
    };
    ListUploadComponent.prototype.showFiles = function (enable) {
        this.showFile = enable;
        if (enable) {
            this.fileUploads = this.uploadService.getFiles();
        }
    };
    ListUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'list-upload',
            template: __webpack_require__(/*! ./list-upload.component.html */ "./src/app/upload-file/list-upload/list-upload.component.html"),
            styles: [__webpack_require__(/*! ./list-upload.component.css */ "./src/app/upload-file/list-upload/list-upload.component.css")]
        }),
        __metadata("design:paramtypes", [_upload_upload_file_service__WEBPACK_IMPORTED_MODULE_1__["UploadFileService"]])
    ], ListUploadComponent);
    return ListUploadComponent;
}());



/***/ }),

/***/ "./src/app/upload-file/upload-file.module.ts":
/*!***************************************************!*\
  !*** ./src/app/upload-file/upload-file.module.ts ***!
  \***************************************************/
/*! exports provided: UploadFileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileModule", function() { return UploadFileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _details_upload_details_upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details-upload/details-upload.component */ "./src/app/upload-file/details-upload/details-upload.component.ts");
/* harmony import */ var _form_upload_form_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-upload/form-upload.component */ "./src/app/upload-file/form-upload/form-upload.component.ts");
/* harmony import */ var _list_upload_list_upload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-upload/list-upload.component */ "./src/app/upload-file/list-upload/list-upload.component.ts");
/* harmony import */ var _upload_upload_file_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../upload/upload-file.service */ "./src/app/upload/upload-file.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var UploadFileModule = /** @class */ (function () {
    function UploadFileModule() {
    }
    UploadFileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_details_upload_details_upload_component__WEBPACK_IMPORTED_MODULE_2__["DetailsUploadComponent"], _form_upload_form_upload_component__WEBPACK_IMPORTED_MODULE_3__["FormUploadComponent"], _list_upload_list_upload_component__WEBPACK_IMPORTED_MODULE_4__["ListUploadComponent"]],
            providers: [_upload_upload_file_service__WEBPACK_IMPORTED_MODULE_5__["UploadFileService"]],
            exports: [_details_upload_details_upload_component__WEBPACK_IMPORTED_MODULE_2__["DetailsUploadComponent"], _form_upload_form_upload_component__WEBPACK_IMPORTED_MODULE_3__["FormUploadComponent"], _list_upload_list_upload_component__WEBPACK_IMPORTED_MODULE_4__["ListUploadComponent"]]
        })
    ], UploadFileModule);
    return UploadFileModule;
}());



/***/ }),

/***/ "./src/app/upload/upload-file.service.ts":
/*!***********************************************!*\
  !*** ./src/app/upload/upload-file.service.ts ***!
  \***********************************************/
/*! exports provided: UploadFileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileService", function() { return UploadFileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploadFileService = /** @class */ (function () {
    function UploadFileService(http) {
        this.http = http;
    }
    UploadFileService.prototype.pushFileToStorage = function (file) {
        var formdata = new FormData();
        console.log(file);
        formdata.append('file', file);
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', 'payroll/fileupload/', formdata, {
            reportProgress: true,
            responseType: 'text'
        });
        return this.http.request(req);
    };
    UploadFileService.prototype.getFiles = function () {
        return this.http.get('/getallfiles');
    };
    UploadFileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UploadFileService);
    return UploadFileService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:4000'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\arbegum.US\Desktop\ang\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map