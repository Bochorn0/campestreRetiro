(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cobranza-cobranza-module"],{

/***/ "./src/app/layout/cobranza/cobranza-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/cobranza/cobranza-routing.module.ts ***!
  \************************************************************/
/*! exports provided: CobranzaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CobranzaRoutingModule", function() { return CobranzaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cobranza_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cobranza.component */ "./src/app/layout/cobranza/cobranza.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _cobranza_component__WEBPACK_IMPORTED_MODULE_2__["CobranzaComponent"]
    }
];
var CobranzaRoutingModule = /** @class */ (function () {
    function CobranzaRoutingModule() {
    }
    CobranzaRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CobranzaRoutingModule);
    return CobranzaRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/cobranza/cobranza.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/cobranza/cobranza.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Cobranza'\" [icon]=\"'fa-dashboard'\"></app-page-header>\n    <!--Menu principal-->\n    <div class=\"row text-center\">\n        <div class=\"col-lg-2\">\n            <div class=\"form-group\">\n                <button (click)=\"catalogoClientes();\" class=\"btn btn-secondary menu\" style=\"color: #fff;\"><i class=\"fa fa-users\"></i> Clientes</button>\n            </div>\n        </div>\n        <div class=\"col-lg-3\">\n                <div class=\"form-group\">\n                    <button (click)=\"ventaRegular();\" class=\"btn btn-warning menu\" style=\"color: #fff;\"><i class=\"fa fa-credit-card\"></i> Abonos Terreno</button>\n                </div>\n            </div>\n        <div class=\"col-lg-3\">    \n            <div class=\"form-group\">\n                <button (click)=\"nuevoMantenimiento();\" class=\"btn btn-danger menu\" ><i class=\"fa fa-home\"></i> Mantenimiento</button>\n            </div>\n        </div>\n        <div class=\"col-lg-3\">\n            <div class=\"form-group\">\n                <button (click)=\"nuevoIngresoExtra();\" class=\"btn btn-info menu\"><i class=\"fa fa-address-card\"></i> Certificados</button>\n            </div>\n        </div>\n    </div>\n    <hr />\n    <div *ngIf=\"vistaCentro\">\n        <!--Venta regular-->\n        <app-venta *ngIf=\"ingresoNuevo\" [datosVenta]=\"datosVenta\"  [@routerTransition]></app-venta>\n        <!--Catalogo Clientes-->\n        <app-catalogo-clientes *ngIf=\"clientesCatalogos\" (vista)=\"catalogoClientes($event);\" (nuevaOperacion)=\"nueva_operacion($event);\" [@routerTransition]></app-catalogo-clientes>\n        <!--Mantenimiento-->\n        <app-mantenimiento *ngIf=\"mantenimientoNuevo\" [datosMantenimiento]=\"datosMantenimiento\" [@routerTransition]></app-mantenimiento>\n        <!--Ingresos Extra-->\n        <app-ingresos-extra *ngIf=\"ingresosExtraNuevo\" [datosIngresosExtras]=\"datosIngresosExtra\"  [@routerTransition]></app-ingresos-extra>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/cobranza/cobranza.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layout/cobranza/cobranza.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-info {\n  color: #fff;\n  background-color: #359B83 !important;\n  border-color: #46b8da; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #10798D !important;\n  border-color: #46b8da; }\n\n.btn-warning {\n  color: #fff;\n  background-color: #2A8901 !important;\n  border-color: #46b8da; }\n\n.btn-danger {\n  color: #fff;\n  background-color: #955006 !important;\n  border-color: #46b8da; }\n\n.btn-secondary {\n  color: #fff;\n  background-color: #232E5C !important;\n  border-color: #46b8da; }\n\n.btn-info:focus, .btn-info:hover, .btn-info.focus {\n  color: #fff;\n  background-color: #396B57 !important;\n  border-color: #174935; }\n\n.btn-primary:focus, .btn-primary:hover, .btn-primary.focus {\n  color: #fff;\n  background-color: #10798D !important;\n  border-color: #46b8da; }\n\n.btn-warning:focus, .btn-warning:hover, .btn-warning.focus {\n  color: #fff;\n  background-color: #2D6E00 !important;\n  border-color: #0a2a1c; }\n\n.btn-danger:focus, .btn-danger:hover, .btn-danger.focus {\n  color: #fff;\n  background-color: #7F4700 !important;\n  border-color: #623900; }\n\n.btn-secondary:focus, .btn-secondary:hover, .btn-secondary.focus {\n  color: #fff;\n  background-color: #2D3854 !important;\n  border-color: #0c0d35; }\n\n.bg-info {\n  color: #fff;\n  background-color: #359B83 !important;\n  border-color: #46b8da; }\n\n.bg-primary {\n  color: #fff;\n  background-color: #10798D !important;\n  border-color: #46b8da; }\n\n.bg-warning {\n  color: #fff;\n  background-color: #2A8901 !important;\n  border-color: #46b8da; }\n\n.bg-danger {\n  color: #fff;\n  background-color: #955006 !important;\n  border-color: #46b8da; }\n\n.bg-secondary {\n  color: #fff;\n  background-color: #232E5C !important;\n  border-color: #46b8da; }\n"

/***/ }),

/***/ "./src/app/layout/cobranza/cobranza.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/cobranza/cobranza.component.ts ***!
  \*******************************************************/
/*! exports provided: CobranzaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CobranzaComponent", function() { return CobranzaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared_services_estadisticas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/estadisticas.service */ "./src/app/shared/services/estadisticas.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CobranzaComponent = /** @class */ (function () {
    function CobranzaComponent() {
        this.contratos = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ventaRegular();
        //    this.nuevoIngresoExtra();
    }
    CobranzaComponent.prototype.ngOnInit = function () { };
    CobranzaComponent.prototype.ventaRegular = function () {
        var _this = this;
        this._limpiarVistaYVariables();
        this._delay(100).then(function (res) {
            _this.ingresoNuevo = true;
            _this.vistaCentro = true;
        });
    };
    CobranzaComponent.prototype.nuevoIngresoExtra = function () {
        var _this = this;
        this._limpiarVistaYVariables();
        this._delay(100).then(function (res) {
            _this.ingresosExtraNuevo = true;
            _this.vistaCentro = true;
        });
    };
    CobranzaComponent.prototype.catalogoClientes = function () {
        var _this = this;
        this._limpiarVistaYVariables();
        this._delay(100).then(function (res) {
            _this.clientesCatalogos = true;
            _this.vistaCentro = true;
        });
    };
    CobranzaComponent.prototype.nuevoMantenimiento = function () {
        var _this = this;
        this._limpiarVistaYVariables();
        this._delay(100).then(function (res) {
            _this.mantenimientoNuevo = true;
            _this.vistaCentro = true;
        });
    };
    CobranzaComponent.prototype.nueva_operacion = function (evento) {
        var _this = this;
        this._limpiarVistaYVariables();
        this._delay(100).then(function (res) {
            _this.vistaCentro = true;
            if (evento.Operacion == 1) {
                _this.ingresoNuevo = true;
                _this.datosVenta = evento.cliente;
            }
            else if (evento.Operacion == 2) {
                _this.mantenimientoNuevo = true;
                _this.datosMantenimiento = evento.cliente;
            }
        });
    };
    CobranzaComponent.prototype._limpiarVistaYVariables = function () {
        this.vistaCentro = this.clientesCatalogos = this.ingresoNuevo = this.mantenimientoNuevo = this.datosMantenimiento = this.cotizacionNueva = this.ingresosExtraNuevo = false;
    };
    CobranzaComponent.prototype._delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CobranzaComponent.prototype, "contratos", void 0);
    CobranzaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cobranza',
            template: __webpack_require__(/*! ./cobranza.component.html */ "./src/app/layout/cobranza/cobranza.component.html"),
            styles: [__webpack_require__(/*! ./cobranza.component.scss */ "./src/app/layout/cobranza/cobranza.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            providers: [_shared_services_estadisticas_service__WEBPACK_IMPORTED_MODULE_2__["EstadisticasService"]]
        }),
        __metadata("design:paramtypes", [])
    ], CobranzaComponent);
    return CobranzaComponent;
}());



/***/ }),

/***/ "./src/app/layout/cobranza/cobranza.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/cobranza/cobranza.module.ts ***!
  \****************************************************/
/*! exports provided: CobranzaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CobranzaModule", function() { return CobranzaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cobranza_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cobranza-routing.module */ "./src/app/layout/cobranza/cobranza-routing.module.ts");
/* harmony import */ var _cobranza_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cobranza.component */ "./src/app/layout/cobranza/cobranza.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CobranzaModule = /** @class */ (function () {
    function CobranzaModule() {
    }
    CobranzaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_cobranza_routing_module__WEBPACK_IMPORTED_MODULE_1__["CobranzaRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
            declarations: [_cobranza_component__WEBPACK_IMPORTED_MODULE_2__["CobranzaComponent"]]
        })
    ], CobranzaModule);
    return CobranzaModule;
}());



/***/ })

}]);
//# sourceMappingURL=cobranza-cobranza-module.js.map