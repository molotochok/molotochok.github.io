(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
      /*! C:\Users\Markiian\Desktop\Files\Projects\cv-app\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0oYm":
    /*!***************************************************!*\
      !*** ./src/app/components/menu/menu.component.ts ***!
      \***************************************************/

    /*! exports provided: MenuComponent */

    /***/
    function oYm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
        return MenuComponent;
      });
      /* harmony import */


      var _models_menu_item_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @models/menu-item.model */
      "o/dC");
      /* harmony import */


      var _router_app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @router/app-routing.module */
      "ez1I");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./config */
      "RCje");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @components/settings/settings.component */
      "1U8w");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @pipes/i18n.pipe */
      "gFfK");

      function MenuComponent_div_0_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "i18n");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", item_r3.pathname)("ngClass", ctx_r2.isActivePage(item_r3) ? "menu-item-active" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r2.getMenuItemLogoSrc(item_r3), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 4, item_r3.titleI18nKey, ctx_r2.i18nMenuPath));
        }
      }

      function MenuComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-settings", null, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, MenuComponent_div_0_ng_container_6_Template, 6, 7, "ng-container", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuComponent_div_0_Template_div_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);

            return _r1.open();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "i18n");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Markiian Karpa");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.menu);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](12, 2, ctx_r0.i18nKeys.settings.title, ctx_r0.i18nSettingsPath));
        }
      }

      var MenuComponent = /*#__PURE__*/function () {
        function MenuComponent() {
          _classCallCheck(this, MenuComponent);

          this.isMenuVisible = true;
          this.i18nKeys = _config__WEBPACK_IMPORTED_MODULE_3__["i18nKeys"];
          this.i18nMenuPath = _config__WEBPACK_IMPORTED_MODULE_3__["i18nMenuPath"];
          this.i18nSettingsPath = _config__WEBPACK_IMPORTED_MODULE_3__["i18nSettingsPath"];
        }

        _createClass(MenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.menu = _router_app_routing_module__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].map(function (r) {
              return new _models_menu_item_model__WEBPACK_IMPORTED_MODULE_0__["MenuItem"](r.data.titleI18nKey, r.path);
            });
          }
        }, {
          key: "isActivePage",
          value: function isActivePage(item) {
            return '/' + item.pathname === window.location.pathname;
          }
        }, {
          key: "getMenuItemLogoSrc",
          value: function getMenuItemLogoSrc(item) {
            var pathname = item.pathname ? item.pathname : 'about-me';
            return "assets/images/".concat(pathname, "/logo.png");
          }
        }]);

        return MenuComponent;
      }();

      MenuComponent.ɵfac = function MenuComponent_Factory(t) {
        return new (t || MenuComponent)();
      };

      MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: MenuComponent,
        selectors: [["app-menu"]],
        decls: 1,
        vars: 1,
        consts: [["class", "menu", 4, "ngIf"], [1, "menu"], ["settings", ""], [1, "menu-header"], ["src", "assets/images/menu/avatar.jpg", 1, "menu-logo"], [1, "menu-items"], [4, "ngFor", "ngForOf"], [1, "footer-parent"], [1, "menu-item", "app-mb-0", 3, "click"], ["src", "assets/images/menu/settings.svg", 1, "menu-item-img"], [1, "menu-item-title"], [1, "footer"], [1, "menu-item", 3, "routerLink", "ngClass"], [1, "menu-item-img", 3, "src"]],
        template: function MenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MenuComponent_div_0_Template, 15, 5, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isMenuVisible);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]],
        pipes: [_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_7__["I18nPipe"]],
        styles: [".menu[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 100%;\n  display: block;\n  text-align: center;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  background-color: var(--app-primary);\n  position: relative;\n}\n.menu-header[_ngcontent-%COMP%] {\n  position: relative;\n  height: 200px;\n}\n.menu-header[_ngcontent-%COMP%]   .menu-close[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 35px;\n  height: 35px;\n  right: 0px;\n  top: 0px;\n  cursor: pointer;\n}\n.menu-header[_ngcontent-%COMP%]   .menu-logo[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 50%;\n}\n.menu[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%] {\n  padding: 14px 0px 7px 0px;\n}\n.menu[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  padding: 5px 5px 5px 12px;\n  display: flex;\n  width: 100%;\n  height: 50px;\n  white-space: normal;\n  line-height: 1;\n  margin-bottom: 5px;\n  background-color: var(--app-menu-item);\n  border-radius: 0px;\n}\n.menu[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover:not(.menu-item-active) {\n  filter: brightness(80%);\n}\n.menu[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:active:not(.menu-item-active) {\n  filter: brightness(75%);\n}\n.menu[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item-img[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  margin: auto;\n}\n.menu[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item-title[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 100%;\n}\n.menu[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item-active[_ngcontent-%COMP%] {\n  background-color: var(--app-menu-item-active);\n}\n.menu[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n.menu[_ngcontent-%COMP%]   .footer-parent[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n.menu[_ngcontent-%COMP%]   .footer-parent[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 5px;\n  color: var(--app-light-text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL3N0eWxlcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBREY7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQURKO0FBR0k7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FBRE47QUFHSTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQUROO0FBS0U7RUFDRSx5QkFBQTtBQUhKO0FBS0k7RUN4QkYsZUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFRDBCSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtBQUhOO0FDekJNO0VBQ0UsdUJBQUE7QUQyQlI7QUNoQk07RUFDRSx1QkFBQTtBRGtCUjtBQURNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBR1I7QUFBTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBRVI7QUFFSTtFQUNFLDZDQUFBO0FBQU47QUFFSTtFQUNFLGdCQUFBO0FBQU47QUFJRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFGSjtBQUlJO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FBRk4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ21peGlucyc7XHJcblxyXG4ubWVudSB7XHJcbiAgd2lkdGg6IDIyMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDhweDtcclxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFwcC1wcmltYXJ5KTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICYtaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcblxyXG4gICAgLm1lbnUtY2xvc2Uge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgIHRvcDogMHB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAubWVudS1sb2dvIHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWVudS1pdGVtcyB7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDBweCA3cHggMHB4O1xyXG5cclxuICAgIC5tZW51LWl0ZW0ge1xyXG4gICAgICBAaW5jbHVkZSBjbGlja2FibGUoXCIubWVudS1pdGVtLWFjdGl2ZVwiKTtcclxuICAgICAgXHJcbiAgICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDEycHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFwcC1tZW51LWl0ZW0pO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcblxyXG4gICAgICAmLWltZyB7XHJcbiAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgfVxyXG5cclxuICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1lbnUtaXRlbS1hY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hcHAtbWVudS1pdGVtLWFjdGl2ZSk7XHJcbiAgICB9XHJcbiAgICAuYnRuOmZvY3VzIHtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mb290ZXItcGFyZW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC5mb290ZXIge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgY29sb3I6IHZhcigtLWFwcC1saWdodC10ZXh0KTtcclxuICAgIH1cclxuICB9XHJcbn0iLCJAbWl4aW4gaG9zdCB7XHJcbiAgOmhvc3Qge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBjbGlja2FibGUoJGFjdGl2ZUNsYXNzKSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgICRicmlnaHRuZXNzOiA4MCU7XHJcbiAgICBcclxuICAgIEBpZiAkYWN0aXZlQ2xhc3Mge1xyXG4gICAgICAmOm5vdCgjeyRhY3RpdmVDbGFzc30pIHtcclxuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoJGJyaWdodG5lc3MpO1xyXG4gICAgICB9XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKCRicmlnaHRuZXNzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgICRicmlnaHRuZXNzOiA3NSU7XHJcbiAgICBcclxuICAgIEBpZiAkYWN0aXZlQ2xhc3Mge1xyXG4gICAgICAmOm5vdCgjeyRhY3RpdmVDbGFzc30pIHtcclxuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoJGJyaWdodG5lc3MpO1xyXG4gICAgICB9XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKCRicmlnaHRuZXNzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MenuComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'app-menu',
            templateUrl: './menu.component.html',
            styleUrls: ['./menu.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "1U8w":
    /*!***********************************************************!*\
      !*** ./src/app/components/settings/settings.component.ts ***!
      \***********************************************************/

    /*! exports provided: SettingsComponent */

    /***/
    function U8w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
        return SettingsComponent;
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


      var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./config */
      "cxX2");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _services_i18n_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @services/i18n.service */
      "z2Pl");
      /* harmony import */


      var _services_theme_theme_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @services/theme/theme.service */
      "a7lh");
      /* harmony import */


      var _components_select_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @components/select/select.component */
      "yoGk");
      /* harmony import */


      var _pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @pipes/i18n.pipe */
      "gFfK");

      var _c0 = ["modalContent"];

      function SettingsComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "i18n");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SettingsComponent_ng_template_0_Template_button_click_4_listener() {
            var modal_r2 = ctx.$implicit;
            return modal_r2.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "i18n");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "app-select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("optionSelected", function SettingsComponent_ng_template_0_Template_app_select_optionSelected_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r4.changeLanguage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "i18n");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "app-select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("optionSelected", function SettingsComponent_ng_template_0_Template_app_select_optionSelected_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r6.changeTheme($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 9, ctx_r1.i18nKeys.title, ctx_r1.i18nSourcePath));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](12, 12, ctx_r1.i18nKeys.language, ctx_r1.i18nSourcePath));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r1.languages)("selectedOption", ctx_r1.currentLanguage)("i18nSourcePath", ctx_r1.languagesI18nPath);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](18, 15, ctx_r1.i18nKeys.theme, ctx_r1.i18nSourcePath));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r1.themes)("selectedOption", ctx_r1.currentTheme)("i18nSourcePath", ctx_r1.themesI18nPath);
        }
      }

      var SettingsComponent = /*#__PURE__*/function () {
        function SettingsComponent(modalService, i18nService, themeService) {
          _classCallCheck(this, SettingsComponent);

          this.modalService = modalService;
          this.i18nService = i18nService;
          this.themeService = themeService;
          this.i18nKeys = _config__WEBPACK_IMPORTED_MODULE_2__["i18nKeys"];
          this.i18nSourcePath = _config__WEBPACK_IMPORTED_MODULE_2__["i18nSourcePath"];
          this.languages = _config__WEBPACK_IMPORTED_MODULE_2__["languages"];
          this.languagesI18nPath = _config__WEBPACK_IMPORTED_MODULE_2__["languagesI18nPath"];
          this.themes = _config__WEBPACK_IMPORTED_MODULE_2__["themes"];
          this.themesI18nPath = _config__WEBPACK_IMPORTED_MODULE_2__["themesI18nPath"];
        }

        _createClass(SettingsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.initActiveLanguage();

                    case 2:
                      this.initActiveTheme();

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "open",
          value: function open() {
            var options = {
              ariaLabelledBy: 'modal-settings',
              keyboard: false
            };
            this.modalService.open(this.modalContent, options);
          }
          /* Language */

        }, {
          key: "initActiveLanguage",
          value: function initActiveLanguage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var locale;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.i18nService.getLocale();

                    case 2:
                      locale = _context2.sent;
                      this.currentLanguage = this.languages.find(function (l) {
                        return l.value === locale;
                      });

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "changeLanguage",
          value: function changeLanguage(language) {
            this.i18nService.changeLanguage(language.value);
            this.currentLanguage = language;
          }
          /* Theme */

        }, {
          key: "initActiveTheme",
          value: function initActiveTheme() {
            var currentTheme = this.themeService.getCurrentTheme();
            var theme = this.themes.find(function (t) {
              return t.value === currentTheme;
            });
            this.currentTheme = theme;
          }
        }, {
          key: "changeTheme",
          value: function changeTheme(theme) {
            this.themeService.changeTheme(theme.value);
            this.currentTheme = theme;
          }
        }]);

        return SettingsComponent;
      }();

      SettingsComponent.ɵfac = function SettingsComponent_Factory(t) {
        return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_i18n_service__WEBPACK_IMPORTED_MODULE_4__["I18nService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_theme_theme_service__WEBPACK_IMPORTED_MODULE_5__["ThemeService"]));
      };

      SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SettingsComponent,
        selectors: [["app-settings"]],
        viewQuery: function SettingsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.modalContent = _t.first);
          }
        },
        decls: 2,
        vars: 0,
        consts: [["modalContent", ""], [1, "modal-header"], [1, "title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], [1, "modal-body"], [2, "width", "20%"], [3, "options", "selectedOption", "i18nSourcePath", "optionSelected"]],
        template: function SettingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SettingsComponent_ng_template_0_Template, 21, 18, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          }
        },
        directives: [_components_select_select_component__WEBPACK_IMPORTED_MODULE_6__["SelectComponent"]],
        pipes: [_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_7__["I18nPipe"]],
        styles: [".modal-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border-collapse: separate;\n  border-spacing: 10px;\n  padding: 10px;\n  table-layout: fixed;\n  width: 450px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWJvZHkge1xyXG4gIHRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7IFxyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDEwcHg7IFxyXG4gICAgcGFkZGluZzogMTBweDsgXHJcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkOyBcclxuICAgIHdpZHRoOiA0NTBweDtcclxuICB9XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SettingsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-settings',
            templateUrl: './settings.component.html',
            styleUrls: ['./settings.component.scss']
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
          }, {
            type: _services_i18n_service__WEBPACK_IMPORTED_MODULE_4__["I18nService"]
          }, {
            type: _services_theme_theme_service__WEBPACK_IMPORTED_MODULE_5__["ThemeService"]
          }];
        }, {
          modalContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['modalContent']
          }]
        });
      })();
      /***/

    },

    /***/
    "5Ffi":
    /*!*****************************************************************!*\
      !*** ./src/app/components/embed-video/embed-video.component.ts ***!
      \*****************************************************************/

    /*! exports provided: EmbedVideoComponent */

    /***/
    function Ffi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmbedVideoComponent", function () {
        return EmbedVideoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      var EmbedVideoComponent = /*#__PURE__*/function () {
        function EmbedVideoComponent(sanitizer) {
          _classCallCheck(this, EmbedVideoComponent);

          this.sanitizer = sanitizer;
        }

        _createClass(EmbedVideoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.safeUri = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.uri);
          }
        }]);

        return EmbedVideoComponent;
      }();

      EmbedVideoComponent.ɵfac = function EmbedVideoComponent_Factory(t) {
        return new (t || EmbedVideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
      };

      EmbedVideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EmbedVideoComponent,
        selectors: [["app-embed-video"]],
        inputs: {
          video: "video"
        },
        decls: 2,
        vars: 3,
        consts: [[1, "embed-video"], ["frameborder", "0", "allowfullscreen", "", 3, "width", "height", "src"]],
        template: function EmbedVideoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx.video.width)("height", ctx.video.height)("src", ctx.safeUri, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
          }
        },
        styles: [".embed-video[_ngcontent-%COMP%] {\n  margin: auto;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbWJlZC12aWRlby9lbWJlZC12aWRlby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lbWJlZC12aWRlby9lbWJlZC12aWRlby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbWJlZC12aWRlbyB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmbedVideoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-embed-video',
            templateUrl: './embed-video.component.html',
            styleUrls: ['./embed-video.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
          }];
        }, {
          video: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "A71r":
    /*!************************************************!*\
      !*** ./src/app/pages/drag-and-score/config.ts ***!
      \************************************************/

    /*! exports provided: title, playStoreLink, i18nKeys, technologies, mediaList */

    /***/
    function A71r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "title", function () {
        return title;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "playStoreLink", function () {
        return playStoreLink;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "i18nKeys", function () {
        return i18nKeys;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "technologies", function () {
        return technologies;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mediaList", function () {
        return mediaList;
      });
      /* harmony import */


      var _models_video_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @models/video.model */
      "d57Q");
      /* harmony import */


      var _models_image_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @models/image.model */
      "XZk2");

      var title = 'Drag And Score';
      var playStoreLink = 'https://play.google.com/store/apps/details?id=com.MKCompany.DragAndScore';
      var i18nKeys = {
        download: 'download',
        playOnline: 'play-online',
        technologies: {
          title: 'title'
        },
        description: {
          title: 'title',
          content: 'content'
        }
      };
      var technologies = [{
        group: '',
        texts: ['Unity', 'C#']
      }];

      var imageAddressTemplate = function imageAddressTemplate(index) {
        return "assets/images/drag-and-score/screenshots/".concat(index, ".webp");
      };

      var mediaWidth = 750;
      var mediaHeight = 422;
      var mediaList = [new _models_video_model__WEBPACK_IMPORTED_MODULE_0__["Video"]('https://www.youtube.com/embed/2AUuK1IAJPg', mediaWidth, mediaHeight)].concat(_toConsumableArray(_toConsumableArray(Array(8).keys()).map(function (n) {
        return new _models_image_model__WEBPACK_IMPORTED_MODULE_1__["Image"](imageAddressTemplate(n + 1), mediaWidth, mediaHeight);
      })));
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
    "BRA1":
    /*!***************************************************************!*\
      !*** ./src/app/components/list-tiles/list-tiles.component.ts ***!
      \***************************************************************/

    /*! exports provided: ListTilesComponent */

    /***/
    function BRA1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListTilesComponent", function () {
        return ListTilesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_work_duration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @services/work-duration.service */
      "yYsB");
      /* harmony import */


      var _components_group_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @components/group/group.component */
      "qIoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_list_tile_list_tile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @components/list-tile/list-tile.component */
      "j18X");

      function ListTilesComponent_ng_template_2_app_list_tile_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-list-tile", 3);
        }

        if (rf & 2) {
          var listTile_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("i18nSourcePath", ctx_r1.i18nSourcePath)("listTile", listTile_r2)("showDuration", ctx_r1.showTileDuration);
        }
      }

      function ListTilesComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ListTilesComponent_ng_template_2_app_list_tile_0_Template, 1, 3, "app-list-tile", 2);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.listTiles);
        }
      }

      var ListTilesComponent = /*#__PURE__*/function () {
        function ListTilesComponent(dateDurationService) {
          _classCallCheck(this, ListTilesComponent);

          this.dateDurationService = dateDurationService;
          this.showAllDuration = true;
          this.showTileDuration = true;
        }

        _createClass(ListTilesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "allDuration",
          value: function allDuration() {
            var _this = this;

            if (!this.showAllDuration) {
              return null;
            }

            var duration = this.listTiles.reduce(function (prev, curr, _, __) {
              return _this.dateDurationService.monthDuration(curr.startDate, curr.endDate) + prev;
            }, 0);
            return this.dateDurationService.displayDuration(duration);
          }
        }]);

        return ListTilesComponent;
      }();

      ListTilesComponent.ɵfac = function ListTilesComponent_Factory(t) {
        return new (t || ListTilesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_work_duration_service__WEBPACK_IMPORTED_MODULE_1__["DateDurationService"]));
      };

      ListTilesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ListTilesComponent,
        selectors: [["app-list-tiles"]],
        inputs: {
          title: "title",
          listTiles: "listTiles",
          i18nSourcePath: "i18nSourcePath",
          showAllDuration: "showAllDuration",
          showTileDuration: "showTileDuration"
        },
        decls: 3,
        vars: 2,
        consts: [[1, "list-tiles"], [3, "title", "trail"], [3, "i18nSourcePath", "listTile", "showDuration", 4, "ngFor", "ngForOf"], [3, "i18nSourcePath", "listTile", "showDuration"]],
        template: function ListTilesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-group", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListTilesComponent_ng_template_2_Template, 1, 1, "ng-template");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("trail", ctx.allDuration());
          }
        },
        directives: [_components_group_group_component__WEBPACK_IMPORTED_MODULE_2__["GroupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_list_tile_list_tile_component__WEBPACK_IMPORTED_MODULE_4__["ListTileComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdC10aWxlcy9saXN0LXRpbGVzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListTilesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-list-tiles',
            templateUrl: './list-tiles.component.html',
            styleUrls: ['./list-tiles.component.scss']
          }]
        }], function () {
          return [{
            type: _services_work_duration_service__WEBPACK_IMPORTED_MODULE_1__["DateDurationService"]
          }];
        }, {
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          listTiles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          i18nSourcePath: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showAllDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showTileDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "EKug":
    /*!********************************************************************************!*\
      !*** ./src/app/pages/openapi-mobile-client/openapi-mobile-client.component.ts ***!
      \********************************************************************************/

    /*! exports provided: OpenapiMobileClientComponent */

    /***/
    function EKug(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OpenapiMobileClientComponent", function () {
        return OpenapiMobileClientComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./config */
      "lh6d");
      /* harmony import */


      var _services_icon_style_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @services/icon-style.service */
      "QQ8W");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_group_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @components/group/group.component */
      "qIoL");
      /* harmony import */


      var _components_chips_chips_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @components/chips/chips.component */
      "KT1a");
      /* harmony import */


      var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @components/gallery/gallery.component */
      "EgB/");
      /* harmony import */


      var _pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @pipes/i18n.pipe */
      "gFfK");

      function OpenapiMobileClientComponent_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "i18n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r0.i18nKeys.description.content, ctx_r0.descriptioni18nPath));
        }
      }

      var OpenapiMobileClientComponent = /*#__PURE__*/function () {
        function OpenapiMobileClientComponent(iconStyleService) {
          _classCallCheck(this, OpenapiMobileClientComponent);

          this.iconStyleService = iconStyleService;
          this.title = _config__WEBPACK_IMPORTED_MODULE_1__["title"];
          this.i18nKeys = _config__WEBPACK_IMPORTED_MODULE_1__["i18nKeys"];
          this.technologies = _config__WEBPACK_IMPORTED_MODULE_1__["technologies"];
          this.mediaList = _config__WEBPACK_IMPORTED_MODULE_1__["mediaList"];
        }

        _createClass(OpenapiMobileClientComponent, [{
          key: "i18nSourcePath",
          get: function get() {
            return 'openapi-mobile-client';
          }
        }, {
          key: "descriptioni18nPath",
          get: function get() {
            return this.i18nSourcePath + '/description';
          }
        }, {
          key: "technologiesi18nPath",
          get: function get() {
            return this.i18nSourcePath + '/technologies';
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initDownloadIconStyle();
          }
        }, {
          key: "initDownloadIconStyle",
          value: function initDownloadIconStyle() {
            this.downloadIconStyle = this.iconStyleService.getStyleWithMask('assets/images/android.svg');
          }
        }]);

        return OpenapiMobileClientComponent;
      }();

      OpenapiMobileClientComponent.ɵfac = function OpenapiMobileClientComponent_Factory(t) {
        return new (t || OpenapiMobileClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_icon_style_service__WEBPACK_IMPORTED_MODULE_2__["IconStyleService"]));
      };

      OpenapiMobileClientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OpenapiMobileClientComponent,
        selectors: [["app-openapi-mobile-client"]],
        decls: 19,
        vars: 17,
        consts: [[1, "openapi-mobile-client", "app-project-page"], [1, "logo"], ["src", "assets/images/openapi-mobile-client/logo.png"], [1, "title"], [1, "buttons"], ["target", "_blank", 1, "app-btn", "download-btn", "disabled"], [1, "icon", 3, "ngStyle"], [1, "description"], [3, "title"], [1, "technologies"], [3, "i18nSourcePath", "title", "groups"], [3, "mediaList"]],
        template: function OpenapiMobileClientComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "i18n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-group", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "i18n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, OpenapiMobileClientComponent_ng_template_14_Template, 3, 4, "ng-template");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-chips", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "i18n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-gallery", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.downloadIconStyle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 8, ctx.i18nKeys.download, ctx.i18nSourcePath), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 11, ctx.i18nKeys.description.title, ctx.descriptioni18nPath));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("i18nSourcePath", ctx.technologiesi18nPath)("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 14, ctx.i18nKeys.technologies.title, ctx.technologiesi18nPath))("groups", ctx.technologies);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mediaList", ctx.mediaList);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _components_group_group_component__WEBPACK_IMPORTED_MODULE_4__["GroupComponent"], _components_chips_chips_component__WEBPACK_IMPORTED_MODULE_5__["ChipsComponent"], _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__["GalleryComponent"]],
        pipes: [_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_7__["I18nPipe"]],
        styles: ["[_nghost-%COMP%] {\n  height: 100vh;\n  overflow: auto;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL19taXhpbnMuc2NzcyIsInNyYy9hcHAvcGFnZXMvb3BlbmFwaS1tb2JpbGUtY2xpZW50L29wZW5hcGktbW9iaWxlLWNsaWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3BlbmFwaS1tb2JpbGUtY2xpZW50L29wZW5hcGktbW9iaWxlLWNsaWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBob3N0IHtcclxuICA6aG9zdCB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGNsaWNrYWJsZSgkYWN0aXZlQ2xhc3MpIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgJGJyaWdodG5lc3M6IDgwJTtcclxuICAgIFxyXG4gICAgQGlmICRhY3RpdmVDbGFzcyB7XHJcbiAgICAgICY6bm90KCN7JGFjdGl2ZUNsYXNzfSkge1xyXG4gICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygkYnJpZ2h0bmVzcyk7XHJcbiAgICAgIH1cclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoJGJyaWdodG5lc3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgJGJyaWdodG5lc3M6IDc1JTtcclxuICAgIFxyXG4gICAgQGlmICRhY3RpdmVDbGFzcyB7XHJcbiAgICAgICY6bm90KCN7JGFjdGl2ZUNsYXNzfSkge1xyXG4gICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygkYnJpZ2h0bmVzcyk7XHJcbiAgICAgIH1cclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoJGJyaWdodG5lc3MpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiAxNXB4O1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OpenapiMobileClientComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-openapi-mobile-client',
            templateUrl: './openapi-mobile-client.component.html',
            styleUrls: ['./openapi-mobile-client.component.scss']
          }]
        }], function () {
          return [{
            type: _services_icon_style_service__WEBPACK_IMPORTED_MODULE_2__["IconStyleService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "EgB/":
    /*!*********************************************************!*\
      !*** ./src/app/components/gallery/gallery.component.ts ***!
      \*********************************************************/

    /*! exports provided: GalleryComponent */

    /***/
    function EgB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GalleryComponent", function () {
        return GalleryComponent;
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


      var _services_icon_style_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @services/icon-style.service */
      "QQ8W");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_embed_video_embed_video_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @components/embed-video/embed-video.component */
      "5Ffi");

      var _c0 = ["imgModal"];

      function GalleryComponent_li_5_app_embed_video_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-embed-video", 13);
        }

        if (rf & 2) {
          var media_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("video", media_r4);
        }
      }

      function GalleryComponent_li_5_img_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_li_5_img_2_Template_img_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r9.imgClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var media_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", media_r4.uri, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngStyle", ctx_r7.imgStyle);
        }
      }

      function GalleryComponent_li_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleryComponent_li_5_app_embed_video_1_Template, 1, 1, "app-embed-video", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GalleryComponent_li_5_img_2_Template, 1, 2, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var media_r4 = ctx.$implicit;
          var i_r5 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.activeClass(i_r5))("ngStyle", ctx_r0.mediaStyle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", media_r4.isVideo());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", media_r4.isImage());
        }
      }

      function GalleryComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_div_8_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var i_r13 = ctx.index;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.dotClick(i_r13);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2022");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r13 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.activeClass(i_r13));
        }
      }

      function GalleryComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_ng_template_9_Template_button_click_1_listener() {
            var modal_r16 = ctx.$implicit;
            return modal_r16.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.mediaList[ctx_r3.activeIndex].uri, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      var GalleryComponent = /*#__PURE__*/function () {
        function GalleryComponent(modalService, iconStyleService) {
          _classCallCheck(this, GalleryComponent);

          this.modalService = modalService;
          this.iconStyleService = iconStyleService;
          this.activeIndex = 0;
        }

        _createClass(GalleryComponent, [{
          key: "viewportWidth",
          get: function get() {
            return this.mediaList[0].width + this.spaceBetween;
          }
        }, {
          key: "mediaListStyle",
          get: function get() {
            return {
              transform: "translateX(-".concat(this.activeIndex * this.viewportWidth, "px)")
            };
          }
        }, {
          key: "mediaListContainerStyle",
          get: function get() {
            return {
              width: "".concat(this.viewportWidth, "px")
            };
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _a;

            (_a = this.spaceBetween) !== null && _a !== void 0 ? _a : this.spaceBetween = GalleryComponent.DEFAULT_SPACE_BETWEEN;
            this.initMediaStyle();
            this.initArrowIconStyle();
            this.initDotsIconStyle();
            this.initImgStyle();
          }
        }, {
          key: "activeClass",
          value: function activeClass(index) {
            return this.activeIndex === index ? 'active' : '';
          }
          /*** Init functions  ***/

        }, {
          key: "initMediaStyle",
          value: function initMediaStyle() {
            var halfSpace = this.spaceBetween / 2;
            this.mediaStyle = {
              'margin-left': halfSpace + 'px',
              'margin-right': halfSpace + 'px'
            };
          }
        }, {
          key: "initArrowIconStyle",
          value: function initArrowIconStyle() {
            this.arrowIconStyle = this.iconStyleService.getStyleWithMask('assets/images/arrow.svg');
          }
        }, {
          key: "initDotsIconStyle",
          value: function initDotsIconStyle() {
            this.dotsIconStyle = this.iconStyleService.getStyleWithMask('assets/images/dot.svg');
          }
        }, {
          key: "initImgStyle",
          value: function initImgStyle() {
            var toCssProperty = function toCssProperty(num) {
              return num ? num + 'px' : 'auto';
            };

            this.imgStyle = {
              width: toCssProperty(this.mediaList[0].width),
              height: toCssProperty(this.mediaList[0].height)
            };
          }
          /*** Event Handlers ***/

        }, {
          key: "prevClick",
          value: function prevClick() {
            this.activeIndex = this.activeIndex === 0 ? this.mediaList.length - 1 : this.activeIndex - 1;
          }
        }, {
          key: "nextClick",
          value: function nextClick() {
            this.activeIndex = (this.activeIndex + 1) % this.mediaList.length;
          }
        }, {
          key: "dotClick",
          value: function dotClick(index) {
            this.activeIndex = index;
          }
        }, {
          key: "imgClick",
          value: function imgClick() {
            var options = {
              ariaLabelledBy: 'image'
            };
            this.modalService.open(this.imgModal, options);
          }
        }]);

        return GalleryComponent;
      }();

      GalleryComponent.DEFAULT_SPACE_BETWEEN = 150;

      GalleryComponent.ɵfac = function GalleryComponent_Factory(t) {
        return new (t || GalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_icon_style_service__WEBPACK_IMPORTED_MODULE_2__["IconStyleService"]));
      };

      GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GalleryComponent,
        selectors: [["app-gallery"]],
        viewQuery: function GalleryComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.imgModal = _t.first);
          }
        },
        inputs: {
          mediaList: "mediaList",
          spaceBetween: "spaceBetween"
        },
        decls: 11,
        vars: 6,
        consts: [[1, "gallery"], [1, "gallery-content"], [1, "icon", "prev", 3, "ngStyle", "click"], [1, "media-list-container", 3, "ngStyle"], [1, "media-list", 3, "ngStyle"], [3, "ngClass", "ngStyle", 4, "ngFor", "ngForOf"], [1, "icon", 3, "ngStyle", "click"], [1, "gallery-dots"], ["class", "dot", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["imgModal", ""], [3, "ngClass", "ngStyle"], [3, "video", 4, "ngIf"], [3, "src", "ngStyle", "click", 4, "ngIf"], [3, "video"], [3, "src", "ngStyle", "click"], [1, "dot", 3, "ngClass", "click"], [1, "modal-header"], ["aria-label", "Close", 1, "close", 3, "click"], [1, "modal-body"], [3, "src"]],
        template: function GalleryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_Template_div_click_2_listener() {
              return ctx.prevClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GalleryComponent_li_5_Template, 3, 4, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_Template_div_click_6_listener() {
              return ctx.nextClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GalleryComponent_div_8_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GalleryComponent_ng_template_9_Template, 6, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.arrowIconStyle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.mediaListContainerStyle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.mediaListStyle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mediaList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.arrowIconStyle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mediaList);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_embed_video_embed_video_component__WEBPACK_IMPORTED_MODULE_4__["EmbedVideoComponent"]],
        styles: [".gallery-content[_ngcontent-%COMP%] {\n  display: flex;\n}\n.gallery-content[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  background-color: var(--app-text);\n  width: 65px;\n  height: 65px;\n  font-size: 30px;\n  margin: auto;\n}\n.gallery-content[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  filter: brightness(80%);\n}\n.gallery-content[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:active {\n  filter: brightness(75%);\n}\n.gallery-content[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.gallery-content[_ngcontent-%COMP%]   .media-list-container[_ngcontent-%COMP%] {\n  padding: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  overflow: hidden;\n}\n.gallery-content[_ngcontent-%COMP%]   .media-list-container[_ngcontent-%COMP%]   .media-list[_ngcontent-%COMP%] {\n  padding: 0;\n  display: flex;\n  transition: transform 500ms ease-in-out;\n}\n.gallery-content[_ngcontent-%COMP%]   .media-list-container[_ngcontent-%COMP%]   .media-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  cursor: pointer;\n}\n.gallery-dots[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  width: 300px;\n  margin: auto;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  line-height: normal;\n}\n.gallery-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  margin: auto 0;\n  cursor: pointer;\n  opacity: 25%;\n  font-size: 45px;\n  height: 50px;\n  transition: opacity 500ms ease-in-out;\n}\n.gallery-dots[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  opacity: 100%;\n}\n.modal-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 85vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL3N0eWxlcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxhQUFBO0FBRko7QUFJSTtFQ0dGLGVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7RURESSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFGTjtBQ0NFO0VBUUksdUJBQUE7QUROTjtBQ1VFO0VBUUksdUJBQUE7QURmTjtBQURJO0VBQ0UseUJBQUE7QUFHTjtBQUFJO0VBQ0UsVUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLGdCQUFBO0FBRU47QUFBTTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7QUFFUjtBQUFRO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0FBRVY7QUFJRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQUlJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtBQUZOO0FBS0k7RUFDRSxhQUFBO0FBSE47QUFTRTtFQUNFLGdCQUFBO0FBTkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ21peGlucyc7XHJcblxyXG4uZ2FsbGVyeSB7XHJcbiAgJi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgLmljb24ge1xyXG4gICAgICBAaW5jbHVkZSBjbGlja2FibGUobnVsbCk7XHJcblxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hcHAtdGV4dCk7XHJcbiAgICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJldiB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLm1lZGlhLWxpc3QtY29udGFpbmVyIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAubWVkaWEtbGlzdCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcyBlYXNlLWluLW91dDtcclxuICBcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLWRvdHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIFxyXG4gICAgLmRvdCB7XHJcbiAgICAgIG1hcmdpbjogYXV0byAwO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIG9wYWNpdHk6IDI1JTtcclxuICAgICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgb3BhY2l0eTogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICBpbWcge1xyXG4gICAgbWF4LWhlaWdodDogODV2aDtcclxuICB9XHJcbn0iLCJAbWl4aW4gaG9zdCB7XHJcbiAgOmhvc3Qge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBjbGlja2FibGUoJGFjdGl2ZUNsYXNzKSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgICRicmlnaHRuZXNzOiA4MCU7XHJcbiAgICBcclxuICAgIEBpZiAkYWN0aXZlQ2xhc3Mge1xyXG4gICAgICAmOm5vdCgjeyRhY3RpdmVDbGFzc30pIHtcclxuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoJGJyaWdodG5lc3MpO1xyXG4gICAgICB9XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKCRicmlnaHRuZXNzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgICRicmlnaHRuZXNzOiA3NSU7XHJcbiAgICBcclxuICAgIEBpZiAkYWN0aXZlQ2xhc3Mge1xyXG4gICAgICAmOm5vdCgjeyRhY3RpdmVDbGFzc30pIHtcclxuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoJGJyaWdodG5lc3MpO1xyXG4gICAgICB9XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKCRicmlnaHRuZXNzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-gallery',
            templateUrl: './gallery.component.html',
            styleUrls: ['./gallery.component.scss']
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
          }, {
            type: _services_icon_style_service__WEBPACK_IMPORTED_MODULE_2__["IconStyleService"]
          }];
        }, {
          imgModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['imgModal']
          }],
          mediaList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          spaceBetween: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "FUDZ":
    /*!******************************************************!*\
      !*** ./src/app/pages/about-me/about-me.component.ts ***!
      \******************************************************/

    /*! exports provided: AboutMeComponent */

    /***/
    function FUDZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function () {
        return AboutMeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./configs */
      "qndL");
      /* harmony import */


      var _components_group_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @components/group/group.component */
      "qIoL");
      /* harmony import */


      var _components_chips_chips_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @components/chips/chips.component */
      "KT1a");
      /* harmony import */


      var _components_list_tiles_list_tiles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @components/list-tiles/list-tiles.component */
      "BRA1");
      /* harmony import */


      var _pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @pipes/i18n.pipe */
      "gFfK");

      function AboutMeComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "i18n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, "description", ctx_r0.overviewPageName));
        }
      }

      var AboutMeComponent = /*#__PURE__*/function () {
        function AboutMeComponent() {
          _classCallCheck(this, AboutMeComponent);

          this.title = 'title';
          this.pageName = 'about-me';
          this.skills = _configs__WEBPACK_IMPORTED_MODULE_1__["skills"];
          this.workExperiences = _configs__WEBPACK_IMPORTED_MODULE_1__["workExperiences"];
          this.educations = _configs__WEBPACK_IMPORTED_MODULE_1__["educations"];
        }

        _createClass(AboutMeComponent, [{
          key: "overviewPageName",
          get: function get() {
            return this.pageName + '/overview';
          }
        }, {
          key: "skillsPageName",
          get: function get() {
            return this.pageName + '/skills';
          }
        }, {
          key: "workExperiencesPageName",
          get: function get() {
            return this.pageName + '/work-experiences';
          }
        }, {
          key: "educationsPageName",
          get: function get() {
            return this.pageName + '/educations';
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutMeComponent;
      }();

      AboutMeComponent.ɵfac = function AboutMeComponent_Factory(t) {
        return new (t || AboutMeComponent)();
      };

      AboutMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutMeComponent,
        selectors: [["app-about-me"]],
        decls: 10,
        vars: 24,
        consts: [[1, "about-me"], [3, "title"], [3, "i18nSourcePath", "title", "groups"], [3, "title", "i18nSourcePath", "listTiles"], [3, "title", "i18nSourcePath", "listTiles", "showAllDuration", "showTileDuration"]],
        template: function AboutMeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-group", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "i18n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AboutMeComponent_ng_template_3_Template, 3, 4, "ng-template");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-chips", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "i18n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-list-tiles", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "i18n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-list-tiles", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "i18n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 12, ctx.title, ctx.overviewPageName));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("i18nSourcePath", ctx.skillsPageName)("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 15, ctx.title, ctx.skillsPageName))("groups", ctx.skills);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 18, ctx.title, ctx.workExperiencesPageName))("i18nSourcePath", ctx.workExperiencesPageName)("listTiles", ctx.workExperiences);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 21, ctx.title, ctx.educationsPageName))("i18nSourcePath", ctx.educationsPageName)("listTiles", ctx.educations)("showAllDuration", false)("showTileDuration", false);
          }
        },
        directives: [_components_group_group_component__WEBPACK_IMPORTED_MODULE_2__["GroupComponent"], _components_chips_chips_component__WEBPACK_IMPORTED_MODULE_3__["ChipsComponent"], _components_list_tiles_list_tiles_component__WEBPACK_IMPORTED_MODULE_4__["ListTilesComponent"]],
        pipes: [_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_5__["I18nPipe"]],
        styles: ["[_nghost-%COMP%] {\n  height: 100vh;\n  overflow: auto;\n  padding: 15px;\n}\n\n.about-me[_ngcontent-%COMP%]   .delimiter[_ngcontent-%COMP%] {\n  height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL19taXhpbnMuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWJvdXQtbWUvYWJvdXQtbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNBSjs7QUFDRTtFQUNFLFlBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0LW1lL2Fib3V0LW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGhvc3Qge1xyXG4gIDpob3N0IHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gY2xpY2thYmxlKCRhY3RpdmVDbGFzcykge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICAkYnJpZ2h0bmVzczogODAlO1xyXG4gICAgXHJcbiAgICBAaWYgJGFjdGl2ZUNsYXNzIHtcclxuICAgICAgJjpub3QoI3skYWN0aXZlQ2xhc3N9KSB7XHJcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKCRicmlnaHRuZXNzKTtcclxuICAgICAgfVxyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygkYnJpZ2h0bmVzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICAkYnJpZ2h0bmVzczogNzUlO1xyXG4gICAgXHJcbiAgICBAaWYgJGFjdGl2ZUNsYXNzIHtcclxuICAgICAgJjpub3QoI3skYWN0aXZlQ2xhc3N9KSB7XHJcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKCRicmlnaHRuZXNzKTtcclxuICAgICAgfVxyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygkYnJpZ2h0bmVzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5hYm91dC1tZSAuZGVsaW1pdGVyIHtcbiAgaGVpZ2h0OiAyMHB4O1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutMeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-about-me',
            templateUrl: './about-me.component.html',
            styleUrls: ['./about-me.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "KT1a":
    /*!*****************************************************!*\
      !*** ./src/app/components/chips/chips.component.ts ***!
      \*****************************************************/

    /*! exports provided: ChipsComponent */

    /***/
    function KT1a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChipsComponent", function () {
        return ChipsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _components_group_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @components/group/group.component */
      "qIoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_chip_chip_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @components/chip/chip.component */
      "whxp");
      /* harmony import */


      var _pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @pipes/i18n.pipe */
      "gFfK");

      function ChipsComponent_ng_template_2_div_0_app_chip_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-chip", 6);
        }

        if (rf & 2) {
          var text_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", text_r4);
        }
      }

      function ChipsComponent_ng_template_2_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "i18n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChipsComponent_ng_template_2_div_0_app_chip_5_Template, 1, 1, "app-chip", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var group_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, group_r2.group, ctx_r1.i18nSourcePath));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r2.texts);
        }
      }

      function ChipsComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChipsComponent_ng_template_2_div_0_Template, 6, 5, "div", 2);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.groups);
        }
      }

      var ChipsComponent = /*#__PURE__*/function () {
        function ChipsComponent() {
          _classCallCheck(this, ChipsComponent);
        }

        _createClass(ChipsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ChipsComponent;
      }();

      ChipsComponent.ɵfac = function ChipsComponent_Factory(t) {
        return new (t || ChipsComponent)();
      };

      ChipsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ChipsComponent,
        selectors: [["app-chips"]],
        inputs: {
          i18nSourcePath: "i18nSourcePath",
          groups: "groups",
          title: "title"
        },
        decls: 3,
        vars: 1,
        consts: [[1, "chips"], [3, "title"], ["class", "chips-group", 4, "ngFor", "ngForOf"], [1, "chips-group"], [1, "chips-list"], [3, "text", 4, "ngFor", "ngForOf"], [3, "text"]],
        template: function ChipsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-group", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChipsComponent_ng_template_2_Template, 1, 1, "ng-template");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title);
          }
        },
        directives: [_components_group_group_component__WEBPACK_IMPORTED_MODULE_1__["GroupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _components_chip_chip_component__WEBPACK_IMPORTED_MODULE_3__["ChipComponent"]],
        pipes: [_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_4__["I18nPipe"]],
        styles: [".chips-content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.chips-group[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n}\n.chips-group[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 7px;\n}\n.chips-group[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  line-height: 2;\n  margin: 0 10px 0 0;\n}\n.chips-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGlwcy9jaGlwcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFdBQUE7QUFBSjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBREo7QUFHSTtFQUNFLGtCQUFBO0FBRE47QUFJSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUZOO0FBTUU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQUpKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGlwcy9jaGlwcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGlwcyB7XHJcbiAgJi1jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJi1ncm91cCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICAgIH1cclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgICAgIG1hcmdpbjogMCAxMHB4IDAgMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYtbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChipsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-chips',
            templateUrl: './chips.component.html',
            styleUrls: ['./chips.component.scss']
          }]
        }], function () {
          return [];
        }, {
          i18nSourcePath: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          groups: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Mu1j":
    /*!******************************************************************!*\
      !*** ./src/app/pages/drag-and-score/drag-and-score.component.ts ***!
      \******************************************************************/

    /*! exports provided: DragAndScoreComponent */

    /***/
    function Mu1j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DragAndScoreComponent", function () {
        return DragAndScoreComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./config */
      "A71r");
      /* harmony import */


      var _services_icon_style_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @services/icon-style.service */
      "QQ8W");
      /* harmony import */


      var _components_das_demo_das_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @components/das-demo/das-demo.component */
      "vesX");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_group_group_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @components/group/group.component */
      "qIoL");
      /* harmony import */


      var _components_chips_chips_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @components/chips/chips.component */
      "KT1a");
      /* harmony import */


      var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @components/gallery/gallery.component */
      "EgB/");
      /* harmony import */


      var _pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @pipes/i18n.pipe */
      "gFfK");

      function DragAndScoreComponent_ng_template_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "i18n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r1.i18nKeys.description.content, ctx_r1.descriptioni18nPath));
        }
      }

      var DragAndScoreComponent = /*#__PURE__*/function () {
        function DragAndScoreComponent(iconStyleService) {
          _classCallCheck(this, DragAndScoreComponent);

          this.iconStyleService = iconStyleService;
          this.title = _config__WEBPACK_IMPORTED_MODULE_1__["title"];
          this.playStoreLink = _config__WEBPACK_IMPORTED_MODULE_1__["playStoreLink"];
          this.i18nKeys = _config__WEBPACK_IMPORTED_MODULE_1__["i18nKeys"];
          this.technologies = _config__WEBPACK_IMPORTED_MODULE_1__["technologies"];
          this.mediaList = _config__WEBPACK_IMPORTED_MODULE_1__["mediaList"];
        }

        _createClass(DragAndScoreComponent, [{
          key: "i18nSourcePath",
          get: function get() {
            return 'drag-and-score';
          }
        }, {
          key: "descriptioni18nPath",
          get: function get() {
            return this.i18nSourcePath + '/description';
          }
        }, {
          key: "technologiesi18nPath",
          get: function get() {
            return this.i18nSourcePath + '/technologies';
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initDownloadIconStyle();
          }
        }, {
          key: "initDownloadIconStyle",
          value: function initDownloadIconStyle() {
            this.downloadIconStyle = this.iconStyleService.getStyleWithMask('assets/images/android.svg');
          }
        }]);

        return DragAndScoreComponent;
      }();

      DragAndScoreComponent.ɵfac = function DragAndScoreComponent_Factory(t) {
        return new (t || DragAndScoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_icon_style_service__WEBPACK_IMPORTED_MODULE_2__["IconStyleService"]));
      };

      DragAndScoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DragAndScoreComponent,
        selectors: [["app-drag-and-score"]],
        decls: 24,
        vars: 22,
        consts: [[1, "drag-and-score", "app-project-page"], ["dasDemo", ""], [1, "logo"], ["src", "assets/images/drag-and-score/logo.png"], [1, "title"], [1, "buttons"], ["target", "_blank", 1, "app-btn", "download-btn", 3, "href"], [1, "icon", 3, "ngStyle"], [1, "app-btn", 3, "click"], [1, "description"], [3, "title"], [1, "technologies"], [3, "i18nSourcePath", "title", "groups"], [3, "mediaList"]],
        template: function DragAndScoreComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-das-demo", null, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "i18n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DragAndScoreComponent_Template_button_click_13_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

              return _r0.open();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "i18n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-group", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "i18n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DragAndScoreComponent_ng_template_19_Template, 3, 4, "ng-template");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-chips", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "i18n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-gallery", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.playStoreLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.downloadIconStyle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 10, ctx.i18nKeys.download, ctx.i18nSourcePath), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 13, ctx.i18nKeys.playOnline, ctx.i18nSourcePath), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 16, ctx.i18nKeys.description.title, ctx.descriptioni18nPath));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("i18nSourcePath", ctx.technologiesi18nPath)("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 19, ctx.i18nKeys.technologies.title, ctx.technologiesi18nPath))("groups", ctx.technologies);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mediaList", ctx.mediaList);
          }
        },
        directives: [_components_das_demo_das_demo_component__WEBPACK_IMPORTED_MODULE_3__["DasDemoComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _components_group_group_component__WEBPACK_IMPORTED_MODULE_5__["GroupComponent"], _components_chips_chips_component__WEBPACK_IMPORTED_MODULE_6__["ChipsComponent"], _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__["GalleryComponent"]],
        pipes: [_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_8__["I18nPipe"]],
        styles: ["[_nghost-%COMP%] {\n  height: 100vh;\n  overflow: auto;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzL19taXhpbnMuc2NzcyIsInNyYy9hcHAvcGFnZXMvZHJhZy1hbmQtc2NvcmUvZHJhZy1hbmQtc2NvcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RyYWctYW5kLXNjb3JlL2RyYWctYW5kLXNjb3JlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGhvc3Qge1xyXG4gIDpob3N0IHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gY2xpY2thYmxlKCRhY3RpdmVDbGFzcykge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICAkYnJpZ2h0bmVzczogODAlO1xyXG4gICAgXHJcbiAgICBAaWYgJGFjdGl2ZUNsYXNzIHtcclxuICAgICAgJjpub3QoI3skYWN0aXZlQ2xhc3N9KSB7XHJcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKCRicmlnaHRuZXNzKTtcclxuICAgICAgfVxyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygkYnJpZ2h0bmVzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICAkYnJpZ2h0bmVzczogNzUlO1xyXG4gICAgXHJcbiAgICBAaWYgJGFjdGl2ZUNsYXNzIHtcclxuICAgICAgJjpub3QoI3skYWN0aXZlQ2xhc3N9KSB7XHJcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKCRicmlnaHRuZXNzKTtcclxuICAgICAgfVxyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygkYnJpZ2h0bmVzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDE1cHg7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragAndScoreComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-drag-and-score',
            templateUrl: './drag-and-score.component.html',
            styleUrls: ['./drag-and-score.component.scss']
          }]
        }], function () {
          return [{
            type: _services_icon_style_service__WEBPACK_IMPORTED_MODULE_2__["IconStyleService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "QQ8W":
    /*!************************************************!*\
      !*** ./src/app/services/icon-style.service.ts ***!
      \************************************************/

    /*! exports provided: IconStyleService */

    /***/
    function QQ8W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IconStyleService", function () {
        return IconStyleService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var IconStyleService = /*#__PURE__*/function () {
        function IconStyleService() {
          _classCallCheck(this, IconStyleService);
        }

        _createClass(IconStyleService, [{
          key: "getStyleWithMask",
          value: function getStyleWithMask(iconPath) {
            var mask = "url('".concat(iconPath, "') no-repeat center");
            return {
              mask: mask,
              '-webkit-mask': mask
            };
          }
        }]);

        return IconStyleService;
      }();

      IconStyleService.ɵfac = function IconStyleService_Factory(t) {
        return new (t || IconStyleService)();
      };

      IconStyleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: IconStyleService,
        factory: IconStyleService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconStyleService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "RCje":
    /*!*******************************************!*\
      !*** ./src/app/components/menu/config.ts ***!
      \*******************************************/

    /*! exports provided: i18nKeys, i18nMenuPath, i18nSettingsPath */

    /***/
    function RCje(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "i18nKeys", function () {
        return i18nKeys;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "i18nMenuPath", function () {
        return i18nMenuPath;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "i18nSettingsPath", function () {
        return i18nSettingsPath;
      });

      var i18nKeys = {
        settings: {
          title: 'title'
        }
      };
      var i18nMenuPath = 'menu';
      var i18nSettingsPath = 'menu/settings';
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


      var _services_theme_theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @services/theme/theme.service */
      "a7lh");
      /* harmony import */


      var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @components/menu/menu.component */
      "0oYm");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(themeService) {
          _classCallCheck(this, AppComponent);

          this.themeService = themeService;
          this.title = 'cv-app';
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.themeService.initTheme();
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_theme_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 0,
        consts: [[1, "app-root"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
        styles: [".app-root[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLXJvb3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [{
            type: _services_theme_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "VDV4":
    /*!*****************************************************!*\
      !*** ./src/app/models/consts/i18n-locales.model.ts ***!
      \*****************************************************/

    /*! exports provided: I18nLocales */

    /***/
    function VDV4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I18nLocales", function () {
        return I18nLocales;
      });

      var I18nLocales = function I18nLocales() {
        _classCallCheck(this, I18nLocales);
      };

      I18nLocales.EN = 'en';
      I18nLocales.ES = 'es';
      I18nLocales.UK = 'uk';
      /***/
    },

    /***/
    "XZk2":
    /*!***************************************!*\
      !*** ./src/app/models/image.model.ts ***!
      \***************************************/

    /*! exports provided: Image */

    /***/
    function XZk2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Image", function () {
        return Image;
      });
      /* harmony import */


      var _media_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./media.model */
      "as86");

      var Image = /*#__PURE__*/function (_media_model__WEBPACK) {
        _inherits(Image, _media_model__WEBPACK);

        var _super = _createSuper(Image);

        function Image() {
          _classCallCheck(this, Image);

          return _super.apply(this, arguments);
        }

        _createClass(Image, [{
          key: "isImage",
          value: function isImage() {
            return true;
          }
        }]);

        return Image;
      }(_media_model__WEBPACK_IMPORTED_MODULE_0__["Media"]);
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


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _router_app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @router/app-routing.module */
      "ez1I");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @pipes/i18n.pipe */
      "gFfK");
      /* harmony import */


      var _pages_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @pages/about-me/about-me.component */
      "FUDZ");
      /* harmony import */


      var _pages_openapi_mobile_client_openapi_mobile_client_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @pages/openapi-mobile-client/openapi-mobile-client.component */
      "EKug");
      /* harmony import */


      var _pages_drag_and_score_drag_and_score_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @pages/drag-and-score/drag-and-score.component */
      "Mu1j");
      /* harmony import */


      var _services_work_duration_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @services/work-duration.service */
      "yYsB");
      /* harmony import */


      var _services_theme_theme_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @services/theme/theme.service */
      "a7lh");
      /* harmony import */


      var _services_icon_style_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @services/icon-style.service */
      "QQ8W");
      /* harmony import */


      var _services_i18n_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @services/i18n.service */
      "z2Pl");
      /* harmony import */


      var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @components/menu/menu.component */
      "0oYm");
      /* harmony import */


      var _components_list_tile_list_tile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @components/list-tile/list-tile.component */
      "j18X");
      /* harmony import */


      var _components_list_tiles_list_tiles_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @components/list-tiles/list-tiles.component */
      "BRA1");
      /* harmony import */


      var _components_chip_chip_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @components/chip/chip.component */
      "whxp");
      /* harmony import */


      var _components_chips_chips_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @components/chips/chips.component */
      "KT1a");
      /* harmony import */


      var _components_group_group_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @components/group/group.component */
      "qIoL");
      /* harmony import */


      var _components_embed_video_embed_video_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @components/embed-video/embed-video.component */
      "5Ffi");
      /* harmony import */


      var _components_das_demo_das_demo_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @components/das-demo/das-demo.component */
      "vesX");
      /* harmony import */


      var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @components/gallery/gallery.component */
      "EgB/");
      /* harmony import */


      var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @components/settings/settings.component */
      "1U8w");
      /* harmony import */


      var _components_select_select_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @components/select/select.component */
      "yoGk");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_services_i18n_service__WEBPACK_IMPORTED_MODULE_15__["I18nService"], _services_theme_theme_service__WEBPACK_IMPORTED_MODULE_13__["ThemeService"], _services_work_duration_service__WEBPACK_IMPORTED_MODULE_12__["DateDurationService"], _pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_8__["I18nPipe"], _services_icon_style_service__WEBPACK_IMPORTED_MODULE_14__["IconStyleService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _router_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _pages_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_9__["AboutMeComponent"], _pages_openapi_mobile_client_openapi_mobile_client_component__WEBPACK_IMPORTED_MODULE_10__["OpenapiMobileClientComponent"], _pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_8__["I18nPipe"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_16__["MenuComponent"], _pages_drag_and_score_drag_and_score_component__WEBPACK_IMPORTED_MODULE_11__["DragAndScoreComponent"], _components_list_tile_list_tile_component__WEBPACK_IMPORTED_MODULE_17__["ListTileComponent"], _components_list_tiles_list_tiles_component__WEBPACK_IMPORTED_MODULE_18__["ListTilesComponent"], _components_chip_chip_component__WEBPACK_IMPORTED_MODULE_19__["ChipComponent"], _components_chips_chips_component__WEBPACK_IMPORTED_MODULE_20__["ChipsComponent"], _components_group_group_component__WEBPACK_IMPORTED_MODULE_21__["GroupComponent"], _components_embed_video_embed_video_component__WEBPACK_IMPORTED_MODULE_22__["EmbedVideoComponent"], _components_das_demo_das_demo_component__WEBPACK_IMPORTED_MODULE_23__["DasDemoComponent"], _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_24__["GalleryComponent"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_25__["SettingsComponent"], _components_select_select_component__WEBPACK_IMPORTED_MODULE_26__["SelectComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _router_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _pages_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_9__["AboutMeComponent"], _pages_openapi_mobile_client_openapi_mobile_client_component__WEBPACK_IMPORTED_MODULE_10__["OpenapiMobileClientComponent"], _pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_8__["I18nPipe"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_16__["MenuComponent"], _pages_drag_and_score_drag_and_score_component__WEBPACK_IMPORTED_MODULE_11__["DragAndScoreComponent"], _components_list_tile_list_tile_component__WEBPACK_IMPORTED_MODULE_17__["ListTileComponent"], _components_list_tiles_list_tiles_component__WEBPACK_IMPORTED_MODULE_18__["ListTilesComponent"], _components_chip_chip_component__WEBPACK_IMPORTED_MODULE_19__["ChipComponent"], _components_chips_chips_component__WEBPACK_IMPORTED_MODULE_20__["ChipsComponent"], _components_group_group_component__WEBPACK_IMPORTED_MODULE_21__["GroupComponent"], _components_embed_video_embed_video_component__WEBPACK_IMPORTED_MODULE_22__["EmbedVideoComponent"], _components_das_demo_das_demo_component__WEBPACK_IMPORTED_MODULE_23__["DasDemoComponent"], _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_24__["GalleryComponent"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_25__["SettingsComponent"], _components_select_select_component__WEBPACK_IMPORTED_MODULE_26__["SelectComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _router_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]],
            providers: [_services_i18n_service__WEBPACK_IMPORTED_MODULE_15__["I18nService"], _services_theme_theme_service__WEBPACK_IMPORTED_MODULE_13__["ThemeService"], _services_work_duration_service__WEBPACK_IMPORTED_MODULE_12__["DateDurationService"], _pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_8__["I18nPipe"], _services_icon_style_service__WEBPACK_IMPORTED_MODULE_14__["IconStyleService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "a7lh":
    /*!*************************************************!*\
      !*** ./src/app/services/theme/theme.service.ts ***!
      \*************************************************/

    /*! exports provided: ThemeService */

    /***/
    function a7lh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThemeService", function () {
        return ThemeService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var css_vars_ponyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! css-vars-ponyfill */
      "vjCF");
      /* harmony import */


      var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./theme */
      "lDQE");

      var ThemeService = /*#__PURE__*/function () {
        function ThemeService() {
          _classCallCheck(this, ThemeService);

          this.localStorageKey = 'theme';
        }

        _createClass(ThemeService, [{
          key: "getCurrentTheme",
          value: function getCurrentTheme() {
            return _theme__WEBPACK_IMPORTED_MODULE_2__["ThemeTypes"][localStorage.getItem(this.localStorageKey)];
          }
        }, {
          key: "initTheme",
          value: function initTheme() {
            var theme = this.getCurrentTheme();

            if (!theme) {
              theme = _theme__WEBPACK_IMPORTED_MODULE_2__["ThemeTypes"].light;
            }

            this.changeTheme(theme);
          }
        }, {
          key: "changeTheme",
          value: function changeTheme(theme) {
            localStorage.setItem(this.localStorageKey, _theme__WEBPACK_IMPORTED_MODULE_2__["ThemeTypes"][theme]);
            Object(css_vars_ponyfill__WEBPACK_IMPORTED_MODULE_1__["default"])({
              variables: JSON.parse(JSON.stringify(_theme__WEBPACK_IMPORTED_MODULE_2__["THEMES"][theme])),
              shadowDOM: true
            });
          }
        }]);

        return ThemeService;
      }();

      ThemeService.ɵfac = function ThemeService_Factory(t) {
        return new (t || ThemeService)();
      };

      ThemeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ThemeService,
        factory: ThemeService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "as86":
    /*!***************************************!*\
      !*** ./src/app/models/media.model.ts ***!
      \***************************************/

    /*! exports provided: Media */

    /***/
    function as86(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Media", function () {
        return Media;
      });

      var Media = /*#__PURE__*/function () {
        function Media(uri) {
          var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

          _classCallCheck(this, Media);

          this.uri = uri;
          this.width = width;
          this.height = height;
        }

        _createClass(Media, [{
          key: "isVideo",
          value: function isVideo() {
            return false;
          }
        }, {
          key: "isImage",
          value: function isImage() {
            return false;
          }
        }]);

        return Media;
      }();
      /***/

    },

    /***/
    "cxX2":
    /*!***********************************************!*\
      !*** ./src/app/components/settings/config.ts ***!
      \***********************************************/

    /*! exports provided: i18nKeys, i18nSourcePath, languages, languagesI18nPath, themes, themesI18nPath */

    /***/
    function cxX2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "i18nKeys", function () {
        return i18nKeys;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "i18nSourcePath", function () {
        return i18nSourcePath;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "languages", function () {
        return languages;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "languagesI18nPath", function () {
        return languagesI18nPath;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "themes", function () {
        return themes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "themesI18nPath", function () {
        return themesI18nPath;
      });
      /* harmony import */


      var _services_theme_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @services/theme/theme */
      "lDQE");
      /* harmony import */


      var _models_consts_i18n_locales_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @models/consts/i18n-locales.model */
      "VDV4");
      /* harmony import */


      var _models_select_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @models/select.model */
      "r2ZH");

      var i18nKeys = {
        title: 'title',
        language: 'language',
        theme: 'theme'
      };
      var i18nSourcePath = 'menu/settings';
      var languagesPath = 'assets/images/languages/';
      var languages = [new _models_select_model__WEBPACK_IMPORTED_MODULE_2__["SelectOption"](languagesPath + _models_consts_i18n_locales_model__WEBPACK_IMPORTED_MODULE_1__["I18nLocales"].EN + '.png', _models_consts_i18n_locales_model__WEBPACK_IMPORTED_MODULE_1__["I18nLocales"].EN, _models_consts_i18n_locales_model__WEBPACK_IMPORTED_MODULE_1__["I18nLocales"].EN), new _models_select_model__WEBPACK_IMPORTED_MODULE_2__["SelectOption"](languagesPath + _models_consts_i18n_locales_model__WEBPACK_IMPORTED_MODULE_1__["I18nLocales"].UK + '.png', _models_consts_i18n_locales_model__WEBPACK_IMPORTED_MODULE_1__["I18nLocales"].UK, _models_consts_i18n_locales_model__WEBPACK_IMPORTED_MODULE_1__["I18nLocales"].UK)];
      var languagesI18nPath = 'languages';
      var themePath = 'assets/images/menu/';
      var themes = [new _models_select_model__WEBPACK_IMPORTED_MODULE_2__["SelectOption"](themePath + 'light.svg', _services_theme_theme__WEBPACK_IMPORTED_MODULE_0__["ThemeTypes"].light, 'light'), new _models_select_model__WEBPACK_IMPORTED_MODULE_2__["SelectOption"](themePath + 'dark.svg', _services_theme_theme__WEBPACK_IMPORTED_MODULE_0__["ThemeTypes"].dark, 'dark')];
      var themesI18nPath = 'themes';
      /***/
    },

    /***/
    "d57Q":
    /*!***************************************!*\
      !*** ./src/app/models/video.model.ts ***!
      \***************************************/

    /*! exports provided: Video */

    /***/
    function d57Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Video", function () {
        return Video;
      });
      /* harmony import */


      var _media_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./media.model */
      "as86");

      var Video = /*#__PURE__*/function (_media_model__WEBPACK2) {
        _inherits(Video, _media_model__WEBPACK2);

        var _super2 = _createSuper(Video);

        function Video() {
          _classCallCheck(this, Video);

          return _super2.apply(this, arguments);
        }

        _createClass(Video, [{
          key: "isVideo",
          value: function isVideo() {
            return true;
          }
        }]);

        return Video;
      }(_media_model__WEBPACK_IMPORTED_MODULE_0__["Media"]);
      /***/

    },

    /***/
    "ez1I":
    /*!**********************************************!*\
      !*** ./src/app/router/app-routing.module.ts ***!
      \**********************************************/

    /*! exports provided: ROUTES, AppRoutingModule */

    /***/
    function ez1I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
        return ROUTES;
      });
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


      var _pages_openapi_mobile_client_openapi_mobile_client_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @pages/openapi-mobile-client/openapi-mobile-client.component */
      "EKug");
      /* harmony import */


      var _app_pages_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @/app/pages/about-me/about-me.component */
      "FUDZ");
      /* harmony import */


      var _pages_drag_and_score_drag_and_score_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @pages/drag-and-score/drag-and-score.component */
      "Mu1j");

      var ROUTES = [{
        path: '',
        component: _app_pages_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_3__["AboutMeComponent"],
        data: {
          titleI18nKey: 'about-me'
        }
      }, {
        path: 'openapi-mobile-client',
        component: _pages_openapi_mobile_client_openapi_mobile_client_component__WEBPACK_IMPORTED_MODULE_2__["OpenapiMobileClientComponent"],
        data: {
          titleI18nKey: 'openapi-mobile-client'
        }
      }, {
        path: 'drag-and-score',
        component: _pages_drag_and_score_drag_and_score_component__WEBPACK_IMPORTED_MODULE_4__["DragAndScoreComponent"],
        data: {
          titleI18nKey: 'drag-and-score'
        }
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
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(ROUTES)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(ROUTES)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "gFfK":
    /*!************************************!*\
      !*** ./src/app/pipes/i18n.pipe.ts ***!
      \************************************/

    /*! exports provided: I18nPipe */

    /***/
    function gFfK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I18nPipe", function () {
        return I18nPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_i18n_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @services/i18n.service */
      "z2Pl");

      var I18nPipe = /*#__PURE__*/function () {
        function I18nPipe(i18nService) {
          _classCallCheck(this, I18nPipe);

          this.i18nService = i18nService;
        }

        _createClass(I18nPipe, [{
          key: "transform",
          value: function transform(phrase, pageName, args) {
            return this.i18nService.getTranslation(pageName + '/' + phrase);
          }
        }]);

        return I18nPipe;
      }();

      I18nPipe.ɵfac = function I18nPipe_Factory(t) {
        return new (t || I18nPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_i18n_service__WEBPACK_IMPORTED_MODULE_1__["I18nService"]));
      };

      I18nPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "i18n",
        type: I18nPipe,
        pure: false
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](I18nPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'i18n',
            pure: false
          }]
        }], function () {
          return [{
            type: _services_i18n_service__WEBPACK_IMPORTED_MODULE_1__["I18nService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "j18X":
    /*!*************************************************************!*\
      !*** ./src/app/components/list-tile/list-tile.component.ts ***!
      \*************************************************************/

    /*! exports provided: ListTileComponent */

    /***/
    function j18X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListTileComponent", function () {
        return ListTileComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_services_work_duration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @/app/services/work-duration.service */
      "yYsB");
      /* harmony import */


      var _services_i18n_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @services/i18n.service */
      "z2Pl");

      var ListTileComponent = /*#__PURE__*/function () {
        function ListTileComponent(dateDurationService, i18nService) {
          _classCallCheck(this, ListTileComponent);

          this.dateDurationService = dateDurationService;
          this.i18nService = i18nService;
          this.showDuration = true;
        }

        _createClass(ListTileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "i18nPath",
          get: function get() {
            return "".concat(this.i18nSourcePath, "/").concat(this.listTile.key);
          }
        }, {
          key: "displayDate",
          value: function displayDate() {
            var _this$listTile = this.listTile,
                startDate = _this$listTile.startDate,
                endDate = _this$listTile.endDate;
            return this.dateDurationService.displayDate(startDate, endDate, this.showDuration);
          }
        }, {
          key: "getValue",
          value: function getValue(key) {
            return this.listTile.useI18n ? this.i18nService.getTranslation("".concat(this.i18nPath, "/").concat(key)) : key;
          }
        }, {
          key: "getSubtitle",
          value: function getSubtitle() {
            return [this.getValue(this.listTile.subtitle1), this.getValue(this.listTile.subtitle2)].join(', ');
          }
        }]);

        return ListTileComponent;
      }();

      ListTileComponent.ɵfac = function ListTileComponent_Factory(t) {
        return new (t || ListTileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_work_duration_service__WEBPACK_IMPORTED_MODULE_1__["DateDurationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_i18n_service__WEBPACK_IMPORTED_MODULE_2__["I18nService"]));
      };

      ListTileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ListTileComponent,
        selectors: [["app-list-tile"]],
        inputs: {
          showDuration: "showDuration",
          listTile: "listTile",
          i18nSourcePath: "i18nSourcePath"
        },
        decls: 14,
        vars: 5,
        consts: [[1, "list-tile"], [1, "lt-logo"], [3, "src"], [1, "lt-content"], [1, "lt-date"], [1, "lt-title"], [1, "lt-subtitle"], [1, "lt-description"]],
        template: function ListTileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.listTile.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.displayDate());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getValue(ctx.listTile.title));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getSubtitle());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getValue(ctx.listTile.description));
          }
        },
        styles: [".list-tile[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n}\n.list-tile[_ngcontent-%COMP%]   .lt-logo[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n}\n.list-tile[_ngcontent-%COMP%]   .lt-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: inherit;\n}\n.list-tile[_ngcontent-%COMP%]   .lt-content[_ngcontent-%COMP%] {\n  flex: auto;\n  margin-left: 10px;\n}\n.list-tile[_ngcontent-%COMP%]   .lt-content[_ngcontent-%COMP%]   .lt-date[_ngcontent-%COMP%] {\n  float: right;\n}\n.list-tile[_ngcontent-%COMP%]   .lt-content[_ngcontent-%COMP%]   .lt-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: large;\n}\n.list-tile[_ngcontent-%COMP%]   .lt-content[_ngcontent-%COMP%]   .lt-subtitle[_ngcontent-%COMP%] {\n  filter: brightness(78%);\n}\n.list-tile[_ngcontent-%COMP%]   .lt-content[_ngcontent-%COMP%]   .lt-description[_ngcontent-%COMP%] {\n  white-space: pre-line;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXN0LXRpbGUvbGlzdC10aWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDSTtFQUNFLGNBQUE7QUFDTjtBQUdFO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FBREo7QUFHSTtFQUNFLFlBQUE7QUFETjtBQUlJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQUZOO0FBS0k7RUFDRSx1QkFBQTtBQUhOO0FBTUk7RUFDRSxxQkFBQTtBQUpOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9saXN0LXRpbGUvbGlzdC10aWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtdGlsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAubHQtbG9nbyB7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGhlaWdodDogOTBweDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5sdC1jb250ZW50IHtcclxuICAgIGZsZXg6YXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgXHJcbiAgICAubHQtZGF0ZSB7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAubHQtdGl0bGUge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIH1cclxuICBcclxuICAgIC5sdC1zdWJ0aXRsZSB7XHJcbiAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg3OCUpO1xyXG4gICAgfVxyXG5cclxuICAgIC5sdC1kZXNjcmlwdGlvbiB7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxuICAgIH1cclxuICB9XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListTileComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-list-tile',
            templateUrl: './list-tile.component.html',
            styleUrls: ['./list-tile.component.scss']
          }]
        }], function () {
          return [{
            type: _app_services_work_duration_service__WEBPACK_IMPORTED_MODULE_1__["DateDurationService"]
          }, {
            type: _services_i18n_service__WEBPACK_IMPORTED_MODULE_2__["I18nService"]
          }];
        }, {
          showDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          listTile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          i18nSourcePath: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "lDQE":
    /*!*****************************************!*\
      !*** ./src/app/services/theme/theme.ts ***!
      \*****************************************/

    /*! exports provided: ThemeTypes, LightTheme, DarkTheme, THEMES */

    /***/
    function lDQE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      var _THEMES;

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThemeTypes", function () {
        return ThemeTypes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LightTheme", function () {
        return LightTheme;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DarkTheme", function () {
        return DarkTheme;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "THEMES", function () {
        return THEMES;
      });

      var ThemeTypes;

      (function (ThemeTypes) {
        ThemeTypes[ThemeTypes["light"] = 0] = "light";
        ThemeTypes[ThemeTypes["dark"] = 1] = "dark";
      })(ThemeTypes || (ThemeTypes = {}));

      var LightTheme = function LightTheme() {
        _classCallCheck(this, LightTheme);

        this['--app-background'] = '#eeeeee';
        this['--app-text'] = '#000000';
        this['--app-light-text'] = '#FFFFFF';
        this['--app-primary'] = '#388e3c';
        this['--app-menu-item'] = '#6abf69';
        this['--app-menu-item-active'] = '#eeeeee';
        this['--app-btn'] = '#ff5252';
        this['--app-chip'] = '#ffa270';
        this['--app-android'] = '#3BD580';
      };

      var DarkTheme = function DarkTheme() {
        _classCallCheck(this, DarkTheme);

        this['--app-background'] = '#303030';
        this['--app-text'] = '#FFFFFF';
        this['--app-light-text'] = '#FFFFFF';
        this['--app-primary'] = '#191919';
        this['--app-menu-item'] = '#3e4042';
        this['--app-menu-item-active'] = '#303030';
        this['--app-btn'] = '#3f51b5';
        this['--app-chip'] = '#c63f17';
        this['--app-android'] = '#3BD580';
      };

      var THEMES = (_THEMES = {}, _defineProperty(_THEMES, ThemeTypes.light, new LightTheme()), _defineProperty(_THEMES, ThemeTypes.dark, new DarkTheme()), _THEMES);
      /***/
    },

    /***/
    "lh6d":
    /*!*******************************************************!*\
      !*** ./src/app/pages/openapi-mobile-client/config.ts ***!
      \*******************************************************/

    /*! exports provided: title, i18nKeys, technologies, mediaList */

    /***/
    function lh6d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "title", function () {
        return title;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "i18nKeys", function () {
        return i18nKeys;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "technologies", function () {
        return technologies;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mediaList", function () {
        return mediaList;
      });
      /* harmony import */


      var _models_image_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @models/image.model */
      "XZk2");

      var title = 'OpenAPI Mobile Client';
      var i18nKeys = {
        download: 'download',
        technologies: {
          title: 'title'
        },
        description: {
          title: 'title',
          content: 'content'
        }
      };
      var technologies = [{
        group: '',
        texts: ['Flutter', 'Dart']
      }];

      var imageAddressTemplate = function imageAddressTemplate(index) {
        return "assets/images/openapi-mobile-client/screenshots/".concat(index, ".jpg");
      };

      var mediaWidth = 280;
      var mediaHeight = 600;

      var mediaList = _toConsumableArray(_toConsumableArray(Array(12).keys()).map(function (n) {
        return new _models_image_model__WEBPACK_IMPORTED_MODULE_0__["Image"](imageAddressTemplate(n + 1), mediaWidth, mediaHeight);
      }));
      /***/

    },

    /***/
    "o/dC":
    /*!*******************************************!*\
      !*** ./src/app/models/menu-item.model.ts ***!
      \*******************************************/

    /*! exports provided: MenuItem */

    /***/
    function oDC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuItem", function () {
        return MenuItem;
      });

      var MenuItem = function MenuItem(titleI18nKey, pathname) {
        _classCallCheck(this, MenuItem);

        this.titleI18nKey = titleI18nKey;
        this.pathname = pathname;
      };
      /***/

    },

    /***/
    "pcdn":
    /*!***********************************************************!*\
      !*** ./src/app/models/consts/local-storage-keys.model.ts ***!
      \***********************************************************/

    /*! exports provided: LocalStorageKeys */

    /***/
    function pcdn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalStorageKeys", function () {
        return LocalStorageKeys;
      });

      var LocalStorageKeys = function LocalStorageKeys() {
        _classCallCheck(this, LocalStorageKeys);
      };

      LocalStorageKeys.I18N = 'i18n';
      /***/
    },

    /***/
    "qIoL":
    /*!*****************************************************!*\
      !*** ./src/app/components/group/group.component.ts ***!
      \*****************************************************/

    /*! exports provided: GroupComponent */

    /***/
    function qIoL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupComponent", function () {
        return GroupComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function GroupComponent_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.trail);
        }
      }

      function GroupComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      var GroupComponent = /*#__PURE__*/function () {
        function GroupComponent() {
          _classCallCheck(this, GroupComponent);
        }

        _createClass(GroupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GroupComponent;
      }();

      GroupComponent.ɵfac = function GroupComponent_Factory(t) {
        return new (t || GroupComponent)();
      };

      GroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GroupComponent,
        selectors: [["app-group"]],
        contentQueries: function GroupComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templateRef = _t.first);
          }
        },
        inputs: {
          title: "title",
          trail: "trail"
        },
        decls: 7,
        vars: 3,
        consts: [[1, "group"], ["class", "group-trail", 4, "ngIf"], [1, "group-title"], [1, "group-content"], [4, "ngTemplateOutlet"], [1, "group-trail"]],
        template: function GroupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GroupComponent_span_2_Template, 2, 1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GroupComponent_ng_container_6_Template, 1, 0, "ng-container", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.trail);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.templateRef);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]],
        styles: [".group[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  white-space: pre-line;\n}\n.group-trail[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: 12px;\n}\n.group-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin: 15px;\n}\n.group-content[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--app-text);\n  padding: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncm91cC9ncm91cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtBQUNGO0FBQ0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUVFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FBQUo7QUFHRTtFQUNFLHFDQUFBO0VBQ0EsYUFBQTtBQURKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ncm91cC9ncm91cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncm91cCB7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxuICBcclxuICAmLXRyYWlsIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICB9XHJcblxyXG4gICYtdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgfVxyXG5cclxuICAmLWNvbnRlbnQge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWFwcC10ZXh0KTtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgfVxyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-group',
            templateUrl: './group.component.html',
            styleUrls: ['./group.component.scss']
          }]
        }], function () {
          return [];
        }, {
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          trail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          templateRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "qndL":
    /*!*******************************************!*\
      !*** ./src/app/pages/about-me/configs.ts ***!
      \*******************************************/

    /*! exports provided: skills, workExperiences, educations */

    /***/
    function qndL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "skills", function () {
        return skills;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "workExperiences", function () {
        return workExperiences;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "educations", function () {
        return educations;
      });

      var baseImgPath = 'assets/images/about-me/';
      var skills = [{
        group: 'languages',
        texts: ['C#', 'Dart', 'Python', 'JavaScript', 'TypeScript', 'Ruby']
      }, {
        group: 'databases',
        texts: ['T-SQL', 'PostreSQL', 'Azure Cosmos DB']
      }, {
        group: 'frameworks',
        texts: ['ASP.NET MVC', 'ASP.NET Core', 'Ruby on Rails', 'Flutter', 'Unity', 'Angular 2+', 'Sidekiq', 'Xamarin']
      }, {
        group: 'libraries',
        texts: ['Jquery', 'ARCore', 'Bootstrap']
      }];
      var workExperienceI18nKeys = {
        title: 'position',
        subtitle1: 'company',
        subtitle2: 'location',
        description: 'description',
        useI18n: true
      };
      var workExperiences = [Object.assign({
        key: 'data-art',
        logo: baseImgPath + 'work-experience/data-art.png',
        startDate: new Date('2021-02'),
        endDate: null
      }, workExperienceI18nKeys), Object.assign({
        key: 'redwerk',
        logo: baseImgPath + 'work-experience/redwerk.jpg',
        startDate: new Date('2020-02'),
        endDate: new Date('2021-02')
      }, workExperienceI18nKeys), Object.assign({
        key: 'pnn-soft',
        logo: baseImgPath + 'work-experience/pnn-soft.png',
        startDate: new Date('2019-03'),
        endDate: new Date('2020-01')
      }, workExperienceI18nKeys), Object.assign({
        key: 'freelance',
        logo: baseImgPath + 'work-experience/freelance.png',
        startDate: new Date('2018-10'),
        endDate: new Date('2019-01')
      }, workExperienceI18nKeys)];
      var educationI18nKeys = {
        title: 'university',
        subtitle1: 'specialization',
        subtitle2: 'degree',
        description: 'description',
        useI18n: true
      };
      var educations = [Object.assign({
        key: 'kpi',
        logo: baseImgPath + 'education/kpi.png',
        startDate: new Date('2016-09-01'),
        endDate: new Date('2021-01-01')
      }, educationI18nKeys)];
      /***/
    },

    /***/
    "r2ZH":
    /*!****************************************!*\
      !*** ./src/app/models/select.model.ts ***!
      \****************************************/

    /*! exports provided: SelectOption */

    /***/
    function r2ZH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectOption", function () {
        return SelectOption;
      });

      var SelectOption = function SelectOption(iconPath, value, label) {
        _classCallCheck(this, SelectOption);

        this.iconPath = iconPath;
        this.value = value;
        this.label = label;
      };
      /***/

    },

    /***/
    "vesX":
    /*!***********************************************************!*\
      !*** ./src/app/components/das-demo/das-demo.component.ts ***!
      \***********************************************************/

    /*! exports provided: DasDemoComponent */

    /***/
    function vesX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DasDemoComponent", function () {
        return DasDemoComponent;
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


      var _services_icon_style_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @services/icon-style.service */
      "QQ8W");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["modalContent"];

      function DasDemoComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Drag And Score");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DasDemoComponent_ng_template_0_Template_button_click_4_listener() {
            var modal_r2 = ctx.$implicit;
            return modal_r2.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DasDemoComponent_ng_template_0_Template_div_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.unityInstance.SetFullscreen(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r1.fullscreenIconStyle);
        }
      }

      var DasDemoComponent = /*#__PURE__*/function () {
        function DasDemoComponent(modalService, iconStyleService) {
          _classCallCheck(this, DasDemoComponent);

          this.modalService = modalService;
          this.iconStyleService = iconStyleService;
        }

        _createClass(DasDemoComponent, [{
          key: "fullscreenIconStyle",
          get: function get() {
            return this.iconStyleService.getStyleWithMask('assets/images/drag-and-score/fullscreen.svg');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "open",
          value: function open() {
            var _this2 = this;

            var options = {
              ariaLabelledBy: 'modal-drag-and-score',
              keyboard: false
            };
            this.modal = this.modalService.open(this.modalContent, options);
            this.modal.shown.subscribe(function () {
              return _this2.startUnity();
            });
            this.modal.result.then(function (_) {}, function (_) {
              return _this2.quitUnity();
            });
          }
        }, {
          key: "startUnity",
          value: function startUnity() {
            this.unityInstance = UnityLoader.instantiate('unityContainer', 'assets/unity/drag-and-score/Desktop.json');
          }
        }, {
          key: "quitUnity",
          value: function quitUnity() {
            this.unityInstance.Quit();
            this.unityInstance = null;
          }
        }]);

        return DasDemoComponent;
      }();

      DasDemoComponent.ɵfac = function DasDemoComponent_Factory(t) {
        return new (t || DasDemoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_icon_style_service__WEBPACK_IMPORTED_MODULE_2__["IconStyleService"]));
      };

      DasDemoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DasDemoComponent,
        selectors: [["app-das-demo"]],
        viewQuery: function DasDemoComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modalContent = _t.first);
          }
        },
        decls: 2,
        vars: 0,
        consts: [["modalContent", ""], [1, "das-demo"], [1, "modal-header"], [1, "title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["ngbAutofocus", "", 1, "unity-fullscreen", 3, "ngStyle", "click"], [1, "modal-body"], [1, "webgl-content"], ["id", "unityContainer", 1, "unity-container"]],
        template: function DasDemoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DasDemoComponent_ng_template_0_Template, 11, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]],
        styles: [".das-demo[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.das-demo[_ngcontent-%COMP%]   .unity-fullscreen[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  background-color: var(--app-text);\n  width: 22px;\n  height: 100%;\n  float: right;\n}\n.das-demo[_ngcontent-%COMP%]   .unity-fullscreen[_ngcontent-%COMP%]:hover {\n  filter: brightness(80%);\n}\n.das-demo[_ngcontent-%COMP%]   .unity-fullscreen[_ngcontent-%COMP%]:active {\n  filter: brightness(75%);\n}\n.das-demo[_ngcontent-%COMP%]   .webgl-content[_ngcontent-%COMP%] {\n  position: relative;\n  transform: none;\n  left: 0;\n  right: 0;\n}\n.das-demo[_ngcontent-%COMP%]   .webgl-content[_ngcontent-%COMP%]   .unity-container[_ngcontent-%COMP%] {\n  width: 960px;\n  height: 540px;\n}\n.das-demo[_ngcontent-%COMP%]   .webgl-content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXMtZGVtby9kYXMtZGVtby5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc3R5bGVzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtBQUZKO0FBS0U7RUNFQSxlQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VEQUUsaUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFISjtBQ0VFO0VBUUksdUJBQUE7QURQTjtBQ1dFO0VBUUksdUJBQUE7QURoQk47QUFBRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBRUo7QUFBSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBRU47QUFDSTtFQUNFLFNBQUE7RUFDQSxZQUFBO0FBQ04iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhcy1kZW1vL2Rhcy1kZW1vLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnbWl4aW5zJztcclxuXHJcbi5kYXMtZGVtbyB7XHJcbiAgLmNsb3NlIHtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnVuaXR5LWZ1bGxzY3JlZW4ge1xyXG4gICAgQGluY2x1ZGUgY2xpY2thYmxlKG51bGwpO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFwcC10ZXh0KTtcclxuICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG5cclxuICAud2ViZ2wtY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxyXG4gICAgdHJhbnNmb3JtOiBub25lOyBcclxuICAgIGxlZnQ6IDA7IFxyXG4gICAgcmlnaHQ6IDA7XHJcbiAgXHJcbiAgICAudW5pdHktY29udGFpbmVyIHtcclxuICAgICAgd2lkdGg6IDk2MHB4O1xyXG4gICAgICBoZWlnaHQ6IDU0MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXIge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiQG1peGluIGhvc3Qge1xyXG4gIDpob3N0IHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gY2xpY2thYmxlKCRhY3RpdmVDbGFzcykge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICAkYnJpZ2h0bmVzczogODAlO1xyXG4gICAgXHJcbiAgICBAaWYgJGFjdGl2ZUNsYXNzIHtcclxuICAgICAgJjpub3QoI3skYWN0aXZlQ2xhc3N9KSB7XHJcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKCRicmlnaHRuZXNzKTtcclxuICAgICAgfVxyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygkYnJpZ2h0bmVzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICAkYnJpZ2h0bmVzczogNzUlO1xyXG4gICAgXHJcbiAgICBAaWYgJGFjdGl2ZUNsYXNzIHtcclxuICAgICAgJjpub3QoI3skYWN0aXZlQ2xhc3N9KSB7XHJcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKCRicmlnaHRuZXNzKTtcclxuICAgICAgfVxyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygkYnJpZ2h0bmVzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DasDemoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-das-demo',
            templateUrl: './das-demo.component.html',
            styleUrls: ['./das-demo.component.scss']
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
          }, {
            type: _services_icon_style_service__WEBPACK_IMPORTED_MODULE_2__["IconStyleService"]
          }];
        }, {
          modalContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['modalContent']
          }]
        });
      })();
      /***/

    },

    /***/
    "whxp":
    /*!***************************************************!*\
      !*** ./src/app/components/chip/chip.component.ts ***!
      \***************************************************/

    /*! exports provided: ChipComponent */

    /***/
    function whxp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChipComponent", function () {
        return ChipComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ChipComponent = /*#__PURE__*/function () {
        function ChipComponent() {
          _classCallCheck(this, ChipComponent);
        }

        _createClass(ChipComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ChipComponent;
      }();

      ChipComponent.ɵfac = function ChipComponent_Factory(t) {
        return new (t || ChipComponent)();
      };

      ChipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ChipComponent,
        selectors: [["app-chip"]],
        inputs: {
          text: "text"
        },
        decls: 3,
        vars: 1,
        consts: [[1, "chip"]],
        template: function ChipComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
          }
        },
        styles: [".chip[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  line-height: 32px;\n  padding: 0 15px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-right: 7px;\n  margin-bottom: 5px;\n  background-color: var(--app-chip);\n}\n.chip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--app-text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGlwL2NoaXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQUNGO0FBQ0U7RUFDRSxzQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGlwL2NoaXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hpcCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBsaW5lLWhlaWdodDogMzJweDtcclxuICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFwcC1jaGlwKTtcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBjb2xvcjogdmFyKC0tYXBwLXRleHQpO1xyXG4gIH1cclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChipComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-chip',
            templateUrl: './chip.component.html',
            styleUrls: ['./chip.component.scss']
          }]
        }], function () {
          return [];
        }, {
          text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "yYsB":
    /*!***************************************************!*\
      !*** ./src/app/services/work-duration.service.ts ***!
      \***************************************************/

    /*! exports provided: DateDurationService */

    /***/
    function yYsB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateDurationService", function () {
        return DateDurationService;
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


      var _i18n_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./i18n.service */
      "z2Pl");

      var DateDurationService = /*#__PURE__*/function () {
        function DateDurationService(i18nService) {
          _classCallCheck(this, DateDurationService);

          this.i18nService = i18nService;
        }

        _createClass(DateDurationService, [{
          key: "displayDate",
          value: function displayDate(startDate, endDate) {
            var showDuration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            var format = 'MM/yyyy';
            var locale = 'en';
            var start = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(startDate, format, locale);
            var end = endDate ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(endDate, format, locale) : 'present';
            var months = this.monthDuration(startDate, endDate);
            var duration = showDuration ? " (".concat(this.displayDuration(months), ")") : '';
            return "".concat(start, " - ").concat(end).concat(duration);
          }
        }, {
          key: "displayDuration",
          value: function displayDuration(months) {
            function getValueForDisplay(duration, label) {
              return duration > 0 ? duration + ' ' + label : '';
            }

            var years = 0;

            if (months > 12) {
              years = Math.floor(months / 12);
              months %= 12;
            }

            var yearDisplay = getValueForDisplay(years, this.i18nService.getTranslation('year'));
            var monthDisplay = getValueForDisplay(months, this.i18nService.getTranslation('month'));
            return (yearDisplay ? yearDisplay + ' ' : '') + monthDisplay;
          }
        }, {
          key: "monthDuration",
          value: function monthDuration(startDate, endDate) {
            startDate = startDate !== null && startDate !== void 0 ? startDate : new Date();
            endDate = endDate !== null && endDate !== void 0 ? endDate : new Date();
            var monthDiff = endDate.getMonth() - startDate.getMonth();
            var yearDiff = endDate.getFullYear() - startDate.getFullYear();
            return monthDiff + 12 * yearDiff + 1;
          }
        }]);

        return DateDurationService;
      }();

      DateDurationService.ɵfac = function DateDurationService_Factory(t) {
        return new (t || DateDurationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_i18n_service__WEBPACK_IMPORTED_MODULE_2__["I18nService"]));
      };

      DateDurationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DateDurationService,
        factory: DateDurationService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateDurationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _i18n_service__WEBPACK_IMPORTED_MODULE_2__["I18nService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "yoGk":
    /*!*******************************************************!*\
      !*** ./src/app/components/select/select.component.ts ***!
      \*******************************************************/

    /*! exports provided: SelectComponent */

    /***/
    function yoGk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectComponent", function () {
        return SelectComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_icon_style_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @services/icon-style.service */
      "QQ8W");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @pipes/i18n.pipe */
      "gFfK");

      function SelectComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectComponent_div_1_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.selectClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "i18n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.selectedOption.iconPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 4, ctx_r0.selectedOption.label, ctx_r0.i18nSourcePath));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.arrowIconStyle)("ngClass", ctx_r0.arrowIconClasses);
        }
      }

      function SelectComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectComponent_div_3_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var option_r4 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.optionClick(option_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "i18n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r4 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.optionWrapperClasses(option_r4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", option_r4.iconPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 3, option_r4.label, ctx_r1.i18nSourcePath), " ");
        }
      }

      var SelectComponent = /*#__PURE__*/function () {
        function SelectComponent(iconStyleService, eref) {
          _classCallCheck(this, SelectComponent);

          this.iconStyleService = iconStyleService;
          this.eref = eref;
          this.optionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.optionsShown = false;
        }

        _createClass(SelectComponent, [{
          key: "arrowIconClasses",
          get: function get() {
            return this.optionsShown ? 'arrow-down' : 'arrow-up';
          }
        }, {
          key: "optionsClasses",
          get: function get() {
            return this.optionsShown ? 'active' : 'non-active';
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initArrowIconStyle();
          }
        }, {
          key: "initArrowIconStyle",
          value: function initArrowIconStyle() {
            this.arrowIconStyle = this.iconStyleService.getStyleWithMask('assets/images/arrow.svg');
          }
        }, {
          key: "onDocumentClick",
          value: function onDocumentClick(event) {
            if (this.eref.nativeElement.contains(event.target)) {
              return;
            }

            this.hideOptions();
          }
        }, {
          key: "optionWrapperClasses",
          value: function optionWrapperClasses(option) {
            return this.selectedOption.value === option.value ? 'disabled' : '';
          }
        }, {
          key: "selectClick",
          value: function selectClick() {
            this.toggleOptions();
          }
        }, {
          key: "optionClick",
          value: function optionClick(option) {
            this.selectedOption = option;
            this.optionSelected.emit(option);
            this.hideOptions();
          }
        }, {
          key: "showOptions",
          value: function showOptions() {
            this.optionsShown = true;
          }
        }, {
          key: "hideOptions",
          value: function hideOptions() {
            this.optionsShown = false;
          }
        }, {
          key: "toggleOptions",
          value: function toggleOptions() {
            this.optionsShown = !this.optionsShown;
          }
        }]);

        return SelectComponent;
      }();

      SelectComponent.ɵfac = function SelectComponent_Factory(t) {
        return new (t || SelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_icon_style_service__WEBPACK_IMPORTED_MODULE_1__["IconStyleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      SelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SelectComponent,
        selectors: [["app-select"]],
        hostBindings: function SelectComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectComponent_click_HostBindingHandler($event) {
              return ctx.onDocumentClick($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
          }
        },
        inputs: {
          selectedOption: "selectedOption",
          options: "options",
          i18nSourcePath: "i18nSourcePath"
        },
        outputs: {
          optionSelected: "optionSelected"
        },
        decls: 4,
        vars: 3,
        consts: [[1, "select"], ["class", "selected-option", 3, "click", 4, "ngIf"], [1, "options", 3, "ngClass"], ["class", "option-wrapper", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "selected-option", 3, "click"], [3, "src"], [1, "arrow", 3, "ngStyle", "ngClass"], [1, "option-wrapper", 3, "ngClass", "click"], [1, "option"]],
        template: function SelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectComponent_div_1_Template, 6, 7, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SelectComponent_div_3_Template, 5, 6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedOption);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.optionsClasses);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]],
        pipes: [_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_3__["I18nPipe"]],
        styles: [".select[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 220px;\n}\n.select[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  display: block;\n}\n.select[_ngcontent-%COMP%]   .non-active[_ngcontent-%COMP%] {\n  display: none;\n}\n.select[_ngcontent-%COMP%]   .selected-option[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  background-color: var(--app-primary);\n  color: var(--app-light-text);\n  border-bottom: 1px solid var(--app-light-text);\n  padding: 8px 15px;\n  margin: 0 10px;\n}\n.select[_ngcontent-%COMP%]   .selected-option[_ngcontent-%COMP%]:hover {\n  filter: brightness(80%);\n}\n.select[_ngcontent-%COMP%]   .selected-option[_ngcontent-%COMP%]:active {\n  filter: brightness(75%);\n}\n.select[_ngcontent-%COMP%]   .selected-option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  margin-right: 10px;\n  cursor: pointer;\n  color: var(--app-light-text);\n}\n.select[_ngcontent-%COMP%]   .selected-option[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  background-color: var(--app-light-text);\n  width: 24px;\n  height: 24px;\n  float: right;\n}\n.select[_ngcontent-%COMP%]   .selected-option[_ngcontent-%COMP%]   .arrow-down[_ngcontent-%COMP%] {\n  transform: rotate(-90deg);\n}\n.select[_ngcontent-%COMP%]   .selected-option[_ngcontent-%COMP%]   .arrow-up[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  border-top: none;\n  margin: 0 10px;\n  z-index: 1;\n}\n.select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option-wrapper[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: var(--app-light-text);\n}\n.select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option-wrapper[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  color: var(--app-light-text);\n  padding: 12px 15px;\n  background-color: var(--app-menu-item);\n}\n.select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option-wrapper[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]:hover {\n  filter: brightness(80%);\n}\n.select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option-wrapper[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]:active {\n  filter: brightness(75%);\n}\n.select[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px dashed var(--app-light-text);\n}\n.select[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 40px;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQURGO0FBR0U7RUFDRSxjQUFBO0FBREo7QUFJRTtFQUNFLGFBQUE7QUFGSjtBQUtFO0VDTEEsZUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFRE9FLG9DQUFBO0VBQ0EsNEJBQUE7RUFDQSw4Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUhKO0FDTkU7RUFRSSx1QkFBQTtBRENOO0FDR0U7RUFRSSx1QkFBQTtBRFJOO0FBREk7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FBR047QUFBSTtFQUNFLHVDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBRU47QUFBTTtFQUNFLHlCQUFBO0FBRVI7QUFDTTtFQUNFLHdCQUFBO0FBQ1I7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBRko7QUFJSTtFQUNFLGVBQUE7RUFDQSw0QkFBQTtBQUZOO0FBSU07RUNqREosZUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFRG1ETSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7QUFGUjtBQ2pERTtFQVFJLHVCQUFBO0FENENOO0FDeENFO0VBUUksdUJBQUE7QURtQ047QUFBSTtFQUNFLCtDQUFBO0FBRU47QUFFRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ21peGlucyc7XHJcblxyXG4uc2VsZWN0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWluLXdpZHRoOiAyMjBweDtcclxuXHJcbiAgLmFjdGl2ZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLm5vbi1hY3RpdmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnNlbGVjdGVkLW9wdGlvbiB7XHJcbiAgICBAaW5jbHVkZSBjbGlja2FibGUobnVsbCk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXBwLXByaW1hcnkpO1xyXG4gICAgY29sb3I6IHZhcigtLWFwcC1saWdodC10ZXh0KTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1hcHAtbGlnaHQtdGV4dCk7XHJcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gIFxyXG4gICAgbGFiZWwge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgY29sb3I6IHZhcigtLWFwcC1saWdodC10ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICAuYXJyb3cge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hcHAtbGlnaHQtdGV4dCk7XHJcbiAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIFxyXG4gICAgICAmLWRvd24ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYtdXAge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAub3B0aW9ucyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIFxyXG4gICAgLm9wdGlvbi13cmFwcGVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBjb2xvcjogdmFyKC0tYXBwLWxpZ2h0LXRleHQpO1xyXG4gICAgICBcclxuICAgICAgLm9wdGlvbiB7XHJcbiAgICAgICAgQGluY2x1ZGUgY2xpY2thYmxlKG51bGwpO1xyXG5cclxuICAgICAgICBjb2xvcjogdmFyKC0tYXBwLWxpZ2h0LXRleHQpO1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMTVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hcHAtbWVudS1pdGVtKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHZhcigtLWFwcC1saWdodC10ZXh0KTtcclxuICAgIH1cclxuICB9XHJcbiBcclxuICBpbWcge1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcbiIsIkBtaXhpbiBob3N0IHtcclxuICA6aG9zdCB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGNsaWNrYWJsZSgkYWN0aXZlQ2xhc3MpIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgJGJyaWdodG5lc3M6IDgwJTtcclxuICAgIFxyXG4gICAgQGlmICRhY3RpdmVDbGFzcyB7XHJcbiAgICAgICY6bm90KCN7JGFjdGl2ZUNsYXNzfSkge1xyXG4gICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygkYnJpZ2h0bmVzcyk7XHJcbiAgICAgIH1cclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoJGJyaWdodG5lc3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgJGJyaWdodG5lc3M6IDc1JTtcclxuICAgIFxyXG4gICAgQGlmICRhY3RpdmVDbGFzcyB7XHJcbiAgICAgICY6bm90KCN7JGFjdGl2ZUNsYXNzfSkge1xyXG4gICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygkYnJpZ2h0bmVzcyk7XHJcbiAgICAgIH1cclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoJGJyaWdodG5lc3MpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-select',
            templateUrl: './select.component.html',
            styleUrls: ['./select.component.scss']
          }]
        }], function () {
          return [{
            type: _services_icon_style_service__WEBPACK_IMPORTED_MODULE_1__["IconStyleService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          selectedOption: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          i18nSourcePath: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          optionSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onDocumentClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "z2Pl":
    /*!******************************************!*\
      !*** ./src/app/services/i18n.service.ts ***!
      \******************************************/

    /*! exports provided: I18nService */

    /***/
    function z2Pl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I18nService", function () {
        return I18nService;
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


      var _models_consts_local_storage_keys_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @models/consts/local-storage-keys.model */
      "pcdn");
      /* harmony import */


      var _models_consts_i18n_locales_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @models/consts/i18n-locales.model */
      "VDV4");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var I18nService = /*#__PURE__*/function () {
        function I18nService(http) {
          _classCallCheck(this, I18nService);

          this.http = http;
        }

        _createClass(I18nService, [{
          key: "changeLanguage",
          value: function changeLanguage(locale) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      return _context3.abrupt("return", this.http.get("/assets/i18n/".concat(locale, ".json")).toPromise().then(function (data) {
                        _this3.data = data;
                        localStorage.setItem(_models_consts_local_storage_keys_model__WEBPACK_IMPORTED_MODULE_2__["LocalStorageKeys"].I18N, JSON.stringify(_this3.data));
                      }));

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          } // path should look like this: about-me/data-art/description

        }, {
          key: "getTranslation",
          value: function getTranslation(path) {
            var data = this.getData();
            var keys = path.split('/');

            var _iterator = _createForOfIteratorHelper(keys),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var key = _step.value;

                if (!data) {
                  return '';
                }

                data = data[key];
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return data !== null && data !== void 0 ? data : '';
          }
        }, {
          key: "getLocale",
          value: function getLocale() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var data;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      data = this.getData();

                      if (!data) {
                        _context4.next = 3;
                        break;
                      }

                      return _context4.abrupt("return", this.data.locale);

                    case 3:
                      _context4.next = 5;
                      return this.setDefaultLocale();

                    case 5:
                      return _context4.abrupt("return", _context4.sent);

                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "setDefaultLocale",
          value: function setDefaultLocale() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var defaultLocale;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      defaultLocale = _models_consts_i18n_locales_model__WEBPACK_IMPORTED_MODULE_3__["I18nLocales"].EN;
                      _context5.next = 3;
                      return this.changeLanguage(defaultLocale);

                    case 3:
                      return _context5.abrupt("return", defaultLocale);

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "getData",
          value: function getData() {
            if (this.data) {
              return this.data;
            }

            var data = JSON.parse(localStorage.getItem(_models_consts_local_storage_keys_model__WEBPACK_IMPORTED_MODULE_2__["LocalStorageKeys"].I18N));

            if (data) {
              this.data = data;
            }

            return data;
          }
        }]);

        return I18nService;
      }();

      I18nService.ɵfac = function I18nService_Factory(t) {
        return new (t || I18nService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
      };

      I18nService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: I18nService,
        factory: I18nService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](I18nService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }];
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