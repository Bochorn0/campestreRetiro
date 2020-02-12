(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inicio-inicio-module"],{

/***/ "./src/app/layout/inicio/inicio-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/inicio/inicio-routing.module.ts ***!
  \********************************************************/
/*! exports provided: InicioRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioRoutingModule", function() { return InicioRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _inicio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inicio.component */ "./src/app/layout/inicio/inicio.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _inicio_component__WEBPACK_IMPORTED_MODULE_2__["InicioComponent"]
    }
];
var InicioRoutingModule = /** @class */ (function () {
    function InicioRoutingModule() {
    }
    InicioRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], InicioRoutingModule);
    return InicioRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/inicio/inicio.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/inicio/inicio.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n<!--    <h2 class=\"text-muted\"> Bienvenido  <small></small></h2>-->\n<!--    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <ngb-carousel>\n                <ng-template ngbSlide *ngFor=\"let slider of sliders\">\n                    <img class=\"img-fluid mx-auto d-block\" [src]=\"slider.imagePath\" alt=\"Random first slide\" width=\"100%\">\n                    <div class=\"carousel-caption\">\n                        <h3>{{slider.label}}</h3>\n                        <p>{{slider.text}}</p>\n                    </div>\n                </ng-template>\n            </ngb-carousel>\n        </div>\n    </div>\n    <hr>-->\n<!--    <ngb-alert type=\"warning\" *ngIf=\"closeAlert != false\" (close)=\"closeAlert= false\" >En este panel encontraras el resumen de los temas mas imporntantes en forma de sintesis</ngb-alert>-->\n    <div class=\"row\">\n        <div class=\"col-xl-3 col-lg-6\">\n            <app-stat [routerLink]=\"['/Cobranza']\" [routerLinkActive]=\"['router-link-active']\" [bgClass]=\"'primary'\" [icon]=\"'fa-pie-chart'\" [label]=\"'Ingresos'\"></app-stat>\n        </div>\n        <div class=\"col-xl-3 col-lg-6\">\n            <app-stat [routerLink]=\"['/Egresos']\" [routerLinkActive]=\"['router-link-active']\" [bgClass]=\"'warning'\" [icon]=\"'fa-tasks'\" [label]=\"'Gastos'\" ></app-stat>\n        </div>\n        <!-- <div class=\"col-xl-3 col-lg-6\">\n            <app-stat [routerLink]=\"['/Cotizaciones']\" [routerLinkActive]=\"['router-link-active']\" [bgClass]=\"'info'\" [icon]=\"'fa-shopping-cart'\" [label]=\"'Cotizaciones'\"></app-stat>\n        </div> -->\n        <div class=\"col-xl-3 col-lg-6\">\n            <app-stat [routerLink]=\"['/Catalogos']\" [routerLinkActive]=\"['router-link-active']\" [bgClass]=\"'secondary'\" [icon]=\"'fa-support'\"  [label]=\"'Catalogos'\"></app-stat>\n        </div>\n    </div>\n    <hr />\n    <div class=\"row\" *ngIf=\"this.datosDashboard\">\n        <div class=\"col-xl-12 col-lg-12\">\n            <app-datatables-general *ngIf=\"this.datosDashboard\" [datosDatatable]=\"this.datosDashboard\"></app-datatables-general>\n        </div>\n    </div>\n    <div class=\"row\" *ngIf=\"this.reporteActivo\">\n        <div class=\"col-xl-12 col-lg-12 col-xs-12\">\n            <!--Ingresos-->\n            <div class=\"row\" *ngIf=\"this.reportesIngresos\" [@routerTransition]>\n                <div class=\"col-xl-6 col-lg-6 col-xs-12\">\n                    <div class=\"card mb-3\">\n                        <div class=\"card-header\">\n                            {{this.ingresosChart.Nombre}}\n                        </div>\n                        <div class=\"card-body\">\n                            <canvas baseChart height=\"150px\" [data]=\"ingresosChart.DatosContenido\" \n                            [labels]=\"ingresosChart.DatosEtiqueta\" [chartType]=\"ingresosChart.Tipo\" \n                            (chartHover)=\"chartHovered($event,ingresosChart.Datos)\" \n                            (chartClick)=\"chartIngresosClicked($event)\">\n                            </canvas>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xl-6 col-lg-6 col-xs-12\" *ngIf=\"this.ingresosChart.Tabla\">\n                    <div class=\"card mb-3\">\n                        <div class=\"card-header\">\n                            Datos {{this.ingresosChart.Nombre}}\n                        </div>\n                        <div class=\"card-body\">\n                            <app-datatables-general #datatableIngresos *ngIf=\"this.ingresosChart.Tabla\" [datosDatatable]=\"this.ingresosChart.Tabla\"></app-datatables-general>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!--Gastos A la fecha-->\n            <div class=\"row\" *ngIf=\"this.reportesGastos\" [@routerTransition]>\n                <div class=\"col-xl-6 col-lg-6 col-xs-12\" >\n                    <div class=\"card mb-3\">\n                        <div class=\"card-header\">\n                            {{this.gastosChart.Nombre}}\n                        </div>\n                        <div class=\"card-body\">\n                            <canvas baseChart height=\"150px\" [data]=\"gastosChart.DatosContenido\" \n                            [labels]=\"gastosChart.DatosEtiqueta\" [chartType]=\"gastosChart.Tipo\" \n                            (chartHover)=\"chartHovered($event,gastosChart.Datos)\" \n                            (chartClick)=\"chartGastosClicked($event)\">\n                            </canvas>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xl-6 col-lg-6 col-xs-12\" *ngIf=\"this.gastosChart.Tabla\">\n                    <div class=\"card mb-3\">\n                        <div class=\"card-header\">\n                            Datos {{this.gastosChart.Nombre}}\n                        </div>\n                        <div class=\"card-body\">\n                            <app-datatables-general #datatableGastos *ngIf=\"this.gastosChart.Tabla\" [datosDatatable]=\"this.gastosChart.Tabla\"></app-datatables-general>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!--Cartera Vencida-->\n            <div class=\"row\" *ngIf=\"this.reportesCartera\" [@routerTransition]>\n                <div class=\"col-xl-6 col-lg-6 col-xs-12\">\n                    <div class=\"card mb-3\">\n                        <div class=\"card-header\">\n                            {{this.carteraChart.Nombre}}\n                        </div>\n                        <div class=\"card-body\">\n                            <canvas baseChart height=\"150px\" [data]=\"carteraChart.DatosContenido\" \n                            [labels]=\"carteraChart.DatosEtiqueta\" [chartType]=\"carteraChart.Tipo\" \n                            (chartHover)=\"chartHovered($event,carteraChart.Datos)\" \n                            (chartClick)=\"chartCarteraClicked($event)\">\n                            </canvas>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xl-6 col-lg-6 col-xs-12\" *ngIf=\"this.carteraChart.Tabla\">\n                    <div class=\"card mb-3\">\n                        <div class=\"card-header\">\n                            Datos {{this.carteraChart.Nombre}}\n                        </div>\n                        <div class=\"card-body\">\n                            <app-datatables-general #datatableCartera *ngIf=\"this.carteraChart.Tabla\" [datosDatatable]=\"this.carteraChart.Tabla\"></app-datatables-general>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!--Clientes contacto-->\n            <div class=\"row\" *ngIf=\"reportesClientes\" [@routerTransition]>\n                <div class=\"col-xl-6 col-lg-6 col-xs-12\">\n                    <div class=\"card mb-3\">\n                        <div class=\"card-header\">\n                            {{this.clientesChart.Nombre}}\n                        </div>\n                        <div class=\"card-body\">\n                            <canvas baseChart height=\"150px\" [data]=\"clientesChart.DatosContenido\" \n                            [labels]=\"clientesChart.DatosEtiqueta\" [chartType]=\"clientesChart.Tipo\" \n                            (chartHover)=\"chartHovered($event,clientesChart.Datos)\" \n                            (chartClick)=\"chartClientesClicked($event)\">\n                            </canvas>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xl-6 col-lg-6 col-xs-12\" *ngIf=\"this.clientesChart.Tabla\">\n                    <div class=\"card mb-3\">\n                        <div class=\"card-header\">\n                            Datos {{this.clientesChart.Nombre}}\n                        </div>\n                        <div class=\"card-body\">\n                            <app-datatables-general #datatableClientes *ngIf=\"this.clientesChart.Tabla\" [datosDatatable]=\"this.clientesChart.Tabla\"></app-datatables-general>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/inicio/inicio.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/inicio/inicio.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-primary {\n  background-color: #10798D !important; }\n\n.bg-info {\n  background-color: #359B83 !important; }\n\n.bg-warning {\n  background-color: #D4EC8E !important; }\n"

/***/ }),

/***/ "./src/app/layout/inicio/inicio.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/inicio/inicio.component.ts ***!
  \***************************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_estadisticas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/estadisticas.service */ "./src/app/shared/services/estadisticas.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InicioComponent = /** @class */ (function () {
    function InicioComponent(router, estadisticasService) {
        this.router = router;
        this.estadisticasService = estadisticasService;
        this.alerts = [];
        this.ingresosChart = this.gastosChart = this.carteraChart = this.clientesChart = false;
        this.datosUsuario = JSON.parse(localStorage.getItem('Datos'));
        if (this.datosUsuario.Perfil == 'Vendedor') {
            this.router.navigate(['/ModuloVentas/']);
        }
    }
    InicioComponent.prototype.ngOnInit = function () { };
    //Reporte de Ingresos 
    InicioComponent.prototype.ingresosResumen = function (event) {
        var _this = this;
        this._desactivarOtrosReportes();
        this.estadisticasService.resumenIngresos().then(function (response) {
            _this.reporteActivo = true;
            console.log('ingresos', response);
            var ingresosProcesados = _this._procesarIngresos(response["Data"]);
            _this.reportesIngresos = ingresosProcesados;
            _this.ingresosChart = _this._pieChartOrder("Resumen de Ingresos", ingresosProcesados);
        }).catch(function (err) {
            _this.reporteActivo = false;
        });
    };
    //Procesa y ordena los datos de ingresos 
    InicioComponent.prototype._procesarIngresos = function (Datos) {
        var tiposIngresos = [];
        var contenidoTipoIngresos = [];
        Datos.forEach(function (dat) {
            tiposIngresos[dat.Tipo_venta] = dat.Tipo_venta;
        });
        Object.keys(tiposIngresos).forEach(function (t) {
            var coincidencias = Datos.filter(function (ob) { return ob.Tipo_venta == t; });
            contenidoTipoIngresos[t] = coincidencias;
        });
        return contenidoTipoIngresos;
    };
    //Reporte de gastos
    InicioComponent.prototype.gastosResumen = function (event) {
        var _this = this;
        this._desactivarOtrosReportes();
        this.estadisticasService.resumenGastos().then(function (response) {
            _this.reporteActivo = true;
            var gastosProcesados = _this._procesarGastos(response["Data"]);
            _this.reportesGastos = gastosProcesados;
            _this.gastosChart = _this._pieChartOrder("Resumen de Gastos", gastosProcesados);
        }).catch(function (err) {
            _this.reporteActivo = false;
        });
    };
    //Procesa y ordena  datos de gastos
    InicioComponent.prototype._procesarGastos = function (Datos) {
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
    //Reporte de la cartera vencida 
    InicioComponent.prototype.carteraResumen = function (event) {
        var _this = this;
        this._desactivarOtrosReportes();
        this.estadisticasService.resumenCartera().then(function (response) {
            _this.reporteActivo = true;
            _this.reportesCartera = response;
            var Datos = [];
            Datos["Saldo Regular"] = response['Data'][0].SaldoRegular;
            Datos["Saldo Vencido"] = response['Data'][0].SaldoVencido;
            _this.carteraChart = _this._pieChartOrder("Resumen de Cartera", Datos);
        }).catch(function (err) {
            _this.reporteActivo = false;
        });
    };
    //Reporte de clientes
    InicioComponent.prototype.clientesResumen = function (event) {
        var _this = this;
        this._desactivarOtrosReportes();
        this.estadisticasService.resumenClientes().then(function (response) {
            _this.reporteActivo = true;
            _this.reportesClientes = response;
            var Datos = [];
            Datos["Con Contacto"] = response['Data'][0].ConContacto;
            Datos["Sin Contacto"] = response['Data'][0].SinContacto;
            _this.clientesChart = _this._pieChartOrder("Resumen de Clientes", Datos);
            //this._pieChartOrder(response['Data'][0]);
        }).catch(function (err) {
            _this.reporteActivo = false;
        });
    };
    //Desactiva los datos visibles de otros reportes
    InicioComponent.prototype._desactivarOtrosReportes = function () {
        this.reporteActivo = this.reportesIngresos = this.reportesGastos = this.reportesCartera = this.reportesClientes =
            this.ingresosChart = this.gastosChart = this.carteraChart = this.clientesChart = false;
    };
    //Ordena los datos de un grafico linear 
    InicioComponent.prototype._linearChart = function (Titulo, Datos) {
        var DatosEtiqueta = [];
        var DatosContenido = [];
        var DatosAcumulado = [];
        Object.keys(Datos).forEach(function (key) {
            DatosEtiqueta.push(key.toString());
            DatosContenido.push(Datos[key].length);
        });
        return [
            { data: DatosContenido, label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
        ];
    };
    //Ordena los datos de una grafica de pastel 
    InicioComponent.prototype._pieChartOrder = function (Titulo, Datos) {
        var DatosEtiqueta = [];
        var DatosContenido = [];
        Object.keys(Datos).forEach(function (key) {
            DatosEtiqueta.push(key.toString());
            DatosContenido.push(Datos[key].length);
        });
        return { Nombre: Titulo, DatosEtiqueta: DatosEtiqueta, DatosContenido: DatosContenido, Datos: Datos, Tipo: "pie", Tabla: false };
    };
    //Click en grafica de clientes
    InicioComponent.prototype.chartClientesClicked = function (e) {
        this.clientesChart.Tabla = false;
        var label = this._interpreteEventoClicked(e);
        var datosClicked = this.clientesChart.Datos[label];
        var datosSelected = { Columnas: ["Nombre", "Direccion", "Contacto", "Fecha_ingreso"], Datos: datosClicked };
        this.clientesChart.Tabla = (this.clientesChart.Tabla) ? false : datosSelected;
        if (this.datatableClientes != null) {
            this.datatableClientes._reiniciarRegistros(datosSelected);
        }
    };
    //Click en grafica de cartera
    InicioComponent.prototype.chartCarteraClicked = function (e) {
        this.carteraChart.Tabla = false;
        var label = this._interpreteEventoClicked(e);
        var datosClicked = this.carteraChart.Datos[label];
        var datosSelected = { Columnas: ["Nombre", "Direccion", "Contacto", "Fecha_ingreso"], Datos: datosClicked };
        this.carteraChart.Tabla = (this.carteraChart.Tabla) ? false : datosSelected;
        if (this.datatableCartera != null) {
            this.datatableCartera._reiniciarRegistros(datosSelected);
        }
    };
    //Click en grafica de gastos
    InicioComponent.prototype.chartGastosClicked = function (e) {
        this.gastosChart.Tabla = false;
        var label = this._interpreteEventoClicked(e);
        var datosClicked = this.gastosChart.Datos[label];
        var datosSelected = { Columnas: ["Folio_gasto", "Concepto", "Responsable", "Total", "Fecha_gasto"], Datos: datosClicked };
        this.gastosChart.Tabla = (this.gastosChart.Tabla) ? false : datosSelected;
        if (this.datatableGastos != null) {
            this.datatableGastos._reiniciarRegistros(datosSelected);
        }
    };
    //Click en grafica de ingresos
    InicioComponent.prototype.chartIngresosClicked = function (e) {
        this.ingresosChart.Tabla = false;
        var label = this._interpreteEventoClicked(e);
        var datosClicked = this.ingresosChart.Datos[label];
        var datosSelected = { Columnas: ["Folio_venta", "IdRecibo", "Pagares", "Total", "Fecha_venta"], Datos: datosClicked };
        this.ingresosChart.Tabla = (this.ingresosChart.Tabla) ? false : datosSelected;
        if (this.datatableIngresos != null) {
            this.datatableIngresos._reiniciarRegistros(datosSelected);
        }
    };
    //Regresa la etiqueta de la grafica que fue seleccionada 
    InicioComponent.prototype._interpreteEventoClicked = function (e) {
        if (e.active.length > 0) {
            var chart = e.active[0]._chart;
            var activePoints = chart.getElementAtEvent(e.event);
            if (activePoints.length > 0) {
                return chart.data.labels[activePoints[0]._index];
            }
        }
    };
    //Hover en grafica 
    InicioComponent.prototype.chartHovered = function (e) {
        console.log('hover');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('datatableClientes'),
        __metadata("design:type", Object)
    ], InicioComponent.prototype, "datatableClientes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('datatableCartera'),
        __metadata("design:type", Object)
    ], InicioComponent.prototype, "datatableCartera", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('datatableGastos'),
        __metadata("design:type", Object)
    ], InicioComponent.prototype, "datatableGastos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('datatableIngresos'),
        __metadata("design:type", Object)
    ], InicioComponent.prototype, "datatableIngresos", void 0);
    InicioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inicio',
            template: __webpack_require__(/*! ./inicio.component.html */ "./src/app/layout/inicio/inicio.component.html"),
            styles: [__webpack_require__(/*! ./inicio.component.scss */ "./src/app/layout/inicio/inicio.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            providers: [_shared_services_estadisticas_service__WEBPACK_IMPORTED_MODULE_3__["EstadisticasService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_estadisticas_service__WEBPACK_IMPORTED_MODULE_3__["EstadisticasService"]])
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "./src/app/layout/inicio/inicio.module.ts":
/*!************************************************!*\
  !*** ./src/app/layout/inicio/inicio.module.ts ***!
  \************************************************/
/*! exports provided: InicioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioModule", function() { return InicioModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio-routing.module */ "./src/app/layout/inicio/inicio-routing.module.ts");
/* harmony import */ var _inicio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inicio.component */ "./src/app/layout/inicio/inicio.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InicioModule = /** @class */ (function () {
    function InicioModule() {
    }
    InicioModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_inicio_routing_module__WEBPACK_IMPORTED_MODULE_1__["InicioRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
            declarations: [_inicio_component__WEBPACK_IMPORTED_MODULE_2__["InicioComponent"]]
        })
    ], InicioModule);
    return InicioModule;
}());



/***/ })

}]);
//# sourceMappingURL=inicio-inicio-module.js.map