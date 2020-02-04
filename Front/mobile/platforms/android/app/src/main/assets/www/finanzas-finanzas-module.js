(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["finanzas-finanzas-module"],{

/***/ "./src/app/layout/finanzas/catalogo-cuentas/catalogo-cuentas.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/finanzas/catalogo-cuentas/catalogo-cuentas.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\">\n    <div class=\"row\">\n        <div class=\"col-lg-4\">\n            <button (click)=\"obtenerCuentasActivas();\" class=\"btn btn-primary\"><i clas=\"fa fa-address-card\"></i> Cuentas Activas</button>\n        </div>\n        <div class=\"col-lg-4\">\n            <button (click)=\"obtenerCuentasInactivas();\" class=\"btn btn-danger\"><i clas=\"fa fa-credit-card\"></i>  Cuentas Inactivas</button>\n        </div>\n        <div class=\"col-lg-4\">\n            <button (click)=\"nuevaCuenta();\" class=\"btn btn-success\"><i class=\"fa fa-plus-circle\"></i> Nueva Cuenta</button>\n        </div>\n    </div>\n    <hr />\n    <div class=\"row\" *ngIf=\"vistaCentro\">\n        <div class=\"col-xl-12 col-lg-12 col-xs-12\">\n            <div class=\"row\" *ngIf=\"datosCuentasEspeciales\">\n                <div class=\"col-xl-12 col-lg-12 col-xs-12\">\n                    <div class=\"card mb-3\">\n                        <div class=\"card-header bg-secondary\" >\n                            Cuentas Especiales\n                        </div>\n                        <div class=\"card-body\">\n                            <div class=\"row\" *ngIf=\"datosCuentasEspeciales\">\n                                <div class=\"col-lg-12\">\n                                    <app-datatables-general #datatableCuentas *ngIf=\"this.datosCuentasEspeciales\" [datosDatatable]=\"datosCuentasEspeciales\" (deactivate)=\"desactivarCuentaEspecial($event);\" (edit)=\"editarElemento($event);\" (activate)=\"activarCuentaEspecial($event);\" (delete)=\"borrarCuentaEspecial($event);\" ></app-datatables-general>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!--Formulario Cuentas -->\n            <div class=\"row\" *ngIf=\"vistaNuevaCuenta\">\n                <div class=\"col-xl-12 col-lg-12 col-xs-12\">\n                    <div class=\"card mb-3\">\n                        <div class=\"card-header bg-secondary\" >\n                            Agregar Cuenta Nueva\n                        </div>\n                        <div class=\"card-body\">\n                            <div class=\"row\" >\n                                <div class=\"col-lg-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"label-form\"> Nombre Cuenta </label>\n                                        <input type=\"text\" placeholder=\"CUENTA A NOMBRE DE: \" [(ngModel)]=\"nombreCuenta\" class=\"form-control\" required />\n                                    </div>\n                                </div>\n                                <div class=\"col-lg-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"label-form\"> Numero Cuenta </label>\n                                        <input type=\"text\" placeholder=\"Numero de cuenta: \" [(ngModel)]=\"numeroCuenta\" class=\"form-control\" required />\n                                    </div>\n                                </div>\n                                <div class=\"col-lg-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"label-form\"> Saldo </label>\n                                        <input type=\"number\" placeholder=\"Saldo de la cuenta: \" [(ngModel)]=\"saldoCuenta\" class=\"form-control\" required />\n                                    </div>\n                                </div>\n                                <div class=\"col-lg-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"label-form\"> <br></label><br>\n                                        <button class=\"btn btn-primary\" (click)=\"agregarNuevaCuenta();\">Guardar</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/finanzas/catalogo-cuentas/catalogo-cuentas.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/finanzas/catalogo-cuentas/catalogo-cuentas.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label-form {\n  font-weight: bold !important; }\n\ndiv#sugerencias {\n  width: 100%;\n  background: #fff;\n  border: 1px solid #ddd;\n  font-size: 12px;\n  max-height: 100px;\n  overflow-y: auto;\n  padding: 10px;\n  z-index: 1; }\n\n#sugerencias th {\n  font-size: 16;\n  margin-bottom: 3px; }\n\n.activeLink {\n  cursor: pointer; }\n\n.activeLink:hover {\n  opacity: .7; }\n\n#sugerencias td {\n  padding: 5px; }\n\n.panel {\n  border: 1px solid #ddd;\n  padding: 20px; }\n\n.card-header {\n  color: #fff !important; }\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n.btn-info {\n  color: #fff;\n  background-color: #359B83 !important;\n  border-color: #46b8da; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #10798D !important;\n  border-color: #46b8da; }\n\n.btn-warning {\n  color: #fff;\n  background-color: #2A8901 !important;\n  border-color: #46b8da; }\n\n.btn-danger {\n  color: #fff;\n  background-color: #955006 !important;\n  border-color: #46b8da; }\n\n.btn-secondary {\n  color: #fff;\n  background-color: #232E5C !important;\n  border-color: #46b8da; }\n\n.btn-info:focus, .btn-info:hover, .btn-info.focus {\n  color: #fff;\n  background-color: #396B57 !important;\n  border-color: #174935; }\n\n.btn-primary:focus, .btn-primary:hover, .btn-primary.focus {\n  color: #fff;\n  background-color: #10798D !important;\n  border-color: #46b8da; }\n\n.btn-warning:focus, .btn-warning:hover, .btn-warning.focus {\n  color: #fff;\n  background-color: #2D6E00 !important;\n  border-color: #0a2a1c; }\n\n.btn-danger:focus, .btn-danger:hover, .btn-danger.focus {\n  color: #fff;\n  background-color: #7F4700 !important;\n  border-color: #623900; }\n\n.btn-secondary:focus, .btn-secondary:hover, .btn-secondary.focus {\n  color: #fff;\n  background-color: #2D3854 !important;\n  border-color: #0c0d35; }\n\n.bg-info {\n  color: #fff;\n  background-color: #359B83 !important;\n  border-color: #46b8da; }\n\n.bg-primary {\n  color: #fff;\n  background-color: #10798D !important;\n  border-color: #46b8da; }\n\n.bg-warning {\n  color: #fff;\n  background-color: #2A8901 !important;\n  border-color: #46b8da; }\n\n.bg-danger {\n  color: #fff;\n  background-color: #955006 !important;\n  border-color: #46b8da; }\n\n.bg-secondary {\n  color: #fff;\n  background-color: #232E5C !important;\n  border-color: #46b8da; }\n"

/***/ }),

/***/ "./src/app/layout/finanzas/catalogo-cuentas/catalogo-cuentas.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/layout/finanzas/catalogo-cuentas/catalogo-cuentas.component.ts ***!
  \********************************************************************************/
/*! exports provided: CatalogoCuentasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogoCuentasComponent", function() { return CatalogoCuentasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared_services_catalogos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/catalogos.service */ "./src/app/shared/services/catalogos.service.ts");
/* harmony import */ var _shared_services_ventas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/ventas.service */ "./src/app/shared/services/ventas.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CatalogoCuentasComponent = /** @class */ (function () {
    function CatalogoCuentasComponent(catalogosService, ventasService) {
        var _this = this;
        this.catalogosService = catalogosService;
        this.ventasService = ventasService;
        this.nuevaOperacion = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filtrarFuentes = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (term) { return term === '' ? [] : _this.cuentasEspeciales.filter(function (ob) { return ob.toUpperCase().indexOf(term.toUpperCase()) > -1; }); }));
        };
        this._obtenerCuentasEspeciales();
        this.vistaNuevaCuenta = false;
        this.saldoCuenta = 0;
        this.obtenerCuentasActivas();
    }
    CatalogoCuentasComponent.prototype._obtenerCuentasEspeciales = function () {
        var _this = this;
        this.catalogosService.obtenerCuentasEspeciales().then(function (res) {
            _this.datosOriginalesCuentas = res['Data'];
            var nombresCuentas = [];
            _this.datosOriginalesCuentas.forEach(function (da) {
                nombresCuentas.push(da.Nombre + "-" + da.Numero);
            });
            _this.cuentasEspeciales = nombresCuentas;
            _this.datosOriginalesCuentas = _this.datosOriginalesCuentas;
            _this.datosCuentasEspeciales = { Opciones: { Eliminar: true }, Datos: _this.datosOriginalesCuentas };
            if (_this.datatableCuentas != null) {
                _this.datatableCuentas._reiniciarRegistros(_this.datosCuentasEspeciales);
            }
        }).catch(function (err) { console.log('err', err); });
    };
    CatalogoCuentasComponent.prototype.ngOnInit = function () { };
    CatalogoCuentasComponent.prototype.obtenerCuentasActivas = function () {
        var _this = this;
        this._limpiarPantallas();
        this.catalogosService.obtenerCuentasEspeciales().then(function (res) {
            _this.vistaCentro = true;
            var datosRestantes = res['Data'].filter(function (da) { return da.Activa == 1; });
            console.log('dats', datosRestantes);
            _this.datosCuentasEspeciales = { Opciones: { Desactivar: true, Editar: true }, Datos: datosRestantes };
            if (_this.datatableCuentas != null) {
                _this.datatableCuentas._reiniciarRegistros(_this.datosCuentasEspeciales);
            }
        }).catch(function (err) { console.log('err', err); });
    };
    CatalogoCuentasComponent.prototype.obtenerCuentasInactivas = function () {
        var _this = this;
        this._limpiarPantallas();
        this._delay(100).then(function (res) {
            _this.vistaCentro = true;
            console.log('dats', _this.datosOriginalesCuentas);
            var datosRestantes = _this.datosOriginalesCuentas.filter(function (da) { return da.Activa == 0; });
            console.log('dats', datosRestantes);
            if (!datosRestantes[0]) {
                datosRestantes.push({ Resultados: 'No Hay resultados disponibles' });
            }
            _this.datosCuentasEspeciales = { Opciones: { Activar: true, Eliminar: true }, Datos: datosRestantes };
            if (_this.datatableCuentas != null) {
                _this.datatableCuentas._reiniciarRegistros(_this.datosCuentasEspeciales);
            }
        });
    };
    CatalogoCuentasComponent.prototype.nuevaCuenta = function () {
        var _this = this;
        this._limpiarPantallas();
        this._delay(100).then(function (res) {
            _this.vistaCentro = true;
            _this.vistaNuevaCuenta = true;
        });
    };
    CatalogoCuentasComponent.prototype.agregarNuevaCuenta = function () {
        var _this = this;
        var datosNuevaCuenta = { Nombre: this.nombreCuenta, Numero: this.numeroCuenta, Saldo: this.saldoCuenta };
        console.log('datos cuenta', datosNuevaCuenta);
        //return true;
        this.catalogosService.guardarNuevaCuenta(datosNuevaCuenta).then(function (res) {
            console.log('res', res);
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Exito', 'La cuenta fue guardada correctamente', 'success');
            _this._obtenerCuentasEspeciales();
            _this.obtenerCuentasActivas();
        }).catch(function (err) { console.log('err', err); });
    };
    CatalogoCuentasComponent.prototype.desactivarCuentaEspecial = function (obj) {
        var _this = this;
        var datos_update = { Activa: '0', IdCuenta: obj.IdCuenta };
        this.catalogosService.actualizarCuentaEspecial(datos_update).then(function (res) {
            _this._obtenerCuentasEspeciales();
            _this.obtenerCuentasActivas();
        }).catch(function (err) { console.log('err', err); });
    };
    CatalogoCuentasComponent.prototype.editarElemento = function (mov) {
        var _this = this;
        console.log('obj', mov);
        var datos_update = { IdCuenta: mov['Obj'].IdCuenta, Nombre: mov['Nombre'], Numero: mov['Numero'], Saldo: mov['Saldo'] };
        this.catalogosService.actualizarCuentaEspecial(datos_update).then(function (res) {
            _this._obtenerCuentasEspeciales();
            _this.obtenerCuentasActivas();
        }).catch(function (err) { console.log('err', err); });
    };
    CatalogoCuentasComponent.prototype.activarCuentaEspecial = function (obj) {
        var _this = this;
        var datos_update = { Activa: '1', IdCuenta: obj.IdCuenta };
        console.log('datos', datos_update);
        this.catalogosService.actualizarCuentaEspecial(datos_update).then(function (res) {
            _this._obtenerCuentasEspeciales();
            _this.obtenerCuentasInactivas();
        }).catch(function (err) { console.log('err', err); });
    };
    CatalogoCuentasComponent.prototype.borrarCuentaEspecial = function (obj) {
        var _this = this;
        this.catalogosService.borrarCuentaEspecial(obj).then(function (res) {
            _this._obtenerCuentasEspeciales();
        }).catch(function (err) { console.log('err', err); });
    };
    CatalogoCuentasComponent.prototype._limpiarPantallas = function () {
        this.vistaCentro = this.cuentasEspeciales = this.datosCuentasEspeciales = this.vistaNuevaCuenta = false;
    };
    CatalogoCuentasComponent.prototype._delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    CatalogoCuentasComponent.prototype._confirmarModal = function (datos, datosAlert) {
        return new Promise(function (resolve, reject) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({ title: datosAlert.Titulo,
                html: "<p class=\"\">" + datosAlert.Contenido + "</p>",
                type: datosAlert.Tipo,
                showCancelButton: true,
                cancelButtonColor: '#D33',
                confirmButtonText: datosAlert.Confirm
            }).then(function (result) {
                if (result.value) {
                    return resolve(true);
                }
            }).catch(function (err) {
                return reject(false);
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('datatableCuentas'),
        __metadata("design:type", Object)
    ], CatalogoCuentasComponent.prototype, "datatableCuentas", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CatalogoCuentasComponent.prototype, "nuevaOperacion", void 0);
    CatalogoCuentasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-catalogo-cuentas',
            template: __webpack_require__(/*! ./catalogo-cuentas.component.html */ "./src/app/layout/finanzas/catalogo-cuentas/catalogo-cuentas.component.html"),
            styles: [__webpack_require__(/*! ./catalogo-cuentas.component.scss */ "./src/app/layout/finanzas/catalogo-cuentas/catalogo-cuentas.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            providers: [_shared_services_catalogos_service__WEBPACK_IMPORTED_MODULE_2__["CatalogosService"], _shared_services_ventas_service__WEBPACK_IMPORTED_MODULE_3__["VentasService"]]
        }),
        __metadata("design:paramtypes", [_shared_services_catalogos_service__WEBPACK_IMPORTED_MODULE_2__["CatalogosService"], _shared_services_ventas_service__WEBPACK_IMPORTED_MODULE_3__["VentasService"]])
    ], CatalogoCuentasComponent);
    return CatalogoCuentasComponent;
}());



/***/ }),

/***/ "./src/app/layout/finanzas/estado-financiero/estado-financiero.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/layout/finanzas/estado-financiero/estado-financiero.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\">\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-lg-12 col-xl-12\">\n            <div class=\"row\">\n                <!--Tipos de reportes-->\n<!--                <div class=\"col-xs-4 col-lg-4 col-xl-4\">\n                    <div class=\"form-group\">\n                        <label>Reportes disponibles</label>\n                        <select class=\"form-control\" id=\"select-bancos\" [(ngModel)]=\"idReporte\">\n                            <option value=\"0\">Selecciona un reporte</option>\n                            <option value=\"1\">Reporte de Ventas</option>\n                            <option value=\"2\">Reporte de Gastos</option>\n                            <option value=\"3\">Reporte de nomina</option>\n                            <option value=\"4\">Reporte de documentos</option>\n                        </select>\n                    </div>\n                </div>-->\n                <!--fecha inicio-->\n                <div class=\"col-lg-4\">\n                    <div class=\"form-group\">\n                        <label>Fecha Inicio</label>\n                        <input type=\"date\" [(ngModel)]=\"fInicio\" class=\"form-control\" />\n                    </div>\n                </div>\n                <!--fecha fin-->\n                <div class=\"col-lg-4\">\n                    <div class=\"form-group\">\n                        <label>Fecha Fin</label>\n                        <input type=\"date\" [(ngModel)]=\"fFin\" class=\"form-control\" />\n                        <span class=\"text-danger\" *ngIf=\"errorFecha\">Fecha Fin no puede ser menor a Fecha Inicio</span>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 pull-right\">\n                    <div class=\"form-group\">\n                        <label><br></label><br>\n                        <button type=\"submit\" class=\"btn btn-labeled btn-primary pull-right buscar-mov\" (click)=\"generarReporte()\">\n                            <span class=\"btn-label btn-label-left \"><i class=\"fa fa-search \"></i></span> | Generar\n                        </button>\n                    </div>\n                </div>\n                <!--Cuentas-->\n <!--               <div class=\"col-lg-3\" *ngIf=\"this.resultadoReporte\">\n                    <div class=\"form-group\">\n                        <label>Cuentas</label>\n                        <select [(ngModel)]=\"cuenta\" class=\"form-control\" (change)=\"filtrarVentas();\">\n                            <option value=\"0\">Filtrar por cuenta</option>\n                            <option *ngFor=\"let cue of cuentas\" value=\"{{cue.IdCuenta}}\">{{cue.Nombre}}</option>\n                        </select>\n                    </div>\n                </div>-->\n                <!--Usuarios-->\n<!--                <div class=\"col-lg-3\" *ngIf=\"this.resultadoReporte\">\n                    <div class=\"form-group\">\n                        <label>Usuarios</label>\n                        <select [(ngModel)]=\"usuario\" class=\"form-control\" (change)=\"filtrarVentas();\">\n                            <option value=\"0\">Filtrar por usuario</option>\n                            <option *ngFor=\"let usu of catalogoUsuarios\" value=\"{{usu.IdUsuario}}\">{{usu.Nombre}}</option>\n                        </select>\n                    </div>\n                </div>-->\n                <!--Buscar reporte-->\n<!--                <div class=\"col-lg-10\"></div>\n                <div class=\"col-lg-2 pull-right\">\n                    <div class=\"form-group\">\n                        <label><br></label><br>\n                        <button type=\"submit\" class=\"btn btn-labeled btn-primary pull-right buscar-mov\" (click)=\"generarReporte()\">\n                            <span class=\"btn-label btn-label-left \"><i class=\"fa fa-search \"></i></span> | Generar\n                        </button>\n                    </div>\n                </div>-->\n            </div>\n        </div>\n    </div>\n    <!--<div class=\"row\">\n        <div class=\"col-lg-3\">\n            <label> Filtro 1</label><br>\n            <label class=\"switch\">\n                <input type=\"checkbox\" [(ngModel)]=\"\">\n                <span class=\"slider round\"></span>\n            </label>\n        </div>\n    </div>-->\n    <!--Filtros extra-->\n    <div class=\"row\" *ngIf=\"this.resultadosIngresos\">\n        <div class=\"col-lg-12\"><h4>Mostrar desglose por </h4></div>\n        <div class=\"col-lg-2\">\n            <label>Conceptos</label><br>\n            <label class=\"switch\">\n                <input type=\"checkbox\" [(ngModel)]=\"filtroConceptos\">\n                <span class=\"slider round\"></span>\n            </label>\n        </div>\n        <div class=\"col-lg-2\">\n            <label>Forma de Pago </label><br>\n            <label class=\"switch\">\n                <input type=\"checkbox\" [(ngModel)]=\"filtroFormas\">\n                <span class=\"slider round\"></span>\n            </label>\n        </div>\n        <div class=\"col-lg-2\">\n            <label>Estado Resultados </label><br>\n            <label class=\"switch\">\n                <input type=\"checkbox\" (change)=\"recalcularResultados();\" [(ngModel)]=\"filtroEstadoResultado\">\n                <span class=\"slider round\"></span>\n            </label>\n        </div>\n<!--        <div class=\"col-lg-2\">\n            <label>cuentas</label><br>\n            <label class=\"switch\">\n                <input type=\"checkbox\" (change)=\"mostrarDetalles();\" [(ngModel)]=\"filtroCuentas\">\n                <span class=\"slider round\"></span>\n            </label>\n        </div>-->\n        <div class=\"col-lg-2\">\n            <label>Datos en tabla</label><br>\n            <label class=\"switch\">\n                <input type=\"checkbox\"  [(ngModel)]=\"filtroDatosTabla\">\n                <span class=\"slider round\"></span>\n            </label>\n        </div>\n        <div class=\"col-lg-12\"><br><br></div>\n    </div>    \n    <!--Estado de resultados -->\n    <div class=\"row\" *ngIf=\"this.resultadosIngresos && filtroEstadoResultado\">\n        <div class=\"col-lg-12\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header bg-warning\">\n                        <button class=\"btn btn-primary pull-right\" (click)=\"confirmarGuardarEstadoResultados();\"><i class=\"fa fa-save\"></i> | Guardar </button>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"row\">\n                        <div class=\"col-lg-3\">\n                            <h4>Cuentas </h4>\n                            <ul>\n                                <li class=\"tg-list-item\" *ngFor=\"let c of cuentas;let i = index\">\n                                    <b>{{c.Nombre}} : $ {{c.Saldo | number}}</b>\n                                    <input class=\"tgl tgl-flat\" id=\"IND-{{i}}\" type=\"checkbox\" (change)=\"recalcularResultados();\" [(ngModel)]=\"c.Active\" />\n                                    <label class=\"tgl-btn\" for=\"IND-{{i}}\"></label>\n                                </li>\n                            </ul>\n                        </div>\n                        <div class=\"col-lg-9\" >\n                            <h4> Detalles </h4>\n                            <div class=\"card mb-3\">\n                                <div class=\"card-header bg-info\">\n                                    Resultado \n                                </div> \n                                <div class=\"card-body\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-3 text-primary\"> Saldo Cuentas: $ {{ saldoTotalCuentas | number}} </div>\n                                        <div class=\"col-lg-3 text-success\"> + Ingresos: $ {{ totalIngresos | number}} </div>\n                                        <div class=\"col-lg-3 text-danger\"> - Gastos: $ {{ totalGastos | number}} </div>\n                                        <div class=\"col-lg-3 text-info\"> Saldo Final: $ {{saldoTotalCuentas+totalIngresos-totalGastos  | number}}</div>\n                                        <div class=\"col-lg-12\">\n                                            <table class=\"table table-stripped table-hover\">\n                                                <tr><th>Saldo Cuentas</th><th>Ingresos</th> <th>Egresos</th> <th>Restante</th> </tr>\n                                                <tr><td>$ {{saldoTotalCuentas | number}} </td> <td>Todos: {{this.totalIngresos | number}}</td><td> Todos: {{this.totalGastos | number}} </td><td>Resultado : {{this.totalIngresos-this.totalGastos | number}}</td></tr>\n<!--                                                <tr><td></td> \n                                                    <td>\n                                                        <ul>\n                                                            <li class=\"tg-list-item\">\n                                                                Ver detalle\n                                                                <input class=\"tgl tgl-flat\" id=\"verIngresos\" type=\"checkbox\" [(ngModel)]=\"verDetalleIngresos\" />\n                                                                <label class=\"tgl-btn\" for=\"verIngresos\"></label>\n                                                            </li>\n                                                        </ul>\n                                                    </td>\n                                                    <td>\n                                                        <ul>\n                                                            Ver detalle\n                                                            <li class=\"tg-list-item\">\n                                                                <input class=\"tgl tgl-flat\" id=\"verGastos\" type=\"checkbox\" [(ngModel)]=\"verDetalleGastos\" />\n                                                                <label class=\"tgl-btn\" for=\"verGastos\"></label>\n                                                            </li>\n                                                        </ul>\n                                                    </td>\n                                                    <td></td>\n                                                </tr>-->\n                                                <!--<tr><td>Todos Por {{this.labelIngresos }}: {{this.totalIngresosDetalle | number}}</td><td> Todos: {{this.labelGastos}} {{this.totalGastosDetalle | number}} </td><td>Resultado Por Tipo : {{this.totalIngresosDetalle -this.totalGastosDetalle | number}}</td></tr>-->\n                                                <!--<tr *ngIf=\"totalIngresosDetalle2 && totalGastosDetalle2\"><td>Todos Por {{this.labelIngresos2 }}: {{this.totalIngresosDetalle2 | number}}</td><td> Todos: {{this.labelGastos2}} {{this.totalGastosDetalle2 | number}} </td><td>Resultado Por Pago : {{this.totalIngresosDetalle2 -this.totalGastosDetalle2 | number}}</td></tr>-->\n                                            </table>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>        \n    <!--Resultado de reportes-->\n    <div class=\"row\" *ngIf=\"this.resultadosIngresos && filtroDatosTabla \">\n        <div class=\"col-lg-6\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header bg-success\">\n                    Ingresos  <b>Total Ingresos ${{totalIngresos | number}}</b>\n                </div>\n                <div class=\"card-body\">\n                    <app-datatables-general #datatableIngresos *ngIf=\"this.resultadosIngresos\" [datosDatatable]=\"this.resultadosIngresos\"></app-datatables-general>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-6\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header bg-danger\">\n                    Gastos  <b>Total Gastos $ {{totalGastos | number}}</b>\n                </div>\n                <div class=\"card-body\">\n                    <app-datatables-general #datatableGastos *ngIf=\"this.resultadosGastos\" [datosDatatable]=\"this.resultadosGastos\"></app-datatables-general>\n                </div>\n            </div>\n        </div>\n    </div>\n\n        <!--Reportes Utilidad-->\n<!--        <div class=\"row\"  *ngIf=\"this.resultadosIngresos && filtroEstadoResultado\">\n            <div class=\"col-xs-12\">\n                <div class=\"row\" >\n                    <div class=\"col-xs-8\"> \n                        <div class=\"panel panel-primary\">\n                            <div class=\"panel-heading\"><h4>Desglose por cuentas</h4></div>\n                            <div class=\"panel-body\">\n                                <table class=\"table table-striped table-hover\">\n                                    <tr><th>Folio de promocion</th><th>Marca</th><th># Partidas</th><th>Monto Acumumulado</th><th>Detalles</th><th>Calcular Utilidad</th></tr>\n                                    <tr *ngFor=\"let d of datosUtilidad.Datos\">\n                                        <td>{{d.Folio}}</td>\n                                        <td>{{d.Marca}}</td>\n                                        <td>{{d.Partidas.length}}</td>\n                                        <td>{{d.TotalAcumulado</td>\n                                        <td><button class=\"btn btn-warning\" (click)=\"detallePromocion(d);\"><i class=\"fa fa-info-circle\"></i></button></td>\n                                        <td><button class=\"btn btn-success\" (click)=\"verResultadosUtilidad(d);\"><i class=\"fa fa-arrow-circle-right\"></i></button></td>\n                                    </tr>\n                                </table>\n                            </div>\n                        </div>      \n                    </div>\n                    <div class=\"col-xs-4\">\n                        <p class=\"text-center\">\n                            <strong>Resumen de ventas</strong>\n                        </p>\n                        <div class=\"progress-group\" *ngFor=\"let c of cuentas\">\n                            <span class=\"progress-text\">Saldo de {{c.Nombre}} con </span>\n                            <span class=\"progress-number\"> {{c.Saldo}}</span>\n                            <div class=\"progress sm\">\n                            <div class=\"progress-bar progress-bar-red\" style=\"width: 80%\"></div>\n                            </div>\n                        </div>\n                        <div class=\"progress-group\">\n                            <span class=\"progress-text\">Total Precio Venta</span>\n                            <span class=\"progress-number\"><b>0</b>{{totalPrecioProm}}}</span>\n                            <div class=\"progress sm\">\n                                <div class=\"progress-bar progress-bar-aqua\" style=\"width: 80%\"></div>\n                            </div>\n                        </div>\n                        <div class=\"progress-group\">\n                            <span class=\"progress-text\">Total de Apoyos Marca</span>\n                            <span class=\"progress-number\"><b>0</b>{{totalApoyosProm}}}</span>\n                            <div class=\"progress sm\">\n                                <div class=\"progress-bar progress-bar-yellow\" style=\"width: 80%\"></div>\n                            </div>\n                        </div>\n                        <div class=\"progress-group\">\n                            <span class=\"progress-text\">Utilidad Aprox</span>\n                            <span class=\"progress-number\"><b>0</b>{{totalUtilidadBruta}}}</span>\n                            <div class=\"progress sm\">\n                                <div class=\"progress-bar progress-bar-green\" style=\"width: 80%\"></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>       --> \n    <!--Ingresos Por Concepto [@routerTransition]-->\n    <div class=\"row\" *ngIf=\"this.resultadosIngresos && filtroConceptos\" >\n        <div class=\"col-lg-12\"><h4>Detalles de ingresos</h4></div>\n        <div class=\"col-lg-6\" >\n            <div class=\"card mb-3\">\n                <div class=\"card-header bg-success\">\n                    {{this.ingresosChart.Nombre}}\n                </div>\n                <div class=\"card-body\">\n                    <canvas baseChart height=\"150px\" [data]=\"ingresosChart.DatosContenido\" \n                    [labels]=\"ingresosChart.DatosEtiqueta\" [chartType]=\"ingresosChart.Tipo\" \n                    (chartHover)=\"chartHovered($event,ingresosChart.Datos)\" \n                    (chartClick)=\"chartIngresosClicked($event)\">\n                    </canvas>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-6\" *ngIf=\"this.resultadosIngresosDetalle\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header bg-success\">\n                    Datos {{this.ingresosChart.Nombre}} {{(labelIngresos)?labelIngresos:'Todos'}} Total: $ {{this.totalIngresosDetalle | number}}\n                </div>\n                <div class=\"card-body\">\n                    <app-datatables-general #datatableIngresosDetalle *ngIf=\"this.resultadosIngresosDetalle\" [datosDatatable]=\"this.resultadosIngresosDetalle\"></app-datatables-general>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--Gastos Por Concepto-->\n    <div class=\"row\" *ngIf=\"this.resultadosGastos && filtroConceptos\" >\n        <div class=\"col-lg-12\"><h4>Detalles de Gastos</h4></div>\n        <div class=\"col-lg-6\" >\n            <div class=\"card mb-3\">\n                <div class=\"card-header bg-danger\">\n                    {{this.gastosChart.Nombre}}\n                </div>\n                <div class=\"card-body\">\n                    <canvas baseChart height=\"150px\" [data]=\"gastosChart.DatosContenido\" \n                    [labels]=\"gastosChart.DatosEtiqueta\" [chartType]=\"gastosChart.Tipo\" \n                    (chartHover)=\"chartHovered($event,gastosChart.Datos)\" \n                    (chartClick)=\"chartGastosClicked($event)\">\n                    </canvas>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-6\" *ngIf=\"this.resultadosGastosDetalle\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header bg-danger\">\n                    Datos {{this.gastosChart.Nombre}} {{(labelGastos)?labelGastos:'Todos'}} Total: $ {{this.totalGastosDetalle | number}}\n                </div>\n                <div class=\"card-body\">\n                    <app-datatables-general #datatableGastosDetalle *ngIf=\"this.resultadosGastosDetalle\" [datosDatatable]=\"this.resultadosGastosDetalle\"></app-datatables-general>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--Ingresos Por Forma de pago-->\n    <div class=\"row\" *ngIf=\"this.resultadosIngresos && filtroFormas\" >\n            <div class=\"col-lg-12\"><h4>Detalles de ingresos</h4></div>\n            <div class=\"col-lg-6\" >\n                <div class=\"card mb-3\">\n                    <div class=\"card-header bg-success\">\n                        {{this.ingresosChart2.Nombre}}\n                    </div>\n                    <div class=\"card-body\">\n                        <canvas baseChart height=\"150px\" [data]=\"ingresosChart2.DatosContenido\" \n                        [labels]=\"ingresosChart2.DatosEtiqueta\" [chartType]=\"ingresosChart2.Tipo\" \n                        (chartHover)=\"chartHovered($event,ingresosChart2.Datos)\" \n                        (chartClick)=\"chartIngresosClicked2($event)\">\n                        </canvas>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-6\" *ngIf=\"this.resultadosIngresosDetalle2\">\n                <div class=\"card mb-3\">\n                    <div class=\"card-header bg-success\">\n                        Datos {{this.ingresosChart2.Nombre}} {{(labelIngresos2)?labelIngresos2:'Todos'}} Total: $ {{this.totalIngresosDetalle2 | number}}\n                    </div>\n                    <div class=\"card-body\">\n                        <app-datatables-general #datatableIngresosDetalle2 *ngIf=\"this.resultadosIngresosDetalle2\" [datosDatatable]=\"this.resultadosIngresosDetalle2\"></app-datatables-general>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!--Gastos Por Concepto-->\n        <div class=\"row\" *ngIf=\"this.resultadosGastos && filtroFormas\" >\n            <div class=\"col-lg-12\"><h4>Detalles de Gastos</h4></div>\n            <div class=\"col-lg-6\" >\n                <div class=\"card mb-3\">\n                    <div class=\"card-header bg-danger\">\n                        {{this.gastosChart2.Nombre}}\n                    </div>\n                    <div class=\"card-body\">\n                        <canvas baseChart height=\"150px\" [data]=\"gastosChart2.DatosContenido\" \n                        [labels]=\"gastosChart2.DatosEtiqueta\" [chartType]=\"gastosChart2.Tipo\" \n                        (chartHover)=\"chartHovered($event,gastosChart2.Datos)\" \n                        (chartClick)=\"chartGastosClicked2($event)\">\n                        </canvas>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-6\" *ngIf=\"this.resultadosGastosDetalle2\">\n                <div class=\"card mb-3\">\n                    <div class=\"card-header bg-danger\">\n                        Datos {{this.gastosChart2.Nombre}} {{(labelGastos2)?labelGastos2:'Todos'}} Total: $ {{this.totalGastosDetalle2 | number}}\n                    </div>\n                    <div class=\"card-body\">\n                        <app-datatables-general #datatableGastosDetalle2 *ngIf=\"this.resultadosGastosDetalle2\" [datosDatatable]=\"this.resultadosGastosDetalle2\"></app-datatables-general>\n                    </div>\n                </div>\n            </div>\n        </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/finanzas/estado-financiero/estado-financiero.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/layout/finanzas/estado-financiero/estado-financiero.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-info {\n  color: #fff;\n  background-color: #359B83 !important;\n  border-color: #46b8da; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #10798D !important;\n  border-color: #46b8da; }\n\n.btn-success {\n  color: #fff; }\n\n.btn-warning {\n  color: #fff;\n  background-color: #2A8901 !important;\n  border-color: #46b8da; }\n\n.btn-danger {\n  color: #fff;\n  background-color: #955006 !important;\n  border-color: #46b8da; }\n\n.btn-secondary {\n  color: #fff;\n  background-color: #232E5C !important;\n  border-color: #46b8da; }\n\n.btn-info:focus, .btn-info:hover, .btn-info.focus {\n  color: #fff;\n  background-color: #396B57 !important;\n  border-color: #174935; }\n\n.btn-primary:focus, .btn-primary:hover, .btn-primary.focus {\n  color: #fff;\n  background-color: #10798D !important;\n  border-color: #46b8da; }\n\n.btn-warning:focus, .btn-warning:hover, .btn-warning.focus {\n  color: #fff;\n  background-color: #2D6E00 !important;\n  border-color: #0a2a1c; }\n\n.btn-danger:focus, .btn-danger:hover, .btn-danger.focus {\n  color: #fff;\n  background-color: #7F4700 !important;\n  border-color: #623900; }\n\n.btn-secondary:focus, .btn-secondary:hover, .btn-secondary.focus {\n  color: #fff;\n  background-color: #2D3854 !important;\n  border-color: #0c0d35; }\n\n.bg-info {\n  color: #fff;\n  background-color: #359B83 !important;\n  border-color: #46b8da; }\n\n.bg-primary {\n  color: #fff;\n  background-color: #10798D !important;\n  border-color: #46b8da; }\n\n.bg-success {\n  color: #fff; }\n\n.bg-warning {\n  color: #fff;\n  background-color: #2A8901 !important;\n  border-color: #46b8da; }\n\n.bg-danger {\n  color: #fff;\n  background-color: #955006 !important;\n  border-color: #46b8da; }\n\n.bg-secondary {\n  color: #fff;\n  background-color: #232E5C !important;\n  border-color: #46b8da; }\n\n/* The switch - the box around the slider */\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px; }\n\n/* Hide default HTML checkbox */\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0; }\n\n/* The slider */\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: .4s; }\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: .4s; }\n\ninput:checked + .slider {\n  background-color: #2196F3; }\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3; }\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  transform: translateX(26px); }\n\n/* Rounded sliders */\n\n.slider.round {\n  border-radius: 34px; }\n\n.slider.round:before {\n  border-radius: 50%; }\n\nhtml,\nbody {\n  display: flex;\n  min-height: 100%;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-family: sans-serif; }\n\nul,\nli {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\n.tg-list {\n  text-align: center;\n  display: flex;\n  align-items: center; }\n\n.tg-list-item {\n  margin: 0 2em; }\n\nh2 {\n  color: #777; }\n\nh4 {\n  color: #999; }\n\n.tgl {\n  display: none; }\n\n.tgl, .tgl:after, .tgl:before,\n  .tgl *,\n  .tgl *:after,\n  .tgl *:before,\n  .tgl + .tgl-btn {\n    box-sizing: border-box; }\n\n.tgl::-moz-selection, .tgl:after::-moz-selection, .tgl:before::-moz-selection,\n    .tgl *::-moz-selection,\n    .tgl *:after::-moz-selection,\n    .tgl *:before::-moz-selection,\n    .tgl + .tgl-btn::-moz-selection {\n      background: none; }\n\n.tgl::selection, .tgl:after::selection, .tgl:before::selection,\n    .tgl *::selection,\n    .tgl *:after::selection,\n    .tgl *:before::selection,\n    .tgl + .tgl-btn::selection {\n      background: none; }\n\n.tgl + .tgl-btn {\n    outline: 0;\n    display: block;\n    width: 4em;\n    height: 2em;\n    position: relative;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n\n.tgl + .tgl-btn:after, .tgl + .tgl-btn:before {\n      position: relative;\n      display: block;\n      content: \"\";\n      width: 50%;\n      height: 100%; }\n\n.tgl + .tgl-btn:after {\n      left: 0; }\n\n.tgl + .tgl-btn:before {\n      display: none; }\n\n.tgl:checked + .tgl-btn:after {\n    left: 50%; }\n\n.tgl-light + .tgl-btn {\n  background: #f0f0f0;\n  border-radius: 2em;\n  padding: 2px;\n  transition: all .4s ease; }\n\n.tgl-light + .tgl-btn:after {\n    border-radius: 50%;\n    background: #fff;\n    transition: all .2s ease; }\n\n.tgl-light:checked + .tgl-btn {\n  background: #9FD6AE; }\n\n.tgl-ios + .tgl-btn {\n  background: #fbfbfb;\n  border-radius: 2em;\n  padding: 2px;\n  transition: all .4s ease;\n  border: 1px solid #e8eae9; }\n\n.tgl-ios + .tgl-btn:after {\n    border-radius: 2em;\n    background: #fbfbfb;\n    transition: left 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), padding 0.3s ease, margin 0.3s ease;\n    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08); }\n\n.tgl-ios + .tgl-btn:hover:after {\n    will-change: padding; }\n\n.tgl-ios + .tgl-btn:active {\n    box-shadow: inset 0 0 0 2em #e8eae9; }\n\n.tgl-ios + .tgl-btn:active:after {\n      padding-right: .8em; }\n\n.tgl-ios:checked + .tgl-btn {\n  background: #86d993; }\n\n.tgl-ios:checked + .tgl-btn:active {\n    box-shadow: none; }\n\n.tgl-ios:checked + .tgl-btn:active:after {\n      margin-left: -.8em; }\n\n.tgl-skewed + .tgl-btn {\n  overflow: hidden;\n  -webkit-transform: skew(-10deg);\n          transform: skew(-10deg);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transition: all .2s ease;\n  font-family: sans-serif;\n  background: #888; }\n\n.tgl-skewed + .tgl-btn:after, .tgl-skewed + .tgl-btn:before {\n    -webkit-transform: skew(10deg);\n            transform: skew(10deg);\n    display: inline-block;\n    transition: all .2s ease;\n    width: 100%;\n    text-align: center;\n    position: absolute;\n    line-height: 2em;\n    font-weight: bold;\n    color: #fff;\n    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4); }\n\n.tgl-skewed + .tgl-btn:after {\n    left: 100%;\n    content: attr(data-tg-on); }\n\n.tgl-skewed + .tgl-btn:before {\n    left: 0;\n    content: attr(data-tg-off); }\n\n.tgl-skewed + .tgl-btn:active {\n    background: #888; }\n\n.tgl-skewed + .tgl-btn:active:before {\n      left: -10%; }\n\n.tgl-skewed:checked + .tgl-btn {\n  background: #86d993; }\n\n.tgl-skewed:checked + .tgl-btn:before {\n    left: -100%; }\n\n.tgl-skewed:checked + .tgl-btn:after {\n    left: 0; }\n\n.tgl-skewed:checked + .tgl-btn:active:after {\n    left: 10%; }\n\n.tgl-flat + .tgl-btn {\n  padding: 2px;\n  transition: all .2s ease;\n  background: #fff;\n  border: 4px solid #f2f2f2;\n  border-radius: 2em; }\n\n.tgl-flat + .tgl-btn:after {\n    transition: all .2s ease;\n    background: #f2f2f2;\n    content: \"\";\n    border-radius: 1em; }\n\n.tgl-flat:checked + .tgl-btn {\n  border: 4px solid #7FC6A6; }\n\n.tgl-flat:checked + .tgl-btn:after {\n    left: 50%;\n    background: #7FC6A6; }\n\n.tgl-flip + .tgl-btn {\n  padding: 2px;\n  transition: all .2s ease;\n  font-family: sans-serif;\n  -webkit-perspective: 100px;\n          perspective: 100px; }\n\n.tgl-flip + .tgl-btn:after, .tgl-flip + .tgl-btn:before {\n    display: inline-block;\n    transition: all .4s ease;\n    width: 100%;\n    text-align: center;\n    position: absolute;\n    line-height: 2em;\n    font-weight: bold;\n    color: #fff;\n    position: absolute;\n    top: 0;\n    left: 0;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    border-radius: 4px; }\n\n.tgl-flip + .tgl-btn:after {\n    content: attr(data-tg-on);\n    background: #02C66F;\n    -webkit-transform: rotateY(-180deg);\n            transform: rotateY(-180deg); }\n\n.tgl-flip + .tgl-btn:before {\n    background: #FF3A19;\n    content: attr(data-tg-off); }\n\n.tgl-flip + .tgl-btn:active:before {\n    -webkit-transform: rotateY(-20deg);\n            transform: rotateY(-20deg); }\n\n.tgl-flip:checked + .tgl-btn:before {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg); }\n\n.tgl-flip:checked + .tgl-btn:after {\n  -webkit-transform: rotateY(0);\n          transform: rotateY(0);\n  left: 0;\n  background: #7FC6A6; }\n\n.tgl-flip:checked + .tgl-btn:active:after {\n  -webkit-transform: rotateY(20deg);\n          transform: rotateY(20deg); }\n"

/***/ }),

/***/ "./src/app/layout/finanzas/estado-financiero/estado-financiero.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/finanzas/estado-financiero/estado-financiero.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EstadoFinancieroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadoFinancieroComponent", function() { return EstadoFinancieroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared_services_estadisticas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/estadisticas.service */ "./src/app/shared/services/estadisticas.service.ts");
/* harmony import */ var _shared_services_catalogos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/catalogos.service */ "./src/app/shared/services/catalogos.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EstadoFinancieroComponent = /** @class */ (function () {
    function EstadoFinancieroComponent(estadisticasService, catalogosService) {
        this.estadisticasService = estadisticasService;
        this.catalogosService = catalogosService;
        this.idReporte = this.cuenta = this.usuario = 0;
        this.filtroFormas = this.filtroConceptos = this.filtroEstadoResultado = false;
        this.fFin = moment__WEBPACK_IMPORTED_MODULE_4__(new Date()).format('YYYY-MM-DD');
        //    this.fInicio =  moment(`${moment(new Date()).format('YYYY-')}01-01`).format('YYYY-MM-DD');
        this.fInicio = moment__WEBPACK_IMPORTED_MODULE_4__("2018-01-01").format('YYYY-MM-DD');
        this._obtenerFuentesGastos();
        this._obtenerFuentesGastos();
        this._catalogoUsuarios();
        this.saldoTotalCuentas = this.verDetalleIngresos = this.verDetalleGastos = 0;
    }
    EstadoFinancieroComponent.prototype._catalogoUsuarios = function () {
        var _this = this;
        this.catalogosService.obtenerUsuarios().then(function (res) {
            console.log('res', res);
            _this.catalogoUsuarios = res['Data'];
        });
    };
    EstadoFinancieroComponent.prototype._obtenerFuentesGastos = function () {
        var _this = this;
        this.catalogosService.obtenerCuentasEspeciales().then(function (res) {
            console.log('res', res);
            _this.cuentas = res['Data'].filter(function (r) { return r.Activa == true; });
            _this.cuentas.forEach(function (c) {
                c.Active = true;
            });
        }).catch(function (err) { console.log('err', err); });
    };
    EstadoFinancieroComponent.prototype.filtrarVentas = function () {
        var _this = this;
        console.log('usuarios', this.usuario);
        console.log('cuenta', this.cuenta);
        var restantes = this.datosFiltrar;
        console.log('cuenta', restantes);
        if (this.usuario != 0) {
            restantes = restantes.filter(function (ob) { return ob.ObjCompleto.IdUsuario == _this.usuario; });
        }
        if (this.cuenta != 0) {
            restantes = restantes.filter(function (ob) { return ob.ObjCompleto.IdCuenta == _this.cuenta; });
        }
        if (!restantes[0]) {
            restantes = [{ Resultados: 'No se encontraron resultados' }];
        }
        if (this.datatableIngresos != null) {
            this.datatableIngresos._reiniciarRegistros({ Datos: restantes });
        }
        this.resultadoReporte = { Datos: restantes };
    };
    EstadoFinancieroComponent.prototype.recalcularResultados = function () {
        var _this = this;
        var cuentas = this.cuentas.filter(function (ob) { return ob.Active == true; });
        this.saldoTotalCuentas = 0;
        var str_cuentas = "";
        cuentas.forEach(function (c) {
            _this.saldoTotalCuentas += c.Saldo;
            str_cuentas += " " + c.IdCuenta + " , ";
        });
        this.totalIngresos = 0;
        var ingresos = [];
        this.ingresosTodos.forEach(function (i) {
            if (str_cuentas.indexOf(i.ObjCompleto.IdCuenta) > -1) {
                _this.totalIngresos += i.Total;
                ingresos.push(i);
            }
        });
        this.totalGastos = 0;
        var gastos = [];
        this.gastosTodos.forEach(function (g) {
            if (str_cuentas.indexOf(g.ObjCompleto.IdCuenta) > -1) {
                _this.totalGastos += g.Total;
                gastos.push(g);
            }
        });
        if (this.datatableIngresos != null) {
            this.datatableIngresos._reiniciarRegistros({ Datos: (ingresos[0]) ? ingresos : [{ "-": "Sin resultados" }] });
        }
        this.resultadosIngresos = { Datos: (ingresos[0]) ? ingresos : [{ "-": "Sin resultados" }] };
        if (this.datatableGastos != null) {
            this.datatableGastos._reiniciarRegistros({ Datos: (gastos[0]) ? gastos : [{ "-": "Sin resultados" }] });
        }
        this.resultadosGastos = { Datos: (gastos[0]) ? gastos : [{ "-": "Sin resultados" }] };
    };
    EstadoFinancieroComponent.prototype.confirmarGuardarEstadoResultados = function () {
    };
    EstadoFinancieroComponent.prototype.generarReporte = function () {
        var _this = this;
        this.resultadosIngresos = this.resultadosGastos = false;
        var Filtros = { Fecha_inicio: this.fInicio, Fecha_fin: this.fFin };
        this.estadisticasService.obtenerReporteFinanzas(Filtros).then(function (res) {
            console.log('res', res);
            if (res['Data']) {
                var ingresosOrdenados = _this._ordenarDatosFinanzas(res['Data'].DatosVenta);
                _this.ingresosTodos = ingresosOrdenados;
                var ingresosProcesados = _this._procesarIngresos(ingresosOrdenados);
                var ingresosProcesados2 = _this._procesarIngresos2(ingresosOrdenados);
                console.log('ingresos 2 ', ingresosProcesados2);
                _this.ingresosChart = _this._pieChartOrder("Resumen de Ingresos Por Conceptos", ingresosProcesados);
                _this.ingresosChart2 = _this._pieChartOrder("Resumen de Ingresos Por FormaPago", ingresosProcesados2);
                var gastosOrdenados = _this._ordenarDatosGastos(res['Data'].DatosGastos);
                _this.gastosTodos = gastosOrdenados;
                var gastosProcesados = _this._procesarGastos(gastosOrdenados);
                var gastosProcesados2 = _this._procesarGastos2(gastosOrdenados);
                _this.gastosChart = _this._pieChartOrder("Resumen de Gastos Por Conceptos", gastosProcesados);
                _this.gastosChart2 = _this._pieChartOrder("Resumen de Gastos Por FormaPago", gastosProcesados2);
                //        let datosOrdenados = res['Data'];
                //        this.datosFiltrar =  ingresosOrdenados;
                if (_this.datatableIngresos != null) {
                    _this.datatableIngresos._reiniciarRegistros({ Datos: ingresosOrdenados });
                }
                _this.resultadosIngresos = { Datos: ingresosOrdenados };
                //this.datosFiltrar =  gastosOrdenados;
                if (_this.datatableGastos != null) {
                    _this.datatableGastos._reiniciarRegistros({ Datos: gastosOrdenados });
                }
                _this.resultadosGastos = { Datos: gastosOrdenados };
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Advertencia', 'No existen datos para esta consulta', 'warning');
            }
        }).catch(function (err) { console.log('err', err); });
    };
    EstadoFinancieroComponent.prototype._ordenarDatosGastos = function (datos) {
        var _this = this;
        var datosOrdenados = [];
        this.tiposGastos = [];
        this.pagosGastos = [];
        this.totalGastos = 0;
        if (datos[0]) {
            datos.forEach(function (da) {
                var cuenta = _this.cuentas.find(function (c) { return c.IdCuenta == da.IdCuenta; });
                datosOrdenados.push({ Folio: "" + da.Folio_gasto + da.IdGasto, Concepto: da.Concepto, Tipo: da.Tipo, Pago: da.Forma_pago, Cuenta: cuenta.Nombre, Usuario: da.Nombre, Fecha: da.Fecha_gasto, Total: da.Total, ObjCompleto: da });
                _this.totalGastos += da.Total;
                var existePago = _this.pagosGastos.find(function (ob) { return ob.Pago == da.Forma_pago; });
                if (!existePago) {
                    _this.pagosGastos.push({ Pago: da.Forma_pago });
                }
                var existeTipo = _this.tiposGastos.find(function (ob) { return ob.Tipo == da.Tipo; });
                if (!existeTipo) {
                    _this.tiposGastos.push({ Tipo: da.Tipo });
                }
            });
        }
        return datosOrdenados;
    };
    EstadoFinancieroComponent.prototype._ordenarDatosFinanzas = function (datos) {
        var _this = this;
        var datosOrdenados = [];
        this.tiposIngresos = [];
        this.pagosIngresos = [];
        this.totalIngresos = 0;
        datos.forEach(function (da) {
            var cuenta = _this.cuentas.find(function (c) { return c.IdCuenta == da.IdCuenta; });
            datosOrdenados.push({ Folio: da.Folio_venta + "-" + da.IdVenta, Concepto: da.Concepto, Tipo: da.Tipo_venta, Pago: da.Forma_pago, Cuenta: cuenta.Nombre, Usuario: da.Nombre, Total: da.Importe, Fecha: da.Fecha_venta, ObjCompleto: da });
            _this.totalIngresos += da.Importe;
            var existePago = _this.pagosIngresos.find(function (ob) { return ob.Pago == da.Forma_pago; });
            if (!existePago) {
                _this.pagosIngresos.push({ Pago: da.Forma_pago });
            }
            var existeTipo = _this.tiposIngresos.find(function (ob) { return ob.Tipo == da.Tipo_venta; });
            if (!existeTipo) {
                _this.tiposIngresos.push({ Tipo: da.Tipo_venta });
            }
        });
        return datosOrdenados;
    };
    //Click en grafica de gastos
    EstadoFinancieroComponent.prototype.chartGastosClicked = function (e) {
        var _this = this;
        this.labelGastos = this._interpreteEventoClicked(e);
        var datosSelected = { Datos: (this.labelGastos) ? this.gastosTodos.filter(function (ob) { return ob.Tipo == _this.labelGastos; }) : this.gastosTodos };
        this.totalGastosDetalle = 0;
        datosSelected.Datos.forEach(function (da) {
            _this.totalGastosDetalle += da.Total;
        });
        if (this.datatableGastosDetalle != null) {
            this.datatableGastosDetalle._reiniciarRegistros(datosSelected);
        }
        this.resultadosGastosDetalle = datosSelected;
        //this.gastosChart.Tabla = datosSelected;
    };
    //Click en grafica de gastos
    EstadoFinancieroComponent.prototype.chartGastosClicked2 = function (e) {
        var _this = this;
        this.labelGastos2 = this._interpreteEventoClicked(e);
        var datosSelected = { Datos: (this.labelGastos2) ? this.gastosTodos.filter(function (ob) { return ob.Pago == _this.labelGastos2; }) : this.gastosTodos };
        this.totalGastosDetalle2 = 0;
        datosSelected.Datos.forEach(function (da) {
            _this.totalGastosDetalle2 += da.Total;
        });
        if (this.datatableGastosDetalle2 != null) {
            this.datatableGastosDetalle2._reiniciarRegistros(datosSelected);
        }
        this.resultadosGastosDetalle2 = datosSelected;
        //this.gastosChart.Tabla = datosSelected;
    };
    //Click en grafica de ingresos
    EstadoFinancieroComponent.prototype.chartIngresosClicked = function (e) {
        var _this = this;
        this.labelIngresos = this._interpreteEventoClicked(e);
        var datosSelected = { Datos: (this.labelIngresos) ? this.ingresosTodos.filter(function (ob) { return ob.Tipo == _this.labelIngresos; }) : this.ingresosTodos };
        this.totalIngresosDetalle = 0;
        datosSelected.Datos.forEach(function (da) {
            _this.totalIngresosDetalle += da.Total;
        });
        if (this.datatableIngresosDetalle != null) {
            this.datatableIngresosDetalle._reiniciarRegistros(datosSelected);
        }
        this.resultadosIngresosDetalle = datosSelected;
    };
    //Click en grafica de ingresos
    EstadoFinancieroComponent.prototype.chartIngresosClicked2 = function (e) {
        var _this = this;
        this.labelIngresos2 = this._interpreteEventoClicked(e);
        console.log('label', this.labelIngresos2);
        var datosSelected = { Datos: (this.labelIngresos2) ? this.ingresosTodos.filter(function (ob) { return ob.Pago == _this.labelIngresos2; }) : this.ingresosTodos };
        this.totalIngresosDetalle2 = 0;
        console.log('label', datosSelected);
        datosSelected.Datos.forEach(function (da) {
            _this.totalIngresosDetalle2 += da.Total;
        });
        if (this.datatableIngresosDetalle2 != null) {
            this.datatableIngresosDetalle2._reiniciarRegistros(datosSelected);
        }
        this.resultadosIngresosDetalle2 = datosSelected;
    };
    //Regresa la etiqueta de la grafica que fue seleccionada 
    EstadoFinancieroComponent.prototype._interpreteEventoClicked = function (e) {
        if (e.active.length > 0) {
            var chart = e.active[0]._chart;
            var activePoints = chart.getElementAtEvent(e.event);
            if (activePoints.length > 0) {
                return chart.data.labels[activePoints[0]._index];
            }
        }
    };
    //Procesa y ordena los datos de ingresos 
    EstadoFinancieroComponent.prototype._procesarIngresos = function (Datos) {
        var tiposIngresos = [];
        var contenidoTipoIngresos = [];
        Datos.forEach(function (dat) {
            tiposIngresos[dat.Tipo] = dat.Tipo;
        });
        Object.keys(tiposIngresos).forEach(function (t) {
            var coincidencias = Datos.filter(function (ob) { return ob.Tipo == t; });
            contenidoTipoIngresos[t] = coincidencias;
        });
        return contenidoTipoIngresos;
    };
    //Procesa y ordena los datos de ingresos 
    EstadoFinancieroComponent.prototype._procesarIngresos2 = function (Datos) {
        var tiposIngresos = [];
        var contenidoTipoIngresos = [];
        console.log('Datos', Datos);
        Datos.forEach(function (dat) {
            tiposIngresos[dat.Pago] = dat.Pago;
        });
        console.log('tipos', tiposIngresos);
        Object.keys(tiposIngresos).forEach(function (t) {
            var coincidencias = Datos.filter(function (ob) { return ob.Pago == t; });
            contenidoTipoIngresos[t] = coincidencias;
        });
        return contenidoTipoIngresos;
    };
    //Procesa y ordena  datos de gastos
    EstadoFinancieroComponent.prototype._procesarGastos = function (Datos) {
        var tiposGastos = [];
        var contenidoTiposGastos = [];
        Datos.forEach(function (dat) {
            tiposGastos[dat.Tipo] = dat.Tipo;
        });
        Object.keys(tiposGastos).forEach(function (t) {
            var coincidencias = Datos.filter(function (ob) { return ob.Tipo == t; });
            contenidoTiposGastos[t] = coincidencias;
        });
        return contenidoTiposGastos;
    };
    //Procesa y ordena  datos de gastos por pago
    EstadoFinancieroComponent.prototype._procesarGastos2 = function (Datos) {
        var tiposGastos = [];
        var contenidoTiposGastos = [];
        Datos.forEach(function (dat) {
            tiposGastos[dat.Pago] = dat.Pago;
        });
        Object.keys(tiposGastos).forEach(function (t) {
            var coincidencias = Datos.filter(function (ob) { return ob.Pago == t; });
            contenidoTiposGastos[t] = coincidencias;
        });
        return contenidoTiposGastos;
    };
    //Ordena los datos de una grafica de pastel 
    EstadoFinancieroComponent.prototype._pieChartOrder = function (Titulo, Datos) {
        var DatosEtiqueta = [];
        var DatosContenido = [];
        Object.keys(Datos).forEach(function (key) {
            DatosEtiqueta.push(key.toString());
            DatosContenido.push(Datos[key].length);
        });
        return { Nombre: Titulo, DatosEtiqueta: DatosEtiqueta, DatosContenido: DatosContenido, Datos: Datos, Tipo: "pie", Tabla: false };
    };
    EstadoFinancieroComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('datatableIngresos'),
        __metadata("design:type", Object)
    ], EstadoFinancieroComponent.prototype, "datatableIngresos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('datatableGastos'),
        __metadata("design:type", Object)
    ], EstadoFinancieroComponent.prototype, "datatableGastos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('datatableGastosDetalle'),
        __metadata("design:type", Object)
    ], EstadoFinancieroComponent.prototype, "datatableGastosDetalle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('datatableGastosDetalle2'),
        __metadata("design:type", Object)
    ], EstadoFinancieroComponent.prototype, "datatableGastosDetalle2", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('datatableIngresosDetalle'),
        __metadata("design:type", Object)
    ], EstadoFinancieroComponent.prototype, "datatableIngresosDetalle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('datatableIngresosDetalle2'),
        __metadata("design:type", Object)
    ], EstadoFinancieroComponent.prototype, "datatableIngresosDetalle2", void 0);
    EstadoFinancieroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-estado-financiero',
            template: __webpack_require__(/*! ./estado-financiero.component.html */ "./src/app/layout/finanzas/estado-financiero/estado-financiero.component.html"),
            styles: [__webpack_require__(/*! ./estado-financiero.component.scss */ "./src/app/layout/finanzas/estado-financiero/estado-financiero.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            providers: [_shared_services_estadisticas_service__WEBPACK_IMPORTED_MODULE_2__["EstadisticasService"], _shared_services_catalogos_service__WEBPACK_IMPORTED_MODULE_3__["CatalogosService"]]
        }),
        __metadata("design:paramtypes", [_shared_services_estadisticas_service__WEBPACK_IMPORTED_MODULE_2__["EstadisticasService"], _shared_services_catalogos_service__WEBPACK_IMPORTED_MODULE_3__["CatalogosService"]])
    ], EstadoFinancieroComponent);
    return EstadoFinancieroComponent;
}());



/***/ }),

/***/ "./src/app/layout/finanzas/finanzas-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/finanzas/finanzas-routing.module.ts ***!
  \************************************************************/
/*! exports provided: FinanzasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanzasRoutingModule", function() { return FinanzasRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _finanzas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finanzas.component */ "./src/app/layout/finanzas/finanzas.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _finanzas_component__WEBPACK_IMPORTED_MODULE_2__["FinanzasComponent"]
    }
];
var FinanzasRoutingModule = /** @class */ (function () {
    function FinanzasRoutingModule() {
    }
    FinanzasRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], FinanzasRoutingModule);
    return FinanzasRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/finanzas/finanzas.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/finanzas/finanzas.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n        <app-page-header [heading]=\"'Finanzas'\" [icon]=\"'fa-dashboard'\"></app-page-header>\n        <!--Menu principal-->\n        <div class=\"row text-center\">\n            <div class=\"col-lg-4\">\n                <app-stat [bgClass]=\"'secondary'\" [icon]=\"'fa-users'\" [label]=\"'Estados Financieros'\" (event)=\"estadosFinancieros($event);\"  ></app-stat>\n            </div>\n            <div class=\"col-lg-4\">    \n                    <app-stat [bgClass]=\"'success'\" [icon]=\"'fa-address-card'\" [label]=\"'Catalogo de cuentas'\" (event)=\"catalogoCuentas($event);\"  ></app-stat>\n            </div>\n        </div>\n        <hr />\n        <div *ngIf=\"vistaCentro\">\n            <!--Cotizaciones-->\n            <app-estado-financiero class=\"row\" *ngIf=\"verEstadoFinanciero\" [@routerTransition]></app-estado-financiero>\n            <!--Clientes-->\n            <app-catalogo-cuentas class=\"row\" *ngIf=\"verCatalogoCuentas\" [@routerTransition]></app-catalogo-cuentas>\n        </div> \n    </div>\n    "

/***/ }),

/***/ "./src/app/layout/finanzas/finanzas.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layout/finanzas/finanzas.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-info {\n  color: #fff;\n  background-color: #359B83 !important;\n  border-color: #46b8da; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #10798D !important;\n  border-color: #46b8da; }\n\n.btn-success {\n  color: #fff; }\n\n.btn-warning {\n  color: #fff;\n  background-color: #2A8901 !important;\n  border-color: #46b8da; }\n\n.btn-danger {\n  color: #fff;\n  background-color: #955006 !important;\n  border-color: #46b8da; }\n\n.btn-secondary {\n  color: #fff;\n  background-color: #232E5C !important;\n  border-color: #46b8da; }\n\n.btn-info:focus, .btn-info:hover, .btn-info.focus {\n  color: #fff;\n  background-color: #396B57 !important;\n  border-color: #174935; }\n\n.btn-primary:focus, .btn-primary:hover, .btn-primary.focus {\n  color: #fff;\n  background-color: #10798D !important;\n  border-color: #46b8da; }\n\n.btn-warning:focus, .btn-warning:hover, .btn-warning.focus {\n  color: #fff;\n  background-color: #2D6E00 !important;\n  border-color: #0a2a1c; }\n\n.btn-danger:focus, .btn-danger:hover, .btn-danger.focus {\n  color: #fff;\n  background-color: #7F4700 !important;\n  border-color: #623900; }\n\n.btn-secondary:focus, .btn-secondary:hover, .btn-secondary.focus {\n  color: #fff;\n  background-color: #2D3854 !important;\n  border-color: #0c0d35; }\n\n.bg-info {\n  color: #fff;\n  background-color: #359B83 !important;\n  border-color: #46b8da; }\n\n.bg-primary {\n  color: #fff;\n  background-color: #10798D !important;\n  border-color: #46b8da; }\n\n.bg-success {\n  color: #fff; }\n\n.bg-warning {\n  color: #fff;\n  background-color: #2A8901 !important;\n  border-color: #46b8da; }\n\n.bg-danger {\n  color: #fff;\n  background-color: #955006 !important;\n  border-color: #46b8da; }\n\n.bg-secondary {\n  color: #fff;\n  background-color: #232E5C !important;\n  border-color: #46b8da; }\n\n/* The switch - the box around the slider */\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px; }\n\n/* Hide default HTML checkbox */\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0; }\n\n/* The slider */\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: .4s; }\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: .4s; }\n\ninput:checked + .slider {\n  background-color: #2196F3; }\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3; }\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  transform: translateX(26px); }\n\n/* Rounded sliders */\n\n.slider.round {\n  border-radius: 34px; }\n\n.slider.round:before {\n  border-radius: 50%; }\n"

/***/ }),

/***/ "./src/app/layout/finanzas/finanzas.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/finanzas/finanzas.component.ts ***!
  \*******************************************************/
/*! exports provided: FinanzasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanzasComponent", function() { return FinanzasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared_services_estadisticas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/estadisticas.service */ "./src/app/shared/services/estadisticas.service.ts");
/* harmony import */ var _shared_services_catalogos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/catalogos.service */ "./src/app/shared/services/catalogos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FinanzasComponent = /** @class */ (function () {
    function FinanzasComponent(estadisticasService, catalogosService) {
        this.estadisticasService = estadisticasService;
        this.catalogosService = catalogosService;
        this.verCatalogoCuentas = this.verEstadoFinanciero = false;
    }
    FinanzasComponent.prototype.catalogoCuentas = function () {
        var _this = this;
        this._limpiarVista();
        this._delay(100).then(function (res) {
            _this.verCatalogoCuentas = true;
            _this.vistaCentro = true;
        });
    };
    FinanzasComponent.prototype.estadosFinancieros = function () {
        var _this = this;
        this._limpiarVista();
        this._delay(100).then(function (res) {
            _this.verEstadoFinanciero = true;
            _this.vistaCentro = true;
        });
    };
    FinanzasComponent.prototype._limpiarVista = function () {
        this.verCatalogoCuentas = this.verEstadoFinanciero = this.vistaCentro = false;
    };
    FinanzasComponent.prototype._delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    FinanzasComponent.prototype.ngOnInit = function () { };
    FinanzasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-finanzas',
            template: __webpack_require__(/*! ./finanzas.component.html */ "./src/app/layout/finanzas/finanzas.component.html"),
            styles: [__webpack_require__(/*! ./finanzas.component.scss */ "./src/app/layout/finanzas/finanzas.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            providers: [_shared_services_estadisticas_service__WEBPACK_IMPORTED_MODULE_2__["EstadisticasService"], _shared_services_catalogos_service__WEBPACK_IMPORTED_MODULE_3__["CatalogosService"]]
        }),
        __metadata("design:paramtypes", [_shared_services_estadisticas_service__WEBPACK_IMPORTED_MODULE_2__["EstadisticasService"], _shared_services_catalogos_service__WEBPACK_IMPORTED_MODULE_3__["CatalogosService"]])
    ], FinanzasComponent);
    return FinanzasComponent;
}());



/***/ }),

/***/ "./src/app/layout/finanzas/finanzas.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/finanzas/finanzas.module.ts ***!
  \****************************************************/
/*! exports provided: FinanzasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanzasModule", function() { return FinanzasModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _finanzas_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finanzas-routing.module */ "./src/app/layout/finanzas/finanzas-routing.module.ts");
/* harmony import */ var _finanzas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finanzas.component */ "./src/app/layout/finanzas/finanzas.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ */ "./src/app/layout/finanzas/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FinanzasModule = /** @class */ (function () {
    function FinanzasModule() {
    }
    FinanzasModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_finanzas_routing_module__WEBPACK_IMPORTED_MODULE_1__["FinanzasRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
            declarations: [_finanzas_component__WEBPACK_IMPORTED_MODULE_2__["FinanzasComponent"], ___WEBPACK_IMPORTED_MODULE_4__["EstadoFinancieroComponent"], ___WEBPACK_IMPORTED_MODULE_4__["CatalogoCuentasComponent"]]
        })
    ], FinanzasModule);
    return FinanzasModule;
}());



/***/ }),

/***/ "./src/app/layout/finanzas/index.ts":
/*!******************************************!*\
  !*** ./src/app/layout/finanzas/index.ts ***!
  \******************************************/
/*! exports provided: EstadoFinancieroComponent, CatalogoCuentasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _estado_financiero_estado_financiero_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./estado-financiero/estado-financiero.component */ "./src/app/layout/finanzas/estado-financiero/estado-financiero.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EstadoFinancieroComponent", function() { return _estado_financiero_estado_financiero_component__WEBPACK_IMPORTED_MODULE_0__["EstadoFinancieroComponent"]; });

/* harmony import */ var _catalogo_cuentas_catalogo_cuentas_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalogo-cuentas/catalogo-cuentas.component */ "./src/app/layout/finanzas/catalogo-cuentas/catalogo-cuentas.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CatalogoCuentasComponent", function() { return _catalogo_cuentas_catalogo_cuentas_component__WEBPACK_IMPORTED_MODULE_1__["CatalogoCuentasComponent"]; });





/***/ })

}]);
//# sourceMappingURL=finanzas-finanzas-module.js.map