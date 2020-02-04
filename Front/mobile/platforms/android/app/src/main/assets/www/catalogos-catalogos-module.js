(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["catalogos-catalogos-module"],{

/***/ "./src/app/layout/catalogos/catalogos-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/catalogos/catalogos-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: CatalogosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogosRoutingModule", function() { return CatalogosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _catalogos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalogos.component */ "./src/app/layout/catalogos/catalogos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _catalogos_component__WEBPACK_IMPORTED_MODULE_2__["CatalogosComponent"]
    }
];
var CatalogosRoutingModule = /** @class */ (function () {
    function CatalogosRoutingModule() {
    }
    CatalogosRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CatalogosRoutingModule);
    return CatalogosRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/catalogos/catalogos.component.html":
/*!***********************************************************!*\
  !*** ./src/app/layout/catalogos/catalogos.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Catalogos'\" [icon]=\"'fa-file'\"></app-page-header>\n    <hr>\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-lg-4\">\n            <app-stat [bgClass]=\"'primary'\" [icon]=\"'fa-map'\" [label]=\"'Catalogo de Terrenos'\" (event)=\"verCatalogoTerrenos($event);\"></app-stat>\n        </div>\n        <div class=\"col-xs-12 col-lg-4\">\n            <app-stat [bgClass]=\"'secondary'\" [icon]=\"'fa-users'\" [label]=\"'Catalogo de Clientes'\" (event)=\"verCatalogoClientes($event);\"></app-stat>\n        </div>\n        <div class=\"col-xs-12 col-lg-4\">\n            <app-stat [bgClass]=\"'info'\" [icon]=\"'fa-book'\" [label]=\"'Datos Cliente'\" (event)=\"verDatosTodos($event);\"></app-stat>\n        </div>        \n    </div>\n    <hr />\n    <!--Catalog de terrenos-->\n    <div class=\"row\" *ngIf=\"catalogoTerrenos\">\n        <div class=\"col-lg-12\">\n            <app-catalogos-terrenos [@routerTransition]></app-catalogos-terrenos>\n        </div>\n    </div>\n    <!--Catalog de clientes-->\n    <div class=\"row\" *ngIf=\"catalogoCliente\">\n        <div class=\"col-lg-12\" [@routerTransition]>\n            <app-catalogo-clientes (vista)=\"catalogoClientes($event);\" (nuevaOperacion)=\"nueva_operacion($event);\" ></app-catalogo-clientes>\n        </div>\n    </div>\n    <!--Catalog de clientes--><!--[@routerTransition]-->\n    <div class=\"row\" *ngIf=\"datosTodos && !detalleCliente && !datosDetalle\"  style=\"overflow: auto;\">\n        <div class=\"col-lg-12\">\n            <br>\n            <button class=\"btn btn-success float-right\" (click)=\"generarNuevoCliente();\"><i class=\"fa fa-plus-circle\"></i> Nuevo </button>\n            <br><br>\n        </div>\n        <div class=\"col-lg-4\"> \n            <h4> Información General de Lotes </h4>\n            <input type=\"text\" class=\"form-control\" (keyup)=\"buscarEn();\" placeholder=\"Filtrar Clientes 'Nombre' 'Terreno' 'Estatus' \" [(ngModel)]=\"textoBuscar\">\n        </div>\n        <div class=\"col-lg-6\"> \n            <div class=\"row\">\n                    <div class=\"col-lg-4\">\n                        <h4> Parcela </h4>\n                        <input id=\"typeahead-format\" (keyup)=\"buscarEn();\"   placeholder=\"Parcela:\" type=\"text\" class=\"form-control\" [(ngModel)]=\"parcelaFiltro\" [ngbTypeahead]=\"filtrarParcelas\" (selectItem)=\"parcelaFiltro = $event.item; buscarEn();\" [resultFormatter]=\"formatter\" />\n                        <!-- <select  class=\"form-control\" [(ngModel)]=\"parcelaFiltro\" (change)=\"filtrarTerrenos();\" >\n                            <option value=\"0\">Todas</option>\n                            <option  *ngFor=\"let e of parcelas;\" value=\"{{e.parcela}}\">{{e.parcela}}</option>\n                        </select> -->\n                    </div>\n                    <div class=\"col-lg-4\">\n                        <h4> Lote </h4>\n                        <input id=\"typeahead-format\" (keyup)=\"buscarEn();\"  placeholder=\"Lote:\" type=\"text\" class=\"form-control\" [(ngModel)]=\"loteFiltro\" [ngbTypeahead]=\"filtrarLotes\" (selectItem)=\"loteFiltro = $event.item; buscarEn();\"  [resultFormatter]=\"formatter\" />\n                        <!-- <select  class=\"form-control\" [(ngModel)]=\"loteFiltro\" (change)=\"filtrarTerrenos();\" >\n                            <option value=\"0\">Todos</option>\n                            <option  *ngFor=\"let e of lotes;\" value=\"{{e.lote}}\">{{e.lote}}</option>\n                        </select> -->\n                    </div>\n                    <div class=\"col-lg-4\"> \n                        <h4> Estapa </h4>\n                        <input id=\"typeahead-format\" (keyup)=\"buscarEn();\"  placeholder=\"Etapa:\" type=\"text\" class=\"form-control\" [(ngModel)]=\"etapaFiltro\" [ngbTypeahead]=\"filtrarEtapas\" (selectItem)=\"etapaFiltro = $event.item; buscarEn();\" [resultFormatter]=\"formatter\" />\n                        <!-- <select  class=\"form-control\" [(ngModel)]=\"etapaFiltro\" (change)=\"filtrarTerrenos();\" >\n                            <option value=\"0\">Todas</option>\n                            <option  *ngFor=\"let e of etapas;\" value=\"{{e.etapa}}\">{{e.etapa}}</option>\n                        </select> -->\n                    </div>     \n                <!-- <div class=\"col-lg-4\">\n                    <h4> Parcela </h4>\n                    <select  class=\"form-control\" [(ngModel)]=\"parcelaFiltro\" (change)=\"buscarEn();\" >\n                        <option value=\"0\">Todas</option>\n                        <option  *ngFor=\"let e of parcelas;\" value=\"{{e.parcela}}\">{{e.parcela}}</option>\n                    </select>\n                </div>                                    \n                <div class=\"col-lg-4\">\n                    <h4> Lote </h4>\n                    <select  class=\"form-control\" [(ngModel)]=\"loteFiltro\" (change)=\"buscarEn();\" >\n                        <option value=\"0\">Todos</option>\n                        <option  *ngFor=\"let e of lotes;\" value=\"{{e.lote}}\">{{e.lote}}</option>\n                    </select>\n                </div>\n                <div class=\"col-lg-4\"> \n                    <h4> Etapa </h4>\n                    <select  class=\"form-control\" [(ngModel)]=\"etapaFiltro\" (change)=\"buscarEn();\" >\n                        <option value=\"0\">Todas</option>\n                        <option  *ngFor=\"let e of etapas;\" value=\"{{e.etapa}}\">{{e.etapa}}</option>\n                    </select>\n                </div> -->\n            </div>\n        </div>\n        <div class=\"col-lg-2\">\n            <h4> Estatus </h4>\n            <select  class=\"form-control\" [(ngModel)]=\"estatusFiltro\" (change)=\"buscarEn();\" >\n                <option value=\"0\">Todos</option>\n                <option  *ngFor=\"let e of estatusTodos;\" value=\"{{e.Estatus}}\">{{e.Estatus}}</option>\n            </select>            \n        </div>\n        \n        <div class=\"col-lg-12\" >\n            <br>\n            <table class=\"table table-striped  table-hover\">\n                <tr>\n                    <th>Cliente</th>\n<!--                    <th># Terrenos</th>-->\n                    <th>Terrenos</th>\n                    <th>\n                        <b style=\"cursor:pointer;\" (click)=\"cambiarOrden('Saldo_credito');\">\n                            Saldo del credito\n                            <i  class=\"fa fa-care t-{{(datosTodos.Ordenes)?datosTodos.Ordenes.Saldo_credito:''}}\"></i>\n                        </b>\n                    </th>\n                    <th>\n                        <b style=\"cursor:pointer;\" (click)=\"cambiarOrden('Saldo_mantenimiento');\">\n                            Saldo de Mantenimiento\n                            <i  class=\"fa fa-caret-{{(datosTodos.Ordenes)?datosTodos.Ordenes.Saldo_mantenimiento:''}}\"></i>\n                        </b>\n                    </th>\n                    <th>\n                        <b style=\"cursor:pointer;\" (click)=\"cambiarOrden('Estatus');\">\n                            Estatus\n                            <i  class=\"fa fa-caret-{{(datosTodos.Ordenes)?datosTodos.Ordenes.Estatus:''}}\"></i>\n                        </b>\n                    </th>\n<!--                    <th>\n                        <b style=\"cursor:pointer;\" (click)=\"cambiarOrden('Saldo_certificado');\">\n                            Saldo del Certificado\n                            <i  class=\"fa fa-caret-{{(datosTodos.Ordenes)?datosTodos.Ordenes.Saldo_certificado:''}}\"></i>\n                        </b>\n                    </th>\n\n                    <th>\n                        <b style=\"cursor:pointer;\" (click)=\"cambiarOrden('Saldo_agua');\">\n                            Saldo de Agua\n                            <i  class=\"fa fa-caret-{{(datosTodos.Ordenes)?datosTodos.Ordenes.Saldo_agua:''}}\"></i>\n                        </b>\n                    </th>-->\n                    <th>Ajustes</th>\n                </tr>\n                <tr *ngFor=\"let d of datosTodos.Datos | paginate: { itemsPerPage: 10, currentPage: this.datosPage }\">\n                    <td>{{d.Nombre}}</td>\n<!--                    <td>{{d.Terrenos.length}}</td>-->\n                    <td>{{d.InfoTerrenos}}</td>\n                    <td>$ {{d.Saldo_credito |number }}</td>\n                    <td>$ {{d.Saldo_mantenimiento |number }}</td>\n                    <td>{{d.Estado}}</td>\n<!--                    <td>$ {{d.Saldo_certificado | number}} </td>\n                    <td>$ {{d.Saldo_agua | number}} </td>-->\n                    <td>\n<!--                        <button class=\"btn btn-primary\" style=\"color: #fff ;\" (click)=\"this.detalleCliente = false; this.datosDetalle = d; \"> Procesar | <i class=\"fa fa-arrow-right\"></i> </button>-->\n                        <button class=\"btn btn-info\" style=\"color: #fff ;\" (click)=\"this.datosDetalle = false; this.detalleCliente = d; \"> Editar | <i class=\"fa fa-edit\"></i> </button>\n<!--                        <button class=\"btn btn-info\" style=\"color: #fff ;\" (click)=\"this.datosCliente = false; this.detalleCliente = {Opciones:{Editar:true, Eliminar: true},Datos:d.Terrenos};\"> Editar | <i class=\"fa fa-edit\"></i></button>-->\n                    </td>\n                </tr>\n            </table>\n            <div class=\"text-right\" >\n                <pagination-controls (pageChange)=\"this.datosPage = $event\" ></pagination-controls>\n            </div>            \n<!--            <app-datatables-general #datatableDatosTodos *ngIf=\"datosTodos\" [datosDatatable]=\"datosTodos\"  ></app-datatables-general>-->\n        </div>\n    </div>\n    <div class=\"row\" *ngIf=\"datosDetalle || detalleCliente\">\n        <div class=\"col-lg-12\">\n            <button class=\"btn btn-primary pull-right\" (click)=\"verDatosTodos({});\" >Ver Todos</button>\n<!--            <button class=\"btn btn-primary pull-right\" (click)=\"this.datosDetalle = false; this.detalleCliente = false;\" >Ver Todos</button>-->\n            <br><br>\n        </div>\n    </div>\n<!--    <div class=\"row\" *ngIf=\"datosDetalle && !detalleCliente\">\n        <div class=\"col-xs-12\" style=\"overflow: auto;\">\n            <app-formulario-clientes [datosCliente]=\"datosDetalle\" ></app-formulario-clientes>\n        </div>\n    </div>-->\n    <div class=\"row\" *ngIf=\"detalleCliente && !datosDetalle\">\n        <div class=\"col-lg-12\" *ngIf=\"checksTerrenos.length > 0\">\n            <button class=\"btn btn-danger pull-right\" (click)=\"confirmarEliminarRegistros();\">Eliminar</button>\n            <button class=\"btn btn-warning pull-right\" (click)=\"verEditarCampos();\">Editar</button>\n        </div>\n        <div class=\"col-lg-12\" style=\"overflow: auto;\">\n            <app-formulario-clientes-separado [Nuevo]=\"true\" [datosCliente]=\"detalleCliente\" (vista)=\"this.detalleCliente = false\" ></app-formulario-clientes-separado>\n<!--            <app-datatables-general #datatableDetalles *ngIf=\"detalleCliente\" (checks)=\"asignarChecks($event);\" (edit)=\"editarRegistro($event);\" (delete)=\"eliminarRegistro($event);\" [datosDatatable]=\"detalleCliente\" ></app-datatables-general>-->\n        </div>\n    </div>\n    <div >\n        <!--Venta regular-->\n        <app-venta *ngIf=\"ingresoNuevo\" [datosVenta]=\"datosVenta\"  [@routerTransition]></app-venta>\n        <!--Catalogo Clientes-->\n        <app-catalogo-clientes *ngIf=\"clientesCatalogos\" (vista)=\"catalogoClientes($event);\" (nuevaOperacion)=\"nueva_operacion($event);\" [@routerTransition]></app-catalogo-clientes>\n        <!--Mantenimiento-->\n        <app-mantenimiento *ngIf=\"mantenimientoNuevo\" [datosMantenimiento]=\"datosMantenimiento\" [@routerTransition]></app-mantenimiento>\n        <!--Ingresos Extra-->\n        <app-ingresos-extra *ngIf=\"ingresosExtraNuevo\" [datosIngresosExtras]=\"datosIngresosExtra\"  [@routerTransition]></app-ingresos-extra>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/layout/catalogos/catalogos.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/layout/catalogos/catalogos.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-info {\n  color: #fff;\n  background-color: #359B83 !important;\n  border-color: #46b8da; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #10798D !important;\n  border-color: #46b8da; }\n\n.btn-warning {\n  color: #fff;\n  background-color: #2A8901 !important;\n  border-color: #46b8da; }\n\n.btn-danger {\n  color: #fff;\n  background-color: #955006 !important;\n  border-color: #46b8da; }\n\n.btn-secondary {\n  color: #fff;\n  background-color: #232E5C !important;\n  border-color: #46b8da; }\n\n.btn-danger-clasic {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d43f3a; }\n\n.btn-danger-clasic:focus, .btn-danger-clasic:hover, .btn-danger-clasic.focus {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #ac2925; }\n\n.btn-info:focus, .btn-info:hover, .btn-info.focus {\n  color: #fff;\n  background-color: #396B57 !important;\n  border-color: #174935; }\n\n.btn-primary:focus, .btn-primary:hover, .btn-primary.focus {\n  color: #fff;\n  background-color: #10798D !important;\n  border-color: #46b8da; }\n\n.btn-warning:focus, .btn-warning:hover, .btn-warning.focus {\n  color: #fff;\n  background-color: #2D6E00 !important;\n  border-color: #0a2a1c; }\n\n.btn-danger:focus, .btn-danger:hover, .btn-danger.focus {\n  color: #fff;\n  background-color: #7F4700 !important;\n  border-color: #623900; }\n\n.btn-secondary:focus, .btn-secondary:hover, .btn-secondary.focus {\n  color: #fff;\n  background-color: #2D3854 !important;\n  border-color: #0c0d35; }\n\n.bg-info {\n  color: #fff;\n  background-color: #359B83 !important;\n  border-color: #46b8da; }\n\n.bg-primary {\n  color: #fff;\n  background-color: #10798D !important;\n  border-color: #46b8da; }\n\n.bg-warning {\n  color: #fff;\n  background-color: #2A8901 !important;\n  border-color: #46b8da; }\n\n.bg-danger {\n  color: #fff;\n  background-color: #955006 !important;\n  border-color: #46b8da; }\n\n.bg-secondary {\n  color: #fff;\n  background-color: #232E5C !important;\n  border-color: #46b8da; }\n"

/***/ }),

/***/ "./src/app/layout/catalogos/catalogos.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/catalogos/catalogos.component.ts ***!
  \*********************************************************/
/*! exports provided: CatalogosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogosComponent", function() { return CatalogosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_catalogos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/catalogos.service */ "./src/app/shared/services/catalogos.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
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






var CatalogosComponent = /** @class */ (function () {
    function CatalogosComponent(fb, catalogosService) {
        var _this = this;
        this.fb = fb;
        this.catalogosService = catalogosService;
        this.checksTerrenos = [];
        this.parcelas = [];
        this.lotes = [];
        this.etapas = [];
        this.estatusTodos = [];
        this.filtrarParcelas = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (term) { return term === '' ? [] : _this.parcelas.map(function (o) { return o.parcela; }).filter(function (ob) { return ("" + ob).toUpperCase().indexOf(term.toUpperCase()) > -1; }); }));
        };
        this.filtrarLotes = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (term) { return term === '' ? [] : _this.lotes.map(function (o) { return o.lote; }).filter(function (ob) { return ("" + ob).toUpperCase().indexOf(term.toUpperCase()) > -1; }); }));
        };
        this.filtrarEtapas = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (term) { return term === '' ? [] : _this.etapas.map(function (o) { return o.etapa; }).filter(function (ob) { return ("" + ob).toUpperCase().indexOf(term.toUpperCase()) > -1; }); }));
        };
        //this.parcelaFiltro = this.loteFiltro = this.etapaFiltro = 
        this.estatusFiltro = '0';
        this.frmCliente = fb.group({
            'Nombre': null,
            'Correo': null,
            'NumIfe': null,
            'Origen': null,
            'Direccion': null,
            'Telefono': null,
            'Fecha_nacimiento': null,
            'Ref1': null,
            'Ref2': null,
            'Ref3': null,
            'TelRef_1': null,
            'TelRef_2': null,
            'TelRef_3': null,
            'Saldo_agua': null,
            'Importe_mantenimiento': null,
            'Fecha_mantenimiento': null,
            'Fecha_adeudo_mantenimiento': null,
            'Saldo_mantenimiento': null,
            'Saldo_adeudo': null,
            'Saldo_anualidad': null,
            'Credito_original': null,
            'Saldo_certificado': null,
            'Saldo_credito': null,
            'Periodo_cobro': null,
            'Observaciones': null,
            'ObservacionesDatos': null,
            'ObservacionesMantenimiento': null,
            'FileIFE': null,
            'FileComprobante': null,
            'Terrenos': []
        });
    }
    CatalogosComponent.prototype.ngOnInit = function () { };
    CatalogosComponent.prototype.buscarEn = function () {
        var _this = this;
        var dataFiltrada;
        if ((this.textoBuscar) && this.datosTodosTotales) {
            var datosCoincidencia_1 = [];
            this.datosTodosTotales.forEach(function (dat) {
                var validado = false;
                if (_this.textoBuscar) {
                    if (dat.Nombre.toString().toUpperCase().indexOf(_this.textoBuscar.toUpperCase()) > -1) {
                        validado = true;
                    }
                    if (dat.Estado.toString().toUpperCase().indexOf(_this.textoBuscar.toUpperCase()) > -1) {
                        validado = true;
                    }
                    /*                if(dat.Partidas[0]){
                                        dat.Partidas.forEach(dp=>{
                                        let producto = (dp.Producto)?dp.Producto:(dp.Articulo)?dp.Articulo:``;
                                        if(producto.toString().toUpperCase().indexOf(this.textoBuscar.toUpperCase()) > -1){
                                            validado = true;
                                        }
                                        });
                                    }*/
                }
                if (validado) {
                    datosCoincidencia_1.push(dat);
                }
            });
            dataFiltrada = datosCoincidencia_1;
        }
        else {
            dataFiltrada = this.datosTodosTotales;
        }
        //        console.log('datafiltrada',dataFiltrada);
        var datosF = [];
        dataFiltrada.forEach(function (d) {
            d.Terrenos.forEach(function (t) {
                datosF.push(t);
            });
        });
        //        console.log('datosF',datosF);
        // datosF = (this.parcelaFiltro != '0')?datosF.filter(f=>f['PARCELA'] == this.parcelaFiltro):datosF;
        // datosF = (this.loteFiltro != '0')?datosF.filter(f=>f['LOTE'] == this.loteFiltro):datosF;
        // datosF = (this.etapaFiltro != '0')?datosF.filter(f=>f['ETAPA'] == this.etapaFiltro):datosF;
        datosF = (this.parcelas.find(function (o) { return o.parcela == _this.parcelaFiltro; })) ? datosF.filter(function (f) { return f['PARCELA'] == _this.parcelaFiltro; }) : datosF;
        datosF = (this.lotes.find(function (o) { return o.lote == _this.loteFiltro; })) ? datosF.filter(function (f) { return f['LOTE'] == _this.loteFiltro; }) : datosF;
        datosF = (this.etapas.find(function (o) { return o.etapa == _this.etapaFiltro; })) ? datosF.filter(function (f) { return f['ETAPA'] == _this.etapaFiltro; }) : datosF;
        datosF = (this.estatusFiltro != '0') ? datosF.filter(function (f) { return f['ESTADO'] == _this.estatusFiltro; }) : datosF;
        var datosOrd = this._ordenarDatosTodos(datosF);
        console.log('datosF', datosF);
        this._recorrerFiltros(datosOrd);
        this.datosTodos.Datos = datosOrd;
    };
    CatalogosComponent.prototype.verCatalogoTerrenos = function (event) {
        this._limpiarVistas();
        this.catalogoTerrenos = true;
    };
    CatalogosComponent.prototype.verCatalogoClientes = function (event) {
        this._limpiarVistas();
        this.catalogoCliente = true;
    };
    CatalogosComponent.prototype.verDatosTodos = function () {
        var _this = this;
        this._limpiarVistas();
        this.catalogosService.obtenerDatosTodos().then(function (res) {
            var datos = _this._ordenarDatosTodos(res['Datos']);
            //            console.log('datos',datos);
            _this.datosTodosTotales = datos;
            _this._recorrerFiltros(datos);
            _this.datosTodos = { Datos: datos, Ordenes: { Saldo_credito: '', Saldo_certificado: '', Saldo_mantenimiento: '', Saldo_agua: '' } };
            /*if(this.datatableDatosTodos != null){
                this.datatableDatosTodos._reiniciarRegistros(this.datosTodos);
            }*/
            //console.log('datosTodos',this.datosTodos);
        }).catch(function (err) {
            console.log('err', err);
        });
    };
    CatalogosComponent.prototype._recorrerFiltros = function (datos) {
        var _this = this;
        //        console.log('dat para fil',datos);
        this.parcelas = [];
        this.lotes = [];
        this.etapas = [];
        this.estatusTodos = [];
        if (datos) {
            datos.forEach(function (d) {
                d.Terrenos.forEach(function (t) {
                    var existePar = _this.parcelas.find(function (pa) { return pa.parcela == t['PARCELA']; });
                    if (!existePar) {
                        _this.parcelas.push({ parcela: t['PARCELA'] });
                    }
                    var existeEta = _this.etapas.find(function (pa) { return pa.etapa == t['ETAPA']; });
                    if (!existeEta) {
                        _this.etapas.push({ etapa: t['ETAPA'] });
                    }
                    var existeLot = _this.lotes.find(function (pa) { return pa.lote == t['LOTE']; });
                    if (!existeLot) {
                        _this.lotes.push({ lote: t['LOTE'] });
                    }
                    var existeEst = _this.estatusTodos.find(function (pa) { return pa.Estatus == t['ESTADO']; });
                    if (!existeEst) {
                        _this.estatusTodos.push({ Estatus: t['ESTADO'] });
                    }
                });
            });
        }
    };
    CatalogosComponent.prototype.asignarChecks = function (event) {
        //console.log('even',event);
        this.checksTerrenos = event;
        //console.log('even',this.checksTerrenos);
    };
    CatalogosComponent.prototype.verEditarCampos = function () {
        if (this.checksTerrenos.length > 0) {
        }
    };
    CatalogosComponent.prototype.generarNuevoCliente = function () {
        this.detalleCliente = { Terrenos: [{ Id: 0, Cotizacion: [{ IdCotizacion: 0 }] }] };
    };
    CatalogosComponent.prototype.editarRegistro = function (obj) {
        var _this = this;
        var datosArray = [];
        Object.keys(obj).forEach(function (key) {
            datosArray.push({ llave: "" + key, valor: "" + obj[key] });
        });
        var datosModificar = { Id: obj.Obj.Id, Datos: datosArray };
        //console.log('obj',datosModificar);
        this.catalogosService.modificarDatosTodos(datosModificar).then(function (res) {
            _this.verDatosTodos();
        }).catch(function (err) {
            console.log('err', err);
        });
    };
    CatalogosComponent.prototype.eliminarRegistro = function (obj) {
        var _this = this;
        var datosArray = [];
        Object.keys(obj).forEach(function (key) {
            datosArray.push({ llave: "" + key, valor: "" + obj[key] });
        });
        var ids = [{ Id: obj.Id }];
        var datosModificar = { Ids: ids };
        //console.log('obj',datosModificar);
        this.catalogosService.modificarDatosTodos(datosModificar).then(function (res) {
            _this.verDatosTodos();
        }).catch(function (err) {
            console.log('err', err);
        });
    };
    CatalogosComponent.prototype._ordenarDatosTodos = function (datos) {
        var _this = this;
        var datosOrdenados = [];
        datos.forEach(function (d) {
            var existeOrdenados = datosOrdenados.find(function (dd) { return dd.Nombre.trim() == d["NOMBRE DEL CLIENTE"].trim(); });
            if (!existeOrdenados) {
                var terrenos = datos.filter(function (da) { return da["NOMBRE DEL CLIENTE"].trim() == d["NOMBRE DEL CLIENTE"].trim(); });
                var infoT_1 = '';
                var FechaMantenimiento_1 = '';
                var FechaAdeudoMantenimiento_1 = '';
                var ImporteMantenimiento_1 = 0;
                var SaldoMantenimiento_1 = 0;
                var PeriodoCobro_1 = 0;
                var SaldoAgua_1 = 0;
                var SaldoAdeudo_1 = 0;
                var CreditoOriginal_1 = 0;
                var SaldoCertificado_1 = 0;
                var SaldoCredito_1 = 0;
                var SaldoAnualidad_1 = 0;
                if (terrenos[0]) {
                    var cont_1 = 1;
                    terrenos.forEach(function (t) {
                        //DATOS COTIZACION 
                        t.Cotizacion = {
                            IdCotizacion: 0,
                            Nombre: "Sistema_auto_" + t['PARCELA'] + "_" + cont_1,
                            Enganche: _this._datoNumerico(t['ENGANCHE']),
                            EnganchePagado: _this._datoNumerico(t['CANTIDAD DEL ENGANCHE PAGADO']),
                            Credito: _this._datoNumerico(t['SALDO DEL CREDITO']),
                            Tasa: _this._datoNumerico(t['INTERES']),
                            Num_pagos: _this._datoNumerico(t['NUMERO MENSUALIDADES']),
                            Num_pagos_pagados: _this._datoNumerico(t['CANTIDAD DE MENSUALIDADES PAGADAS']),
                            Fecha_inicio: (t['FECHA PRIMERA MENSUALIDAD'] != 0 && moment__WEBPACK_IMPORTED_MODULE_4__(t['FECHA PRIMERA MENSUALIDAD']).isValid()) ? "" + moment__WEBPACK_IMPORTED_MODULE_4__(t['FECHA PRIMERA MENSUALIDAD']) : '-',
                            Superficie: _this._datoNumerico(t['SUPERFICIE']),
                            Precio_metro: _this._datoNumerico(t['COSTO DEL M2 EN VENTA']),
                            Costo_total: _this._datoNumerico(t['SALDO DEL CREDITO']),
                            Mensualidad: _this._datoNumerico(t['CANTIDAD DE MENSUALID']),
                            Fecha_inicio_anualidad: (t['FECHA PRIMERA ANUALIDAD'] != 0 && moment__WEBPACK_IMPORTED_MODULE_4__(t['FECHA PRIMERA ANUALIDAD']).isValid()) ? "" + moment__WEBPACK_IMPORTED_MODULE_4__(t['FECHA PRIMERA ANUALIDAD']).format('YYYY-MM-DD') : "",
                            Num_anualidades: _this._datoNumerico(t['NUMERO DE ANUALIDADES']),
                            Num_anualidades_pagadas: _this._datoNumerico(t['CANTIDAD DE ANUALIDADES PAGADAS']),
                            Anualidad: _this._datoNumerico(t['CANTIDAD ANUALIDADES']),
                            Fecha_cotizacion: "" + moment__WEBPACK_IMPORTED_MODULE_4__().format('YYYY-MM-DD'),
                            //Extras
                            Saldo_agua: (_this._datoNumerico(t['CONTRATO DEL AGUA']) - _this._datoNumerico(t['CANTIDAD ABONADA A CONTRATO AGUA'])),
                            ImporteMantenimiento: _this._datoNumerico(t['CUOTA MANTENIMIENTO']),
                            PeriodoCobro: (t['MODO DE COBRO DE MANTEMIENTO (MENSUAL O SEMESTRAL)'].indexOf('6') > -1) ? 6 : (t['MODO DE COBRO DE MANTEMIENTO (MENSUAL O SEMESTRAL)'].indexOf('1') > -1) ? 1 : 0,
                            FechaMantenimiento: (t['FECHA DE COBRO PRIMER MANTENIMIENTO'] && t['FECHA DE COBRO PRIMER MANTENIMIENTO'] != '-') ? (moment__WEBPACK_IMPORTED_MODULE_4__(t['FECHA DE COBRO PRIMER MANTENIMIENTO']).isValid()) ? "" + moment__WEBPACK_IMPORTED_MODULE_4__(t['FECHA DE COBRO PRIMER MANTENIMIENTO']).format('YYYY-MM-DD') : '' : '',
                            //                            FechaAdeudoMantenimiento:(t['TIEMPO DE DEUDA MANTENIMIENTO'] && t['TIEMPO DE DEUDA MANTENIMIENTO'] != '-')?(moment(t['TIEMPO DE DEUDA MANTENIMIENTO']).isValid())?`${moment(t['TIEMPO DE DEUDA MANTENIMIENTO']).format('YYYY-MM-DD')}`:'':'',
                            //                            FechaAdeudoMantenimiento:(t['TIEMPO DE DEUDA MANTENIMIENTO'] && t['TIEMPO DE DEUDA MANTENIMIENTO'] != '-')?`${t['TIEMPO DE DEUDA MANTENIMIENTO']}`:'',
                            SaldoCertificado: (_this._datoNumerico(t['DEUDA CERTIFICADO']) - _this._datoNumerico(t['CANTIDAD ABONADA A CERTIFICADP'])),
                            Estado: "" + t['ESTADO'],
                        };
                        t.Cotizacion.Enganche_Actual = (t.Cotizacion.Enganche - t.Cotizacion.EnganchePagado);
                        t.Cotizacion.Num_pagos_Actual = (t.Cotizacion.Num_pagos - t.Cotizacion.Num_pagos_pagados);
                        t.Cotizacion.Num_pagos_anualidad_Actual = (t.Cotizacion.Num_anualidades - t.Cotizacion.Num_anualidades_pagadas);
                        //DATOS DE SALDOS DE AGUA 
                        SaldoAgua_1 += (_this._datoNumerico(t['CONTRATO DEL AGUA']) - _this._datoNumerico(t['CANTIDAD ABONADA A CONTRATO AGUA']));
                        //DATOS INFORMACION TERRENOS
                        infoT_1 += " (" + cont_1 + ") Parcela:" + t['PARCELA'] + "-Etapa:" + t['ETAPA'] + "-Lote:" + t['LOTE'] + ";";
                        //DATOS MANTENIMIENTO
                        SaldoMantenimiento_1 += _this._datoNumerico(t['DEUDA DE MANTENIMIENTO 2018']);
                        ImporteMantenimiento_1 += _this._datoNumerico(t['CUOTA MANTENIMIENTO']);
                        if (PeriodoCobro_1 == 0) {
                            PeriodoCobro_1 = (t['MODO DE COBRO DE MANTEMIENTO (MENSUAL O SEMESTRAL)'].indexOf('6') > -1) ? 6 : (t['MODO DE COBRO DE MANTEMIENTO (MENSUAL O SEMESTRAL)'].indexOf('1') > -1) ? 1 : 0;
                        }
                        if (FechaMantenimiento_1 == '') {
                            FechaMantenimiento_1 = (t['FECHA DE COBRO PRIMER MANTENIMIENTO'] && t['FECHA DE COBRO PRIMER MANTENIMIENTO'] != '-') ? (moment__WEBPACK_IMPORTED_MODULE_4__(t['FECHA DE COBRO PRIMER MANTENIMIENTO']).isValid()) ? "" + moment__WEBPACK_IMPORTED_MODULE_4__(t['FECHA DE COBRO PRIMER MANTENIMIENTO']).format('YYYY-MM-DD') : '' : '';
                        }
                        if (FechaAdeudoMantenimiento_1 == '') {
                            //                            console.log('FechaAdeudoMantenimiento',FechaAdeudoMantenimiento);
                            //                            FechaAdeudoMantenimiento = t['TIEMPO DE DEUDA MANTENIMIENTO'];
                            FechaAdeudoMantenimiento_1 = (t['TIEMPO DE DEUDA MANTENIMIENTO'] && t['TIEMPO DE DEUDA MANTENIMIENTO'] != '-') ? (moment__WEBPACK_IMPORTED_MODULE_4__(t['TIEMPO DE DEUDA MANTENIMIENTO']).isValid()) ? "" + moment__WEBPACK_IMPORTED_MODULE_4__(t['TIEMPO DE DEUDA MANTENIMIENTO']).format('YYYY-MM-DD') : '' : '';
                        }
                        //DATOS CREDITO Y ADEUDOS
                        SaldoAdeudo_1 += (t.Cotizacion.Enganche - t.Cotizacion.EnganchePagado);
                        CreditoOriginal_1 += (t.Cotizacion.Credito);
                        SaldoCertificado_1 += (_this._datoNumerico(t['DEUDA CERTIFICADO']) - _this._datoNumerico(t['CANTIDAD ABONADA A CERTIFICADP']));
                        SaldoCredito_1 += (t.Cotizacion.Num_pagos * t.Cotizacion.Mensualidad) - (t.Cotizacion.Num_pagos_pagados * t.Cotizacion.Mensualidad);
                        SaldoAnualidad_1 += (t.Cotizacion.Num_anualidades * t.Cotizacion.Anualidad) - (t.Cotizacion.Num_anualidades_pagadas * t.Cotizacion.Anualidad);
                        cont_1++;
                    });
                }
                datosOrdenados.push({
                    Nombre: d["NOMBRE DEL CLIENTE"].trim(),
                    Correo: d["CORREO"].trim(),
                    NumIfe: d["NUMERO DE INE"].trim(),
                    Origen: d["LUGAR DE ORIGEN"].trim(),
                    Direccion: d["DIRECCION"].trim(),
                    Telefono: d["TELEFONO"].trim(),
                    Fecha_nacimiento: (moment__WEBPACK_IMPORTED_MODULE_4__(d["FECHA DE NACIMIENTO CLIENTE ACTUAL"].trim()).isValid()) ? "" + moment__WEBPACK_IMPORTED_MODULE_4__(d["FECHA DE NACIMIENTO CLIENTE ACTUAL"].trim()).format('YYYY-MM-DD') : '-',
                    Ref1: d["NOMBRE REFERENCIA 1"].trim(),
                    Ref2: d["NOMBRE REFERENCIA 2"].trim(),
                    Ref3: d["NOMBRE REFERENCIA 3"].trim(),
                    TelRef_1: d["TELEFONO REFERENCIA 1"].trim(),
                    TelRef_2: d["TELEFONO REFERENCIA 2"].trim(),
                    TelRef_3: d["TELEFONO REFERENCIA 3"].trim(),
                    Estado: (d["ESTADO"] != '-') ? d["ESTADO"] : 'SIN ESTADO',
                    Saldo_agua: SaldoAgua_1,
                    Importe_mantenimiento: ImporteMantenimiento_1,
                    Fecha_mantenimiento: FechaMantenimiento_1,
                    Fecha_adeudo_mantenimiento: FechaAdeudoMantenimiento_1,
                    Saldo_mantenimiento: SaldoMantenimiento_1,
                    Saldo_adeudo: SaldoAdeudo_1,
                    Saldo_anualidad: SaldoAnualidad_1,
                    Credito_original: CreditoOriginal_1,
                    Saldo_credito: SaldoCredito_1,
                    Saldo_certificado: SaldoCertificado_1,
                    Periodo_cobro: PeriodoCobro_1,
                    InfoTerrenos: infoT_1,
                    Terrenos: terrenos,
                    ObjCompleto: d
                });
            }
        });
        return datosOrdenados;
    };
    CatalogosComponent.prototype._datoNumerico = function (dat) {
        if (("" + dat).trim().split('$').join('').split(',').join('') && ("" + dat).trim().split('$').join('').split(',').join('') != '-') {
            return parseFloat(("" + dat).trim().split('$').join('').split(',').join(''));
        }
        return 0;
    };
    CatalogosComponent.prototype.cambiarOrden = function (col) {
        this.datosTodos.Ordenes["" + col];
        this.datosTodos.Ordenes["" + col] = (this.datosTodos.Ordenes["" + col] == 'down') ? 'up' : "down";
        var reorden;
        if (this.datosTodos.Ordenes["" + col] == 'down') {
            reorden = this.datosTodos.Datos.sort(function (a, b) {
                if (a["" + col] === b["" + col]) {
                    return 0;
                }
                else {
                    return (a["" + col] < b["" + col]) ? -1 : 1;
                }
            });
        }
        else {
            reorden = this.datosTodos.Datos.reverse(function (a, b) {
                if (a["" + col] === b["" + col]) {
                    return 0;
                }
                else {
                    return (a["" + col] < b["" + col]) ? -1 : 1;
                }
            });
        }
    };
    CatalogosComponent.prototype.datosDetalles = function (obj) {
        var datosOrdenados = { Datos: obj.Terrenos };
        if (this.datatableDetalles != null) {
            this.datatableDetalles._reiniciarRegistros(datosOrdenados);
        }
        this.detalleCliente = datosOrdenados;
    };
    CatalogosComponent.prototype.datosEditar = function (obj) {
        var datosOrdenados = { Datos: obj.Terrenos };
        if (this.datatableDetalles != null) {
            this.datatableDetalles._reiniciarRegistros(datosOrdenados);
        }
        this.detalleCliente = datosOrdenados;
    };
    CatalogosComponent.prototype.nueva_operacion = function (evento) {
        this._limpiarVistas();
        if (evento.Operacion == 1) {
            this.ingresoNuevo = true;
            this.datosVenta = evento.cliente;
        }
        else if (evento.Operacion == 2) {
            this.mantenimientoNuevo = true;
            this.datosMantenimiento = evento.cliente;
        }
    };
    CatalogosComponent.prototype._limpiarVistas = function () {
        this.datosTodos = this.detalleCliente = this.datosDetalle = this.ingresoNuevo = this.mantenimientoNuevo = this.datosMantenimiento = this.catalogoTerrenos = this.catalogoCliente = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('datatableDatosTodos'),
        __metadata("design:type", Object)
    ], CatalogosComponent.prototype, "datatableDatosTodos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('datatableClientes'),
        __metadata("design:type", Object)
    ], CatalogosComponent.prototype, "datatableClientes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('datatableDetalles'),
        __metadata("design:type", Object)
    ], CatalogosComponent.prototype, "datatableDetalles", void 0);
    CatalogosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-catalogos',
            template: __webpack_require__(/*! ./catalogos.component.html */ "./src/app/layout/catalogos/catalogos.component.html"),
            styles: [__webpack_require__(/*! ./catalogos.component.scss */ "./src/app/layout/catalogos/catalogos.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            providers: [_shared_services_catalogos_service__WEBPACK_IMPORTED_MODULE_3__["CatalogosService"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _shared_services_catalogos_service__WEBPACK_IMPORTED_MODULE_3__["CatalogosService"]])
    ], CatalogosComponent);
    return CatalogosComponent;
}());



/***/ }),

/***/ "./src/app/layout/catalogos/catalogos.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/catalogos/catalogos.module.ts ***!
  \******************************************************/
/*! exports provided: CatalogosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogosModule", function() { return CatalogosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _catalogos_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalogos-routing.module */ "./src/app/layout/catalogos/catalogos-routing.module.ts");
/* harmony import */ var _catalogos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalogos.component */ "./src/app/layout/catalogos/catalogos.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CatalogosModule = /** @class */ (function () {
    function CatalogosModule() {
    }
    CatalogosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_catalogos_routing_module__WEBPACK_IMPORTED_MODULE_1__["CatalogosRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
            declarations: [_catalogos_component__WEBPACK_IMPORTED_MODULE_2__["CatalogosComponent"]]
        })
    ], CatalogosModule);
    return CatalogosModule;
}());



/***/ })

}]);
//# sourceMappingURL=catalogos-catalogos-module.js.map