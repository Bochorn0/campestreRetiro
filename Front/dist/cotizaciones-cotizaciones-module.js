(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cotizaciones-cotizaciones-module"],{

/***/ "./src/app/layout/cotizaciones/cotizaciones-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/cotizaciones/cotizaciones-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: CotizacionesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CotizacionesRoutingModule", function() { return CotizacionesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cotizaciones_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cotizaciones.component */ "./src/app/layout/cotizaciones/cotizaciones.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _cotizaciones_component__WEBPACK_IMPORTED_MODULE_2__["CotizacionesComponent"]
    }
];
var CotizacionesRoutingModule = /** @class */ (function () {
    function CotizacionesRoutingModule() {
    }
    CotizacionesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CotizacionesRoutingModule);
    return CotizacionesRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/cotizaciones/cotizaciones.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/layout/cotizaciones/cotizaciones.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Ingresos'\" [icon]=\"'fa-dashboard'\"></app-page-header>\n    <!--Menu principal-->\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-xl-12 col-lg-12\">\n<!--            <button (click)=\"nuevoCliente();\" class=\"btn btn-success text-right\"><i class=\"fa fa-plus-circle\"></i> Nuevo Cliente</button>\n            <br><br>-->\n        </div>\n        <div class=\"col-xl-6 col-lg-6\">\n            <app-stat [bgClass]=\"'primary'\" [icon]=\"'fa-address-book'\"[label]=\"'Cotizaciones activas'\" (event)=\"obtenerCotizacionesActivas($event);\" ></app-stat>\n        </div>\n        <div class=\"col-xl-6 col-lg-6\">\n            <app-stat [bgClass]=\"'danger'\" [icon]=\"'fa-wrench'\"[label]=\"'Cotizaciones no Activas'\" (event)=\"obtenerCotizacionesAntiguas($event);\" ></app-stat>\n        </div>\n    </div>\n    <hr />\n    <div class=\"row\" *ngIf=\"vistaCentro\">\n        <div class=\"col-xl-12 col-lg-12 col-xs-12\">\n            <!--Clientes Activos-->\n            <div class=\"row\" *ngIf=\"this.cotizacionesActivas\" [@routerTransition]>\n                <div class=\"col-xs-12 col-lg-12\">\n                    <div class=\"card mb-3\">\n                        <div class=\"card-header bg-primary\">\n                            Cotizaciones Activas\n                        </div>\n                        <div class=\"card-body\">\n                            <app-datatables-general *ngIf=\"this.cotizacionesActivas\" (checks)=\"modificarCotizacion($event);\" [datosDatatable]=\"this.cotizacionesActivas\" (delete)=\"desasignarCotizacion($event);\"></app-datatables-general>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\" *ngIf=\"this.cotizacionesNoActivas\" [@routerTransition]>\n                <div class=\"col-xs-12 col-lg-12\">\n                    <div class=\"card mb-3\">\n                        <div class=\"card-header bg-danger\">\n                            Cotizaciones Desabilitadas\n                        </div>\n                        <div class=\"card-body\">\n                            <app-datatables-general *ngIf=\"this.cotizacionesNoActivas\" [datosDatatable]=\"this.cotizacionesNoActivas\" (delete)=\"activarCotizacion($event);\"></app-datatables-general>\n                        </div>\n                    </div>\n                </div>\n            </div>   \n        </div>\n    </div>\n    <div id=\"cotizacion\" class=\"row\" *ngIf=\"datosCotizacion\">\n        <div class=\"col-lg-3\">\n            <div class=\"form-group\">\n                <label class=\"label-form\"> Superficie </label>\n                <input type=\"number\" [(ngModel)]=\"datosCotizacion.Superficie\" (change)=\"calcularAmortizacion();\" placeholder=\"1500\" class=\"form-control\">\n            </div>\n        </div>\n        <div class=\"col-lg-2\">\n            <div class=\"form-group\">\n                <label class=\"label-form\"> $ Metro </label>\n                <input type=\"number\" [(ngModel)]=\"datosCotizacion.Precio_metro\" (change)=\"calcularAmortizacion();\" placeholder=\"140\" class=\"form-control\">\n            </div>\n        </div>\n        <div class=\"col-lg-3\">\n            <div class=\"form-group\">\n                <label class=\"label-form\"> Enganche </label>\n                <input type=\"number\" [(ngModel)]=\"datosCotizacion.Enganche\" (change)=\"calcularAmortizacion();\" placeholder=\"10000\" class=\"form-control\">\n            </div>\n        </div>\n        <div class=\"col-lg-2\">\n            <div class=\"form-group\">\n                <label class=\"label-form\"> Interes </label>\n                <input type=\"number\" [(ngModel)]=\"datosCotizacion.Tasa\" (change)=\"calcularAmortizacion();\" placeholder=\"18%\" class=\"form-control\">\n            </div>\n        </div>\n        <div class=\"col-lg-2\">\n            <div class=\"form-group\">\n                <label class=\"label-form\"> Num. Pagos </label>\n                <input type=\"number\" [(ngModel)]=\"datosCotizacion.Num_pagos\" (change)=\"calcularAmortizacion();\" placeholder=\"72\" class=\"form-control\">\n            </div>\n        </div>\n        <div class=\"col-lg-3\">\n            <div class=\"form-group\">\n                <label class=\"label-form\"> Primer Pago </label>\n                <input type=\"date\" [(ngModel)]=\"datosCotizacion.Fecha_inicio.split('T')[0]\" (change)=\"calcularAmortizacion();\" class=\"form-control\">\n            </div>\n        </div>\n        <div class=\"col-lg-3\" >\n            <div class=\"form-group\">\n                <label class=\"label-form\"> Mensualidad </label>\n                <input type=\"number\" [(ngModel)]=\"datosCotizacion.Mensualidad\" (change)=\"calcularAmortizacion();\" placeholder=\"0\" class=\"form-control\" >\n            </div>\n        </div>\n        <div class=\"col-lg-3\">\n            <div class=\"form-group\" *ngIf=\"cotizacionAnualidades\">\n                <label class=\"label-form\"> Primer Anualidad </label>\n                <input type=\"date\" [(ngModel)]=\"datosCotizacion.Fecha_inicio_anualidad.split('T')[0]\" (change)=\"calcularAmortizacion();\" class=\"form-control\">\n            </div>\n        </div>\n        <div class=\"col-lg-3\">\n            <div class=\"form-group pull-right\">\n                <label class=\"label-form\"> <br> </label><br>\n                <button class=\"btn btn-info\"  (click)=\"calcularAmortizacion(true);\"> <i class=\"fa fa-calculator\"> </i> Mensualidad </button>\n            </div>\n        </div>\n        <div class=\"col-lg-12\"><br></div>\n        <div class=\"col-lg-6 \" *ngIf=\"datosCotizacion.datatableMensualidades\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header bg-info\">\n                    1 Opcion con Mensualidades <b class=\"pull-right\">Total: {{acumuladoMen | number}}</b>\n                </div>\n                <div class=\"card-body \">\n                    <app-datatables-general #datatableMensualidades *ngIf=\"this.datosCotizacion.datatableMensualidades\" [datosDatatable]=\"this.datosCotizacion.datatableMensualidades\" ></app-datatables-general>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-6 \" *ngIf=\"cotizacionAnualidades\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header bg-info\">\n                    2 Opcion con Anualidades\n                </div>\n                <div class=\"card-body \">\n                    <app-datatables-general #datatableAnualidades *ngIf=\"this.datosCotizacion.datatableAnualidades\" [datosDatatable]=\"this.datosCotizacion.datatableAnualidades\" ></app-datatables-general>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-12\"><br></div>\n        <div class=\"col-lg-12\"><br><button *ngIf=\"cotizacionMensualidades\" class=\"btn btn-primary pull-right\" (click)=\"guardarCotizacion();\">Actualizar cotización</button></div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/cotizaciones/cotizaciones.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/layout/cotizaciones/cotizaciones.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label-form {\n  font-weight: bold !important; }\n\ndiv#sugerencias {\n  width: 100%;\n  background: #fff;\n  border: 1px solid #ddd;\n  font-size: 12px;\n  max-height: 100px;\n  overflow-y: auto;\n  padding: 10px;\n  z-index: 1; }\n\n#sugerencias th {\n  font-size: 16;\n  margin-bottom: 3px; }\n\n.activeLink {\n  cursor: pointer; }\n\n.activeLink:hover {\n  opacity: .7; }\n\n#sugerencias td {\n  padding: 5px; }\n\n.btn-info {\n  color: #fff;\n  background-color: #359B83 !important;\n  border-color: #46b8da; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #10798D !important;\n  border-color: #46b8da; }\n\n.btn-warning {\n  color: #fff;\n  background-color: #2A8901 !important;\n  border-color: #46b8da; }\n\n.btn-danger {\n  color: #fff;\n  background-color: #955006 !important;\n  border-color: #46b8da; }\n\n.btn-secondary {\n  color: #fff;\n  background-color: #232E5C !important;\n  border-color: #46b8da; }\n\n.btn-info:focus, .btn-info:hover, .btn-info.focus {\n  color: #fff;\n  background-color: #396B57 !important;\n  border-color: #174935; }\n\n.btn-primary:focus, .btn-primary:hover, .btn-primary.focus {\n  color: #fff;\n  background-color: #10798D !important;\n  border-color: #46b8da; }\n\n.btn-warning:focus, .btn-warning:hover, .btn-warning.focus {\n  color: #fff;\n  background-color: #2D6E00 !important;\n  border-color: #0a2a1c; }\n\n.btn-danger:focus, .btn-danger:hover, .btn-danger.focus {\n  color: #fff;\n  background-color: #7F4700 !important;\n  border-color: #623900; }\n\n.btn-secondary:focus, .btn-secondary:hover, .btn-secondary.focus {\n  color: #fff;\n  background-color: #2D3854 !important;\n  border-color: #0c0d35; }\n\n.bg-info {\n  color: #fff;\n  background-color: #359B83 !important;\n  border-color: #46b8da; }\n\n.bg-primary {\n  color: #fff;\n  background-color: #10798D !important;\n  border-color: #46b8da; }\n\n.bg-warning {\n  color: #fff;\n  background-color: #2A8901 !important;\n  border-color: #46b8da; }\n\n.bg-danger {\n  color: #fff;\n  background-color: #955006 !important;\n  border-color: #46b8da; }\n\n.bg-secondary {\n  color: #fff;\n  background-color: #232E5C !important;\n  border-color: #46b8da; }\n"

/***/ }),

/***/ "./src/app/layout/cotizaciones/cotizaciones.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/cotizaciones/cotizaciones.component.ts ***!
  \***************************************************************/
/*! exports provided: CotizacionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CotizacionesComponent", function() { return CotizacionesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared_services_catalogos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/catalogos.service */ "./src/app/shared/services/catalogos.service.ts");
/* harmony import */ var _shared_services_ventas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/ventas.service */ "./src/app/shared/services/ventas.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CotizacionesComponent = /** @class */ (function () {
    function CotizacionesComponent(catalogosService, ventasService) {
        this.catalogosService = catalogosService;
        this.ventasService = ventasService;
        this._obtenerTodasCotizaciones();
        this.datosCotizacion = false;
    }
    CotizacionesComponent.prototype._obtenerTodasCotizaciones = function () {
        var _this = this;
        this.catalogosService.obtenerCotizaciones().then(function (res) {
            _this.cotizaciones = _this._ordernarDatosCotizaciones(res['Data']);
            console.log('cotiza', _this.cotizaciones);
        });
    };
    CotizacionesComponent.prototype._ordernarDatosCotizaciones = function (datos) {
        var datosOrdenados = [];
        if (datos[0]) {
            datos.forEach(function (d) {
                datosOrdenados.push({ Nombre: d.Nombre, Enganche: d.Enganche, Credito: d.Credito, Tasa: d.Tasa, Pagos: d.Num_pagos, Fecha_inicio: d.Fecha_inicio, Superficie: d.Superficie, Activa: d.Activa, ObjCompleto: d });
            });
        }
        return datosOrdenados;
    };
    CotizacionesComponent.prototype.obtenerCotizacionesActivas = function (evento) {
        var _this = this;
        this._limpiarVistaYVariables();
        this._delay(100).then(function (res) {
            _this.cotizacionesActivas = { Opciones: { Eliminar: true, Seleccionar: true }, Datos: _this.cotizaciones.filter(function (ob) { return ob.Activa == 1; }) };
            _this.vistaCentro = true;
        });
    };
    CotizacionesComponent.prototype.obtenerCotizacionesAntiguas = function (evento) {
        var _this = this;
        this._limpiarVistaYVariables();
        this._delay(100).then(function (res) {
            _this.cotizacionesNoActivas = { Opciones: { Eliminar: true }, Datos: _this.cotizaciones.filter(function (ob) { return ob.Activa == 0; }) };
            _this.vistaCentro = true;
        });
    };
    CotizacionesComponent.prototype.ngOnInit = function () { };
    CotizacionesComponent.prototype.modificarCotizacion = function (Obj) {
        console.log('obj', Obj);
        if (Obj[0]) {
            this.datosCotizacion = Obj[0];
            this.calcularAmortizacion(true);
        }
    };
    CotizacionesComponent.prototype.desasignarCotizacion = function (obj) {
        var _this = this;
        this.catalogosService.desasignarCotizacion(obj).then(function (res) {
            _this._limpiarVistaYVariables();
            _this._obtenerTodasCotizaciones();
            _this.obtenerCotizacionesActivas({});
        }).catch(function (err) { console.log('err', err); });
    };
    CotizacionesComponent.prototype.activarCotizacion = function (obj) {
        var _this = this;
        this.catalogosService.activarCotizacion(obj).then(function (res) {
            _this._limpiarVistaYVariables();
            _this._obtenerTodasCotizaciones();
            _this.obtenerCotizacionesAntiguas({});
        }).catch(function (err) { console.log('err', err); });
    };
    CotizacionesComponent.prototype._limpiarVistaYVariables = function () {
        this.vistaCentro = this.cotizacionesActivas = this.cotizacionesNoActivas = this.datosCotizacion = false;
    };
    CotizacionesComponent.prototype._delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    CotizacionesComponent.prototype.calcularAmortizacion = function (forzado) {
        //Se calcula el costo total  y el monto del crédito
        var totalActual = this.datosCotizacion.Mensualidad;
        console.log('total mensual', this.datosCotizacion.Mensualidad);
        if (forzado) {
            this.datosCotizacion.Mensualidad = 0;
            totalActual = 0;
        }
        this.datosCotizacion.MontoCredito = 0;
        if (this.datosCotizacion.Superficie && this.datosCotizacion.Precio_metro) {
            this.datosCotizacion.CostoTotal = this.datosCotizacion.Precio_metro * this.datosCotizacion.Superficie;
            this.datosCotizacion.MontoCredito = this.datosCotizacion.CostoTotal - this.datosCotizacion.Enganche;
            this.datosCotizacion.Mensualidad = 0;
        }
        var interes_calculado = this.datosCotizacion.Tasa;
        interes_calculado = (interes_calculado > 0) ? interes_calculado : 0.000000001;
        if (this.datosCotizacion.MontoCredito && interes_calculado && this.datosCotizacion.Num_pagos) {
            var montoMensual = (interes_calculado / 100) / 12;
            var montoElevado = Math.pow(1 + montoMensual, -1 * this.datosCotizacion.Num_pagos);
            var monto = ((this.datosCotizacion.MontoCredito * montoMensual) / (1 - montoElevado)).toFixed(2);
            var datosMensualidades = this._cotizacionMensualidades(monto);
            if (this.datatableMensualidades != null) {
                this.datatableMensualidades._reiniciarRegistros({ Datos: datosMensualidades });
            }
            this.datosCotizacion.datatableMensualidades = { Datos: datosMensualidades };
            //        this.cotizacionMensualidades =  { Datos: datosMensualidades}
            console.log('monto', monto);
            if (!totalActual) {
                this.datosCotizacion.Mensualidad = monto;
                this.datosCotizacion.CotizacionAnualidades = false;
            }
            else {
                this.datosCotizacion.Mensualidad = totalActual;
                if (this.datosCotizacion.Mensualidad != 0 && (monto > totalActual) && this.datosCotizacion.Num_pagos > 12) {
                    var anualidad = this._cotizarAnualidad();
                    if (this.datatableAnualidades != null) {
                        this.datatableAnualidades._reiniciarRegistros({ Datos: anualidad });
                    }
                    this.datosCotizacion.datatableAnualidades = { Datos: anualidad };
                }
            }
            this.datosCotizacion.TotalFinal = this.datosCotizacion.AcumuladoMen + this.datosCotizacion.Enganche;
        }
        else {
            if (forzado) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Advertencia', 'Debes introducir todos los datos para poder calcular la cotización', 'warning');
            }
        }
    };
    CotizacionesComponent.prototype._cotizacionMensualidades = function (montoMen) {
        var datos = [];
        var fecha_pivote = this.datosCotizacion.Fecha_inicio;
        var interes_calculado = this.datosCotizacion.Tasa;
        interes_calculado = (interes_calculado > 0) ? interes_calculado : 0.000000001;
        var montoMensual = (interes_calculado / 100) / 12;
        var total_restante = this.datosCotizacion.MontoCredito;
        var capital = 0;
        this.acumuladoMen = montoMen * this.datosCotizacion.Num_pagos;
        for (var i = 1; i <= this.datosCotizacion.Num_pagos; i++) {
            var interes = total_restante * montoMensual;
            capital = montoMen - interes;
            total_restante = total_restante - capital;
            fecha_pivote = moment__WEBPACK_IMPORTED_MODULE_5__(fecha_pivote).add('1', 'month').format('YYYY-MM-DD');
            datos.push({ Fecha: fecha_pivote, Pago: i, Interes: (interes).toFixed(2), Capital: (capital).toFixed(2), Total: montoMen, Saldo: (total_restante).toFixed(2) });
        }
        return datos;
    };
    CotizacionesComponent.prototype._cotizarAnualidad = function () {
        var totalAnual = 0;
        var interes_calculado = this.datosCotizacion.Tasa;
        interes_calculado = (interes_calculado > 0) ? interes_calculado : 0.000000001;
        var montoMensual = (interes_calculado / 100) / 12;
        var montoElevado = Math.pow(1 + montoMensual, -1 * this.datosCotizacion.Num_pagos);
        var monto = (this.datosCotizacion.datatableAnualidades.MontoCredito * montoMensual) / (1 - montoElevado);
        var restanteMensual = monto - this.datosCotizacion.Mensualidad;
        var fecha_pivote = this.datosCotizacion.Fecha_inicio_anualidad;
        var datos = [];
        this.datosCotizacion.TotalAnualidad = restanteMensual;
        this.datosCotizacion.Anualidad = (restanteMensual * 12).toFixed(2);
        this.datosCotizacion.Num_anualidades = 0;
        for (var i = 1; i <= this.datosCotizacion.Num_pagos; i++) {
            totalAnual += restanteMensual;
            fecha_pivote = moment__WEBPACK_IMPORTED_MODULE_5__(fecha_pivote).add('1', 'month').format('YYYY-MM-DD');
            datos.push({ Fecha: fecha_pivote, Pago: i, Mensualidad: this.datosCotizacion.Mensualidad.toFixed(2), Abono: restanteMensual.toFixed(2) });
            if (i % 12 == 0) {
                this.datosCotizacion.Num_anualidades++;
                datos.push({ Fecha: fecha_pivote, Pago: (i / 12), Mensualidad: 'Total = ', Abono: totalAnual.toFixed(2) });
                totalAnual = 0;
            }
            if (this.datosCotizacion.Num_pagos == i && i % 12 > 0) {
                datos.push({ Fecha: fecha_pivote, Pago: '-', Mensualidad: '-', Abono: totalAnual.toFixed(2) });
                totalAnual = 0;
            }
        }
        console.log('datos', datos);
        return datos;
    };
    CotizacionesComponent.prototype.guardarCotizacion = function () {
        var _this = this;
        var DatosAlert = { Titulo: 'Guardar cotización como', Confirmar: 'Guardar' };
        this._confirmarGuardar(DatosAlert).then(function (Name) {
            var datosCotizacion = _this.datosCotizacion;
            console.log('datos_cotizacion', datosCotizacion);
            _this.ventasService.guardarCotizacion(datosCotizacion).then(function (res) {
                console.log('res', res);
                var tipo = res['Tipo'];
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Exito', "" + res['Operacion'], tipo);
            }).catch(function (err) { console.log('err', err); });
        });
    };
    CotizacionesComponent.prototype._confirmarGuardar = function (DatosAlert) {
        return new Promise(function (resolve, reject) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({ title: DatosAlert.Titulo, input: 'text', inputAttributes: { autocapitalize: 'off' },
                showCancelButton: true, confirmButtonText: DatosAlert.Confirmar, showLoaderOnConfirm: true,
                preConfirm: function () { },
                allowOutsideClick: function () { return !sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.isLoading(); }
            }).then(function (result) {
                var nombre;
                if (result.value) {
                    nombre = result.value;
                }
                else {
                    nombre = "COT-" + Math.floor((Math.random() * 100) + 1);
                }
                return resolve(nombre);
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('datatableMensualidades'),
        __metadata("design:type", Object)
    ], CotizacionesComponent.prototype, "datatableMensualidades", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('datatableAnualidades'),
        __metadata("design:type", Object)
    ], CotizacionesComponent.prototype, "datatableAnualidades", void 0);
    CotizacionesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clientes',
            template: __webpack_require__(/*! ./cotizaciones.component.html */ "./src/app/layout/cotizaciones/cotizaciones.component.html"),
            styles: [__webpack_require__(/*! ./cotizaciones.component.scss */ "./src/app/layout/cotizaciones/cotizaciones.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            providers: [_shared_services_catalogos_service__WEBPACK_IMPORTED_MODULE_2__["CatalogosService"], _shared_services_ventas_service__WEBPACK_IMPORTED_MODULE_3__["VentasService"]]
        }),
        __metadata("design:paramtypes", [_shared_services_catalogos_service__WEBPACK_IMPORTED_MODULE_2__["CatalogosService"], _shared_services_ventas_service__WEBPACK_IMPORTED_MODULE_3__["VentasService"]])
    ], CotizacionesComponent);
    return CotizacionesComponent;
}());



/***/ }),

/***/ "./src/app/layout/cotizaciones/cotizaciones.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/cotizaciones/cotizaciones.module.ts ***!
  \************************************************************/
/*! exports provided: CotizacionesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CotizacionesModule", function() { return CotizacionesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cotizaciones_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cotizaciones-routing.module */ "./src/app/layout/cotizaciones/cotizaciones-routing.module.ts");
/* harmony import */ var _cotizaciones_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cotizaciones.component */ "./src/app/layout/cotizaciones/cotizaciones.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CotizacionesModule = /** @class */ (function () {
    function CotizacionesModule() {
    }
    CotizacionesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_cotizaciones_routing_module__WEBPACK_IMPORTED_MODULE_1__["CotizacionesRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
            declarations: [_cotizaciones_component__WEBPACK_IMPORTED_MODULE_2__["CotizacionesComponent"]]
        })
    ], CotizacionesModule);
    return CotizacionesModule;
}());



/***/ })

}]);
//# sourceMappingURL=cotizaciones-cotizaciones-module.js.map