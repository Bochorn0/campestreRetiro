(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["empleados-empleados-module"],{

/***/ "./src/app/layout/empleados/empleados-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/empleados/empleados-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: EmpleadosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpleadosRoutingModule", function() { return EmpleadosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _empleados_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empleados.component */ "./src/app/layout/empleados/empleados.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _empleados_component__WEBPACK_IMPORTED_MODULE_2__["EmpleadosComponent"]
    }
];
var EmpleadosRoutingModule = /** @class */ (function () {
    function EmpleadosRoutingModule() {
    }
    EmpleadosRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], EmpleadosRoutingModule);
    return EmpleadosRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/empleados/empleados.component.html":
/*!***********************************************************!*\
  !*** ./src/app/layout/empleados/empleados.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Empleados'\" [icon]=\"'fa-desktop'\"></app-page-header>\n    <!--Menu principal-->\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-xl-12 col-lg-12\">\n            <button (click)=\"nuevoEmpleado();\" class=\"btn btn-success\"><i class=\"fa fa-plus-circle\"></i> Nuevo Empleado</button>\n            <br><br>\n        </div>\n        <div class=\"col-xl-6 col-lg-6\">\n            <app-stat [bgClass]=\"'primary'\" [icon]=\"'fa-address-book'\" [label]=\"'Empleados Activos'\" (event)=\"mostrarEmpleados($event);\"></app-stat>\n        </div>\n        <div class=\"col-xl-6 col-lg-6\">\n            <app-stat [bgClass]=\"'warning'\" [icon]=\"'fa-wrench'\" [label]=\"'Nomina'\" (event)=\"mostrarCalcularNomina($event);\" ></app-stat>\n        </div>\n    </div>\n    <hr />\n    <div class=\"row\" *ngIf=\"this.vistaCentro\">\n        <div class=\"col-xl-12 col-lg-12 col-xs-12\">\n            <!--Empleados Activos-->\n            <div class=\"row\" *ngIf=\"this.empladosActivos\" [@routerTransition]>\n                <div class=\"col-xl-12 col-lg-12 col-xs-12\" *ngIf=\"this.empladosActivos\">\n                    <div class=\"card mb-3\">\n                        <div class=\"card-header bg-primary\">\n                            Empleados Activos\n                        </div>\n                        <div class=\"card-body\">\n                            <app-datatables-general *ngIf=\"this.empladosActivos\" [datosDatatable]=\"this.empladosActivos\"></app-datatables-general>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!--Calcular Nominas-->\n            <div class=\"row\" *ngIf=\"this.mostrarNomina\" [@routerTransition]>\n                <div class=\"col-xl-12 col-lg-12 col-xs-12\" >\n                    <div class=\"card mb-3\">\n                        <div class=\"card-header bg-warning\">\n                            Calcular Nomina\n                        </div>\n                        <div class=\"card-body\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"label-form\"> Empleado </label>\n                                        <input autofocus id=\"typeahead-format\" placeholder=\"Nombre del empleado:\" type=\"text\" class=\"form-control\" [(ngModel)]=\"catalogoEmpleados.Nombre\" [ngbTypeahead]=\"filtrarEmpleado\" (selectItem)=\"seleccionarEmpleado($event)\" [resultFormatter]=\"formatter\" />\n                                        <input type=\"hidden\" value=\"0\" *ngIf=\"datosEmpleado\" [(ngModel)]=\"datosEmpleado.IdEmpleado\" />\n                                    </div>\n                                </div>\n                                <div class=\"col-lg-2\">\n                                    <div class=\"form-group\">\n                                        <label class=\"label-form\"> Sueldo  </label>\n                                        <input type=\"number\"  [(ngModel)]=\"sueldoEmpleado\" class=\"form-control\"/>\n                                    </div>\n                                </div>\n                                <div class=\"col-lg-2\">\n                                    <div class=\"form-group\">\n                                        <label class=\"label-form\"> Horas  </label>\n                                        <input type=\"number\"  [(ngModel)]=\"horasLaboradas\" class=\"form-control\"/>\n                                    </div>\n                                </div>\n                                <div class=\"col-lg-2\">\n                                    <div class=\"form-group\">\n                                        <label class=\"label-form\"> Descuentos  </label>\n                                        <input type=\"number\"  [(ngModel)]=\"descuentos\" class=\"form-control\"/>\n                                    </div>\n                                </div>\n                                <div class=\"col-lg-2\">\n                                    <div class=\"form-group\">\n                                        <label class=\"label-form\"> Bonos  </label>\n                                        <input type=\"number\"  [(ngModel)]=\"bonos\" class=\"form-control\"/>\n                                    </div>\n                                </div>\n                                <hr>\n                                <div class=\"col-lg-12\" *ngIf=\"datosEmpleado\">\n                                    <h4 class=\"text-danger text-center\">Ventas Acumuladas</h4>\n                                    <table class=\"table table-hover table-stripped\">\n                                        <tr>\n                                            <th>Folio</th>\n                                            <th>Tipo</th>\n                                            <th>Terreno</th>\n                                            <th>Fecha venta</th>\n                                            <th>Monto</th>\n                                            <th>Comision</th>\n                                        </tr>\n                                        <tr *ngFor=\"let ven of datosEmpleado.Ventas\">\n                                            <td>{{ven.Folio_venta}}-{{ven.IdVenta}}</td>\n                                            <td>{{ven.Tipo_venta}}</td>\n                                            <td>Parcela:{{ven.DatosTerreno.parcela}} - Lote: {{ven.DatosTerreno.lote}} - Etapa: {{ven.DatosTerreno.etapa}}</td>\n                                            <td>{{ven.Fecha_venta.split('T')[0]}}</td>\n                                            <td>{{ven.Importe|number}}</td>\n                                            <td><input style=\"width: 150px;\" class=\"form-control\" type=\"number\" placeholder=\"Comision: %\" [(ngModel)]=\"ven.Comision\" /></td>\n                                        </tr>\n                                    </table>\n                                </div>\n                                <div class=\"col-lg-12 pull-right\"><button class=\"btn btn-info pull-right\" (click)=\"calcularNominaEmpleado();\">Calcular</button></div>\n                                <div class=\"col-lg-12\" *ngIf=\"nominaCalculada\">\n                                    <div class=\"card mb-3\">\n                                        <div class=\"card-header bg-info\">\n                                            Nomina de {{datosEmpleado.Nombre}}\n                                        </div>\n                                        <div class=\"card-body\">\n                                            <table class=\"table table-stripped table-hover\">\n                                                <tr><th>Horas Laboradas</th><th>Comisiones</th><th>Sueldo</th><th>Bonos</th><th>Descuentos</th><th>Total</th></tr>\n                                                <tr><td>{{datosEmpleado.Horas}}</td><td>{{datosEmpleado.Comisiones}}</td><td>{{datosEmpleado.Sueldo}}</td><td>{{datosEmpleado.Bonos}}</td><td>-{{datosEmpleado.Descuentos_totales}}</td><td>$ {{totalNomina}}</td></tr>\n                                            </table>\n                                            <button class=\"btn btn-success pull-right\" (click)=\"guardarNomina();\">Guardar Nomina</button>\n                                        </div>\n                                    </div> \n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            \n            <!--Nuevo Empleado-->\n            <div class=\"row\" *ngIf=\"this.altaEmpleado\" [@routerTransition]>\n                <div class=\"col-xs-12 col-xl-12 col-lg-12\">\n                    <div class=\"card mb-3\">\n                        <div class=\"card-header\">\n                            Nuevo Empleado\n                        </div>\n                        <div class=\"card-body\">\n                            <div class=\"row\">\n                                <div class=\"col-xs-4 col-lg-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"label-form\"> Nombre</label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Nombre empleado: \" [(ngModel)]=\"nombre\" />\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-4 col-lg-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"label-form\"> Correo </label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Correo:\"  [(ngModel)]=\"correo\"/>\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-4 col-lg-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"label-form\"> Puesto </label>\n                                        <select class=\"form-control\" [(ngModel)]=\"puesto\" >\n                                            <option value=\"0\">Selecciona el puesto</option>\n                                            <option *ngFor=\"let pue of catalogoPuestos\" value=\"pue.Nombre_perfil\">{{pue.Nombre_perfil}}</option>\n                                        </select>\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-4 col-lg-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"label-form\"> Sueldo </label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"10000\" [(ngModel)]=\"sueldo\" />\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-4 col-lg-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"label-form\"> Fecha nacimiento </label>\n                                        <input type=\"date\" class=\"form-control\" [(ngModel)]=\"fNacimiento\" />\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-4 col-lg-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"label-form\"> &nbsp;</label><br>\n                                        <button (click)=\"guardarEmpleadoNuevo();\"  class=\"btn btn-primary pull-right\">Guardar</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/empleados/empleados.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/layout/empleados/empleados.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-info {\n  color: #fff;\n  background-color: #359B83 !important;\n  border-color: #46b8da; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #10798D !important;\n  border-color: #46b8da; }\n\n.btn-warning {\n  color: #fff;\n  background-color: #2A8901 !important;\n  border-color: #46b8da; }\n\n.btn-danger {\n  color: #fff;\n  background-color: #955006 !important;\n  border-color: #46b8da; }\n\n.btn-secondary {\n  color: #fff;\n  background-color: #232E5C !important;\n  border-color: #46b8da; }\n\n.btn-info:focus, .btn-info:hover, .btn-info.focus {\n  color: #fff;\n  background-color: #396B57 !important;\n  border-color: #174935; }\n\n.btn-primary:focus, .btn-primary:hover, .btn-primary.focus {\n  color: #fff;\n  background-color: #10798D !important;\n  border-color: #46b8da; }\n\n.btn-warning:focus, .btn-warning:hover, .btn-warning.focus {\n  color: #fff;\n  background-color: #2D6E00 !important;\n  border-color: #0a2a1c; }\n\n.btn-danger:focus, .btn-danger:hover, .btn-danger.focus {\n  color: #fff;\n  background-color: #7F4700 !important;\n  border-color: #623900; }\n\n.btn-secondary:focus, .btn-secondary:hover, .btn-secondary.focus {\n  color: #fff;\n  background-color: #2D3854 !important;\n  border-color: #0c0d35; }\n\n.bg-info {\n  color: #fff;\n  background-color: #359B83 !important;\n  border-color: #46b8da; }\n\n.bg-primary {\n  color: #fff;\n  background-color: #10798D !important;\n  border-color: #46b8da; }\n\n.bg-warning {\n  color: #fff;\n  background-color: #2A8901 !important;\n  border-color: #46b8da; }\n\n.bg-danger {\n  color: #fff;\n  background-color: #955006 !important;\n  border-color: #46b8da; }\n\n.bg-secondary {\n  color: #fff;\n  background-color: #232E5C !important;\n  border-color: #46b8da; }\n"

/***/ }),

/***/ "./src/app/layout/empleados/empleados.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/empleados/empleados.component.ts ***!
  \*********************************************************/
/*! exports provided: EmpleadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpleadosComponent", function() { return EmpleadosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared_services_catalogos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/catalogos.service */ "./src/app/shared/services/catalogos.service.ts");
/* harmony import */ var _shared_services_ventas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/ventas.service */ "./src/app/shared/services/ventas.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EmpleadosComponent = /** @class */ (function () {
    //Alta Nuevo Puesto
    function EmpleadosComponent(catalogosService, ventasService) {
        var _this = this;
        this.catalogosService = catalogosService;
        this.ventasService = ventasService;
        this.filtrarEmpleado = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (term) { return term === '' ? [] : _this.nombresEmpleados.filter(function (ob) { return ob.toUpperCase().indexOf(term.toUpperCase()) > -1; }); }));
        };
        this._catalogoEmpleados();
        this._catalogoPuestos();
        this._catalogoUsuarios();
        this._catalogoTerrenos();
        this.puesto = 0;
        this.totalNomina = this.horasLaboradas = this.comision = this.bonos = this.descuentos = 0;
    }
    EmpleadosComponent.prototype._catalogoTerrenos = function () {
        var _this = this;
        this.catalogosService.obtenerTerrenos().then(function (res) {
            console.log('res', res);
            _this.catalogoTerrenos = res['Data'];
        });
    };
    EmpleadosComponent.prototype._catalogoEmpleados = function () {
        var _this = this;
        this.catalogosService.obtenerEmpleados().then(function (res) {
            console.log('res', res);
            _this.catalogoEmpleados = res['Data'];
            _this.nombresEmpleados = res['Data'].map(function (key) {
                return key.Nombre;
            });
        });
    };
    EmpleadosComponent.prototype._catalogoUsuarios = function () {
        var _this = this;
        this.catalogosService.obtenerUsuarios().then(function (res) {
            console.log('res', res);
            _this.catalogoUsuarios = res['Data'];
        });
    };
    EmpleadosComponent.prototype._catalogoPuestos = function () {
        var _this = this;
        this.catalogosService.obtenerPuestos().then(function (res) {
            _this.catalogoPuestos = res['Data'];
        });
    };
    EmpleadosComponent.prototype.ngOnInit = function () { };
    EmpleadosComponent.prototype.mostrarEmpleados = function (event) {
        var _this = this;
        this._limpiarVariables();
        this.catalogosService.obtenerEmpleados().then(function (res) {
            _this.vistaCentro = true;
            _this.empladosActivos = { Datos: res['Data'] };
        }).catch(function (err) { _this._limpiarVariables(); });
    };
    EmpleadosComponent.prototype.nuevoEmpleado = function () {
        var _this = this;
        this._limpiarVariables();
        this._delay(100).then(function (res) {
            _this.altaEmpleado = (_this.altaEmpleado) ? false : true;
            _this.vistaCentro = true;
        });
    };
    EmpleadosComponent.prototype.guardarEmpleadoNuevo = function () {
        var _this = this;
        var Datos = { Nombre: this.nombre, Fecha_nacimiento: this.fNacimiento, Correo: this.correo,
            Sueldo: this.sueldo, Puesto: this.puesto };
        this.catalogosService.guardarNuevoEmpleado(Datos).then(function (res) {
            var tipo = res['Tipo'];
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Exito', "" + res['Operacion'], tipo);
            _this.mostrarEmpleados(true);
        }).catch(function (err) { console.log('err', err); });
    };
    EmpleadosComponent.prototype.mostrarCalcularNomina = function (evento) {
        var _this = this;
        this._limpiarVariables();
        this._delay(100).then(function (res) {
            _this.mostrarNomina = true;
            _this.vistaCentro = true;
        });
    };
    EmpleadosComponent.prototype.seleccionarEmpleado = function (selected, t) {
        var _this = this;
        this.datosEmpleado = this.catalogoEmpleados.filter(function (ob) { return ob.Nombre == selected.item.toString(); })[0];
        this.datosEmpleado.DatosUsuario = this.catalogoUsuarios.filter(function (ob) { return ob.IdEmpleado == _this.datosEmpleado.IdEmpleado; });
        this.sueldoEmpleado = this.datosEmpleado.Sueldo;
        console.log('datos empleado', this.datosEmpleado);
        if (this.datosEmpleado.DatosUsuario[0]) {
            this.ventasService.obtenerVentasPorEmpleado(this.datosEmpleado.DatosUsuario[0]).then(function (res) {
                res['Datos'].forEach(function (re) {
                    re.DatosTerreno = _this.catalogoTerrenos.find(function (ct) { return ct.IdTerreno == re.IdTerreno; });
                    console.log('re', re);
                });
                _this.datosEmpleado.Ventas = res['Datos'];
                _this.datosEmpleado.Cobros = res['Datos'];
            }).catch(function (err) { console.log('err', err); });
        }
        else {
            this.datosEmpleado.Ventas = [];
        }
        this.horasLaboradas = 40;
    };
    EmpleadosComponent.prototype.calcularNominaEmpleado = function () {
        var comisionesMonto = 0;
        if (this.datosEmpleado.Ventas[0]) {
            var comisiones = this.datosEmpleado.Ventas.map(function (key) {
                return { Importe: key.Importe, Comision: key.Comision, Monto: (key.Importe * (key.Comision / 100)) };
            });
            comisiones.forEach(function (c) {
                comisionesMonto += c.Monto;
            });
        }
        this.datosEmpleado.Sueldo = this.sueldoEmpleado;
        this.datosEmpleado.Horas = this.horasLaboradas;
        this.datosEmpleado.Comisiones = comisionesMonto;
        this.datosEmpleado.Bonos = this.bonos;
        this.datosEmpleado.Descuentos = this.descuentos;
        this.datosEmpleado.Descuentos_totales = this.descuentos;
        if (this.horasLaboradas < 40) {
            var descontado_sueldo = (((40 - this.horasLaboradas) * this.sueldoEmpleado) / 40);
            console.log('des', descontado_sueldo);
            this.datosEmpleado.Descuentos_totales += descontado_sueldo;
        }
        this.totalNomina = ((this.horasLaboradas * this.sueldoEmpleado) / 40) + comisionesMonto + this.bonos - this.descuentos;
        this.datosEmpleado.Total = this.totalNomina;
        this.nominaCalculada = true;
    };
    EmpleadosComponent.prototype.guardarNomina = function () {
        var _this = this;
        var usuario = JSON.parse(localStorage.getItem('Datos'));
        var datosNomina = { Usuario: usuario, Nomina: this.datosEmpleado };
        this.catalogosService.guardarNominaEmpleado(datosNomina).then(function (res) {
            var tipo = res['Tipo'];
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Exito', "" + res['Operacion'], tipo);
            _this._limpiarVariables();
        }).catch(function (err) { console.log('err', err); });
    };
    EmpleadosComponent.prototype._limpiarVariables = function () {
        this.vistaCentro = this.altaEmpleado = this.empladosActivos = this.fNacimiento = this.nominaCalculada = false;
        this.correo = this.nombre = '';
        this.puesto = this.sueldo = 0;
        this.datosEmpleado = this.sueldoEmpleado = this.descuentos = this.bonos = this.horasLaboradas = 0;
    };
    EmpleadosComponent.prototype._delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    EmpleadosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-empleados',
            template: __webpack_require__(/*! ./empleados.component.html */ "./src/app/layout/empleados/empleados.component.html"),
            styles: [__webpack_require__(/*! ./empleados.component.scss */ "./src/app/layout/empleados/empleados.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            providers: [_shared_services_catalogos_service__WEBPACK_IMPORTED_MODULE_2__["CatalogosService"], _shared_services_ventas_service__WEBPACK_IMPORTED_MODULE_3__["VentasService"]]
        }),
        __metadata("design:paramtypes", [_shared_services_catalogos_service__WEBPACK_IMPORTED_MODULE_2__["CatalogosService"], _shared_services_ventas_service__WEBPACK_IMPORTED_MODULE_3__["VentasService"]])
    ], EmpleadosComponent);
    return EmpleadosComponent;
}());



/***/ }),

/***/ "./src/app/layout/empleados/empleados.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/empleados/empleados.module.ts ***!
  \******************************************************/
/*! exports provided: EmpleadosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpleadosModule", function() { return EmpleadosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _empleados_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empleados-routing.module */ "./src/app/layout/empleados/empleados-routing.module.ts");
/* harmony import */ var _empleados_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empleados.component */ "./src/app/layout/empleados/empleados.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EmpleadosModule = /** @class */ (function () {
    function EmpleadosModule() {
    }
    EmpleadosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_empleados_routing_module__WEBPACK_IMPORTED_MODULE_1__["EmpleadosRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
            declarations: [_empleados_component__WEBPACK_IMPORTED_MODULE_2__["EmpleadosComponent"]]
        })
    ], EmpleadosModule);
    return EmpleadosModule;
}());



/***/ })

}]);
//# sourceMappingURL=empleados-empleados-module.js.map