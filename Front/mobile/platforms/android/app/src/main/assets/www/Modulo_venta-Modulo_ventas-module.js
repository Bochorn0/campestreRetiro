(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Modulo_venta-Modulo_ventas-module"],{

/***/ "./src/app/layout/Modulo_venta/Modulo_ventas-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/layout/Modulo_venta/Modulo_ventas-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ModuloVentasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuloVentasRoutingModule", function() { return ModuloVentasRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Modulo_ventas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modulo_ventas.component */ "./src/app/layout/Modulo_venta/Modulo_ventas.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _Modulo_ventas_component__WEBPACK_IMPORTED_MODULE_2__["ModuloVentasComponent"]
    }
];
var ModuloVentasRoutingModule = /** @class */ (function () {
    function ModuloVentasRoutingModule() {
    }
    ModuloVentasRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ModuloVentasRoutingModule);
    return ModuloVentasRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/Modulo_venta/Modulo_ventas.component.html":
/*!******************************************************************!*\
  !*** ./src/app/layout/Modulo_venta/Modulo_ventas.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <!-- <app-page-header [heading]=\"'ModuloVentas'\" [icon]=\"'fa-dashboard'\"></app-page-header> -->\n    <!--Menu principal-->\n    <!-- <div class=\"row text-center\">\n        <div class=\"col-lg-2\">\n            <button class=\"btn btn-success pull-right\" >\n                <i class=\"fa fa-5x fa-plus-circle\"></i><br>                \n                Nuevo Registro\n            </button>\n        </div>\n        <br><br>\n    </div> -->\n    <div class=\"row\" style=\"min-height: 75px;\">\n        <div class=\"navbar-top\">\n            <button class=\"btn btn-outline-secondary\" style=\"color: #333;\" (click)=\"mostrarPrincipal = true; panelVisualizar = '' \"> <i class=\"fa fa-bars\"></i> Menu </button>\n            <!-- <a href=\"#news\"><i class=\"fa fa-map text-danger\"></i> Terrenos</a> -->\n            <!-- <button class=\"btn btn-primary\"> <i class=\"fa fa-save\"></i> Guardar</button> -->\n        </div> \n    </div>\n    <!-- NUEVO CLIENTE -->\n    <div class=\"row\" *ngIf=\"panelVisualizar == 'NuevoCliente' \">\n        <div class=\"col-sm-12\">\n            <h3 class=\"text-center\">Nuevo Cliente</h3>\n            <div class=\"row\">\n                <app-formulario-clientes-separado [Nuevo]=\"true\" [datosCliente]=\"datosNuevoCliente\" (vista)=\"this.detalleCliente = false\" ></app-formulario-clientes-separado>\n            </div>\n        </div>\n    </div>\n    <!-- EDITAR CLIENTE -->\n    <!-- <div class=\"row\" *ngIf=\"panelVisualizar == 'EditarCliente' \">\n        <div class=\"col-sm-12\">\n            <h3 class=\"text-center\">Editar Cliente</h3>\n            <div class=\"row\">\n                <app-formulario-clientes-separado [datosCliente]=\"datosDetalle\" (vista)=\" this.clienteDetalles = this.datosDetalle = false; obtenerClientesActivos();\" ></app-formulario-clientes-separado>\n            </div>\n        </div>\n    </div> -->\n    \n    <!-- CLIENTES -->\n    <div class=\"row\" *ngIf=\"panelVisualizar == 'Clientes'  && !clienteDetalles.IdCliente\">\n        <div class=\"col-sm-12\">\n            <h3 class=\"text-center\">Clientes Activos</h3>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Buscar clientes relacionados con :\" [(ngModel)]=\"textoBuscar\" (keydown)=\"filtrarClientes();\" />\n            <div class=\"row\">\n                <button class=\"btn btn-default col-sm-6\" style=\"border:none;\" *ngFor=\"let a of clientesTodos | paginate: { itemsPerPage: 6, currentPage: pageRetor, id: 'clientes_r' };\" (click)=\"detalleCliente(a);\">\n                    <div class=\"card mb-3 \">\n                        <div class=\"card-header bg-{{(a.Color)?a.Color:'default'}}\">\n                            <i class=\"fa fa-user\"></i> {{a.Codigo}}\n                        </div>\n                        <div class=\"card-body\">\n                            <span class=\"text-muted\"><i class=\"fa fa-address-book\"></i> {{a.Nombre}}</span>\n                            <br>\n                            <span style=\"font-size: 15px;\"><i class=\"fa fa-dollar\"></i> Mantenimiento : {{a.Monto_mantenimiento}} | <i class=\"fa fa-dollar\"></i>Saldo : {{a.Saldo_total}} </span>\n                            <br/>\n                            <table *ngIf=\"a.Terrenos[0]\" class=\"table table-striped\">\n                                <tr><th>Etapa</th><th>Lote</th><th>Parcela</th><th>Estatus</th></tr>\n                                <tr *ngFor=\"let t of a.Terrenos\" ><td><i class=\"fa fa-map\"></i> {{t.etapa}}</td><td>{{t.lote}}</td><td>{{t.parcela}}</td><td>{{t.Estado}}</td></tr>\n                            </table>\n                            <small class=\"h4 text-info \">Ver Cliente <i class=\"fa fa-external-link\"></i> </small>\n                        </div>\n                    </div>\n                </button>\n                <div class=\"text-center\">\n                    <pagination-controls (pageChange)=\"pageRetor = $event\" id=\"clientes_r\"></pagination-controls>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- TERRENOS -->\n    <div class=\"row\" *ngIf=\"panelVisualizar == 'Terrenos' \">\n        <div class=\"col-sm-12\">\n            <h3 class=\"text-center\">Terrenos Activos</h3>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Buscar terrenos relacionados con :\" [(ngModel)]=\"terrenosBuscar\" (keydown)=\"filtrarTerrenos();\" />\n            <div class=\"row\">\n                <button class=\"btn btn-default col-sm-6\" style=\"border:none;\" *ngFor=\"let a of terrenos | paginate: { itemsPerPage: 6, currentPage: pageTerr, id: 'terr_r' };\" (click)=\"mostarAlerta(a);\">\n                    <div class=\"card mb-3 \">\n                        <div class=\"card-header bg-{{(a.Color)?a.Color:'default'}}\">\n                            <i class=\"fa fa-user\"></i> TER-{{a.IdTerreno}}\n                        </div>\n                        <div class=\"card-body\">\n                            <table class=\"table table-striped\">\n                                <tr><th>Etapa:{{a.etapa}}</th><th>Lote: {{a.lote}}</th><th>Parcela: {{a.parcela}}</th><th>Estatus {{a.Estado}}</th></tr>\n                            </table>\n                            <span class=\"text-muted\"><i class=\"fa fa-address-book\"></i> {{a.Pertenece}}</span>\n                            <br>\n                            <span style=\"font-size: 15px;\"><i class=\"fa fa-chart-area\"></i> Superficie : {{a.Superficie}} |  Asignado : <i class=\"fa fa-{{(!a.Asignado)?'times-circle text-danger':'plus-circle text-success'}}\"></i> </span>\n                            <br/>\n                            <small class=\"h4 text-info\">Vender <i class=\"fa fa-shopping-cart\"></i> </small>\n                        </div>\n                    </div>\n                </button>\n                <div class=\"text-center\">\n                    <pagination-controls (pageChange)=\"pageTerr = $event\" id=\"terr_r\"></pagination-controls>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- MENU PRINCIPAL -->\n    <div class=\"row\" *ngIf=\"mostrarPrincipal \">\n        <div class=\"col-lg-12\">\n            <br><br>   \n            <div class=\"card\">\n                <div class=\"d-flex\" >\n                    <a class=\"w-50 bb br px-3\" (click)=\"mostrarPrincipal=false; panelVisualizar = 'Clientes';\">\n                        <div class=\"d-flex align-items-center\" >\n                            <em class=\"fa fa-users fa-2x text-info\"></em>\n                            <div class=\"ml-auto\">\n                                <div class=\"card-body text-right\">\n                                    <h4 class=\"mt-0\">{{totales.Clientes}}</h4>\n                                    <p class=\"mb-0 text-muted\">Clientes Actuales</p>\n                                </div>\n                            </div>\n                        </div>\n                    </a>\n                    <a class=\"w-50 bb br px-3\" (click)=\"mostrarPrincipal=false; panelVisualizar = 'Terrenos';\">\n                        <div class=\"d-flex align-items-center\">\n                            <em class=\"fa fa-inbox fa-2x text-danger\"></em>\n                            <div class=\"ml-auto\">\n                                <div class=\"card-body text-right\">\n                                    <h4 class=\"mt-0\">{{totales.Terrenos}}</h4>\n                                    <p class=\"mb-0 text-muted\">Terrenos</p>\n                                </div>\n                            </div>\n                        </div>\n                    </a>\n                </div>\n                <div class=\"d-flex\">\n                    <a class=\"w-50 br px-3\" (click)=\"mostrarPrincipal=false; panelVisualizar = 'Terrenos';\">\n                        <div class=\"d-flex align-items-center\">\n                            <em class=\"fa fa-map fa-2x text-inverse\"></em>\n                            <div class=\"ml-auto\">\n                                <div class=\"card-body text-right\">\n                                    <h4 class=\"mt-0\">{{totales.Lotes}}</h4>\n                                    <p class=\"mb-0 text-muted\">Lotes</p>\n                                </div>\n                            </div>\n                        </div>\n                    </a>\n                    <a class=\"w-50 px-3\" (click)=\"mostrarPrincipal=false; panelVisualizar = 'Prospectos';\">\n                        <div class=\"d-flex align-items-center\" >\n                            <em class=\"fa fa-address-book fa-2x text-success\"></em>\n                            <div class=\"ml-auto\">\n                                <div class=\"card-body text-right\">\n                                    <h4 class=\"mt-0\">{{totales.Prospectos}}</h4>\n                                    <p class=\"mb-0 text-muted\">Prospectos </p>\n                                    <div class=\"px-2 mr-2 badge badge-danger\">{{totales.Pros_alerta}}</div>\n                                    <div class=\"px-2 mr-2 badge badge-success\">{{totales.Pros_activos}}</div>\n                                </div>\n                            </div>\n                        </div>\n                    </a>\n                </div>\n            </div>    \n            <br><br>   \n        </div>\n    </div>\n    <!-- EDITAR CLIENTE -->\n    <div class=\"col-xs-12\" *ngIf=\" clienteDetalles.IdCliente || datosDetalle\">\n        <ngb-tabset>\n            <ngb-tab>\n                <ng-template ngbTabTitle ><b>Datos Cliente</b> </ng-template>\n                <ng-template ngbTabContent>\n                    <div class=\"row\" >\n<!--                                    <div class=\"col-lg-12\">\n                            <button (click)=\"estadosCuenta();\" class=\"btn btn-success\" ><i class=\"fa fa-credit-card\"></i> Detalle Cliente</button>\n                        </div>-->\n                        <div class=\"col-lg-12\" *ngIf=\"!datosDetalle\">\n                            <div class=\"card-body\">\n                                <div class=\"row\" *ngIf=\"clienteDetalles.IdCliente\">\n                                    <div class=\"col-lg-12\">\n                                        <button class=\"btn btn-warning pull-right\" (click)=\"panelVisualizar = ''; mostrarPrincipal = false; EditarCliente();\"><i class=\"fa fa-pencil\"></i> | Editar Cliente</button>\n                                        <br><br>\n                                    </div>\n                                    <div class=\"col-lg-6\">\n                                        <div class=\"card card-default\">\n                                            <div class=\"card-header\" style=\"color:#000 !important; \">\n                                                <h4>Saldos Cliente</h4>\n                                            </div>\n                                             <div class=\"list-group\">\n                                                 <table class=\"table table-stripped table-bordered\">\n                                                     <tr *ngIf=\"clienteDetalles.Credito_original > 0\">\n                                                         <td>\n                                                            <b><i class=\"fa fa-dollar\"></i> Crédito Original:</b>\n                                                         </td>\n                                                         <td>\n                                                            $ {{clienteDetalles.Credito_original | number}}\n                                                         </td>\n                                                    </tr>\n                                                    <tr *ngIf=\"clienteDetalles.Saldo_adeudo > 0\">\n                                                        <td>\n                                                            <b><i class=\"fa fa-money\"></i> Saldo Enganche:</b>\n                                                        </td>\n                                                        <td>\n                                                            $ {{clienteDetalles.Saldo_adeudo | number}}\n                                                        </td>\n                                                    </tr>\n                                                    <tr *ngIf=\"clienteDetalles.Saldo_credito > 0\">\n                                                        <td>\n                                                            <b><i class=\"fa fa-credit-card\"></i> Saldo Pendiente:</b>\n                                                        </td>\n                                                        <td>\n                                                            $ {{clienteDetalles.Saldo_credito | number}}\n                                                        </td>\n                                                    </tr>\n                                                    <tr *ngIf=\"clienteDetalles.Saldo_mantenimiento > 0\">\n                                                        <td>\n                                                            <b><i class=\"fa fa-home\"></i> Saldo Mantenimiento:</b>\n                                                        </td>\n                                                        <td>\n                                                            $ {{clienteDetalles.Saldo_mantenimiento | number}}\n                                                        </td>\n                                                    </tr>  \n                                                    <tr *ngIf=\"clienteDetalles.Saldo_agua > 0\">\n                                                        <td>\n                                                            <b><i class=\"fa fa-dollar\"></i> Contrato de Agua:</b>\n                                                        </td>\n                                                        <td>\n                                                            $ {{clienteDetalles.Saldo_agua | number}}\n                                                        </td>\n                                                    </tr>\n                                                    <tr *ngIf=\"clienteDetalles.Saldo_certificado > 0\">\n                                                        <td>\n                                                            <b><i class=\"fa fa-address-card\"></i> Saldo Certificado:</b>\n                                                        </td>\n                                                        <td>\n                                                            $ {{clienteDetalles.Saldo_certificado | number}}\n                                                        </td>\n                                                    </tr>\n                                                    <tr *ngIf=\"clienteDetalles.Saldo_total > 0\">\n                                                        <td>\n                                                            <b><i class=\"fa fa-dollar\"></i> Saldo Total:</b>\n                                                        </td>\n                                                        <td>\n                                                            $ {{clienteDetalles.Saldo_total | number}}\n                                                        </td>\n                                                    </tr>\n                                                    <tr *ngIf=\"clienteDetalles.Credito_original > 0\">\n                                                        <td>\n                                                            <b><i class=\"fa fa-dollar\"></i> Proximo Mantenimiento:</b>\n                                                        </td>\n                                                        <td>\n                                                            2020-01-01 | $ {{clienteDetalles.Monto_mantenimiento | number}}\n                                                        </td>\n                                                    </tr>                                                                    \n                                                 </table>                                                                \n                                             </div>\n                                            <!-- <div class=\"card-footer\"><a class=\"text-sm\" href=\"#\">Load more</a></div> -->\n                                        </div>\n                                        <div class=\"card-header\" style=\"color:#000 !important; \">\n                                            <h4>Terrenos del cliente  </h4>\n                                        </div>\n                                        <div class=\"list-group text-left\" style=\"overflow:auto;\">\n                                            <table class=\"table table-stripped table-bordered \" *ngIf=\"clienteDetalles.Terrenos\">\n                                                <tr><th>Dueño Original</th><th>Dueño Actual</th><th>Superficie</th><th>Lote</th><th>Etapa</th><th>Parcela</th> <th>Estatus</th></tr>\n                                                <tr  *ngFor=\"let t of clienteDetalles.Terrenos\">\n                                                    <td>\n                                                        {{t.Original}}\n                                                    </td>\n                                                    <td>\n                                                        {{t.Pertenece}}\n                                                    </td>\n                                                    <td>\n                                                        {{t.Superficie}}\n                                                    </td>                                                                        \n                                                    <td>\n                                                        {{t.lote}}\n                                                    </td>\n                                                    <td>\n                                                        {{t.etapa}}\n                                                    </td>\n                                                    <td>\n                                                        {{t.parcela}}\n                                                    </td>                                                                        \n                                                    <td>\n                                                        {{t.Estado}}\n                                                    </td>                                                                        \n                                                </tr>\n                                            </table>\n                                        </div>                                                        \n                                    </div>\n                                    <div class=\"col-lg-6\" >\n                                        <div class=\"card card-default\">\n                                            <div class=\"card-header\" style=\"color:#000 !important; \">\n                                                <h4>Datos Basicos </h4>\n                                            </div>\n                                            <div class=\"card-body row text-left\">\n                                                <div class=\"col-lg-4\">\n                                                    <div class=\"form-group\">\n                                                        <label class=\"label-form\"> #Cliente:</label>\n                                                        {{ clienteDetalles.Codigo}}\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-lg-8\">\n                                                    <div class=\"form-group\">\n                                                        <label class=\"label-form\"> Nombre : </label>\n                                                        {{ clienteDetalles.Nombre}}\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-lg-6\">\n                                                    <div class=\"form-group\">\n                                                        <label class=\"label-form\"> Correo : </label>\n                                                        {{ clienteDetalles.Correo}}\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-lg-6\">\n                                                    <div class=\"form-group\">\n                                                        <label class=\"label-form\"> Fecha Nacimiento :</label>\n                                                        {{ clienteDetalles.Fecha_nacimiento}}\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-lg-6\">\n                                                    <div class=\"form-group\">\n                                                        <label class=\"label-form\"> IFE :</label>\n                                                        {{ clienteDetalles.Num_ife}}\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-lg-6\">\n                                                    <div class=\"form-group\">\n                                                        <label class=\"label-form\"> Origen :</label>\n                                                        {{ clienteDetalles.Origen}}\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-lg-6\">\n                                                    <div class=\"form-group\">\n                                                        <label class=\"label-form\"> Teléfono :</label>\n                                                        {{ clienteDetalles.Telefono}}\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-lg-6\">\n                                                    <div class=\"form-group\">\n                                                        <label class=\"label-form\"> Direccion :</label>\n                                                        {{ clienteDetalles.Direccion}}\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-lg-6\">\n                                                    <div class=\"form-group\">\n                                                        <label class=\"label-form\"> Monto Mantenimiento Actual :</label>\n                                                        {{ clienteDetalles.Monto_mantenimiento | number}}\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-lg-6\">\n                                                    <div class=\"form-group\">\n                                                        <label class=\"label-form\"> Periodo de cobro :</label>\n                                                        {{ clienteDetalles.Periodo_cobro}} Meses\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-lg-6\">\n                                                    <div class=\"form-group\">\n                                                        <label class=\"label-form\"> Referencia :</label>\n                                                        {{ clienteDetalles.Referencia_1}}\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-lg-6\">\n                                                    <div class=\"form-group\">\n                                                        <label class=\"label-form\"> Cel Referencia :</label>\n                                                        {{ clienteDetalles.TelRef_1}}\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-lg-12\">\n                                                    <label class=\"label-form\"> Observaciones:</label>\n                                                    {{ clienteDetalles.Observaciones}}\n                                                </div> \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-lg-12\">\n                                        <br>\n                                        <div class=\"card card-default\">\n                                            <div class=\"card-header\" style=\"color:#000 !important; \">\n                                                <h4>Contratos del cliente</h4>\n                                            </div>\n                                            <div class=\"card-body\">\n                                                <!-- <div class=\"col-lg-12\">\n                                                    <b>Parcelas:</b> {{clienteDetalles.Parcela}}\n                                                    <b>Lotes:</b> {{clienteDetalles.Lote}}\n                                                    <b>Etapas:</b> {{clienteDetalles.Etapa}}\n                                                    <b>Estatus:</b> {{clienteDetalles.Estado}}\n                                                </div> -->\n                                                <div class=\"col-lg-12\">\n                                                    <div class=\"row\">\n                                                        <div class=\"col-lg-12\" *ngIf=\"terrenoDatos\" >\n                                                            <div class=\"row\">\n                                                                <div class=\"col-lg-12\"><h5><b>Datos del terreno </b></h5></div>\n                                                                <hr>\n                                                                <div class=\"col-lg-6\">\n                                                                    <div class=\"form-group\">\n                                                                        <label class=\"label-form\"> Dueño Original:</label>\n                                                                        {{terrenoDatos.Pertenece}}\n                                                                    </div>\n                                                                </div>\n                                                                <div class=\"col-lg-6\">\n                                                                    <div class=\"form-group\">\n                                                                        <label class=\"label-form\"> Superficie :</label>\n                                                                        {{ terrenoDatos.Superficie | number}}\n                                                                    </div>\n                                                                </div>\n                                                                <div class=\"col-lg-12\">\n                                                                    <div class=\"form-group\">\n                                                                        <label class=\"label-form\"> Datos sección :</label>\n                                                                        Lote: {{terrenoDatos.lote}} - Etapa: {{terrenoDatos.etapa}} - Parcela: {{terrenoDatos.parcela}}\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                            <hr>\n                                                        </div>                                                                        \n                                                        <div class=\"col-lg-6\">\n                                                            <div class=\"form-group\">\n                                                                <label class=\"label-form\"> Selecciona Terreno </label>\n                                                                <select *ngIf=\"clienteDetalles.Terrenos\" class=\"form-control\" (change)=\"obtenerContratoTerreno();\" [(ngModel)]=\"IdTerrenoContrato\" >\n                                                                    <option value=\"0\">Selecciona el terreno</option>\n                                                                    <option  *ngFor=\" let ter of clienteDetalles.Terrenos\" value=\"{{ter.IdTerreno}}\" > Lote: {{ter.lote}} - Etapa: {{ter.etapa}} - Parcela: {{ter.parcela}}</option>\n                                                                </select>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"col-lg-6\"><br><button *ngIf=\"contenidoContrato\" class=\"btn btn-warning\" (click)=\"enviarContratoCorreo();\">Enviar contrato por correo</button></div>\n                                                        <div class=\"col-xl-12 col-lg-12 col-xs-12\" *ngIf=\"contenidoContrato\">\n                                                            <div class=\"card mb-3\">\n                                                                <div class=\"card-header \"  style=\"color: #000 !important;\">\n                                                                    Contrato de nuevo cliente\n                                                                </div>\n                                                                <div class=\"card-body\" *ngIf=\"contenidoContrato\" [froalaEditor] [(froalaModel)]=\"contenidoContrato\"></div>\n                                                                <div class=\"col-lg-12\">\n                                                                    <div class=\"form-group\">\n                                                                        <label class=\"label-form\"> &nbsp;</label><br>\n                                                                        <button class=\"btn btn-primary pull-right\" (click)=\"guardarContrato();\">Guardar Contrato</button>\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>                                                                \n                                            </div>\n                                        </div>\n                                    </div>                                                    \n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-12\" *ngIf=\"datosDetalle\">\n                            <br>\n                            <button class=\"btn btn-warning pull-right\" (click)=\"this.clienteDetalles = datosDetalle; this.datosDetalle = false;\"> Regresar </button>\n                            <br>\n                            <br>\n                            <app-formulario-clientes-separado [datosCliente]=\"datosDetalle\" (vista)=\" this.clienteDetalles = this.datosDetalle = false; obtenerClientesActivos();\" ></app-formulario-clientes-separado>\n                        </div>   \n                    </div>                                 \n                </ng-template>\n            </ngb-tab>\n            <ngb-tab>\n                <ng-template ngbTabTitle><b>Financiamiento</b> </ng-template>\n                <ng-template ngbTabContent>\n                    <div class=\"row\" >\n<!--                                        <div class=\"col-lg-12\">\n                            <button class=\"btn btn-danger pull-right\" (click)=\"confirmarModificacionCotizacion();\">Modificar Cotización</button>\n                            <hr><br>\n                        </div>-->\n                        <div class=\"col-lg-6\">\n                            <div class=\"form-group\">\n                                <label class=\"label-form\"> Selecciona Terreno </label>\n                                <select *ngIf=\"clienteDetalles.Terrenos\" class=\"form-control\" (change)=\"filtrarTerrenosMensualidad();\" [(ngModel)]=\"idTerrenoMensualidad\" >\n                                    <option value=\"0\">Selecciona el terreno</option>\n                                    <option  *ngFor=\" let ter of clienteDetalles.Terrenos\" value=\"{{ter.IdTerreno}}\" > Lote: {{ter.lote}} - Etapa: {{ter.etapa}} - Terreno: {{ter.parcela}}</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-6\"></div>\n                        <div class=\"col-lg-6\" *ngFor=\" let ter of clienteDetalles.Terrenos\" > \n                            <div class=\"card mb-3\" *ngIf=\"!ter.TerrenoMostrar\">\n                                <div class=\"card-header bg-warning\">\n                                    Abonos Lote: {{ter.lote}}, Etapa: {{ter.etapa}}, Parcela: {{ter.parcela}}\n                                </div>\n                                <div class=\"card-body \">\n                                    <app-datatables-general  *ngIf=\"ter.Mensualidades\" [datosDatatable]=\"ter.Mensualidades\" ></app-datatables-general>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\" *ngIf=\"anualidadesVista\">\n                        <div class=\"col-lg-6\" *ngFor=\" let ter of clienteDetalles.Terrenos\"> \n                            <div class=\"card mb-3\">\n                                <div class=\"card-header bg-info\">\n                                    Abonos Lote: {{ter.lote}}, Etapa: {{ter.etapa}}, Parcela: {{ter.parcela}}\n                                </div>\n                                <div class=\"card-body \">\n                                    <app-datatables-general  *ngIf=\"ter.Anualidades\" [datosDatatable]=\"ter.Anualidades\" ></app-datatables-general>\n                                </div>\n                            </div>\n                        </div>\n                    </div>                                    \n                </ng-template>\n            </ngb-tab>\n            <ngb-tab>\n                <ng-template ngbTabTitle><b>Mantenimientos</b> </ng-template>\n                <ng-template ngbTabContent>\n                    <div class=\"row\" >\n<!--                                        <div class=\"col-lg-12\"><h3 class=\"text-center\"> Actualizar Datos Mantenimiento </h3><hr></div>\n                        <div class=\"col-lg-4\">\n                            <div class=\"form-group\">\n                                <label class=\"label-form\"> Selecciona Terreno </label>\n                                <select *ngIf=\"clienteDetalles.Terrenos\" class=\"form-control\" (change)=\"cambiarTazasMantenimiento();\" [(ngModel)]=\"IdTerrenoMantenimiento\" >\n                                    <option value=\"0\">Selecciona el terreno</option>\n                                    <option  *ngFor=\" let ter of clienteDetalles.Terrenos\" value=\"{{ter.IdTerreno}}\" > Lote: {{ter.lote}} - Etapa: {{ter.etapa}} - Terreno: {{ter.parcela}}</option>\n                                </select>\n                            </div>\n                        </div>-->\n                        <div class=\"col-lg-12\">\n                            <div class=\"col-lg-12\"><h3 class=\"text-center\"> Mantenimientos abonados </h3><hr></div>\n                        </div>\n                        <div class=\"col-lg-6\" > \n                            <div class=\"card mb-3\">\n                                <div class=\"card-header bg-danger\">\n                                    Mantenimientos Detalle\n                                </div>\n                                <div class=\"card-body \">\n                                    <app-datatables-general  *ngIf=\"mantenimientosTodos\" [datosDatatable]=\"mantenimientosTodos\" ></app-datatables-general>\n                                </div>\n                            </div>\n                        </div>\n                    </div>                                    \n                </ng-template>\n            </ngb-tab>\n<!--                            <ngb-tab>\n                <ng-template ngbTabTitle><b>Adeudos</b> </ng-template>\n                <ng-template ngbTabContent>\n                </ng-template>\n            </ngb-tab>                            -->\n        </ngb-tabset>    \n    </div>\n    <!-- COTIZADOR -->\n    <div class=\"row\" *ngIf=\"panelVisualizar == 'Cotizaciones' \">\n        <div class=\"col-sm-12\">\n            <h3 class=\"text-center\">Nueva Cotización</h3>\n            <div class=\"row\">\n                <app-cotizador></app-cotizador>\n            </div>\n        </div>\n    </div>\n    <!-- DETALLES PROSPECTOS -->\n    <!--  -->\n    <div class=\"row\" *ngIf=\"panelVisualizar == 'Prospectos' \">\n        <div class=\"col-sm-12\">\n            <!-- Team messages-->\n            <!-- <div class=\"card b\">\n                <div class=\"card-title\"></div>\n            </div> -->\n            <div class=\"card-header bg-transparent\">\n                <h3>\n                    <div class=\"px-2 float-right badge\" style=\"margin-top:-5px;\">\n                        <button class=\"btn button-default\" (click)=\"nuevoProspecto = !nuevoProspecto\"><i class=\"fa fa-2x fa-{{(!nuevoProspecto)?'plus-circle text-success':'minus-circle text-danger'}}\"></i></button>\n                    </div>\n                    Prospectos\n                    <div class=\"px-2 mr-2 badge badge-danger\">{{totales.Pros_alerta}}</div>\n                    <div class=\"px-2 mr-2  badge badge-success\">{{totales.Pros_activos}}</div>\n                    <br>\n                </h3>\n            </div>\n            <div class=\"card-body\" style=\" max-height: 500px; overflow:auto;\" > \n                <hr>\n                <div class=\"col-xs-12\"  *ngIf=\"nuevoProspecto\" >\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"nombreProspecto\" placeholder=\"Nombre del prospecto\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"telefonoProspecto\" placeholder=\"Cel: 6621232222\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"email\" class=\"form-control\" [(ngModel)]=\"correoProspecto\" placeholder=\"Email: jesus.ortiz@gmail.com\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <textarea  class=\"form-control\" [(ngModel)]=\"descripcionProspecto\" placeholder=\"Descripción leve de las necesidades del cliente\"></textarea>\n                    </div>\n                    <div class=\"form-group\">\n                        <button class=\"btn btn-primary form-control\" (click)=\"guardarNuevoProspecto();\"><i class=\"fa fa-save\"></i> Guardar</button>\n                    </div>\n                </div>\n                <div class=\"list-group\" *ngIf=\"!nuevoProspecto && Prospectos[0]\">\n                    <!-- <div class=\"col-xs-12\">\n                        <input type=\"tex\">\n                    </div> -->\n                    <!--  (touchmove)=\"activarLateral($event,'move')\"  -->\n\n                    <div class=\"list-group-item list-group-item-action \" *ngFor=\"let p of Prospectos\"  (touchstart)=\"marcarLateral($event);\"  (touchmove)=\"menuLateral($event,p)\"  >\n                    <a (click)=\"confirmarEliminarUsuario(p);\" style=\"cursor:pointer;\"><div *ngIf=\"p.Lateral\" [@flyInOut]=\"'in'\"  class=\"danger-element list-group-item list-group-item-action\"> <i class=\"fa fa-2x fa-times-circle\"></i></div></a>\n                        <!-- mostarAlerta(); -->\n\n                        <div class=\"media\" (click)=\"p.Atender = !p.Atender;\">\n                            <div class=\"align-self-start mx-2 circle thumb55\" >\n                                <i class=\"fa fa-user fa-3x\" style=\"margin-left:8px;\"></i> \n                            </div>\n                            \n                            <div class=\"media-body text-truncate\">\n                                <p class=\"mb-1\">\n                                    <strong class=\"text-primary\">\n                                        <span class=\"circle bg-success circle-lg text-left\"></span>\n                                        <span>{{p.Nombre_prospecto}}</span>\n                                    </strong>\n                                </p>\n                                <p class=\"mb-1 text-sm\">{{p.Descripcion}}</p>\n                            </div>\n                            <div class=\"ml-auto\">\n                                <small class=\"text-muted ml-2\">{{p.Lapso}}h</small>\n                            </div>\n                        </div>\n                        <div class=\"media-body list-group\" *ngIf=\"p.Atender\">\n                            <br>\n                            <a href=\"tel:{{p.Telefono}}\"><div class=\"list-group-item list-group\" ><i class=\"fa fa-phone-square\"></i> Llamar </div></a>\n                            <a href=\"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to={{p.Correo}}\" target=\"_blank\"><div class=\"list-group-item list-group\" ><i class=\"fa fa-envelope\"></i> Mandar Información </div></a>\n                            <a href=\"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to={{p.Correo}}\" target=\"_blank\"><div class=\"list-group-item list-group\" ><i class=\"fa fa-envelope\"></i> Enviar Cotización </div></a>\n                            <a style=\"cursor:pointer; color: #007bff;\" (click)=\"agendarCita(); modalDatos = {Tipo: 'AgendarCita', Clase: 'bg-info', Titulo: 'Agendar Cita al retiro'} \"><div class=\"list-group-item list-group\" ><i class=\"fa fa-calendar\"></i> Agendar Visita </div></a>\n                            <button class=\"btn btn-primary\" (click)=\"apartarTerreno(p);\">Apartar</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\" style=\"min-height: 75px;\">\n        <div class=\"navbar\">\n            <a  (click)=\"mostrarPrincipal=false; panelVisualizar = 'NuevoCliente';\" > <i class=\"fa fa-plus-circle text-success\"></i> Nuevo</a>\n            <a  (click)=\"mostrarPrincipal=false; panelVisualizar = 'Terrenos';\" ><i class=\"fa fa-map text-danger\"></i> Terrenos</a>\n            <a  (click)=\"mostrarPrincipal=false; panelVisualizar = 'Cotizaciones';\" > <i class=\"fa fa-clipboard text-warning\"></i> Cotizaciones</a>\n        </div>    \n    </div>\n</div>\n<ng-template #modalCita let-modal class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-header modal-lg\">\n        <!-- Generar Pagos con Cotizacion -->\n        <h4 class=\"modal-title\">{{modalDatos.Titulo}} </h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalCita.dismiss()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <div class=\"form-group\"> \n                    <label class=\"label-form\">Fecha</label><br>\n                    <input type=\"date\" class=\"form-control\" />\n                </div>\n            </div>\n\n        </div>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/layout/Modulo_venta/Modulo_ventas.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layout/Modulo_venta/Modulo_ventas.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-info {\n  color: #fff;\n  background-color: #359B83 !important;\n  border-color: #46b8da; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #10798D !important;\n  border-color: #46b8da; }\n\n.btn-warning {\n  color: #fff;\n  background-color: #2A8901 !important;\n  border-color: #46b8da; }\n\n.btn-danger {\n  color: #fff;\n  background-color: #955006 !important;\n  border-color: #46b8da; }\n\n.btn-secondary {\n  color: #fff;\n  background-color: #232E5C !important;\n  border-color: #46b8da; }\n\n.btn-info:focus, .btn-info:hover, .btn-info.focus {\n  color: #fff;\n  background-color: #396B57 !important;\n  border-color: #174935; }\n\n.btn-primary:focus, .btn-primary:hover, .btn-primary.focus {\n  color: #fff;\n  background-color: #10798D !important;\n  border-color: #46b8da; }\n\n.btn-warning:focus, .btn-warning:hover, .btn-warning.focus {\n  color: #fff;\n  background-color: #2D6E00 !important;\n  border-color: #0a2a1c; }\n\n.btn-danger:focus, .btn-danger:hover, .btn-danger.focus {\n  color: #fff;\n  background-color: #7F4700 !important;\n  border-color: #623900; }\n\n.btn-secondary:focus, .btn-secondary:hover, .btn-secondary.focus {\n  color: #fff;\n  background-color: #2D3854 !important;\n  border-color: #0c0d35; }\n\n.bg-info {\n  color: #fff;\n  background-color: #359B83 !important;\n  border-color: #46b8da; }\n\n.bg-primary {\n  color: #fff;\n  background-color: #10798D !important;\n  border-color: #46b8da; }\n\n.bg-warning {\n  color: #fff;\n  background-color: #2A8901 !important;\n  border-color: #46b8da; }\n\n.bg-danger {\n  color: #fff;\n  background-color: #955006 !important;\n  border-color: #46b8da; }\n\n.bg-secondary {\n  color: #fff;\n  background-color: #232E5C !important;\n  border-color: #46b8da; }\n\n.b, .ba, .bb {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n\n.b, .ba, .br {\n  border-right: 1px solid rgba(0, 0, 0, 0.12); }\n\n.pl-3, .px-3 {\n  padding-left: 1rem !important; }\n\n.pr-3, .px-3 {\n  padding-right: 1rem !important; }\n\n/* Place the navbar at the bottom of the page, and make it stick */\n\n.navbar {\n  background-color: #333;\n  overflow: hidden;\n  position: fixed;\n  bottom: 0;\n  width: 100%; }\n\n/* Style the links inside the navigation bar */\n\n.navbar-top {\n  z-index: 102;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  justify-content: space-between;\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 1rem;\n  width: 100%; }\n\n.navbar-top button, .navbar a {\n  float: left;\n  display: block;\n  color: #fff;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  justify-content: space-between;\n  font-size: 17px; }\n\na.w-50:active {\n  box-shadow: -1px -1px 8px 2px rgba(105, 170, 240, 0.68); }\n\n.navbar a:hover {\n  color: #fff;\n  border-bottom: 1px solid #ddd; }\n\n.thumb32 {\n  width: 32px !important;\n  height: 32px !important; }\n\n.thumb55 {\n  width: 55px !important;\n  height: 55px !important; }\n\n.circle {\n  display: inline-block;\n  width: 7px;\n  height: 7px;\n  border-radius: 500px;\n  margin: 0 .5em;\n  background-color: #ddd;\n  vertical-align: baseline;\n  border: 2px solid transparent; }\n\n.danger-element {\n  z-index: 10;\n  width: 69px;\n  background-color: #dc3545;\n  color: #fff;\n  float: left;\n  border-radius: .25rem !important; }\n\n.active {\n  background-color: #cfd8dc;\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1); }\n\n.inactive {\n  background-color: #eee;\n  -webkit-transform: scale(1);\n          transform: scale(1); }\n"

/***/ }),

/***/ "./src/app/layout/Modulo_venta/Modulo_ventas.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/Modulo_venta/Modulo_ventas.component.ts ***!
  \****************************************************************/
/*! exports provided: ModuloVentasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuloVentasComponent", function() { return ModuloVentasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared_services_estadisticas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/estadisticas.service */ "./src/app/shared/services/estadisticas.service.ts");
/* harmony import */ var _shared_services_catalogos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/catalogos.service */ "./src/app/shared/services/catalogos.service.ts");
/* harmony import */ var _shared_services_ventas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/ventas.service */ "./src/app/shared/services/ventas.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ModuloVentasComponent = /** @class */ (function () {
    function ModuloVentasComponent(router, catalogosService, ventasService, modalService) {
        this.router = router;
        this.catalogosService = catalogosService;
        this.ventasService = ventasService;
        this.modalService = modalService;
        this.terrenosClientes = [];
        this.Prospectos = [];
        this.mostrarPrincipal = true;
        this.clienteDetalles = {};
        this.totales = { Clientes: 0, Terrenos: 0, Lotes: 0, Prospectos: 0, Pros_activos: 0, Pros_alerta: 0 };
        //this.nuevoMantenimiento();
        this.datosContrato = false;
        this._obtenerTerrenos();
        this.obtenerClientesActivos();
        this._obtenerProspectos();
        this.datosNuevoCliente = { Terrenos: [{ Id: 0, Cotizacion: [{ IdCotizacion: 0 }] }] };
    }
    ModuloVentasComponent.prototype.ngOnInit = function () { };
    ModuloVentasComponent.prototype._obtenerProspectos = function () {
        var _this = this;
        var dat_usr = JSON.parse(localStorage.getItem('Datos'));
        this.catalogosService.obtenerProspectosVendedor({ IdUsuario: dat_usr.Datos.IdUsuario }).then(function (res) {
            console.log('res', res);
            if (res['Data']) {
                _this.Prospectos = res['Data'];
                if (_this.Prospectos[0]) {
                    _this.Prospectos.forEach(function (p) {
                        p.Lapso = _this._diferenciaDiasFechas(moment__WEBPACK_IMPORTED_MODULE_8__(p.Fecha_modificacion), moment__WEBPACK_IMPORTED_MODULE_8__());
                    });
                }
            }
            _this.totales.Prospectos = _this.Prospectos.length;
            _this.totales.Pros_activos = _this.Prospectos.filter(function (p) { return p.Lapso < 24; }).length;
            _this.totales.Pros_alerta = _this.Prospectos.filter(function (p) { return p.Lapso >= 24; }).length;
        }).catch(function (err) { console.log('err', err); });
        // this.Prospectos.push({Nombre_prospecto: 'Luis Aguilar',Descripcion: 'Marco para agendar cita de pago ',Fecha: moment() , Lapso:dif});
        // this.Prospectos.push({Nombre_prospecto: 'Lisa conor',Descripcion: 'Marco para agendar cita de pago ',Fecha: moment() , Lapso:dif});
        // this.Prospectos.push({Nombre_prospecto: 'Luis Aguilar',Descripcion: 'Marco para agendar cita de pago ',Fecha: moment() , Lapso:dif});
        // this.Prospectos.push({Nombre_prospecto: 'Luis Aguilar',Descripcion: 'Marco para agendar cita de pago ',Fecha: moment() , Lapso:dif});
    };
    ModuloVentasComponent.prototype.mostarAlerta = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()('Información', 'Este apartado aun esta en desarrollo', 'info');
    };
    ModuloVentasComponent.prototype.guardarNuevoProspecto = function () {
        var _this = this;
        var dat_usr = JSON.parse(localStorage.getItem('Datos'));
        console.log('dat_usr', dat_usr);
        var datosProspecto = {
            Nombre_prospecto: (this.nombreProspecto) ? this.nombreProspecto : '',
            Correo: (this.correoProspecto) ? this.correoProspecto : '',
            Descripcion: (this.descripcionProspecto) ? this.descripcionProspecto : '',
            Telefono: (this.telefonoProspecto) ? this.telefonoProspecto : '',
            IdUsuario: dat_usr.Datos.IdUsuario
        };
        console.log('datos', datosProspecto);
        this.catalogosService.guardarProspectoVendedor(datosProspecto).then(function (res) {
            _this.correoProspecto = _this.telefonoProspecto = _this.nombreProspecto = _this.descripcionProspecto = '';
            _this.nuevoProspecto = false;
            _this._obtenerProspectos();
        }).catch(function (err) { console.log('err', err); });
    };
    ModuloVentasComponent.prototype.agendarCita = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()('Información', 'Este apartado aun esta en desarrollo', 'info');
        //        swal('Agendar Cita','Detalles de la cita','info' );
        //        this.modalService.open('modalCita', {windowClass: 'modal-holder', size: 'lg'});
    };
    ModuloVentasComponent.prototype.marcarLateral = function (event) {
        this.xStart = event.touches[0].clientX;
    };
    ModuloVentasComponent.prototype.menuLateral = function (event, p) {
        this.xEnd = event.touches[0].clientX;
        if ((this.xEnd - this.xStart) > 100) {
            p.Lateral = true;
        }
        if ((this.xEnd - this.xStart) < -100) {
            p.Lateral = false;
        }
    };
    ModuloVentasComponent.prototype._diferenciaDiasFechas = function (fecha1, fecha2) {
        var fch1 = moment__WEBPACK_IMPORTED_MODULE_8__(fecha1);
        var fch2 = moment__WEBPACK_IMPORTED_MODULE_8__(fecha2);
        return fch2.diff(fch1, 'hours');
    };
    ModuloVentasComponent.prototype._obtenerTerrenos = function () {
        var _this = this;
        this.catalogosService.obtenerTerrenos().then(function (res) {
            var datos = res['Data'].filter(function (ob) { return ob.Asignado == 0; });
            datos.forEach(function (d) {
                d.Color = 'secondary';
            });
            _this.terrenosTodos = _this.terrenos = datos;
            _this.totales.Terrenos = _this.terrenos.length;
            console.log('terr', _this.terrenos);
            _this.parcelas = _this.terrenos.map(function (key) {
                return key.parcela;
            });
            _this.lotes = _this.terrenos.map(function (key) {
                return key.lote;
            });
            _this.totales.Lotes = _this.lotes.length;
            _this.etapas = _this.terrenos.map(function (key) {
                return key.etapa;
            });
        }).catch(function (err) { console.log('err', err); });
    };
    ModuloVentasComponent.prototype.obtenerContratoTerreno = function () {
        var _this = this;
        var datosTerreno = this.clienteDetalles.Terrenos.filter(function (ob) { return ob.IdTerreno == _this.IdTerrenoContrato; })[0];
        var datos_contrato = { datosTerreno: datosTerreno, datosCliente: this.clienteDetalles };
        this.terrenoDatos = datosTerreno;
        this.catalogosService.obtenerDatosContrato(datos_contrato).then(function (res) {
            if (res['Data']) {
                _this.contenidoContrato = res['Data'];
            }
            else {
                _this.contenidoContrato = 'Sin contrato ';
            }
        }).catch(function (err) { _this.contenidoContrato = 'Sin contrato '; });
    };
    ModuloVentasComponent.prototype.filtrarClientes = function () {
        var _this = this;
        var filtrados = this.clientesTodosTodos;
        //console.log('filtrados',filtrados);
        if ((this.textoBuscar && this.textoBuscar != '')) {
            var coincidencias_1 = [];
            if (filtrados[0]) {
                filtrados.forEach(function (f) {
                    var validado = false;
                    //NOMBRE
                    if (f.Nombre.toString().toUpperCase().indexOf(_this.textoBuscar.toUpperCase()) > -1) {
                        validado = true;
                    }
                    //CODIGO
                    if (f.Codigo.toString().toUpperCase().indexOf(_this.textoBuscar.toUpperCase()) > -1) {
                        validado = true;
                    }
                    //ETAPA
                    if (f.Etapa.toString().toUpperCase().indexOf(_this.textoBuscar.toUpperCase()) > -1) {
                        validado = true;
                    }
                    //LOTE
                    if (f.Lote.toString().toUpperCase().indexOf(_this.textoBuscar.toUpperCase()) > -1) {
                        validado = true;
                    }
                    //PARCELA
                    if (f.Parcela.toString().toUpperCase().indexOf(_this.textoBuscar.toUpperCase()) > -1) {
                        validado = true;
                    }
                    if (validado) {
                        coincidencias_1.push(f);
                    }
                });
                filtrados = coincidencias_1;
            }
        }
        this.clientesTodos = filtrados;
    };
    ModuloVentasComponent.prototype.filtrarTerrenos = function () {
        var _this = this;
        var filtrados = this.terrenosTodos;
        //console.log('filtrados',filtrados);
        if ((this.terrenosBuscar && this.terrenosBuscar != '')) {
            var coincidencias_2 = [];
            if (filtrados[0]) {
                filtrados.forEach(function (f) {
                    var validado = false;
                    //NOMBRE
                    if (f.Pertenece.toString().toUpperCase().indexOf(_this.terrenosBuscar.toUpperCase()) > -1) {
                        validado = true;
                    }
                    //CODIGO
                    if (("TER-" + f.IdTerreno).toString().toUpperCase().indexOf(_this.terrenosBuscar.toUpperCase()) > -1) {
                        validado = true;
                    }
                    //ETAPA
                    if (("" + f.etapa).toString().toUpperCase().indexOf(_this.terrenosBuscar.toUpperCase()) > -1) {
                        validado = true;
                    }
                    //LOTE
                    if (("" + f.lote).toString().toUpperCase().indexOf(_this.terrenosBuscar.toUpperCase()) > -1) {
                        validado = true;
                    }
                    //PARCELA
                    if (("" + f.parcela).toString().toUpperCase().indexOf(_this.terrenosBuscar.toUpperCase()) > -1) {
                        validado = true;
                    }
                    //SUPERFICIE
                    if (("" + f.Superficie).toString().toUpperCase().indexOf(_this.terrenosBuscar.toUpperCase()) > -1) {
                        validado = true;
                    }
                    //ESTADO
                    if (("" + f.Estado).toString().toUpperCase().indexOf(_this.terrenosBuscar.toUpperCase()) > -1) {
                        validado = true;
                    }
                    if (validado) {
                        coincidencias_2.push(f);
                    }
                });
                filtrados = coincidencias_2;
            }
        }
        this.terrenos = filtrados;
    };
    ModuloVentasComponent.prototype.obtenerClientesActivos = function () {
        var _this = this;
        this.catalogosService.clientesTerrenos().then(function (res) {
            _this.terrenosClientes = res['Data'];
            return _this.catalogosService.clientesActivos();
        }).then(function (resCli) {
            _this.clientesTodosTodos = _this.clientesTodos = _this._ordenarDatosCliente(resCli['Data']);
            _this.totales.Clientes = _this.clientesTodosTodos.length;
            console.log('clientes', _this.clientesTodos);
            _this.nombresClientes = resCli['Data'].map(function (key) {
                return key.Nombre;
            });
        }).catch(function (err) { console.log('err', err); });
    };
    ModuloVentasComponent.prototype.verCatalogoClientes = function () {
        this.panelVisualizar = 'Clientes';
    };
    ModuloVentasComponent.prototype.detalleCliente = function (cliente) {
        this._limpiarPantallas();
        this.clienteDetalles = cliente;
        if (this.clienteDetalles) {
            if (this.clienteDetalles.Terrenos[0]) {
                this.mensualidades();
                this.anualidades();
            }
            else {
                this.clienteDetalles.Terrenos = [];
            }
            this.mantenimientos();
        }
        console.log('clientes', this.clienteDetalles);
    };
    ModuloVentasComponent.prototype._limpiarPantallas = function () {
        this.clienteDetalles = this.clientesTodosVista = this.detallesClienteVista = this.mensualidadesVista = this.anualidadesVista = this.mantenimientoVista = false;
    };
    ModuloVentasComponent.prototype.mantenimientos = function () {
        var _this = this;
        var cliente = this.clienteDetalles;
        //this._limpiarPantallas();
        if (cliente.IdCliente) {
            this.ventasService.obtenerMantenimientosCliente(cliente).then(function (man) {
                if (man['Data']) {
                    _this.mantenimientosTodos = { Datos: _this._ordenarDatosMensualidad(man['Data']) };
                    _this.clienteDetalles.Mantenimientos = man['Data'];
                    _this.mantenimientoVista = true;
                }
            });
        }
    };
    ModuloVentasComponent.prototype.mensualidades = function () {
        var _this = this;
        var cliente = this.clienteDetalles;
        this._limpiarPantallas();
        this.clienteDetalles = cliente;
        if (this.clienteDetalles.IdCliente) {
            //console.log('det',this.clienteDetalles);
            this.ventasService.obtenerMensualidadesCliente(this.clienteDetalles).then(function (men) {
                if (men['Data']) {
                    _this.clienteDetalles.Terrenos.forEach(function (te) {
                        var mensualidadTerreno = men['Data'].filter(function (ob) { return ob.IdTerreno == te.IdTerreno; });
                        if (mensualidadTerreno[0]) {
                            te.Mensualidades = { Datos: _this._ordenarDatosMensualidad(mensualidadTerreno) };
                        }
                        else {
                            te.Mensualidades = { Datos: [{ Fecha: '0000-00-00', Fecha_ultimo_abono: '0000-00-00', Importe: '-', Pagado: '-', Restante: '-', ObjCompleto: {} }] };
                        }
                        console.log('mensu', te.Mensualidades);
                    });
                    _this.clienteDetalles.Mensualidades = men['Data'];
                    //console.log('clientes',this.clienteDetalles);
                    _this.mensualidadesVista = true;
                }
            });
        }
    };
    ModuloVentasComponent.prototype.anualidades = function () {
        var _this = this;
        var cliente = this.clienteDetalles;
        this._limpiarPantallas();
        this.clienteDetalles = cliente;
        if (this.clienteDetalles.IdCliente) {
            //console.log('det',this.clienteDetalles);
            this.ventasService.obtenerAnualidadesCliente(this.clienteDetalles).then(function (men) {
                if (men['Data']) {
                    _this.clienteDetalles.Terrenos.forEach(function (te) {
                        var anualidadTerreno = men['Data'].filter(function (ob) { return ob.IdTerreno == te.IdTerreno; });
                        if (anualidadTerreno[0]) {
                            te.Anualidades = { Datos: _this._ordenarDatosMensualidad(anualidadTerreno) };
                        }
                        else {
                            te.Anualidades = { Datos: [{ Fecha: '0000-00-00', Fecha_ultimo_abono: '0000-00-00', Importe: '-', Pagado: '-', Restante: '-', ObjCompleto: {} }] };
                        }
                        //console.log('mensu',te.Mensualidades);
                    });
                    _this.clienteDetalles.Anualidades = men['Data'];
                    //console.log('clientes',this.clienteDetalles);
                    _this.anualidadesVista = true;
                }
            });
        }
    };
    ModuloVentasComponent.prototype._ordenarDatosMensualidad = function (datos) {
        var datosOrdenados = [];
        datos.forEach(function (da) {
            var pagado = (da.Pagado == 1) ? 'Si' : 'No';
            pagado = (da.Pendiente == 0) ? pagado : 'Abonado';
            datosOrdenados.push({ Fecha: da.Fecha, Fecha_ultimo_abono: da.Fecha_modificacion, Importe: da.Importe, Pagado: pagado, Restante: da.Pendiente, ObjCompleto: da });
        });
        return datosOrdenados;
    };
    ModuloVentasComponent.prototype._ordenarDatosCliente = function (datos) {
        var _this = this;
        var datosOrdenados = [];
        var Parcela;
        var Lote;
        var Etapa;
        var Estado;
        Parcela = Lote = Etapa = Estado = '-';
        datos.forEach(function (dat) {
            dat.Color = 'secondary';
            var ter = _this.terrenosClientes.filter(function (ob) { return ob.IdCliente == dat.IdCliente; });
            //            console.log('dat',dat);
            if (!ter[0]) {
                ter = [];
                Parcela = Lote = Etapa = Estado = '';
            }
            else {
                Parcela = Lote = Etapa = Estado = '';
                var aux_1 = (ter.length > 1) ? " y " : "";
                var c_1 = 1;
                ter.forEach(function (t) {
                    Parcela += t.parcela + " " + ((c_1 < ter.length) ? aux_1 : "");
                    Lote += t.lote + " " + ((c_1 < ter.length) ? aux_1 : "");
                    Etapa += t.etapa + " " + ((c_1 < ter.length) ? aux_1 : "");
                    Estado += t.Estado + " " + ((c_1 < ter.length) ? aux_1 : "");
                    c_1++;
                });
            }
            dat.Parcela = Parcela;
            dat.Lote = Lote;
            dat.Etapa = Etapa;
            dat.Estado = Estado;
            //            console.log('ter',ter);
            dat.Terrenos = ter;
            dat.Fecha_nacimiento = dat.Fecha_nacimiento.split('T')[0];
            datosOrdenados.push(dat);
        });
        return datosOrdenados;
    };
    ModuloVentasComponent.prototype.catalogoClientes = function () {
        var _this = this;
        this._limpiarVistaYVariables();
        this._delay(100).then(function (res) {
            _this.clientesCatalogos = true;
            _this.vistaCentro = true;
        });
    };
    ModuloVentasComponent.prototype.nuevoCliente = function () {
        var _this = this;
        this._limpiarVistaYVariables();
        this._delay(100).then(function (res) {
            _this.clienteNuevo = true;
            _this.vistaCentro = true;
        });
    };
    ModuloVentasComponent.prototype.imprimirPagare = function (obj) {
        console.log('obj', obj);
    };
    ModuloVentasComponent.prototype.nuevaCotizacion = function () {
        var _this = this;
        this._limpiarVistaYVariables();
        this._delay(100).then(function (res) {
            _this.cotizacionNueva = true;
            _this.vistaCentro = true;
        });
    };
    ModuloVentasComponent.prototype.procesarContratos = function (event) {
        var _this = this;
        /*        let datosEvent = this._datosPrueba();
                console.log('datos_prueba',datosEvent);*/
        this._limpiarVistaYVariables();
        this._delay(100).then(function (res) {
            _this.vistaCentro = true;
            _this.datosContrato = event;
        });
    };
    ModuloVentasComponent.prototype.confirmarEliminarUsuario = function (p) {
        var _this = this;
        var datosModal = { Titulo: 'Advertencia', Contenido: 'Estas a punto de poner borrar este prospecto, deseas continuar ? ', Tipo: 'warning', Confirm: 'Si Eliminar' };
        this._confirmarModal(datosModal).then(function (res) {
            console.log('datos', p);
            p.Activo = 0;
            _this.catalogosService.actualizarProspectoVendedor(p).then(function (res) {
                _this.nuevoProspecto = false;
                _this._obtenerProspectos();
            }).catch(function (err) { console.log('err', err); });
        }).catch(function (err) {
            console.log('err', err);
        });
        this.Prospectos = this.Prospectos.filter(function (pr) { return pr != p; });
    };
    ModuloVentasComponent.prototype.apartarTerreno = function (p) {
        this.panelVisualizar = 'NuevoCliente';
        this.datosNuevoCliente = { Nombre: p.Nombre_prospecto, Correo: p.Correo, Telefono: p.Telefono, Terrenos: [{ Id: 0, Cotizacion: [{ IdCotizacion: 0 }] }] };
    };
    ModuloVentasComponent.prototype._limpiarVistaYVariables = function () {
        this.vistaCentro = this.clientesCatalogos = this.datosContrato = this.clienteNuevo = this.cotizacionNueva = false;
    };
    ModuloVentasComponent.prototype._confirmarModal = function (datosAlert) {
        return new Promise(function (resolve, reject) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()({ title: datosAlert.Titulo,
                html: "<p class=\"\">" + datosAlert.Contenido + "</p>",
                type: datosAlert.Tipo,
                showCancelButton: true,
                cancelButtonColor: '#D33',
                confirmButtonText: "<b style=\"font-size: 18px;\">" + datosAlert.Confirm + "</b>",
                cancelButtonText: "<b style=\"font-size: 18px;\">Cancelar</b>"
            }).then(function (result) {
                if (result.value) {
                    return resolve(true);
                }
            }).catch(function (err) {
                return reject(false);
            });
        });
    };
    ModuloVentasComponent.prototype._delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    ModuloVentasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modulo-ventas',
            template: __webpack_require__(/*! ./Modulo_ventas.component.html */ "./src/app/layout/Modulo_venta/Modulo_ventas.component.html"),
            styles: [__webpack_require__(/*! ./Modulo_ventas.component.scss */ "./src/app/layout/Modulo_venta/Modulo_ventas.component.scss")],
            animations: [
                Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])(),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('flyInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateX(0)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateX(-100%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(100)
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateX(100%)' }))
                    ])
                ])
            ],
            providers: [_shared_services_estadisticas_service__WEBPACK_IMPORTED_MODULE_2__["EstadisticasService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _shared_services_catalogos_service__WEBPACK_IMPORTED_MODULE_3__["CatalogosService"], _shared_services_ventas_service__WEBPACK_IMPORTED_MODULE_4__["VentasService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]])
    ], ModuloVentasComponent);
    return ModuloVentasComponent;
}());



/***/ }),

/***/ "./src/app/layout/Modulo_venta/Modulo_ventas.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/Modulo_venta/Modulo_ventas.module.ts ***!
  \*************************************************************/
/*! exports provided: ModuloVentasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuloVentasModule", function() { return ModuloVentasModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Modulo_ventas_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modulo_ventas-routing.module */ "./src/app/layout/Modulo_venta/Modulo_ventas-routing.module.ts");
/* harmony import */ var _Modulo_ventas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modulo_ventas.component */ "./src/app/layout/Modulo_venta/Modulo_ventas.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ModuloVentasModule = /** @class */ (function () {
    function ModuloVentasModule() {
    }
    ModuloVentasModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_Modulo_ventas_routing_module__WEBPACK_IMPORTED_MODULE_1__["ModuloVentasRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
            declarations: [_Modulo_ventas_component__WEBPACK_IMPORTED_MODULE_2__["ModuloVentasComponent"]]
        })
    ], ModuloVentasModule);
    return ModuloVentasModule;
}());



/***/ })

}]);
//# sourceMappingURL=Modulo_venta-Modulo_ventas-module.js.map