"use strict";
(self["webpackChunklorenzo"] = self["webpackChunklorenzo"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _imgindiv_imgindiv_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgindiv/imgindiv.component */ 9732);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent },
    { path: 'pixlimg/:id', component: _imgindiv_imgindiv_component__WEBPACK_IMPORTED_MODULE_0__.ImgindivComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
    constructor() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 11, vars: 0, consts: [[1, "jumbotron"], [1, "lead"], [1, "lead", "mt-3"], ["href", "https://www.instagram.com/squared_dots/", "target", "_blank", 2, "color", "rgb(0, 0, 0)"], [1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SQUARE DOTS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pixel art from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Lorenzo Roncarati");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "@square_dots");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: [".jumbotron[_ngcontent-%COMP%] {\n    height: 210px;\n    font-family: 'Press Start 2P', cursive;\n    text-align: center;\n    \n    color:black;\n    padding-top: 40px;\n\n}\n\n.jumbotron[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-family: 'Press Start 2P', cursive;\n    font-size: 35px;\n    text-align: center;\n}\n\np[_ngcontent-%COMP%] {\n    font-family: 'Press Start 2P', cursive;\n    text-align: center;\n    text-decoration:none;\n    color:black;\n}\n\n#label[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]  {\n    color:white;\n    font-family: 'Press Start 2P', cursive;\n\n}\n\n@media only screen and (max-width: 600px){\n    .jumbotron[_ngcontent-%COMP%]{\n        height: 7%;\n        padding-bottom: 10px;\n    }\n    .jumbotron[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        font-size: 30px;\n        text-align: center;\n    }\n    .jumbotron[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        font-size: 15px;\n        text-align: center;\n\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxrQkFBa0I7SUFDbEIsdUNBQXVDO0lBQ3ZDLFdBQVc7SUFDWCxpQkFBaUI7O0FBRXJCOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsc0NBQXNDOztBQUUxQzs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjs7SUFFdEI7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb24ge1xuICAgIGhlaWdodDogMjEwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdQcmVzcyBTdGFydCAyUCcsIGN1cnNpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6cmdiKDE4OSwgOCwgMjEyKTsgKi9cbiAgICBjb2xvcjpibGFjaztcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcblxufVxuXG4uanVtYm90cm9uIGgxIHtcbiAgICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJywgY3Vyc2l2ZTtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5wIHtcbiAgICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJywgY3Vyc2l2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgY29sb3I6YmxhY2s7XG59XG5cbiNsYWJlbCwgaDUgIHtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJywgY3Vyc2l2ZTtcblxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcbiAgICAuanVtYm90cm9ue1xuICAgICAgICBoZWlnaHQ6IDclO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB9XG4gICAgLmp1bWJvdHJvbiBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuanVtYm90cm9uIHAge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _imgindiv_imgindiv_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgindiv/imgindiv.component */ 9732);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _butterfly_butterfly_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./butterfly/butterfly.component */ 6474);
/* harmony import */ var _pixelazite_pixelazite_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pixelazite/pixelazite.component */ 3525);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _imgindiv_imgindiv_component__WEBPACK_IMPORTED_MODULE_2__.ImgindivComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent,
        _butterfly_butterfly_component__WEBPACK_IMPORTED_MODULE_5__.ButterflyComponent,
        _pixelazite_pixelazite_component__WEBPACK_IMPORTED_MODULE_6__.PixelaziteComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] }); })();


/***/ }),

/***/ 6474:
/*!**************************************************!*\
  !*** ./src/app/butterfly/butterfly.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButterflyComponent": () => (/* binding */ ButterflyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _servicio_pixelservice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../servicio/pixelservice.service */ 3226);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function ButterflyComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const butterfle_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", butterfle_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class ButterflyComponent {
    constructor(pixelService) {
        this.pixelService = pixelService;
    }
    ngOnInit() {
        this.butterfly = this.pixelService.getButterflies();
    }
}
ButterflyComponent.ɵfac = function ButterflyComponent_Factory(t) { return new (t || ButterflyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_servicio_pixelservice_service__WEBPACK_IMPORTED_MODULE_0__.PixelserviceService)); };
ButterflyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ButterflyComponent, selectors: [["app-butterfly"]], decls: 2, vars: 1, consts: [[1, "d-flex", "justify-content-center"], ["class", "", 4, "ngFor", "ngForOf"], [1, ""], ["alt", "...", 1, "butimg", 3, "src"]], template: function ButterflyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ButterflyComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.butterfly);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: ["img[_ngcontent-%COMP%] {\n    width: 180px;\n    height: 180px;\n    margin: 3px;\n}\n\n\n@media only screen and (max-width: 600px) {\n    .butimg[_ngcontent-%COMP%] {\n        width: 100px !important;\n        height: 100px;\n        margin: 2px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRlcmZseS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0FBQ2Y7OztBQUdBO0lBQ0k7UUFDSSx1QkFBdUI7UUFDdkIsYUFBYTtRQUNiLFdBQVc7SUFDZjtBQUNKIiwiZmlsZSI6ImJ1dHRlcmZseS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgaGVpZ2h0OiAxODBweDtcbiAgICBtYXJnaW46IDNweDtcbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLmJ1dGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBtYXJnaW46IDJweDtcbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ 970:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterComponent {
    constructor() {
        this.contactar = false;
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 11, vars: 0, consts: [[1, "container", "mt-5", "text-center", "footer"], ["src", "../assets/imgs/gif1.gif", "alt", "", 1, "my-4", 2, "width", "100px", "height", "100px"], ["href", "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=lorenzoroncarati@gmail.com&subject=MISSED%20CALL%20EZTRADER&body=Hello%2C%0A%0A", "target", "_blank", 2, "text-decoration", "none"], ["type", "button", 1, "btn", "btn-light"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Open for commissions, trades or collabs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1)(4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2)(6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "CONTACT ME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br")(9, "br")(10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h5[_ngcontent-%COMP%] {\n    color:white;\n    font-family: 'Press Start 2P', cursive;\n}\n\nfooter[_ngcontent-%COMP%] {\n    bottom: 0;\n}\n\nbutton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color:black;\n}\n\n@media only screen and (max-width: 600px){\n    h5[_ngcontent-%COMP%]{\n        font-size: 90%;\n    }\n    button[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n        font-size: 80%;\n    }\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjs7QUFFSiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImg1IHtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJywgY3Vyc2l2ZTtcbn1cblxuZm9vdGVyIHtcbiAgICBib3R0b206IDA7XG59XG5cbmJ1dHRvbiBhIHtcbiAgICBjb2xvcjpibGFjaztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XG4gICAgaDV7XG4gICAgICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgIH1cbiAgICBidXR0b24sIGlucHV0IHtcbiAgICAgICAgZm9udC1zaXplOiA4MCU7XG4gICAgfVxuICAgIFxufSAiXX0= */"] });


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _servicio_pixelservice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../servicio/pixelservice.service */ 3226);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ 970);
/* harmony import */ var _butterfly_butterfly_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../butterfly/butterfly.component */ 6474);
/* harmony import */ var _pixelazite_pixelazite_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pixelazite/pixelazite.component */ 3525);







function HomeComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4)(1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_div_5_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const m_r2 = restoredCtx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.verTitulo(m_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const titulo_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", titulo_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](titulo_r1.nombre);
} }
class HomeComponent {
    constructor(pixelService, _router) {
        this.pixelService = pixelService;
        this._router = _router;
    }
    ngOnInit() {
        this.titulos = this.pixelService.getTitulos();
        this.titulosFiltrados = this.pixelService.getTitulos();
    }
    verTitulo(i) {
        this._router.navigate(['/pixlimg', i]);
    }
    filtrar(e) {
        console.log(e.target.value);
        let search = e.target.value;
        this.titulos = this.titulosFiltrados.filter(({ nombre }) => {
            return nombre.toLowerCase().includes(search.toLowerCase());
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_servicio_pixelservice_service__WEBPACK_IMPORTED_MODULE_0__.PixelserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], inputs: { i: "i" }, decls: 9, vars: 1, consts: [["type", "text", "placeholder", "search pixel image...", 1, "searchImg", 3, "input"], [1, "container", "main-container", "text-center", "d-flex", "justify-content-between"], [1, "card-columns", "text-center"], ["class", "card text-center", "style", "width: 77%;", 4, "ngFor", "ngForOf"], [1, "card", "text-center", 2, "width", "77%"], ["type", "button", 1, "btn", "btn-block", "btn-light", "mt-2", 3, "click"], ["alt", "...", 1, "card-img-top", "text-center", 3, "src"], [1, "card-text", "mt-1"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function HomeComponent_Template_input_input_0_listener($event) { return ctx.filtrar($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "br")(2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1)(4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, HomeComponent_div_5_Template, 5, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "app-footer")(7, "app-butterfly")(8, "app-pixelazite");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.titulos);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _butterfly_butterfly_component__WEBPACK_IMPORTED_MODULE_2__.ButterflyComponent, _pixelazite_pixelazite_component__WEBPACK_IMPORTED_MODULE_3__.PixelaziteComponent], styles: [".searchImg[_ngcontent-%COMP%]{\n    width: 350px;\n}\n@media only screen and (max-width: 600px){\n    .card[_ngcontent-%COMP%]{\n        margin: auto;\n        margin-bottom: 40px;\n    }\n\n    .searchImg[_ngcontent-%COMP%]{\n        width: 100%;\n        font-size: 13px;\n        text-align: center; \n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxlQUFlO1FBQ2Ysa0JBQWtCO0lBQ3RCOztBQUVKIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2hJbWd7XG4gICAgd2lkdGg6IDM1MHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XG4gICAgLmNhcmR7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICB9XG5cbiAgICAuc2VhcmNoSW1ne1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgIH1cblxufSJdfQ== */"] });


/***/ }),

/***/ 9732:
/*!************************************************!*\
  !*** ./src/app/imgindiv/imgindiv.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImgindivComponent": () => (/* binding */ ImgindivComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _servicio_pixelservice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../servicio/pixelservice.service */ 3226);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class ImgindivComponent {
    constructor(pixelservice, 
    // tslint:disable-next-line: variable-name
    _activatedRoute) {
        this.pixelservice = pixelservice;
        this._activatedRoute = _activatedRoute;
        this.titulo = {};
        // tslint:disable-next-line: deprecation
        this._activatedRoute.params.subscribe(params => {
            console.log(params.id);
            this.titulo = this.pixelservice.getTitulo(params.id);
            console.log(this.titulo);
        });
    }
}
ImgindivComponent.ɵfac = function ImgindivComponent_Factory(t) { return new (t || ImgindivComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_servicio_pixelservice_service__WEBPACK_IMPORTED_MODULE_0__.PixelserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute)); };
ImgindivComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ImgindivComponent, selectors: [["app-imgindiv"]], decls: 13, vars: 2, consts: [[1, "container", "text-center"], [1, "img-fluid", "mb-5", 3, "src"], [1, "container"], [2, "color", "blanchedalmond"], ["type", "button", "routerLink", "home", 1, "btn", "btn-light", "mt-5"]], template: function ImgindivComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "GO BACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br")(9, "br")(10, "br")(11, "br")(12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.titulo.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.titulo.nombre);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink], styles: ["img[_ngcontent-%COMP%] {\n    height: 50%;\n    width: 50%;\n}\n\n @media only screen and (max-width: 600px){\n    img[_ngcontent-%COMP%] {\n        height: 100%;\n        width: 100%;\n    }\n    \n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltZ2luZGl2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtBQUNkOztDQUVDO0lBQ0c7UUFDSSxZQUFZO1FBQ1osV0FBVztJQUNmOzs7QUFHSiIsImZpbGUiOiJpbWdpbmRpdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICB3aWR0aDogNTAlO1xufVxuXG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XG4gICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgXG4gICAgXG59ICJdfQ== */"] });


/***/ }),

/***/ 3525:
/*!****************************************************!*\
  !*** ./src/app/pixelazite/pixelazite.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PixelaziteComponent": () => (/* binding */ PixelaziteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PixelaziteComponent {
    constructor() { }
    ngOnInit() {
    }
}
PixelaziteComponent.ɵfac = function PixelaziteComponent_Factory(t) { return new (t || PixelaziteComponent)(); };
PixelaziteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PixelaziteComponent, selectors: [["app-pixelazite"]], decls: 27, vars: 0, consts: [[1, "text-center", "mt-5", "d-flex", "justify-content-center", "m-1"], ["src", "/assets/imgs/pixelizeit1.jpg", "alt", "...", 1, "piximg", "text-center", 2, "width", "33%"], ["src", "/assets/imgs/pixelizeit2.jpg", "alt", "...", 1, "piximg", "text-center", 2, "width", "33%"], [1, "page-footer", "font-small", "blue", "pt-4"], [1, "container-fluid", "text-center", "text-md-left"], [1, "col"], [2, "color", "white"], [1, "text-uppercase"], [1, "col-md-3", "mb-md-0", "mb-3"], [1, "list-unstyled"], ["href", "https://www.instagram.com/lroncarati/", "target", "_blank", 2, "color", "rgb(233, 229, 229)"], ["href", "https://www.instagram.com/squared_dots/", "target", "_blank", 2, "color", "rgb(233, 229, 229)"], [1, "footer-copyright", "text-center", "py-3", 2, "color", "rgb(158, 155, 155)"], ["href", "https://github.com/josedamseaux", "target", "_blank", 2, "color", "rgb(158, 155, 155)"]], template: function PixelaziteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1)(2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br")(4, "br")(5, "br")(6, "br")(7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "footer", 3)(9, "div", 4)(10, "div", 5)(11, "div", 5)(12, "div", 6)(13, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "SQUARE DOTS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8)(16, "ul", 9)(17, "li")(18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "@lroncarati.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li")(21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "@square_dots");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u00A9 2020 Copyright ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " jdamseaux");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: ["img[_ngcontent-%COMP%] {\n    width: 240px;\n    margin: 2px;\n}\n\n.footer-copyright[_ngcontent-%COMP%] {\n    font-size: 60%;\n}\n\n@media only screen and (max-width: 600px){\n    .piximg[_ngcontent-%COMP%] {\n        width: 160px !important;\n        margin: 2px;\n        height: 150px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpeGVsYXppdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUlBO0lBQ0k7UUFDSSx1QkFBdUI7UUFDdkIsV0FBVztRQUNYLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJwaXhlbGF6aXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICAgIHdpZHRoOiAyNDBweDtcbiAgICBtYXJnaW46IDJweDtcbn1cblxuLmZvb3Rlci1jb3B5cmlnaHQge1xuICAgIGZvbnQtc2l6ZTogNjAlO1xufVxuXG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XG4gICAgLnBpeGltZyB7XG4gICAgICAgIHdpZHRoOiAxNjBweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IDJweDtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ 3226:
/*!**************************************************!*\
  !*** ./src/app/servicio/pixelservice.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PixelserviceService": () => (/* binding */ PixelserviceService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PixelserviceService {
    constructor() {
        this.titulos = [
            {
                nombre: 'Sulfur potion',
                img: "assets/imgs/1.jpg"
            },
            {
                nombre: "Lantern",
                img: "assets/imgs/2.jpg"
            },
            {
                nombre: "Store front",
                img: "assets/imgs/3.jpg"
            },
            {
                nombre: "Ferret",
                img: "assets/imgs/5.jpg"
            },
            {
                nombre: "Space",
                img: "assets/imgs/6.jpg"
            },
            {
                nombre: "Towel",
                img: "assets/imgs/7.jpg"
            },
            {
                nombre: "Prince of all cosmos",
                img: "assets/imgs/8.jpg"
            },
            {
                nombre: "My old room a long time ago.",
                img: "assets/imgs/9.jpg"
            },
            {
                nombre: "Owl",
                img: "assets/imgs/11.jpg"
            },
            {
                nombre: "Building",
                img: "assets/imgs/13.jpg"
            },
            {
                nombre: "Another building",
                img: "assets/imgs/14.jpg"
            },
            {
                nombre: "Angery hell cat",
                img: "assets/imgs/15.jpg"
            },
            {
                nombre: "Train station",
                img: "assets/imgs/16.jpg"
            },
            {
                nombre: "Illuminati",
                img: "assets/imgs/17.jpg"
            },
            {
                nombre: "A fishing place",
                img: "assets/imgs/19.jpg"
            }
        ];
        this.butterflies = [
            {
                nombre: 'PT1',
                img: "assets/imgs/BT1.jpg"
            },
            {
                nombre: "PT2",
                img: "assets/imgs/BT2.jpg"
            },
            {
                nombre: "PT3",
                img: "assets/imgs/BT3.jpg"
            },
        ];
    }
    getTitulos() {
        return this.titulos;
    }
    getTitulo(idx) {
        return this.titulos[idx];
    }
    getButterflies() {
        return this.butterflies;
    }
    getButterfly(idx) {
        return this.butterflies[idx];
    }
}
PixelserviceService.ɵfac = function PixelserviceService_Factory(t) { return new (t || PixelserviceService)(); };
PixelserviceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PixelserviceService, factory: PixelserviceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map