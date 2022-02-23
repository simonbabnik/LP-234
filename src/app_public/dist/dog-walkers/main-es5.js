(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Simon\Desktop\tpo\LP234-08\src\app_public\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "2D3X":
    /*!*****************************************!*\
      !*** ./src/app/services/dog.service.ts ***!
      \*****************************************/

    /*! exports provided: DogService */

    /***/
    function D3X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DogService", function () {
        return DogService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DogService = /*#__PURE__*/function () {
        function DogService(http) {
          _classCallCheck(this, DogService);

          this.http = http;
          this.dogApi = "https://api.thedogapi.com/v1/breeds/";
          this.dogApiKey = "1f9c183c-4503-4b3f-8d0f-785695091ea1";
        }

        _createClass(DogService, [{
          key: "getBreedInfo",
          value: function getBreedInfo(breed) {
            return this.http.get(this.dogApi + "search?q=" + breed, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'x-api-key': '${this.dogApiKey}'
              })
            }).toPromise().then(function (result) {
              return result;
            });
          }
        }, {
          key: "getAllBreeds",
          value: function getAllBreeds() {
            return this.http.get(this.dogApi).toPromise().then(function (result) {
              return result;
            });
          }
        }]);

        return DogService;
      }();

      DogService.ɵfac = function DogService_Factory(t) {
        return new (t || DogService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      DogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: DogService,
        factory: DogService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DogService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "2aQp":
    /*!************************************!*\
      !*** ./src/app/classes/shramba.ts ***!
      \************************************/

    /*! exports provided: SHRAMBA_BRSKALNIKA */

    /***/
    function aQp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SHRAMBA_BRSKALNIKA", function () {
        return SHRAMBA_BRSKALNIKA;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SHRAMBA_BRSKALNIKA = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Shramba brskalnika', {
        providedIn: 'root',
        factory: function factory() {
          return localStorage;
        }
      });
      /***/
    },

    /***/
    "7ZA2":
    /*!***************************************************!*\
      !*** ./src/app/services/authorization.service.ts ***!
      \***************************************************/

    /*! exports provided: AuthorizationService */

    /***/
    function ZA2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthorizationService", function () {
        return AuthorizationService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _classes_shramba__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../classes/shramba */
      "2aQp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var AuthorizationService = /*#__PURE__*/function () {
        function AuthorizationService(http, shramba) {
          _classCallCheck(this, AuthorizationService);

          this.http = http;
          this.shramba = shramba;
          this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        }

        _createClass(AuthorizationService, [{
          key: "b64Utf8",
          value: function b64Utf8(niz) {
            return decodeURIComponent(Array.prototype.map.call(atob(niz), function (znak) {
              return '%' + ('00' + znak.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
          }
        }, {
          key: "jePrijavljen",
          value: function jePrijavljen() {
            var token = this.getToken();

            if (token) {
              var koristnaVsebina = JSON.parse(this.b64Utf8(token.split('.')[1]));
              return koristnaVsebina.exp > Date.now() / 1000;
            } else {
              return false;
            }
          }
        }, {
          key: "authentication",
          value: function authentication(urlAddress, data) {
            var url = "".concat(this.apiUrl, "/").concat(urlAddress);
            return this.http.post(url, data).toPromise().then(function (rezultat) {
              return rezultat;
            })["catch"](this.handleError);
          }
        }, {
          key: "getId",
          value: function getId() {
            var token = this.getToken();

            if (token) {
              return JSON.parse(this.b64Utf8(token.split('.')[1]));
            } else {
              return "false";
            }
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return this.shramba.getItem('dog-walkers-token');
          }
        }, {
          key: "saveToken",
          value: function saveToken(token) {
            this.shramba.setItem('dog-walkers-token', token);
          }
        }, {
          key: "login",
          value: function login(email, password) {
            var _this = this;

            console.log('In login:)');
            return this.authentication('prijava', {
              email: email,
              geslo: password
            }).then(function (authResult) {
              console.log(authResult);

              _this.saveToken(authResult['žeton']);
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            this.shramba.removeItem('dog-walkers-token');
          }
        }, {
          key: "registration",
          value: function registration(registrationData) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      return _context.abrupt("return", this.authentication('registracija', registrationData).then(function (rezultatAvtentikacije) {
                        _this2.saveToken(rezultatAvtentikacije["žeton"]);
                      }));

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "handleError",
          value: function handleError(napaka) {
            console.error('Prišlo je do napake', napaka.error["sporočilo"] || napaka.error.errmsg || napaka.message || napaka);
            return Promise.reject(napaka.error["sporočilo"] || napaka.error.errmsg || napaka.message || napaka);
          }
        }]);

        return AuthorizationService;
      }();

      AuthorizationService.ɵfac = function AuthorizationService_Factory(t) {
        return new (t || AuthorizationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_classes_shramba__WEBPACK_IMPORTED_MODULE_3__["SHRAMBA_BRSKALNIKA"]));
      };

      AuthorizationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AuthorizationService,
        factory: AuthorizationService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthorizationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }, {
            type: Storage,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_classes_shramba__WEBPACK_IMPORTED_MODULE_3__["SHRAMBA_BRSKALNIKA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        apiUrl: 'http://localhost:3000/api',
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BuFo":
    /*!***************************************************!*\
      !*** ./src/app/components/home/home.component.ts ***!
      \***************************************************/

    /*! exports provided: HomeComponent */

    /***/
    function BuFo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _pipes_stars_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../pipes/stars.pipe */
      "MVFX");

      function HomeComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "stars");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Price (\u20AC)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var post_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, ctx_r0.ratings[i_r2].rating), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r1.kraj);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r1.cena);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r1.naziv);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r1.opis.length > 300 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](29, 7, post_r1.opis, 0, 300) + "..." : post_r1.opis);
        }
      }

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);

          this.posts = [{
            _id: '',
            _id_uporabnik: '',
            naziv: 'First post',
            kraj: 'Ljubljana',
            cena: 100,
            opis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }, {
            _id: '',
            _id_uporabnik: '',
            naziv: 'Second post',
            kraj: 'Maribor',
            cena: 10000,
            opis: 'Text.'
          }];
          this.ratings = [{
            userID: '',
            rating: 3.6
          }, {
            userID: '',
            rating: 0
          }];
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 23,
        vars: 1,
        consts: [[1, "container", "col-md-6"], [1, "special-center"], ["type", "button", "title", "Edit post", 1, "btn", "btn-sm", "button-green"], ["src", "../../../assets/img/plus.jpg", "alt", "add post", 1, "icon"], [1, "text-h5", "mb-3"], [1, "list-group"], ["type", "button", "aria-current", "true", 1, "list-group-item", "list-group-item-action"], [1, "list-group-item"], [1, "row", "justify-content-between", "align-items-center"], [1, "col", "d-flex"], [1, "col"], ["type", "text", "placeholder", "Location", "aria-label", "Location", "aria-describedby", "location", 1, "form-control"], [1, "d-flex", "col", "justify-content-end"], ["type", "button", 1, "btn", "btn-sm", "button-color-accent"], [1, "m-5"], ["class", "card mb-3", 4, "ngFor", "ngForOf"], [1, "card", "mb-3"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [3, "innerHtml"], ["type", "button", "title", "Edit post", 1, "btn", "btn-sm", "btn-warning"], ["src", "../../../assets/img/edit.png", "alt", "edit post", 1, "icon"], ["type", "button", "title", "Delete post", 1, "btn", "btn-sm", "btn-danger", "m-left"], ["src", "../../../assets/img/delete.png", "alt", "delete post", 1, "icon"], [1, "card-body"], [1, "row"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], ["id", "location", 1, "input-group-text"], [1, "form-control"], ["id", "price", 1, "input-group-text"], [1, "card-title"], [1, "card-text"], ["href", "#", 1, "btn", "btn-sm", "button-color-accent"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Add post");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sorting options");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Sort by best-rated dog walkers ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Filter by location:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Apply");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HomeComponent_div_22_Template, 32, 11, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        pipes: [_pipes_stars_pipe__WEBPACK_IMPORTED_MODULE_2__["StarsPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"]],
        styles: [".special-center[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  padding: 0;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 20px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  display: flex;\r\n  margin: 1px;\r\n  padding: 5px;\r\n}\r\n\r\n.text-h5[_ngcontent-%COMP%] {\r\n  font-size: 1.25rem;\r\n  font-weight: 500;\r\n  line-height: 1.2;\r\n}\r\n\r\n.m-left[_ngcontent-%COMP%] {\r\n  margin-left: 5px;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%] {\r\n  height: 25px;\r\n}\r\n\r\n.button-green[_ngcontent-%COMP%] {\r\n  background-color: mediumspringgreen;\r\n  border-color: black;\r\n  display: inline-block;\r\n  position: absolute;\r\n  right: 0;\r\n}\r\n\r\n.button-green[_ngcontent-%COMP%]:hover {\r\n  background-color: #01ec92;\r\n}\r\n\r\n.button-green[_ngcontent-%COMP%]:focus {\r\n  background-color: #01ec92;\r\n}\r\n\r\n\r\n\r\n.button-color-accent[_ngcontent-%COMP%] {\r\n  padding: 5px 20px;\r\n  width: auto;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  background-color: black;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n  background-color: pink;\r\n  border-color: black;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  border-color: black;\r\n}\r\n\r\n.list-group-item[_ngcontent-%COMP%] {\r\n  border-color: black;\r\n}\r\n\r\n.btn-warning[_ngcontent-%COMP%] {\r\n  background-color: #ffff6e;\r\n  border-color: black;\r\n}\r\n\r\n.btn-danger[_ngcontent-%COMP%] {\r\n  background-color: #ff6363;\r\n  border-color: black;\r\n}\r\n\r\n.btn-warning[_ngcontent-%COMP%]:hover {\r\n  background-color: #fafa1c;\r\n  border-color: black;\r\n}\r\n\r\n.btn-danger[_ngcontent-%COMP%]:hover {\r\n  background-color: #fd2323;\r\n  border-color: black;\r\n}\r\n\r\n.btn-warning[_ngcontent-%COMP%]:focus {\r\n  background-color: #fafa1c;\r\n  border-color: black;\r\n}\r\n\r\n.btn-danger[_ngcontent-%COMP%]:focus {\r\n  background-color: #fd2323;\r\n  border-color: black;\r\n}\r\n\r\n.list-group-item-action[_ngcontent-%COMP%]:hover {\r\n  background-color: pink;\r\n}\r\n\r\n.list-group-item-action[_ngcontent-%COMP%]:focus {\r\n  background-color: pink;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSxzQkFBc0I7O0FBRXRCO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwZWNpYWwtY2VudGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiAxcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4udGV4dC1oNSB7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG5cclxuLm0tbGVmdCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmljb24ge1xyXG4gIGhlaWdodDogMjVweDtcclxufVxyXG5cclxuLmJ1dHRvbi1ncmVlbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbWVkaXVtc3ByaW5nZ3JlZW47XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uYnV0dG9uLWdyZWVuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDFlYzkyO1xyXG59XHJcblxyXG4uYnV0dG9uLWdyZWVuOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDFlYzkyO1xyXG59XHJcblxyXG4vKiBPdmVycmlkaW5nIHN0eWxlcyAqL1xyXG5cclxuLmJ1dHRvbi1jb2xvci1hY2NlbnQge1xyXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG5ociB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcclxuICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmJ0bi13YXJuaW5nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjZlO1xyXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5idG4tZGFuZ2VyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2MzYzO1xyXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5idG4td2FybmluZzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmExYztcclxuICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uYnRuLWRhbmdlcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkMjMyMztcclxuICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uYnRuLXdhcm5pbmc6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhMWM7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmJ0bi1kYW5nZXI6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZDIzMjM7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbS1hY3Rpb246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7XHJcbn1cclxuXHJcbi5saXN0LWdyb3VwLWl0ZW0tYWN0aW9uOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "DZ0t":
    /*!*********************************************************!*\
      !*** ./src/app/components/profile/profile.component.ts ***!
      \*********************************************************/

    /*! exports provided: ProfileComponent */

    /***/
    function DZ0t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _classes_pes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../classes/pes */
      "ECf8");
      /* harmony import */


      var _services_dog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/dog.service */
      "2D3X");
      /* harmony import */


      var src_app_services_authorization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/authorization.service */
      "7ZA2");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_uporabniki_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/uporabniki.service */
      "wW56");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ProfileComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_div_0_Template_div_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.startEdit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Surname:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Birth date:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Description:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_div_0_Template_div_click_28_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.startEdit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_div_0_Template_div_click_30_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.toggleAddDog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.uporabnik.tipRacuna);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.uporabnik.ime, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.uporabnik.priimek, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 5, ctx_r0.uporabnik.datumRojstva), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.uporabnik.opis, " ");
        }
      }

      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent(dogService, authorizationService, router, uporabnikService) {
          _classCallCheck(this, ProfileComponent);

          this.dogService = dogService;
          this.authorizationService = authorizationService;
          this.router = router;
          this.uporabnikService = uporabnikService;
          this.showAddDog = false;
          this.breedData = {};
          this.usefulInfo = [{
            bred_for: "Fetching data...",
            breed_group: "Fetching data...",
            height: {
              imperial: "Fetching data...",
              metric: "Fetching data..."
            },
            _id: -1,
            life_span: "Fetching data...",
            name: "Fetching data...",
            reference_image_id: "Fetching data...",
            temperament: "Fetching data...",
            weight: {
              imperial: "Fetching data...",
              metric: "Fetching data..."
            }
          }];
          this.newDog = new _classes_pes__WEBPACK_IMPORTED_MODULE_1__["Pes"]();
        }

        _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            if (!this.authorizationService.jePrijavljen()) {
              this.router.navigate(['login']);
            }

            this.id = this.authorizationService.getId()["_id"];
            this.uporabnikService.getUser(this.id).then(function (result) {
              _this3.uporabnik = result;
            });
          }
        }, {
          key: "startEdit",
          value: function startEdit() {
            console.log("start editing");
          }
        }, {
          key: "breedInfo",
          value: function breedInfo(breed) {
            var _this4 = this;

            this.usefulInfo = [{
              bred_for: "Fetching data...",
              breed_group: "Fetching data...",
              height: {
                imperial: "Fetching data...",
                metric: "Fetching data..."
              },
              _id: -1,
              life_span: "Fetching data...",
              name: "Fetching data...",
              reference_image_id: "Fetching data...",
              temperament: "Fetching data...",
              weight: {
                imperial: "Fetching data...",
                metric: "Fetching data..."
              }
            }];
            this.breedData = this.dogService.getBreedInfo(breed).then(function (result) {
              _this4.usefulInfo = result;
            });
            var popup = document.getElementById("myPopup");
            popup === null || popup === void 0 ? void 0 : popup.classList.toggle("show");
          }
        }, {
          key: "toggleAddDog",
          value: function toggleAddDog() {
            var _a;

            (_a = document.getElementById("dogForm")) === null || _a === void 0 ? void 0 : _a.classList.add("visible");
          }
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
        return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dog_service__WEBPACK_IMPORTED_MODULE_2__["DogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authorization_service__WEBPACK_IMPORTED_MODULE_3__["AuthorizationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_uporabniki_service__WEBPACK_IMPORTED_MODULE_5__["UporabnikiService"]));
      };

      ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProfileComponent,
        selectors: [["app-profile"]],
        decls: 1,
        vars: 1,
        consts: [["class", "profile-container", 4, "ngIf"], [1, "profile-container"], ["src", "../../../assets/img/person.jpg", "alt", "Slika profila", 1, "image-container"], [1, "profile-type"], ["id", "edit_profil", 1, "edit-icon-container", 3, "click"], ["src", "../../../assets/img/edit.png", "alt", "edit profil", 1, "edit-icon"], [1, "profile-info"], [1, "profile-description"], ["id", "edit_dog", 1, "edit-icon-container", 2, "margin-bottom", "10px", "height", "24px", 3, "click"], ["src", "../../../assets/img/edit.png", "alt", "edit dog", 1, "edit-icon"], ["routerLink", "/add_dog", "id", "add_dog", 1, "container", 3, "click"], ["src", "../../../assets/img/plus.jpg", 1, "plus"]],
        template: function ProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileComponent_div_0_Template, 32, 7, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.uporabnik);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
        styles: ["*[_ngcontent-%COMP%] {\r\n    font-family: 'Roboto';\r\n  }\r\n  \r\n  .profile-container[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    margin: 5vh 0 10% 10%;\r\n    text-align: center;\r\n  }\r\n  \r\n  .image-container[_ngcontent-%COMP%] {\r\n    height: 35vh;\r\n    border-radius: 15px;\r\n    border: 5px white solid;\r\n    transition: transform .25s;\r\n  }\r\n  \r\n  .image-container[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.2);\r\n  }\r\n  \r\n  hr[_ngcontent-%COMP%] {\r\n    height: 3px;\r\n    margin: 10px auto;\r\n    background-color: black;\r\n    width: 60%;\r\n  }\r\n  \r\n  .profile-type[_ngcontent-%COMP%] {\r\n    border-radius: 15px;\r\n    background-color: rgb(255, 192, 203);\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    padding: 10px;\r\n    margin: auto;\r\n    border: 2px white solid;\r\n  }\r\n  \r\n  .profile-info[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n    margin: 10px 0;\r\n  }\r\n  \r\n  .profile-description[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    width: 45%;\r\n    margin: auto;\r\n    border-radius: 15px;\r\n  }\r\n  \r\n  .edit-icon[_ngcontent-%COMP%] {\r\n    height: 25px;\r\n    float: right;\r\n  }\r\n  \r\n  .edit-icon-container[_ngcontent-%COMP%] {\r\n    width: 60%;\r\n    margin: 0 auto;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .container[_ngcontent-%COMP%] {\r\n    width: 60%;\r\n    background-color: pink;\r\n    border-radius: 15px;\r\n    margin: auto;\r\n  }\r\n  \r\n  .images[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    margin: auto;\r\n  }\r\n  \r\n  .images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    padding: 10px;\r\n    border-radius: 15px;\r\n  }\r\n  \r\n  .data[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n    margin: auto;\r\n    padding: 10px;\r\n  }\r\n  \r\n  .add-dog[_ngcontent-%COMP%] {\r\n    width: 60%;\r\n  }\r\n  \r\n  .plus[_ngcontent-%COMP%] {\r\n    width: 5%;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .dog-description[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    width: 70%;\r\n    margin: auto;\r\n    border-radius: 15px;\r\n  }\r\n  \r\n  .dotted[_ngcontent-%COMP%] {\r\n    border-bottom: 1px black dotted;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .popup[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n  }\r\n  \r\n  \r\n  \r\n  .popup[_ngcontent-%COMP%]   .popuptext[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n    width: 320px;\r\n    background-color: rgb(116, 115, 115);\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 6px;\r\n    padding: 8px 0;\r\n    position: absolute;\r\n    z-index: 1;\r\n    bottom: 125%;\r\n    left: 50%;\r\n    margin-left: -80px;\r\n  }\r\n  \r\n  \r\n  \r\n  .popup[_ngcontent-%COMP%]   .popuptext[_ngcontent-%COMP%]::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 50%;\r\n    margin-left: -5px;\r\n    border-width: 5px;\r\n    border-style: solid;\r\n    border-color: #555 transparent transparent transparent;\r\n  }\r\n  \r\n  \r\n  \r\n  .popup[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n    -webkit-animation: fadeIn 1s;\r\n    animation: fadeIn 1s;\r\n  }\r\n  \r\n  \r\n  \r\n  @-webkit-keyframes fadeIn {\r\n    from {opacity: 0;}\r\n    to {opacity: 1;}\r\n  }\r\n  \r\n  @keyframes fadeIn {\r\n    from {opacity: 0;}\r\n    to {opacity:1 ;}\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQywwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFVBQVU7SUFDVixjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsU0FBUztJQUNULGVBQWU7RUFDakI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSwrQkFBK0I7SUFDL0IsZUFBZTtFQUNqQjs7RUFHQTtJQUNFLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtFQUNuQjs7RUFFQSxxQkFBcUI7O0VBQ3JCO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFNBQVM7SUFDVCxrQkFBa0I7RUFDcEI7O0VBRUEsZ0JBQWdCOztFQUNoQjtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixzREFBc0Q7RUFDeEQ7O0VBRUEsZ0RBQWdEOztFQUNoRDtJQUNFLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsb0JBQW9CO0VBQ3RCOztFQUVBLHNDQUFzQzs7RUFDdEM7SUFDRSxNQUFNLFVBQVUsQ0FBQztJQUNqQixJQUFJLFVBQVUsQ0FBQztFQUNqQjs7RUFFQTtJQUNFLE1BQU0sVUFBVSxDQUFDO0lBQ2pCLElBQUksVUFBVSxDQUFDO0VBQ2pCIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gIH1cclxuICBcclxuICAucHJvZmlsZS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogNXZoIDAgMTAlIDEwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDM1dmg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYm9yZGVyOiA1cHggd2hpdGUgc29saWQ7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjI1cztcclxuICB9XHJcbiAgXHJcbiAgLmltYWdlLWNvbnRhaW5lcjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgfVxyXG4gIFxyXG4gIGhyIHtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9maWxlLXR5cGUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE5MiwgMjAzKTtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXI6IDJweCB3aGl0ZSBzb2xpZDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2ZpbGUtaW5mbyB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9maWxlLWRlc2NyaXB0aW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAuZWRpdC1pY29uIHtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgLmVkaXQtaWNvbi1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmltYWdlcyB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuaW1hZ2VzIGltZyB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kYXRhIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuYWRkLWRvZyB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gIH1cclxuICBcclxuICAucGx1cyB7XHJcbiAgICB3aWR0aDogNSU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5kb2ctZGVzY3JpcHRpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kb3R0ZWQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGJsYWNrIGRvdHRlZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLnBvcHVwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRoZSBhY3R1YWwgcG9wdXAgKi9cclxuICAucG9wdXAgLnBvcHVwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE2LCAxMTUsIDExNSk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJvdHRvbTogMTI1JTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtODBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogUG9wdXAgYXJyb3cgKi9cclxuICAucG9wdXAgLnBvcHVwdGV4dDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTAwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNTU1IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICAvKiBUb2dnbGUgdGhpcyBjbGFzcyAtIGhpZGUgYW5kIHNob3cgdGhlIHBvcHVwICovXHJcbiAgLnBvcHVwIC5zaG93IHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDFzO1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEFkZCBhbmltYXRpb24gKGZhZGUgaW4gdGhlIHBvcHVwKSAqL1xyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgZnJvbSB7b3BhY2l0eTogMDt9XHJcbiAgICB0byB7b3BhY2l0eTogMTt9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgIGZyb20ge29wYWNpdHk6IDA7fVxyXG4gICAgdG8ge29wYWNpdHk6MSA7fVxyXG4gIH1cclxuICAiXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.css']
          }]
        }], function () {
          return [{
            type: _services_dog_service__WEBPACK_IMPORTED_MODULE_2__["DogService"]
          }, {
            type: src_app_services_authorization_service__WEBPACK_IMPORTED_MODULE_3__["AuthorizationService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: src_app_services_uporabniki_service__WEBPACK_IMPORTED_MODULE_5__["UporabnikiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ECf8":
    /*!********************************!*\
      !*** ./src/app/classes/pes.ts ***!
      \********************************/

    /*! exports provided: Pes */

    /***/
    function ECf8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Pes", function () {
        return Pes;
      });

      var Pes = function Pes() {
        _classCallCheck(this, Pes);

        this._id = "";
        this.opis = "";
        this.slika = "";
        this.ime = "";
        this.pasma = "";
        this.ocene = [];
        this.povprecnaOcena = 0;
      };
      /***/

    },

    /***/
    "Lquv":
    /*!*************************************************************!*\
      !*** ./src/app/components/dashboard/dashboard.component.ts ***!
      \*************************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function Lquv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_uporabniki_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/uporabniki.service */
      "wW56");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function DashboardComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_2_Template_img_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.startEdit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_2_Template_img_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.deleteUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Description:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", user_r1.ime, " ", user_r1.priimek, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 4, user_r1.datumRojstva));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r1.opis, " ");
        }
      }

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent(uporabnikiService) {
          _classCallCheck(this, DashboardComponent);

          this.uporabnikiService = uporabnikiService;
          this.users = [];
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.uporabnikiService.getAllUsers().then(function (result) {
              _this5.users = result["uporabniki"];
            });
          }
        }, {
          key: "startEdit",
          value: function startEdit() {}
        }, {
          key: "deleteUser",
          value: function deleteUser() {}
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_uporabniki_service__WEBPACK_IMPORTED_MODULE_1__["UporabnikiService"]));
      };

      DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        decls: 3,
        vars: 1,
        consts: [[3, "click"], ["class", "container", 4, "ngFor", "ngForOf"], [1, "container"], [1, "edit-delete"], ["src", "../../../assets/img/edit.png", "alt", "edit profil", 1, "edit-icon", 3, "click"], ["src", "../../../assets/img/delete.png", "alt", "edit profil", 1, "edit-icon", 3, "click"], [1, "data-fields"], [1, "user-data"], [2, "text-align", "center", "font-size", "34px"], [1, "h1", 2, "font-size", "24px"], [1, "profile-description"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_h1_click_0_listener() {
              return ctx.startEdit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Admin dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_div_2_Template, 17, 6, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
        styles: ["h1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 20px auto;\r\n  }\r\n  \r\n  .h1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 10px auto;\r\n  }\r\n  \r\n  .container[_ngcontent-%COMP%] {\r\n    background-color: pink;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    width: 70%;\r\n    margin: 20px auto;\r\n    border: 5px white solid;\r\n    border-radius: 15px;\r\n  }\r\n  \r\n  .data-fields[_ngcontent-%COMP%] {\r\n    padding: 5px 20px 30px 20px;\r\n    margin: auto;\r\n    vertical-align: top;\r\n  }\r\n  \r\n  .profile-image[_ngcontent-%COMP%] {\r\n    width: 20%;\r\n    border-radius: 15px;\r\n    display: inline-block;\r\n    margin: auto 0;\r\n  }\r\n  \r\n  .user-data[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 90%;\r\n    margin-left: 20px;\r\n  }\r\n  \r\n  .profile-description[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    margin: auto;\r\n    border-radius: 15px;\r\n    padding: 10px;\r\n    width: 60%;\r\n  }\r\n  \r\n  .edit-delete[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n  }\r\n  \r\n  .edit-icon[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    display: inline-block;\r\n    margin: 10px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  hr[_ngcontent-%COMP%] {\r\n    height: 3px;\r\n    margin: 10px auto;\r\n    background-color: black;\r\n    width: 80%;\r\n    border: none;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsVUFBVTtFQUNaOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixZQUFZO0VBQ2QiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgYm9yZGVyOiA1cHggd2hpdGUgc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAuZGF0YS1maWVsZHMge1xyXG4gICAgcGFkZGluZzogNXB4IDIwcHggMzBweCAyMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2ZpbGUtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG8gMDtcclxuICB9XHJcbiAgXHJcbiAgLnVzZXItZGF0YSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9maWxlLWRlc2NyaXB0aW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICB9XHJcbiAgXHJcbiAgLmVkaXQtZGVsZXRlIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICAuZWRpdC1pY29uIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICBociB7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_uporabniki_service__WEBPACK_IMPORTED_MODULE_1__["UporabnikiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "MVFX":
    /*!*************************************!*\
      !*** ./src/app/pipes/stars.pipe.ts ***!
      \*************************************/

    /*! exports provided: StarsPipe */

    /***/
    function MVFX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StarsPipe", function () {
        return StarsPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var StarsPipe = /*#__PURE__*/function () {
        function StarsPipe() {
          _classCallCheck(this, StarsPipe);
        }

        _createClass(StarsPipe, [{
          key: "transform",
          value: function transform(ocena) {
            var zvezdice = '';

            for (var i = 1; i <= 5; i++) {
              zvezdice += '<i class="fa' + (ocena >= i ? 's' : 'r') + ' fa-star"></i>';
            }

            return zvezdice;
          }
        }]);

        return StarsPipe;
      }();

      StarsPipe.ɵfac = function StarsPipe_Factory(t) {
        return new (t || StarsPipe)();
      };

      StarsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "stars",
        type: StarsPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StarsPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'stars'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/toolbar/toolbar.component */
      "np0s");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'dog-walkers';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
          }
        },
        directives: [_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["ToolbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: ["*[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7RUFDeEIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "W3Zi":
    /*!*****************************************************!*\
      !*** ./src/app/components/login/login.component.ts ***!
      \*****************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function W3Zi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_authorization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/authorization.service */
      "7ZA2");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      function LoginComponent_ngb_alert_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function LoginComponent_ngb_alert_3_Template_ngb_alert_closed_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.alert.hidden = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r0.alert.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.alert.message);
        }
      }

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(authService, router) {
          var _this6 = this;

          _classCallCheck(this, LoginComponent);

          this.authService = authService;
          this.router = router;
          this.alert = {
            hidden: true,
            type: 'danger',
            message: 'Something went wrong!'
          };
          this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          });

          this.handleError = function (error) {
            console.log(error);

            _this6.showAlert(error);
          };
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this7 = this;

            var _a, _b, _c, _d;

            if (this.loginForm.valid) {
              // Null checks
              var email = (_a = this.loginForm.get('email')) === null || _a === void 0 ? void 0 : _a.value;
              var pass = (_b = this.loginForm.get('password')) === null || _b === void 0 ? void 0 : _b.value;

              if (email !== undefined && pass !== undefined) {
                this.authService.login((_c = this.loginForm.get('email')) === null || _c === void 0 ? void 0 : _c.value, (_d = this.loginForm.get('password')) === null || _d === void 0 ? void 0 : _d.value).then(function () {
                  _this7.router.navigate(['/profile']);
                })["catch"](function (sporocilo) {
                  return _this7.handleError(sporocilo);
                });
              }
            } else {
              console.log('Login data are not valid.');
            }
          }
          /* Alerts */
          // Set and show alert

        }, {
          key: "showAlert",
          value: function showAlert(message) {
            this.alert.message = message;
            this.alert.hidden = false;
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authorization_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 15,
        vars: 3,
        consts: [[1, "container"], [1, "login-container", "mt-5", "mb-5"], [1, "row", "justify-content-center", "mt-3"], ["class", "w-75", 3, "type", "closed", 4, "ngIf"], [1, "mt-3", "m-bottom-5"], [3, "formGroup", "ngSubmit"], ["type", "email", "id", "email", "name", "email", "placeholder", "Email", "formControlName", "email", "required", ""], ["type", "password", "id", "password", "name", "password", "placeholder", "Password", "formControlName", "password", "required", ""], ["type", "submit", 1, "button-color-accent", "m-top-5", 3, "disabled"], ["routerLink", "/register", 1, "button-color-accent", "m-bottom-5"], [1, "w-75", 3, "type", "closed"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_ngb_alert_3_Template, 2, 2, "ngb-alert", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "OR");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.alert.hidden);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbAlert"]],
        styles: [".login-container[_ngcontent-%COMP%] {\r\n  width: 60%;\r\n  border: #cccccc solid 2px;\r\n  border-radius: 8px;\r\n  margin: auto;\r\n  padding-inline: 20px;\r\n  text-align: center;\r\n  background-color: white;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.m-top-5[_ngcontent-%COMP%] {\r\n  margin-top: 5vh;\r\n}\r\n\r\n.m-bottom-5[_ngcontent-%COMP%] {\r\n  margin-bottom: 5vh;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n  font-size: 1.5rem\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCO0FBQ0YiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jb250YWluZXIge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgYm9yZGVyOiAjY2NjY2NjIHNvbGlkIDJweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmctaW5saW5lOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4ubS10b3AtNSB7XHJcbiAgbWFyZ2luLXRvcDogNXZoO1xyXG59XHJcblxyXG4ubS1ib3R0b20tNSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXZoO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDEuNXJlbVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
          }]
        }], function () {
          return [{
            type: _services_authorization_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "XC3f":
    /*!***********************************************************!*\
      !*** ./src/app/components/register/register.component.ts ***!
      \***********************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function XC3f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_authorization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/authorization.service */
      "7ZA2");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      function RegisterComponent_ngb_alert_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function RegisterComponent_ngb_alert_3_Template_ngb_alert_closed_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.alert.hidden = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r0.alert.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.alert.message);
        }
      }

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(authService, router) {
          var _this8 = this;

          _classCallCheck(this, RegisterComponent);

          this.authService = authService;
          this.router = router;
          this.alert = {
            hidden: true,
            type: 'danger',
            message: 'Nekaj je šlo narobe :('
          };
          this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            passwordConfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            birthday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            documentID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            profilePicture: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](undefined),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](undefined)
          });

          this.handleError = function (error) {
            console.log(error);

            _this8.showAlert(error);
          };
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "passwordMatch",
          value: function passwordMatch(pass1, pass2) {
            if (pass1 && pass2 && pass1 === pass2) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this9 = this;

            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k; // tslint:disable-next-line:max-line-length


            if (this.registerForm.valid) {
              if (this.passwordMatch((_a = this.registerForm.get('password')) === null || _a === void 0 ? void 0 : _a.value, (_b = this.registerForm.get('passwordConfirm')) === null || _b === void 0 ? void 0 : _b.value)) {
                console.log('valid registration form'); // Role

                var role = 'lastnik';

                if (((_c = this.registerForm.get('role')) === null || _c === void 0 ? void 0 : _c.value) === true) {
                  role = 'sprehajalec';
                }

                var registerData = {
                  ime: (_d = this.registerForm.get('firstName')) === null || _d === void 0 ? void 0 : _d.value,
                  priimek: (_e = this.registerForm.get('surname')) === null || _e === void 0 ? void 0 : _e.value,
                  email: (_f = this.registerForm.get('email')) === null || _f === void 0 ? void 0 : _f.value,
                  geslo: (_g = this.registerForm.get('password')) === null || _g === void 0 ? void 0 : _g.value,
                  datumRojstva: (_h = this.registerForm.get('birthday')) === null || _h === void 0 ? void 0 : _h.value,
                  slika_dokumenta: (_j = this.registerForm.get('documentID')) === null || _j === void 0 ? void 0 : _j.value,
                  slika_profila: (_k = this.registerForm.get('profilePicture')) === null || _k === void 0 ? void 0 : _k.value,
                  tip_racuna: role
                };
                this.authService.registration(registerData).then(function () {
                  _this9.router.navigate(['/profile']);
                })["catch"](function (sporocilo) {
                  return _this9.handleError(sporocilo);
                });
              } else {
                this.showAlert('Vneseni gesli se ne ujemata.');
              }
            }
            /*// preveri geslo
            const form = new FormData();
            form.append('ime', this.registerForm.get('firstName').value);
            form.append('priimek', this.registerForm.get('surname').value);
            form.append('email', this.registerForm.get('email').value);
            form.append('geslo', this.registerForm.get('password').value);
            form.append('birthday', this.registerForm.get('birthday').value); // spremeni
            form.append('slika_dokumenta', this.registerForm.get('documentID').value);
            form.append('slika_profila', this.registerForm.get('profilePicture').value);
            form.append('tip_racuna', this.registerForm.get('role').value);
            console.log(form);*/

          }
          /* Alerts */
          // Set and show alert

        }, {
          key: "showAlert",
          value: function showAlert(message) {
            this.alert.message = message;
            this.alert.hidden = false;
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authorization_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RegisterComponent,
        selectors: [["app-register"]],
        decls: 30,
        vars: 3,
        consts: [[1, "container"], [1, "register-container", "mt-5", "mb-5"], [1, "row", "justify-content-center", "mt-3"], ["class", "w-75", 3, "type", "closed", 4, "ngIf"], [1, "mt-3", "m-bottom-5"], [3, "formGroup", "ngSubmit"], ["type", "text", "id", "firstname", "name", "firstname", "placeholder", "First name", "formControlName", "firstName"], ["type", "text", "id", "surname", "name", "surname", "placeholder", "Last name", "formControlName", "surname"], ["type", "email", "id", "email", "name", "email", "placeholder", "Email", "formControlName", "email"], ["type", "password", "id", "password", "name", "password", "placeholder", "Password", "formControlName", "password"], ["type", "password", "id", "password_confirm", "name", "password_confirm", "placeholder", "Confirm password", "formControlName", "passwordConfirm"], [1, "input-inline"], ["for", "birthday"], ["type", "date", "id", "birthday", "name", "birthday", "formControlName", "birthday", 1, "field-inline"], ["for", "documentID"], ["type", "file", "id", "documentID", "name", "documentID", "formControlName", "documentID", 1, "field-inline"], ["for", "profile"], ["type", "file", "id", "profile", "name", "profile_picture", "formControlName", "profilePicture", 1, "field-inline"], [1, "input-inline-left"], ["type", "checkbox", "id", "is_dog_walker", "name", "is_dog_walker", "formControlName", "role"], ["for", "is_dog_walker"], ["type", "submit", 1, "button-color-accent", "m-top-5", "m-bottom-5", 3, "disabled"], [1, "w-75", 3, "type", "closed"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegisterComponent_ngb_alert_3_Template, 2, 2, "ngb-alert", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_6_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Date of birth");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Upload ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Upload profile picture");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "I am a dog walker.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.alert.hidden);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbAlert"]],
        styles: [".register-container[_ngcontent-%COMP%] {\r\n  width: 60%;\r\n  border: #cccccc solid 2px;\r\n  border-radius: 8px;\r\n  margin: auto;\r\n  padding-inline: 20px;\r\n  text-align: center;\r\n  background-color: white;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n}\r\n\r\ninput[type=checkbox][_ngcontent-%COMP%] {\r\n  width: auto;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n}\r\n\r\n.input-inline[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.input-inline-left[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: left;\r\n  align-items: center;\r\n}\r\n\r\n.field-inline[_ngcontent-%COMP%] {\r\n  width: 60%;\r\n  right: 0;\r\n}\r\n\r\n.label-inline[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  float: left;\r\n}\r\n\r\n.m-top-5[_ngcontent-%COMP%] {\r\n  margin-top: 5vh;\r\n}\r\n\r\n.m-bottom-5[_ngcontent-%COMP%] {\r\n  margin-bottom: 5vh;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n  font-size: 1.5rem\r\n}\r\n\r\n\r\n\r\n\r\n\r\n[type=\"checkbox\"][_ngcontent-%COMP%]:not(:checked), [type=\"checkbox\"][_ngcontent-%COMP%]:checked {\r\n  position: absolute;\r\n  left: 0;\r\n  opacity: 0.01;\r\n}\r\n\r\n[type=\"checkbox\"][_ngcontent-%COMP%]:not(:checked)    + label[_ngcontent-%COMP%], [type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  padding-left: 2.3em;\r\n  font-size: 1.05em;\r\n  line-height: 1.7;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n[type=\"checkbox\"][_ngcontent-%COMP%]:not(:checked)    + label[_ngcontent-%COMP%]:before, [type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {\r\n  content: '';\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 1.4em;\r\n  height: 1.4em;\r\n  border: 1px solid #aaa;\r\n  background: #FFF;\r\n  border-radius: .2em;\r\n  box-shadow: inset 0 1px 3px rgba(0,0,0, .1), 0 0 0 rgba(203, 34, 237, .2);\r\n  transition: all .275s;\r\n}\r\n\r\n\r\n\r\n[type=\"checkbox\"][_ngcontent-%COMP%]:not(:checked)    + label[_ngcontent-%COMP%]:after, [type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:after {\r\n  content: '\u2715';\r\n  position: absolute;\r\n  top: .525em;\r\n  left: .10em; \r\n  font-size: 1.375em;\r\n  color: #CB22ED;\r\n  line-height: 0;\r\n  transition: all .2s;\r\n}\r\n\r\n\r\n\r\n[type=\"checkbox\"][_ngcontent-%COMP%]:not(:checked)    + label[_ngcontent-%COMP%]:after {\r\n  opacity: 0;\r\n  transform: scale(0) rotate(45deg);\r\n}\r\n\r\n[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:after {\r\n  opacity: 1;\r\n  transform: scale(1) rotate(0);\r\n}\r\n\r\n\r\n\r\n[type=\"checkbox\"][_ngcontent-%COMP%]:checked:focus    + label[_ngcontent-%COMP%]:before, [type=\"checkbox\"][_ngcontent-%COMP%]:not(:checked):focus    + label[_ngcontent-%COMP%]:before {\r\n  box-shadow: inset 0 1px 3px rgba(0,0,0, .1), 0 0 0 6px rgba(203, 34, 237, .2);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsUUFBUTtBQUNWOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEI7QUFDRjs7QUFFQSxpRUFBaUU7O0FBRWpFLDJCQUEyQjs7QUFDM0I7O0VBRUUsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxhQUFhO0FBQ2Y7O0FBQ0E7O0VBRUUsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUEsb0JBQW9COztBQUNwQjs7RUFFRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix5RUFBeUU7RUFFekUscUJBQXFCO0FBQ3ZCOztBQUVBLHdCQUF3Qjs7QUFDeEI7O0VBRUUsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVyxFQUFFLHFEQUFxRDtFQUNsRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGNBQWM7RUFFZCxtQkFBbUI7QUFDckI7O0FBRUEsZ0NBQWdDOztBQUNoQztFQUNFLFVBQVU7RUFFVixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxVQUFVO0VBRVYsNkJBQTZCO0FBQy9COztBQUVBLGtCQUFrQjs7QUFDbEI7O0VBRUUsNkVBQTZFO0FBQy9FIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXItY29udGFpbmVyIHtcclxuICB3aWR0aDogNjAlO1xyXG4gIGJvcmRlcjogI2NjY2NjYyBzb2xpZCAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nLWlubGluZTogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmlucHV0LWlubGluZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5pbnB1dC1pbmxpbmUtbGVmdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZmllbGQtaW5saW5lIHtcclxuICB3aWR0aDogNjAlO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4ubGFiZWwtaW5saW5lIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5tLXRvcC01IHtcclxuICBtYXJnaW4tdG9wOiA1dmg7XHJcbn1cclxuXHJcbi5tLWJvdHRvbS01IHtcclxuICBtYXJnaW4tYm90dG9tOiA1dmg7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtXHJcbn1cclxuXHJcbi8qIENoZWNrYm94IC0gc291cmNlOiBodHRwczovL2Nzcy10cmlja3MuY29tL3RoZS1jaGVja2JveC1oYWNrLyAqL1xyXG5cclxuLyogQmFzZSBmb3IgbGFiZWwgc3R5bGluZyAqL1xyXG5bdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6Y2hlY2tlZCksXHJcblt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgb3BhY2l0eTogMC4wMTtcclxufVxyXG5bdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbCxcclxuW3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDIuM2VtO1xyXG4gIGZvbnQtc2l6ZTogMS4wNWVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBjaGVja2JveCBhc3BlY3QgKi9cclxuW3R5cGU9XCJjaGVja2JveFwiXTpub3QoOmNoZWNrZWQpICsgbGFiZWw6YmVmb3JlLFxyXG5bdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMS40ZW07XHJcbiAgaGVpZ2h0OiAxLjRlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xyXG4gIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgYm9yZGVyLXJhZGl1czogLjJlbTtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzcHggcmdiYSgwLDAsMCwgLjEpLCAwIDAgMCByZ2JhKDIwMywgMzQsIDIzNywgLjIpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4yNzVzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMjc1cztcclxufVxyXG5cclxuLyogY2hlY2tlZCBtYXJrIGFzcGVjdCAqL1xyXG5bdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDphZnRlcixcclxuW3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICfinJUnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC41MjVlbTtcclxuICBsZWZ0OiAuMTBlbTsgLyogd2FzIC4xOGVtLCBidXQgYm9vdHN0cmFwIG1lc3NlZCB1cCB3aXRoIHBvc2l0aW9uICovXHJcbiAgZm9udC1zaXplOiAxLjM3NWVtO1xyXG4gIGNvbG9yOiAjQ0IyMkVEO1xyXG4gIGxpbmUtaGVpZ2h0OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4ycztcclxuICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG59XHJcblxyXG4vKiBjaGVja2VkIG1hcmsgYXNwZWN0IGNoYW5nZXMgKi9cclxuW3R5cGU9XCJjaGVja2JveFwiXTpub3QoOmNoZWNrZWQpICsgbGFiZWw6YWZ0ZXIge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSg0NWRlZyk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoNDVkZWcpO1xyXG59XHJcblxyXG5bdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XHJcbiAgb3BhY2l0eTogMTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDApO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDApO1xyXG59XHJcblxyXG4vKiBBY2Nlc3NpYmlsaXR5ICovXHJcblt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZDpmb2N1cyArIGxhYmVsOmJlZm9yZSxcclxuW3R5cGU9XCJjaGVja2JveFwiXTpub3QoOmNoZWNrZWQpOmZvY3VzICsgbGFiZWw6YmVmb3JlIHtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzcHggcmdiYSgwLDAsMCwgLjEpLCAwIDAgMCA2cHggcmdiYSgyMDMsIDM0LCAyMzcsIC4yKTtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
          }]
        }], function () {
          return [{
            type: _services_authorization_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/toolbar/toolbar.component */
      "np0s");
      /* harmony import */


      var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/home/home.component */
      "BuFo");
      /* harmony import */


      var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/profile/profile.component */
      "DZ0t");
      /* harmony import */


      var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/messages/messages.component */
      "wa57");
      /* harmony import */


      var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/dashboard/dashboard.component */
      "Lquv");
      /* harmony import */


      var _components_verify_verify_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/verify/verify.component */
      "p+yT");
      /* harmony import */


      var _pipes_stars_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./pipes/stars.pipe */
      "MVFX");
      /* harmony import */


      var _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/login/login.component */
      "W3Zi");
      /* harmony import */


      var _components_register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/register/register.component */
      "XC3f");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _components_add_dog_add_dog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/add-dog/add-dog.component */
      "vMwn");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _components_modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./components/modal-confirm/modal-confirm.component */
      "obNI");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"], _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_8__["MessagesComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], _components_verify_verify_component__WEBPACK_IMPORTED_MODULE_10__["VerifyComponent"], _pipes_stars_pipe__WEBPACK_IMPORTED_MODULE_11__["StarsPipe"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _components_add_dog_add_dog_component__WEBPACK_IMPORTED_MODULE_15__["AddDogComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"], _components_modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_17__["ModalConfirmComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"], _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_8__["MessagesComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], _components_verify_verify_component__WEBPACK_IMPORTED_MODULE_10__["VerifyComponent"], _pipes_stars_pipe__WEBPACK_IMPORTED_MODULE_11__["StarsPipe"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _components_add_dog_add_dog_component__WEBPACK_IMPORTED_MODULE_15__["AddDogComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"], _components_modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_17__["ModalConfirmComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "np0s":
    /*!*********************************************************!*\
      !*** ./src/app/components/toolbar/toolbar.component.ts ***!
      \*********************************************************/

    /*! exports provided: ToolbarComponent */

    /***/
    function np0s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function () {
        return ToolbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_authorization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/authorization.service */
      "7ZA2");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ToolbarComponent_a_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Dashboard ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ToolbarComponent_a_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Verify ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var ToolbarComponent = /*#__PURE__*/function () {
        function ToolbarComponent(authorizationService) {
          _classCallCheck(this, ToolbarComponent);

          this.authorizationService = authorizationService;
          this.jeAdmin = true;
          this.jeVerifier = false;
        }

        _createClass(ToolbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "logout",
          value: function logout() {
            this.authorizationService.logout();
          }
        }]);

        return ToolbarComponent;
      }();

      ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) {
        return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"]));
      };

      ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ToolbarComponent,
        selectors: [["app-toolbar"]],
        decls: 11,
        vars: 2,
        consts: [[1, "toolbar-main-div"], ["routerLink", ""], ["routerLink", "profile"], ["routerLink", "messages"], ["routerLink", "admin", 4, "ngIf"], ["routerLink", "verify", 4, "ngIf"], ["routerLink", "/", 1, "logout", 3, "click"], ["routerLink", "admin"], ["routerLink", "verify"]],
        template: function ToolbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Home ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Profile ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Messages ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ToolbarComponent_a_7_Template, 2, 0, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ToolbarComponent_a_8_Template, 2, 0, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_Template_a_click_9_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Logout ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.jeAdmin);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.jeAdmin || ctx.jeVerifier);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        styles: ["*[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.toolbar-main-div[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background-color: rgb(255, 192, 203);\r\n  height: 10vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  text-align: center;\r\n  border-radius: 15px;\r\n  flex-grow: 1;\r\n  margin: auto 5%;\r\n  color: black;\r\n  font-weight: bold;\r\n  height: 80%;\r\n  vertical-align: middle;\r\n  line-height: 8vh;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  color: white;\r\n  background-color: palevioletred;\r\n}\r\n\r\n.logout[_ngcontent-%COMP%] {\r\n  background-color: palevioletred;\r\n  cursor: pointer;\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixZQUFZO0FBQ2QiLCJmaWxlIjoidG9vbGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnRvb2xiYXItbWFpbi1kaXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE5MiwgMjAzKTtcclxuICBoZWlnaHQ6IDEwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIG1hcmdpbjogYXV0byA1JTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBsaW5lLWhlaWdodDogOHZoO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcGFsZXZpb2xldHJlZDtcclxufVxyXG5cclxuLmxvZ291dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcGFsZXZpb2xldHJlZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-toolbar',
            templateUrl: './toolbar.component.html',
            styleUrls: ['./toolbar.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "obNI":
    /*!*********************************************************************!*\
      !*** ./src/app/components/modal-confirm/modal-confirm.component.ts ***!
      \*********************************************************************/

    /*! exports provided: ModalConfirmComponent */

    /***/
    function obNI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalConfirmComponent", function () {
        return ModalConfirmComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ModalConfirmComponent_p_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This operation can not be undone.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ModalConfirmComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide the reason.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "textarea", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var ModalConfirmComponent = /*#__PURE__*/function () {
        function ModalConfirmComponent(modal) {
          _classCallCheck(this, ModalConfirmComponent);

          this.modal = modal;
        }

        _createClass(ModalConfirmComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "passBack",
          value: function passBack() {
            if (this.fromParent.form) {
              var input = document.getElementById('textArea');
              this.modal.close(input === null || input === void 0 ? void 0 : input.value);
            } else {
              this.modal.close(this.fromParent.buttonName);
            }
          }
        }]);

        return ModalConfirmComponent;
      }();

      ModalConfirmComponent.ɵfac = function ModalConfirmComponent_Factory(t) {
        return new (t || ModalConfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]));
      };

      ModalConfirmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ModalConfirmComponent,
        selectors: [["app-modal-confirm"]],
        inputs: {
          fromParent: "fromParent"
        },
        decls: 20,
        vars: 6,
        consts: [[1, "modal-header"], ["id", "modal-title", 1, "modal-title"], ["type", "button", "aria-label", "Close button", "aria-describedby", "modal-title", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "text-warning"], ["class", "text-danger", 4, "ngIf"], ["class", "form-group", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "text-danger"], [1, "form-group"], ["for", "textArea"], ["id", "textArea", "rows", "3", 1, "form-control"]],
        template: function ModalConfirmComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalConfirmComponent_Template_button_click_3_listener() {
              return ctx.modal.dismiss();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ModalConfirmComponent_p_13_Template, 2, 0, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ModalConfirmComponent_div_14_Template, 4, 0, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalConfirmComponent_Template_button_click_16_listener() {
              return ctx.modal.dismiss("Cancel");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalConfirmComponent_Template_button_click_18_listener() {
              return ctx.passBack();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fromParent.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Are you sure you want to", ctx.fromParent.action, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fromParent.extraInfo);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fromParent.permanent);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fromParent.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fromParent.buttonName);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1jb25maXJtLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalConfirmComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-modal-confirm',
            templateUrl: './modal-confirm.component.html',
            styleUrls: ['./modal-confirm.component.css']
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]
          }];
        }, {
          fromParent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "p+yT":
    /*!*******************************************************!*\
      !*** ./src/app/components/verify/verify.component.ts ***!
      \*******************************************************/

    /*! exports provided: VerifyComponent */

    /***/
    function pYT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerifyComponent", function () {
        return VerifyComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../modal-confirm/modal-confirm.component */
      "obNI");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function VerifyComponent_div_2_img_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 29);
        }

        if (rf & 2) {
          var user_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", user_r1.slikaProfila, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function VerifyComponent_div_2_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 30);
        }
      }

      function VerifyComponent_div_2_p_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Description:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function VerifyComponent_div_2_p_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r1.opis);
        }
      }

      function VerifyComponent_div_2_img_32_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VerifyComponent_div_2_img_32_Template_img_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

            var user_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r13.showImage(user_r1.slikaDokumenta);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", user_r1.slikaDokumenta, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function VerifyComponent_div_2_ng_template_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VerifyComponent_div_2_ng_template_33_Template_img_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r17.showImage("../../../assets/img/default/no-document-id-blue.png");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function VerifyComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, VerifyComponent_div_2_img_6_Template, 1, 1, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, VerifyComponent_div_2_ng_template_7_Template, 1, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "View profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Date of birth: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Role:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, VerifyComponent_div_2_p_29_Template, 2, 0, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, VerifyComponent_div_2_p_30_Template, 2, 1, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, VerifyComponent_div_2_img_32_Template, 1, 1, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, VerifyComponent_div_2_ng_template_33_Template, 1, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Verify user");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Status:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VerifyComponent_div_2_Template_div_ngModelChange_44_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

            var i_r2 = ctx.index;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r19.buttonValues[i_r2].buttonValue = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VerifyComponent_div_2_Template_input_click_46_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

            var user_r1 = ctx.$implicit;

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r21.verify("yes", user_r1._id, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " YES ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VerifyComponent_div_2_Template_input_click_49_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

            var user_r1 = ctx.$implicit;

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r22.verify("no", user_r1._id, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " NO ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](34);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", user_r1.slikaProfila)("ngIfElse", _r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "../profile/", user_r1._id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", user_r1.ime, " ", user_r1.priimek, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 17, user_r1.datumRojstva));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r1.tipRacuna);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r1.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", user_r1.opis);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", user_r1.opis);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", user_r1.slikaDokumenta)("ngIfElse", _r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r1._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", user_r1.status, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.buttonValues[i_r2].buttonValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r0.statusVerified);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r0.statusDenied);
        }
      }

      var VerifyComponent = /*#__PURE__*/function () {
        function VerifyComponent(modalService) {
          _classCallCheck(this, VerifyComponent);

          this.modalService = modalService; // Status

          this.statusPending = 'pending';
          this.statusDenied = 'denied';
          this.statusVerified = 'verified';
          this.users = [{
            _id: "609877974266ec0015276907",
            ime: "Šime",
            priimek: "Šimasti",
            email: "šimethešime@gmail.com",
            slikaProfila: "../../../assets/img/person.jpg",
            slikaDokumenta: "",
            tipRacuna: "sprehajalec",
            datumRojstva: "2012-12-12T00:00:00.000Z",
            status: "pending"
          }, {
            _id: "60987eb79b10f000156ee544",
            ime: "Zavrnjen",
            priimek: "uporabnik",
            email: "sađboi@gmail.com",
            slikaProfila: "",
            slikaDokumenta: "",
            tipRacuna: "lastnik",
            datumRojstva: "2012-12-12T00:00:00.000Z",
            status: "denied",
            opis: ":("
          }];
          this.buttonValues = [];
        }

        _createClass(VerifyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            /*// Just another field in users
            for (let i = 0; i < this.users.length; i++) {
              // merge objects into one with multiple props
              this.users[i] = Object.assign(this.users[i], {
                buttonValue: this.users[i].status,
              });
            }*/
            // Saving button values
            for (var i = 0; i < this.users.length; i++) {
              var data = {
                userID: this.users[i]._id,
                buttonValue: this.users[i].status
              };
              this.buttonValues.push(data);
            }
          }
        }, {
          key: "verify",
          value: function verify(_verify, userID, event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      /* https://medium.com/code-divoire/ng-bootstrap-modalservice-and-expressionchangedafterithasbeencheckederror-7b21cbf6c74a */
                      event.target.blur(); // needed because of ExpressionChangedAfterItHasBeenCheckedError (opening modal from form)

                      if (_verify === 'yes') {
                        this.openModal('yes', userID);
                      } else if (_verify === 'no') {
                        if (this.buttonValues.find(function (user) {
                          return user.userID === userID;
                        }).buttonValue != this.statusDenied) {
                          this.openModal('no', userID);
                        }
                      }

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "removeItem",
          value: function removeItem(id) {
            this.users = this.users.filter(function (item) {
              return item._id !== id;
            });
            this.buttonValues = this.buttonValues.filter(function (item) {
              return item.userID !== id;
            });
          }
        }, {
          key: "updateItem",
          value: function updateItem(id, updatedStatus) {
            this.users.find(function (item) {
              return item._id === id;
            }).status = updatedStatus;
            this.buttonValues.find(function (item) {
              return item.userID === id;
            }).buttonValue = updatedStatus;
          }
          /* Show image - code source: https://www.w3schools.com/css/css3_images.asp */

        }, {
          key: "showImage",
          value: function showImage(src) {
            // Get the modal
            var modal = document.getElementById('myModal'); // Get the image and insert it inside the modal

            var modalImg = document.getElementById("img01");
            modal.style.display = "block";
            modalImg.src = src;
          }
        }, {
          key: "closeImageModal",
          value: function closeImageModal() {
            // Get the modal
            var modal = document.getElementById('myModal'); // When the user clicks on <span> (x), close the modal

            modal.style.display = "none";
          }
          /* Confirmation modal */

        }, {
          key: "openModal",
          value: function openModal(mode, userID) {
            var _this10 = this;

            var modalRef = this.modalService.open(_modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_2__["ModalConfirmComponent"]);
            var data;
            var user = this.users.find(function (user) {
              return user._id === userID;
            });
            var userButtonvalue = this.buttonValues.find(function (user) {
              return user.userID === userID;
            });

            if (mode === 'yes') {
              data = {
                title: 'Confirm verification',
                action: ' verify the user',
                extraInfo: " ".concat(user.ime, " ").concat(user.priimek),
                permanent: true,
                buttonName: 'Verify',
                form: false
              };
            } else if (mode === 'no') {
              data = {
                title: 'Reject user',
                action: ' reject the user',
                extraInfo: " ".concat(user.ime, " ").concat(user.priimek),
                permanent: false,
                buttonName: 'Reject',
                form: true
              };
            }

            modalRef.componentInstance.fromParent = data;
            modalRef.result.then(function (result) {
              if (result === 'Verify') {
                // TODO: send request to verify
                _this10.removeItem(userID); // TODO: remove from client side after successfully verifying
                // TODO: send message to the user

              } else {
                // TODO: send request to deny user
                _this10.updateItem(userID, _this10.statusDenied); // TODO: update info after success
                // TODO: send message to the user


                if (result === '') {
                  console.log("No reason was provided.");
                }
              }
            })["catch"](function (error) {
              // Cancel, X, dismiss
              // Reset radio buttons
              userButtonvalue.buttonValue = user.status;
            });
          }
        }]);

        return VerifyComponent;
      }();

      VerifyComponent.ɵfac = function VerifyComponent_Factory(t) {
        return new (t || VerifyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]));
      };

      VerifyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: VerifyComponent,
        selectors: [["app-verify"]],
        decls: 8,
        vars: 1,
        consts: [["class", "verify-container mt-5 mb-5", 4, "ngFor", "ngForOf"], ["id", "myModal", 1, "modal"], [1, "close", 3, "click"], ["id", "img01", 1, "modal-content"], ["id", "caption"], [1, "verify-container", "mt-5", "mb-5"], [1, "row", 2, "margin-left", "0", "margin-right", "0"], [1, "profile-data-container", "p-2", "col-md-8"], [1, "row"], [1, "col-md-4"], ["id", "profile-data-left"], ["alt", "Profile picture", "class", "img-style", 3, "src", 4, "ngIf", "ngIfElse"], ["elseProfilePicture", ""], ["target", "_blank", 3, "routerLink"], [1, "col"], ["id", "profile-data-right", 1, "ml-2"], [1, "section-text"], ["class", "section-text", 4, "ngIf"], [4, "ngIf"], [1, "verify-data-container", "p-2", "col"], ["class", "img-style img-doc", "alt", "Document", 3, "src", "click", 4, "ngIf", "ngIfElse"], ["elseDocument", ""], [1, "verify-text"], [1, "verify-text-id"], [1, "d-flex", "justify-content-center"], ["ngbRadioGroup", "", "name", "radioBasic", 1, "btn-group", "btn-group-toggle", 3, "ngModel", "ngModelChange"], ["ngbButtonLabel", "", 1, "button-verify", "button-yes"], ["ngbButton", "", "type", "radio", 3, "value", "click"], ["ngbButtonLabel", "", 1, "button-verify", "button-no"], ["alt", "Profile picture", 1, "img-style", 3, "src"], ["src", "../../../assets/img/default/no-profile-picture.jpg", "alt", "Profile picture", 1, "img-style"], ["alt", "Document", 1, "img-style", "img-doc", 3, "src", "click"], ["src", "../../../assets/img/default/no-document-id-blue.png", "alt", "Document", 1, "img-style", "img-doc", 3, "click"]],
        template: function VerifyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Verification of users");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VerifyComponent_div_2_Template, 52, 19, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VerifyComponent_Template_span_click_4_listener() {
              return ctx.closeImageModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.users);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbButtonLabel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbRadio"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
        styles: ["h1[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin: 20px auto;\r\n}\r\n\r\n.verify-container[_ngcontent-%COMP%] {\r\n  border: pink solid 3px;\r\n  border-radius: 10px;\r\n  width: 70% !important;\r\n  background-color: white;\r\n  margin: auto;\r\n}\r\n\r\n.profile-data-container[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\r\n\r\n#profile-data-left[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n\r\n#profile-data-right[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n\r\n.verify-data-container[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  border-left: pink solid 3px;\r\n}\r\n\r\n#reason-container[_ngcontent-%COMP%] {\r\n  border-top: palevioletred solid 3px;\r\n  display: block;\r\n}\r\n\r\n.img-style[_ngcontent-%COMP%] {\r\n  max-height: 30vh;\r\n  max-width: 100%;\r\n  border-radius: 15px;\r\n  border: 2px #dddddd solid;\r\n  padding: 5px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  display: block;\r\n  margin: auto;\r\n}\r\n\r\n.img-doc[_ngcontent-%COMP%] {\r\n  max-height: 20vh;\r\n  max-width: 100%;\r\n  cursor: pointer;\r\n  transition: 0.3s;\r\n}\r\n\r\n.img-doc[_ngcontent-%COMP%]:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n}\r\n\r\n\r\n\r\n.button-verify[_ngcontent-%COMP%] {\r\n  background-color: rgb(255,242,244);\r\n  color: black;\r\n  width: 50%;\r\n  padding: 5px 20px;\r\n  margin: 8px 0;\r\n  border: black solid 2px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  box-shadow: palevioletred;\r\n}\r\n\r\n.button-yes[_ngcontent-%COMP%]:hover {\r\n  background-color: mediumspringgreen;\r\n  color: black;\r\n}\r\n\r\n.button-no[_ngcontent-%COMP%]:hover {\r\n  background-color: #f83434;\r\n  color: black;\r\n}\r\n\r\n.button-yes.focus[_ngcontent-%COMP%] {\r\n  background-color: mediumspringgreen;\r\n  color: black;\r\n}\r\n\r\n.button-no.focus[_ngcontent-%COMP%] {\r\n  background-color: #f83434;\r\n  color: black;\r\n}\r\n\r\n.button-yes.active[_ngcontent-%COMP%] {\r\n  background-color: mediumspringgreen;\r\n  color: black;\r\n}\r\n\r\n.button-no.active[_ngcontent-%COMP%] {\r\n  background-color: #f83434;\r\n  color: black;\r\n}\r\n\r\n.button-yes[_ngcontent-%COMP%]:active {\r\n  background-color: mediumspringgreen;\r\n  color: black;\r\n}\r\n\r\n.button-no[_ngcontent-%COMP%]:active {\r\n  background-color: #f83434;\r\n  color: black;\r\n}\r\n\r\nbutton-yes[_ngcontent-%COMP%]:visited {\r\n  background-color: mediumspringgreen;\r\n  color: black;\r\n}\r\n\r\n.button-no[_ngcontent-%COMP%]:visited {\r\n  background-color: #f83434;\r\n  color: black;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  text-align:center;\r\n  display:block;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  margin-top: 1vh;\r\n  margin-bottom: 1vh;\r\n  font-weight: 400;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  height: 1px;\r\n  background-color: pink;\r\n  max-width: 90%;\r\n}\r\n\r\n.section-text[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.verify-text[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-top: 10px;\r\n  margin-bottom: 5px;\r\n  font-weight: bold;\r\n  font-size: large;\r\n}\r\n\r\n.verify-text-id[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-top: 0;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.modal[_ngcontent-%COMP%] {\r\n  display: none; \r\n  position: fixed; \r\n  z-index: 1; \r\n  padding-top: 100px; \r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; \r\n  height: 100%; \r\n  overflow: auto; \r\n  background-color: rgb(0,0,0); \r\n  background-color: rgba(0,0,0,0.9); \r\n}\r\n\r\n\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  display: block;\r\n  width: 80%;\r\n  max-width: 700px;\r\n}\r\n\r\n\r\n\r\n.modal-content[_ngcontent-%COMP%], #caption[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: zoom;\r\n          animation-name: zoom;\r\n  -webkit-animation-duration: 0.6s;\r\n          animation-duration: 0.6s;\r\n}\r\n\r\n@-webkit-keyframes zoom {\r\n  from {transform: scale(0.1)}\r\n  to {transform: scale(1)}\r\n}\r\n\r\n@keyframes zoom {\r\n  from {transform: scale(0.1)}\r\n  to {transform: scale(1)}\r\n}\r\n\r\n\r\n\r\n.close[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 15px;\r\n  right: 35px;\r\n  color: #f1f1f1;\r\n  font-size: 40px;\r\n  font-weight: bold;\r\n  transition: 0.3s;\r\n}\r\n\r\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\r\n  color: #bbb;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 700px){\r\n  .modal-content[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBLFlBQVk7O0FBQ1o7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBLDRFQUE0RTs7QUFFNUUsMkJBQTJCOztBQUMzQjtFQUNFLGFBQWEsRUFBRSxzQkFBc0I7RUFDckMsZUFBZSxFQUFFLGtCQUFrQjtFQUNuQyxVQUFVLEVBQUUsZUFBZTtFQUMzQixrQkFBa0IsRUFBRSx3QkFBd0I7RUFDNUMsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXLEVBQUUsZUFBZTtFQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0VBQzlCLGNBQWMsRUFBRSw0QkFBNEI7RUFDNUMsNEJBQTRCLEVBQUUsbUJBQW1CO0VBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtBQUMxRDs7QUFFQSwwQkFBMEI7O0FBQzFCO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBLGtCQUFrQjs7QUFDbEI7RUFDRSw0QkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLGdDQUF3QjtVQUF4Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxNQUFNLHFCQUFxQjtFQUMzQixJQUFJLG1CQUFtQjtBQUN6Qjs7QUFIQTtFQUNFLE1BQU0scUJBQXFCO0VBQzNCLElBQUksbUJBQW1CO0FBQ3pCOztBQUVBLHFCQUFxQjs7QUFDckI7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBLHdDQUF3Qzs7QUFDeEM7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6InZlcmlmeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxufVxyXG5cclxuLnZlcmlmeS1jb250YWluZXIge1xyXG4gIGJvcmRlcjogcGluayBzb2xpZCAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB3aWR0aDogNzAlICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ucHJvZmlsZS1kYXRhLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4jcHJvZmlsZS1kYXRhLWxlZnQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG4jcHJvZmlsZS1kYXRhLXJpZ2h0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuLnZlcmlmeS1kYXRhLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1sZWZ0OiBwaW5rIHNvbGlkIDNweDtcclxufVxyXG5cclxuI3JlYXNvbi1jb250YWluZXIge1xyXG4gIGJvcmRlci10b3A6IHBhbGV2aW9sZXRyZWQgc29saWQgM3B4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uaW1nLXN0eWxlIHtcclxuICBtYXgtaGVpZ2h0OiAzMHZoO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJvcmRlcjogMnB4ICNkZGRkZGQgc29saWQ7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmltZy1kb2Mge1xyXG4gIG1heC1oZWlnaHQ6IDIwdmg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4uaW1nLWRvYzpob3ZlciB7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi8qIEJ1dHRvbnMgKi9cclxuLmJ1dHRvbi12ZXJpZnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsMjQyLDI0NCk7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3JkZXI6IGJsYWNrIHNvbGlkIDJweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJveC1zaGFkb3c6IHBhbGV2aW9sZXRyZWQ7XHJcbn1cclxuXHJcbi5idXR0b24teWVzOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBtZWRpdW1zcHJpbmdncmVlbjtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5idXR0b24tbm86aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmODM0MzQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uYnV0dG9uLXllcy5mb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbWVkaXVtc3ByaW5nZ3JlZW47XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uYnV0dG9uLW5vLmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjgzNDM0O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmJ1dHRvbi15ZXMuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBtZWRpdW1zcHJpbmdncmVlbjtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5idXR0b24tbm8uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjgzNDM0O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmJ1dHRvbi15ZXM6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBtZWRpdW1zcHJpbmdncmVlbjtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5idXR0b24tbm86YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjgzNDM0O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuYnV0dG9uLXllczp2aXNpdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBtZWRpdW1zcHJpbmdncmVlbjtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5idXR0b24tbm86dmlzaXRlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4MzQzNDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbn1cclxuXHJcbmgyIHtcclxuICBtYXJnaW4tdG9wOiAxdmg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbmhyIHtcclxuICBoZWlnaHQ6IDFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xyXG4gIG1heC13aWR0aDogOTAlO1xyXG59XHJcblxyXG4uc2VjdGlvbi10ZXh0IHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4udmVyaWZ5LXRleHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG4udmVyaWZ5LXRleHQtaWQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi8qIFNob3cgaW1hZ2UgLSBjb2RlIHNvdXJjZTogaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9jc3MvY3NzM19pbWFnZXMuYXNwICovXHJcblxyXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXHJcbi5tb2RhbCB7XHJcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXHJcbiAgcGFkZGluZy10b3A6IDEwMHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOSk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxufVxyXG5cclxuLyogTW9kYWwgQ29udGVudCAoaW1hZ2UpICovXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXgtd2lkdGg6IDcwMHB4O1xyXG59XHJcblxyXG4vKiBBZGQgQW5pbWF0aW9uICovXHJcbi5tb2RhbC1jb250ZW50LCAjY2FwdGlvbiB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHpvb207XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjZzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHpvb20ge1xyXG4gIGZyb20ge3RyYW5zZm9ybTogc2NhbGUoMC4xKX1cclxuICB0byB7dHJhbnNmb3JtOiBzY2FsZSgxKX1cclxufVxyXG5cclxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xyXG4uY2xvc2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE1cHg7XHJcbiAgcmlnaHQ6IDM1cHg7XHJcbiAgY29sb3I6ICNmMWYxZjE7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5jbG9zZTpob3ZlcixcclxuLmNsb3NlOmZvY3VzIHtcclxuICBjb2xvcjogI2JiYjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiAxMDAlIEltYWdlIFdpZHRoIG9uIFNtYWxsZXIgU2NyZWVucyAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KXtcclxuICAubW9kYWwtY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VerifyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-verify',
            templateUrl: './verify.component.html',
            styleUrls: ['./verify.component.css']
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vMwn":
    /*!*********************************************************!*\
      !*** ./src/app/components/add-dog/add-dog.component.ts ***!
      \*********************************************************/

    /*! exports provided: AddDogComponent */

    /***/
    function vMwn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddDogComponent", function () {
        return AddDogComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_services_dog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/dog.service */
      "2D3X");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AddDogComponent_option_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var breed_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", breed_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](breed_r1.name);
        }
      }

      var AddDogComponent = /*#__PURE__*/function () {
        function AddDogComponent(dogService, router) {
          _classCallCheck(this, AddDogComponent);

          this.dogService = dogService;
          this.router = router;
          this.dogForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            breed: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            picture: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          });
          this.breeds = [];
        }

        _createClass(AddDogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            this.dogService.getAllBreeds().then(function (result) {
              _this11.breeds = result;
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            console.log(this.dogForm);
            this.router.navigate(['profile']);
          }
        }]);

        return AddDogComponent;
      }();

      AddDogComponent.ɵfac = function AddDogComponent_Factory(t) {
        return new (t || AddDogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_dog_service__WEBPACK_IMPORTED_MODULE_2__["DogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      AddDogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddDogComponent,
        selectors: [["app-add-dog"]],
        decls: 24,
        vars: 2,
        consts: [[1, "container"], [1, "add-dog-container"], [1, "center"], [3, "formGroup", "ngSubmit"], ["formControlName", "name", "type", "text", "id", "name", "name", "name", "placeholder", "Name", 1, "input-element"], ["formControlName", "breed", "id", "breed", "name", "breed", "placeholder", "Breed", 1, "input-element"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "description", "name", "description", "rows", "10", "cols", "30", "placeholder", "Description", 1, "input-element"], ["formControlName", "picture", "type", "file", "name", "picture", 1, "input-element"], ["type", "submit", 1, "button-color-accent"], [3, "value"]],
        template: function AddDogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add dog");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddDogComponent_Template_form_ngSubmit_4_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Breed:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AddDogComponent_option_12_Template, 2, 2, "option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Description:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "textarea", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Image: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Add dog");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.dogForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.breeds);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
        styles: [".container[_ngcontent-%COMP%] {\r\n  height: 90vh;\r\n  display: grid;\r\n}\r\n\r\n.add-dog-container[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  border: #cccccc solid 2px;\r\n  border-radius: 8px;\r\n  margin: auto;\r\n  padding-inline: 20px;\r\n  text-align: center;\r\n  background-color: white;\r\n}\r\n\r\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n\r\n.button-color-accent[_ngcontent-%COMP%] {\r\n  background-color: palevioletred;\r\n  color: white;\r\n  width: 50%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n.button-color-accent[_ngcontent-%COMP%]:hover {\r\n  background-color: #b72c50;\r\n  color: white;\r\n}\r\n\r\n.button-color-accent[_ngcontent-%COMP%]:focus {\r\n  background-color: #b72c50;\r\n  color: white;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n  font-size: 1.5rem;\r\n  margin: 20px auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1kb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7OztFQUdFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQSxXQUFXOztBQUNYO0VBQ0UsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImFkZC1kb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGhlaWdodDogOTB2aDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG59XHJcblxyXG4uYWRkLWRvZy1jb250YWluZXIge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgYm9yZGVyOiAjY2NjY2NjIHNvbGlkIDJweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmctaW5saW5lOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW5wdXQsXHJcbnNlbGVjdCxcclxudGV4dGFyZWEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4vKiBCdXR0b24gKi9cclxuLmJ1dHRvbi1jb2xvci1hY2NlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHBhbGV2aW9sZXRyZWQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b24tY29sb3ItYWNjZW50OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjcyYzUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ1dHRvbi1jb2xvci1hY2NlbnQ6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNzJjNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddDogComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-dog',
            templateUrl: './add-dog.component.html',
            styleUrls: ['./add-dog.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_dog_service__WEBPACK_IMPORTED_MODULE_2__["DogService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/dashboard/dashboard.component */
      "Lquv");
      /* harmony import */


      var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/home/home.component */
      "BuFo");
      /* harmony import */


      var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/messages/messages.component */
      "wa57");
      /* harmony import */


      var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/profile/profile.component */
      "DZ0t");
      /* harmony import */


      var _components_verify_verify_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/verify/verify.component */
      "p+yT");
      /* harmony import */


      var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/login/login.component */
      "W3Zi");
      /* harmony import */


      var _components_add_dog_add_dog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/add-dog/add-dog.component */
      "vMwn");
      /* harmony import */


      var _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/register/register.component */
      "XC3f");

      var routes = [{
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
      }, {
        path: 'profile',
        component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"]
      }, {
        path: 'admin',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
      }, {
        path: 'messages',
        component: _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_4__["MessagesComponent"]
      }, {
        path: 'verify',
        component: _components_verify_verify_component__WEBPACK_IMPORTED_MODULE_6__["VerifyComponent"]
      }, {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
      }, {
        path: 'add_dog',
        component: _components_add_dog_add_dog_component__WEBPACK_IMPORTED_MODULE_8__["AddDogComponent"]
      }, {
        path: 'register',
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "wW56":
    /*!************************************************!*\
      !*** ./src/app/services/uporabniki.service.ts ***!
      \************************************************/

    /*! exports provided: UporabnikiService */

    /***/
    function wW56(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UporabnikiService", function () {
        return UporabnikiService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var UporabnikiService = /*#__PURE__*/function () {
        function UporabnikiService(http) {
          _classCallCheck(this, UporabnikiService);

          this.http = http;
          this.uporabnikiApi = "http://localhost:3000/api/uporabniki/";
        }

        _createClass(UporabnikiService, [{
          key: "getAllUsers",
          value: function getAllUsers() {
            return this.http.get(this.uporabnikiApi).toPromise().then(function (result) {
              return result;
            });
          }
        }, {
          key: "getUser",
          value: function getUser(id) {
            return this.http.get(this.uporabnikiApi + id).toPromise().then(function (result) {
              return result;
            });
          }
        }]);

        return UporabnikiService;
      }();

      UporabnikiService.ɵfac = function UporabnikiService_Factory(t) {
        return new (t || UporabnikiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      UporabnikiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UporabnikiService,
        factory: UporabnikiService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UporabnikiService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "wa57":
    /*!***********************************************************!*\
      !*** ./src/app/components/messages/messages.component.ts ***!
      \***********************************************************/

    /*! exports provided: MessagesComponent */

    /***/
    function wa57(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesComponent", function () {
        return MessagesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MessagesComponent = /*#__PURE__*/function () {
        function MessagesComponent() {
          _classCallCheck(this, MessagesComponent);
        }

        _createClass(MessagesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MessagesComponent;
      }();

      MessagesComponent.ɵfac = function MessagesComponent_Factory(t) {
        return new (t || MessagesComponent)();
      };

      MessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MessagesComponent,
        selectors: [["app-messages"]],
        decls: 2,
        vars: 0,
        template: function MessagesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "messages works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXNzYWdlcy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-messages',
            templateUrl: './messages.component.html',
            styleUrls: ['./messages.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map