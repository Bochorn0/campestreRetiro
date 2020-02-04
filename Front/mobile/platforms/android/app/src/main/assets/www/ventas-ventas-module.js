(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ventas-ventas-module"],{

/***/ "./src/app/layout/ventas/clientes/clientes.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layout/ventas/clientes/clientes.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xl-12 col-lg-12 col-xs-12\">\n    <div class=\"card mb-3\">\n        <div class=\"card-header bg-success\" >\n            Nuevo Cliente\n        </div>\n        <div class=\"card-body\">\n            <div class=\"row\">\n                <div class=\"col-lg-12\"><h3 class=\"text-center text-info \">Datos de Contacto</h3><hr></div>\n                <div class=\"col-lg-4\" *ngIf=\"mensualidad\"><b>Mensualidad:</b> {{mensualidad}}</div>\n                <div class=\"col-lg-4\" *ngIf=\"anualidad\"><b>Anualidad:</b> {{anualidad}}</div>\n                <div class=\"col-lg-4\" *ngIf=\"numPagos\"><b>#Pagos:</b> {{numPagos}}</div>\n                <div class=\"col-lg-6\">\n                    <div class=\"form-group\">\n                        <label class=\"label-form\"> Nombre </label>\n                        <input type=\"text\" placeholder=\"Luis Fernando Cordova Castillo\" [(ngModel)]=\"nombre\" class=\"form-control\" required/>\n                    </div>\n                </div>\n                <div class=\"col-lg-6\">\n                    <div class=\"form-group\">\n                        <label class=\"label-form\"> Correo </label>\n                        <input type=\"text\" placeholder=\"luisfer@gmail.com\" name=\"correo\" [(ngModel)]=\"correo\" class=\"form-control\" required/>\n                    </div>\n                </div>\n                <div class=\"col-lg-4\">\n                    <div class=\"form-group\">\n                        <label class=\"label-form\"> IFE </label>\n                        <input type=\"text\" placeholder=\"0589119466813\" [(ngModel)]=\"numIfe\" class=\"form-control\" required />\n                    </div>\n                </div>\n                <div class=\"col-lg-4\">\n                    <div class=\"form-group\">\n                        <label class=\"label-form\"> Comprobante domicilio </label>\n                        <div class=\"input-group\">\n                            <label class=\"input-group-btn\" style=\"margin:0;\">\n                                <span class=\"btn btn-success\" >\n                                    <i class=\"fa fa-upload\"> </i> Cargar comprobante\n                                    <input type=\"file\" style=\"display: none;\" accept=\"image/*\" (change)=\"nombreArchivo($event,'Domicilio');\" required>\n                                </span>\n                            </label>\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"comprobante\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4\">\n                    <div class=\"form-group\">\n                        <label class=\"label-form\"> Foto IFE </label>\n                        <div class=\"input-group\">\n                            <label class=\"input-group-btn\" style=\"margin:0;\">\n                                <span class=\"btn btn-success\">\n                                    <i class=\"fa fa-upload\"> </i> Cargar foto IFE\n                                    <input type=\"file\" style=\"display: none;\" accept=\"image/*\" (change)=\"nombreArchivo($event,'Ife');\" required >\n                                </span>\n                            </label>\n                            <input type=\"text\" class=\"form-control\" name=\"nombreArchivo\" [(ngModel)]=\"fotoIfe\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4\">\n                    <div class=\"form-group\">\n                        <label class=\"label-form\"> Origen </label>\n                        <input type=\"text\" placeholder=\"San pedro\" [(ngModel)]=\"origen\" class=\"form-control\" required/>\n                    </div>\n                </div>\n                <div class=\"col-lg-4\">\n                    <div class=\"form-group\">\n                        <label class=\"label-form\"> Teléfono </label>\n                        <input type=\"text\" placeholder=\"6621691999\" [(ngModel)]=\"telefono\" class=\"form-control\" required />\n                    </div>\n                </div>\n                <div class=\"col-lg-4\">\n                    <div class=\"form-group\">\n                        <label class=\"label-form\"> Fecha Nacimiento </label>\n                        <input type=\"date\" [(ngModel)]=\"fNacimiento\" class=\"form-control\" required/>\n                    </div>\n                </div>\n                <div class=\"col-lg-12\">\n                    <div class=\"form-group\">\n                        <label class=\"label-form\"> Direccion </label>\n                        <textarea placeholder=\"Calle de las flores entre Palacio y Tuxtla numero 197\" [(ngModel)]=\"direccion\" class=\"form-control\"> </textarea>\n                    </div>\n                </div>\n                <div class=\"col-lg-12\"><br><h3 class=\"text-center text-warning\">Datos de Referencias</h3><hr></div>\n                <div class=\"col-lg-4\">\n                    <div class=\"form-group\">\n                        <label class=\"label-form\"> Referencia 1 </label>\n                        <input type=\"text\" placeholder=\"Nombre:\" [(ngModel)]=\"referencia1\" class=\"form-control\"/>\n                        <br>\n                        <input type=\"text\" placeholder=\"Telefono:\" [(ngModel)]=\"celReferencia1\" class=\"form-control\"/>\n                    </div>\n                </div>\n                <div class=\"col-lg-4\">\n                    <div class=\"form-group\">\n                        <label class=\"label-form\"> Referencia 2 </label>\n                        <input type=\"text\" placeholder=\"Nombre:\" [(ngModel)]=\"referencia2\" class=\"form-control\"/><br>\n                        <input type=\"text\" placeholder=\"Telefono:\" [(ngModel)]=\"celReferencia2\" class=\"form-control\"/>\n                    </div>\n                </div>\n                <div class=\"col-lg-4\">\n                    <div class=\"form-group\">\n                        <label class=\"label-form\"> Referencia 3 </label>\n                        <input type=\"text\" placeholder=\"Nombre:\" [(ngModel)]=\"referencia3\" class=\"form-control\"/>\n                        <br>\n                        <input type=\"text\" placeholder=\"Telefono:\" [(ngModel)]=\"celReferencia3\" class=\"form-control\"/>\n                    </div>\n                </div>\n                <div class=\"col-lg-12\"><br><h3 class=\"text-center text-danger\">Datos de Terreno</h3><hr></div>\n                <div class=\"col-lg-12\">\n                    <button (click)=\"this.terrenosCliente.push({IdCotizacion : 0});\" class=\"btn btn-success pull-right\">\n                        <i class=\"fa fa-plus-circle\"></i> Terreno\n                    </button>\n                    <br><br>\n                </div>\n                <div class=\"col-lg-3\">\n                    <div class=\"form-group\">\n                        <label class=\"label-form\">Contrato de agua </label>\n                        <input type=\"number\" [(ngModel)]=\"contratoAgua\" placeholder=\"400\"class=\"form-control\">\n                    </div>\n                </div>\n                <div class=\"col-lg-3\">\n                    <div class=\"form-group\">\n                        <label class=\"label-form\">Mantenimiento mensual</label>\n                        <input type=\"number\" [(ngModel)]=\"importeMantenimiento\" placeholder=\"1500\"class=\"form-control\" >\n                    </div>\n                </div>\n                <div class=\"col-lg-3\">\n                    <div class=\"form-group\">\n                        <label class=\"label-form\"> Primer Mantenimiento </label>\n                        <input type=\"date\" [(ngModel)]=\"fechaPrimerMantenimiento\" class=\"form-control\" >\n                    </div>\n                </div>\n                <div class=\"col-lg-3\">\n                    <div class=\"form-group\">\n                        <label class=\"label-form\"> Periodo de cobro </label>\n                        <select [(ngModel)]=\"fechaParaCobro\" class=\"form-control \">\n                            <option value=\"0\">Selecciona cada cuantos meses </option>\n                            <option value=\"1\">1 Mes</option>\n                            <option value=\"2\">2 Meses</option>\n                            <option value=\"3\">3 Meses</option>\n                            <option value=\"4\">4 Meses</option>\n                            <option value=\"5\">5 Meses</option>\n                            <option value=\"6\">6 Meses</option>\n                            <option value=\"7\">7 Meses</option>\n                            <option value=\"8\">8 Meses</option>\n                            <option value=\"9\">9 Meses</option>\n                            <option value=\"10\">10 Meses</option>\n                            <option value=\"11\">11 Meses</option>\n                            <option value=\"12\">12 Meses</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"col-lg-12\" *ngFor=\"let ter of terrenosCliente; let t = index;\">\n                    <div class=\"row\">\n                        <div class=\"col-lg-2\">\n                            <div class=\"form-group\">\n                                <input type=\"hidden\"[(ngModel)]=\"ter.IdTerreno\">\n                                <input id=\"typeahead-format\" title=\"Parcela # y propietario: {{ter.Pertenece}}\" placeholder=\"Parcela:\" type=\"text\" class=\"form-control\" [(ngModel)]=\"ter.parcela\" [ngbTypeahead]=\"filtrarTerrenos\" (selectItem)=\"seleccionarParcela($event, t)\" [resultFormatter]=\"formatter\" required/>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-1\">\n                            <div class=\"form-group\">\n                                <input id=\"typeahead-format\" title=\"Lote #: \" placeholder=\"Lote:\" type=\"text\" class=\"form-control\" [(ngModel)]=\"ter.lote\" [ngbTypeahead]=\"filtrarLotes\" (selectItem)=\"seleccionarLote($event)\" [resultFormatter]=\"formatter\" required/>\n                            </div>                            \n                        </div>\n                        <div class=\"col-lg-1\">\n                            <div class=\"form-group\">\n                                <input id=\"typeahead-format\" title=\"Etapa #: \" placeholder=\"Etapa:\" type=\"text\" class=\"form-control\" [(ngModel)]=\"ter.etapa\" [ngbTypeahead]=\"filtrarEtapas\" (selectItem)=\"seleccionarEtapa($event)\" [resultFormatter]=\"formatter\" required/>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-2\">\n                            <div class=\"form-group\">\n                                <input type=\"text\"  title=\"Extension en m2: \" placeholder=\"Superficie:\" [(ngModel)]=\"ter.Superficie\" class=\"form-control\" required/> \n                            </div>\n                        </div>                        \n                        <div class=\"col-lg-2\">\n                            <div class=\"form-group\">\n                                <input type=\"text\"  title=\"Folio #: \" placeholder=\"Folio:\" [(ngModel)]=\"ter.folio\" class=\"form-control\" required/> \n                            </div>\n                        </div>\n                        <div class=\"col-lg-3\">\n                            <div class=\"form-group\">\n                                <select class=\"form-control\"  [(ngModel)]=\"ter.IdCotizacion\" required>\n                                    <option value=\"0\">Cotización</option>\n                                    <option *ngFor=\"let cot of cotizaciones\" value=\"{{cot.IdCotizacion}}\">{{cot.Nombre}}</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-1\">\n                            <div class=\"form-group\">\n                                <button class=\"btn btn-danger\" (click)=\"borrarTerreno(t);\"><i class=\"fa fa-times\"></i></button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-12\">\n                    <div class=\"form-group\">\n                            <label class=\"label-form\"> &nbsp;</label><br>\n                        <button class=\"btn btn-primary pull-right\" (click)=\"guardarNuevoCliente();\">Guardar Cliente</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/ventas/clientes/clientes.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layout/ventas/clientes/clientes.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label-form {\n  font-weight: bold !important; }\n\ndiv#sugerencias {\n  width: 100%;\n  background: #fff;\n  border: 1px solid #ddd;\n  font-size: 12px;\n  max-height: 100px;\n  overflow-y: auto;\n  padding: 10px;\n  z-index: 1; }\n\n#sugerencias th {\n  font-size: 16;\n  margin-bottom: 3px; }\n\n.activeLink {\n  cursor: pointer; }\n\n.activeLink:hover {\n  opacity: .7; }\n\n#sugerencias td {\n  padding: 5px; }\n\n.panel {\n  border: 1px solid #ddd;\n  padding: 20px; }\n\n.card-header {\n  color: #fff !important; }\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n.btn-info {\n  color: #fff;\n  background-color: #359B83 !important;\n  border-color: #46b8da; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #10798D !important;\n  border-color: #46b8da; }\n\n.btn-warning {\n  color: #fff;\n  background-color: #2A8901 !important;\n  border-color: #46b8da; }\n\n.btn-danger {\n  color: #fff;\n  background-color: #955006 !important;\n  border-color: #46b8da; }\n\n.btn-secondary {\n  color: #fff;\n  background-color: #232E5C !important;\n  border-color: #46b8da; }\n\n.btn-info:focus, .btn-info:hover, .btn-info.focus {\n  color: #fff;\n  background-color: #396B57 !important;\n  border-color: #174935; }\n\n.btn-primary:focus, .btn-primary:hover, .btn-primary.focus {\n  color: #fff;\n  background-color: #10798D !important;\n  border-color: #46b8da; }\n\n.btn-warning:focus, .btn-warning:hover, .btn-warning.focus {\n  color: #fff;\n  background-color: #2D6E00 !important;\n  border-color: #0a2a1c; }\n\n.btn-danger:focus, .btn-danger:hover, .btn-danger.focus {\n  color: #fff;\n  background-color: #7F4700 !important;\n  border-color: #623900; }\n\n.btn-secondary:focus, .btn-secondary:hover, .btn-secondary.focus {\n  color: #fff;\n  background-color: #2D3854 !important;\n  border-color: #0c0d35; }\n\n.bg-info {\n  color: #fff;\n  background-color: #359B83 !important;\n  border-color: #46b8da; }\n\n.bg-primary {\n  color: #fff;\n  background-color: #10798D !important;\n  border-color: #46b8da; }\n\n.bg-warning {\n  color: #fff;\n  background-color: #2A8901 !important;\n  border-color: #46b8da; }\n\n.bg-danger {\n  color: #fff;\n  background-color: #955006 !important;\n  border-color: #46b8da; }\n\n.bg-secondary {\n  color: #fff;\n  background-color: #232E5C !important;\n  border-color: #46b8da; }\n"

/***/ }),

/***/ "./src/app/layout/ventas/clientes/clientes.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/ventas/clientes/clientes.component.ts ***!
  \**************************************************************/
/*! exports provided: ClientesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesComponent", function() { return ClientesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared_services_catalogos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/catalogos.service */ "./src/app/shared/services/catalogos.service.ts");
/* harmony import */ var _shared_services_ventas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/ventas.service */ "./src/app/shared/services/ventas.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ClientesComponent = /** @class */ (function () {
    function ClientesComponent(catalogosService, ventasService) {
        var _this = this;
        this.catalogosService = catalogosService;
        this.ventasService = ventasService;
        this.vista = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.formatter = function (result) { return result.toUpperCase(); };
        this.filtrarTerrenos = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (term) { return term === '' ? [] : _this.parcelas.filter(function (ob) { return ob.toUpperCase().indexOf(term.toUpperCase()) > -1; }); }));
        };
        this.filtrarLotes = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (term) { return term === '' ? [] : _this.lotes.filter(function (ob) { return ob.toUpperCase().indexOf(term.toUpperCase()) > -1; }); }));
        };
        this.filtrarEtapas = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (term) { return term === '' ? [] : _this.etapas.filter(function (ob) { return ob.toUpperCase().indexOf(term.toUpperCase()) > -1; }); }));
        };
        this.IdCotizacion = 0;
        this._obtenerCotizaciones();
        this._obtenerTerrenos();
        this.numParcela = '';
        this.costoMetro = 140;
        this.terrenosCliente = [];
        this.terrenosCliente.push({ IdCotizacion: 0 });
        this.nombre = 'Bocho';
        this.numIfe = this.origen = this.telefono = this.direccion = this.referencia1 = this.referencia2 = this.referencia3 = 'Prueba';
        this.correo = 'prueba@prueba.com';
        this.fNacimiento = '1991-08-24';
        this.fechaParaCobro = 0;
        this.importeMantenimiento = 1500;
        this.contratoAgua = 500;
        this.fechaPrimerMantenimiento = moment__WEBPACK_IMPORTED_MODULE_6__().add('6', 'month').format('YYYY-MM') + "-15";
    }
    ClientesComponent.prototype._obtenerCotizaciones = function () {
        var _this = this;
        this.catalogosService.obtenerCotizaciones().then(function (res) {
            _this.cotizaciones = res['Data'];
            console.log('cot', _this.cotizaciones);
        }).catch(function (err) { console.log('err', err); });
    };
    ClientesComponent.prototype._obtenerTerrenos = function () {
        var _this = this;
        this.catalogosService.obtenerTerrenos().then(function (res) {
            _this.terrenos = res['Data'].filter(function (ob) { return ob.Asignado == 0; });
            _this.parcelas = _this.terrenos.map(function (key) {
                return key.parcela;
            });
            _this.lotes = _this.terrenos.map(function (key) {
                return key.lote;
            });
            _this.etapas = _this.terrenos.map(function (key) {
                return key.etapa;
            });
        }).catch(function (err) { console.log('err', err); });
    };
    ClientesComponent.prototype.ngOnInit = function () { };
    ClientesComponent.prototype.borrarTerreno = function (indice) {
        var _this = this;
        var parcelas = [];
        this.terrenosCliente.splice(indice, 1);
        this.terrenos.forEach(function (ter) {
            var existe = _this.terrenosCliente.filter(function (t) { return t.IdTerreno == ter.IdTerreno; });
            if (!existe[0]) {
                parcelas.push(ter.parcela);
            }
        });
        this.parcelas = parcelas;
    };
    ClientesComponent.prototype.nombreArchivo = function (event, nombre) {
        var _this = this;
        var file = event.target.files[0];
        var renderFile = new FileReader();
        switch (nombre) {
            case 'Domicilio':
                this.comprobante = file.name;
                renderFile.readAsDataURL(file);
                renderFile.onloadend = function () {
                    if (renderFile.result) {
                        _this.fComprobante = renderFile.result;
                    }
                };
                break;
            case 'Ife':
                this.fotoIfe = file.name;
                this.fIfe = file;
                renderFile.readAsDataURL(file);
                renderFile.onloadend = function () {
                    if (renderFile.result) {
                        _this.fIfe = renderFile.result;
                    }
                };
                break;
            default: break;
        }
    };
    ClientesComponent.prototype.seleccionarLote = function (sele) {
        console.log('lote', sele);
    };
    ClientesComponent.prototype.seleccionarEtapa = function (sele) {
        console.log('etapa', sele);
    };
    ClientesComponent.prototype.seleccionarParcela = function (selected, indice) {
        var _this = this;
        this.datosTerreno = this.terrenos.filter(function (ob) { return ob.parcela == selected.item.toString(); })[0];
        var existe = this.terrenosCliente.filter(function (ob) { return ob.IdTerreno == _this.datosTerreno.IdTerreno; });
        console.log('dat', this.datosTerreno);
        if (this.datosTerreno && !existe[0]) {
            this.terrenosCliente[indice] = this.datosTerreno;
            var restantes = this.terrenos.filter(function (t) { return t.IdTerreno != _this.datosTerreno.IdTerreno; });
            this.parcelas = restantes.map(function (key) {
                return key.parcela;
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Error', 'El terreno no puede agregarse porque ya esta en la lista, por favor selecciona uno diferente', 'error');
            this.terrenosCliente[indice] = {};
        }
        console.log('ter', this.terrenosCliente);
    };
    ClientesComponent.prototype.guardarNuevoCliente = function () {
        var _this = this;
        if (!this.terrenosCliente[0].IdTerreno) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Error', 'Debes ingresar al menos un terreno', 'error');
        }
        else {
            var Saldo_adeudo_1;
            var Saldo_credito_1;
            var Credito_original_1;
            var Saldo_anualidad_1;
            //Quitar Terrenos Vacios
            var terrenosUnicos = this.terrenosCliente.filter(function (ob) { return ob.IdTerreno != 0; });
            //Datos Cotizaciones
            terrenosUnicos.forEach(function (dat) {
                dat.Cotizacion = _this.cotizaciones.filter(function (ob) { return ob.IdCotizacion == dat.IdCotizacion; });
            });
            //Asignacion global de terrenos unicos
            this.terrenosCliente = terrenosUnicos;
            //Definicion y asignacion de saldos de cliente
            Saldo_adeudo_1 = Saldo_credito_1 = Credito_original_1 = Saldo_anualidad_1 = 0;
            this.terrenosCliente.forEach(function (ter) {
                Saldo_adeudo_1 += ter.Cotizacion[0].Enganche;
                Saldo_credito_1 += ter.Cotizacion[0].Credito;
                Credito_original_1 += ter.Cotizacion[0].Credito;
                Saldo_anualidad_1 += (ter.Cotizacion[0].Num_anualidades * ter.Cotizacion[0].Anualidad);
            });
            //Datos del cliente
            var datosClienteNuevo_1 = {
                //Datos Contacto
                Nombre: this.nombre, NumIfe: this.numIfe, Comprobante: this.fComprobante, FotoIfe: this.fIfe, Direccion: this.direccion, Origen: this.origen, Telefono: this.telefono, Correo: this.correo, Fecha_nacimiento: this.fNacimiento,
                //Datos Referencias
                Ref1: this.referencia1, Ref2: this.referencia2, Ref3: this.referencia3, TelRef_1: this.celReferencia1, TelRef_2: this.celReferencia2, TelRef_3: this.celReferencia3,
                //Datos Terreno y usuario
                Terrenos: this.terrenosCliente, Usuario: JSON.parse(localStorage.getItem('Datos')),
                //Datos Saldos
                Saldo_agua: this.contratoAgua, Saldo_adeudo: Saldo_adeudo_1, Saldo_credito: Saldo_credito_1, Credito_original: Credito_original_1, Saldo_mantenimiento: this.importeMantenimiento, Saldo_certificado: 8000, Saldo_anualidad: Saldo_anualidad_1,
                //Datos Mantenimiento
                Periodo_cobro: this.fechaParaCobro, Fecha_mantenimiento: this.fechaPrimerMantenimiento, Importe_mantenimiento: this.importeMantenimiento
            };
            console.log('datos cliente', datosClienteNuevo_1);
            //Guardado cliente
            this.ventasService.obtenerPdfPagare({ Datos: datosClienteNuevo_1 }).then(function (re) {
                _this.pdfPagare = re['String'];
                _this._downloadFile('data:application/pdf;base64,' + _this.pdfPagare, "PAGARE_1", 'pdf');
                return _this.ventasService.guardarNuevoCliente(datosClienteNuevo_1);
            }).then(function (res) {
                if (res['Data']['Operacion'] && res['Data']['Tipo']) {
                    var tipo = res['Data']['Tipo'];
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Exito', "" + res['Data']['Operacion'], tipo);
                    console.log('procesarContratos', JSON.stringify({ Activa: 'Contrato', Cliente: res['Data']['Cliente'], Terrenos: _this.terrenosCliente }));
                    _this.vista.emit({ Activa: 'Contrato', Cliente: res['Data']['Cliente'], Terrenos: _this.terrenosCliente });
                }
            }).catch(function (err) { console.log('err', err); });
        }
    };
    ClientesComponent.prototype._downloadFile = function (url, nombre, ext) {
        var dwldLink = document.createElement("a");
        var isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
        if (isSafariBrowser) {
            dwldLink.setAttribute("target", "_blank");
        }
        dwldLink.setAttribute("href", url);
        dwldLink.setAttribute("download", nombre + "_" + moment__WEBPACK_IMPORTED_MODULE_6__().format('YYYY-MM-DD') + "." + ext);
        dwldLink.style.visibility = "hidden";
        document.body.appendChild(dwldLink);
        dwldLink.click();
        document.body.removeChild(dwldLink);
    };
    ClientesComponent.prototype._delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ClientesComponent.prototype, "vista", void 0);
    ClientesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clientes',
            template: __webpack_require__(/*! ./clientes.component.html */ "./src/app/layout/ventas/clientes/clientes.component.html"),
            styles: [__webpack_require__(/*! ./clientes.component.scss */ "./src/app/layout/ventas/clientes/clientes.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            providers: [_shared_services_catalogos_service__WEBPACK_IMPORTED_MODULE_2__["CatalogosService"], _shared_services_ventas_service__WEBPACK_IMPORTED_MODULE_3__["VentasService"]]
        }),
        __metadata("design:paramtypes", [_shared_services_catalogos_service__WEBPACK_IMPORTED_MODULE_2__["CatalogosService"], _shared_services_ventas_service__WEBPACK_IMPORTED_MODULE_3__["VentasService"]])
    ], ClientesComponent);
    return ClientesComponent;
}());



/***/ }),

/***/ "./src/app/layout/ventas/contrato/contrato.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layout/ventas/contrato/contrato.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xl-12 col-lg-12 col-xs-12\">\n    <div class=\"card mb-3\">\n        <div class=\"card-header \" >\n            Contrato de nuevo cliente\n        </div>\n        <div class=\"card-body\" [froalaEditor] [(froalaModel)]=\"contenidoContrato\"></div>\n        <div class=\"col-lg-12\">\n            <div class=\"form-group\">\n                    <label class=\"label-form\"> &nbsp;</label><br>\n                <button class=\"btn btn-primary pull-right\" (click)=\"guardarContrato();\">Guardar Contrato</button>\n                <button class=\"btn btn-danger pull-right\" (click)=\"omitirContrato();\">Omitir Contrato</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/ventas/contrato/contrato.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layout/ventas/contrato/contrato.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-info {\n  color: #fff;\n  background-color: #359B83 !important;\n  border-color: #46b8da; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #10798D !important;\n  border-color: #46b8da; }\n\n.btn-warning {\n  color: #fff;\n  background-color: #2A8901 !important;\n  border-color: #46b8da; }\n\n.btn-danger {\n  color: #fff;\n  background-color: #955006 !important;\n  border-color: #46b8da; }\n\n.btn-secondary {\n  color: #fff;\n  background-color: #232E5C !important;\n  border-color: #46b8da; }\n\n.btn-info:focus, .btn-info:hover, .btn-info.focus {\n  color: #fff;\n  background-color: #396B57 !important;\n  border-color: #174935; }\n\n.btn-primary:focus, .btn-primary:hover, .btn-primary.focus {\n  color: #fff;\n  background-color: #10798D !important;\n  border-color: #46b8da; }\n\n.btn-warning:focus, .btn-warning:hover, .btn-warning.focus {\n  color: #fff;\n  background-color: #2D6E00 !important;\n  border-color: #0a2a1c; }\n\n.btn-danger:focus, .btn-danger:hover, .btn-danger.focus {\n  color: #fff;\n  background-color: #7F4700 !important;\n  border-color: #623900; }\n\n.btn-secondary:focus, .btn-secondary:hover, .btn-secondary.focus {\n  color: #fff;\n  background-color: #2D3854 !important;\n  border-color: #0c0d35; }\n\n.bg-info {\n  color: #fff;\n  background-color: #359B83 !important;\n  border-color: #46b8da; }\n\n.bg-primary {\n  color: #fff;\n  background-color: #10798D !important;\n  border-color: #46b8da; }\n\n.bg-warning {\n  color: #fff;\n  background-color: #2A8901 !important;\n  border-color: #46b8da; }\n\n.bg-danger {\n  color: #fff;\n  background-color: #955006 !important;\n  border-color: #46b8da; }\n\n.bg-secondary {\n  color: #fff;\n  background-color: #232E5C !important;\n  border-color: #46b8da; }\n"

/***/ }),

/***/ "./src/app/layout/ventas/contrato/contrato.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/ventas/contrato/contrato.component.ts ***!
  \**************************************************************/
/*! exports provided: ContratoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContratoComponent", function() { return ContratoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared_services_catalogos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/catalogos.service */ "./src/app/shared/services/catalogos.service.ts");
/* harmony import */ var _shared_services_ventas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/ventas.service */ "./src/app/shared/services/ventas.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContratoComponent = /** @class */ (function () {
    function ContratoComponent(catalogosService, ventasService) {
        this.catalogosService = catalogosService;
        this.ventasService = ventasService;
        this.vista = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mensualidades = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ContratoComponent.prototype._reiniciarRegistros = function (datos) {
        this.datosContrato = false;
        this.datosOrigen = datos;
    };
    ContratoComponent.prototype.ngOnInit = function () {
        console.log('datos', this.datosOrigen);
        this.datosContrato = this.datosOrigen;
        this._contratoBase();
        console.log('contrato');
    };
    ContratoComponent.prototype.guardarContrato = function () {
        var _this = this;
        var datosGuardar = { Contenido: this.contenidoContrato, datosCliente: this.datosContrato.Cliente.ClienteCompleto, datosTerreno: this.datosContrato.Terrenos[0], Ext: 'html' };
        this.ventasService.guardarContrato(datosGuardar).then(function (res) {
            console.log('terrenos', _this.datosContrato.Terrenos);
            var borrado = _this.datosContrato.Terrenos.shift();
            if (_this.datosContrato.Terrenos[0]) {
                _this._contratoBase();
            }
            console.log('borrado', borrado);
            console.log('terrenos', _this.datosContrato.Terrenos);
            if (!_this.datosContrato.Terrenos[0]) {
                _this.datosContrato = false;
                var datosModal = { Titulo: 'Exito', Contenido: "Los Contratos Han Sido Revisados con exito. Deseas Imprimir las Mensualidades en una boleta?",
                    Tipo: 'success', Confirm: 'Si Imprimir' };
                _this._confirmarModal({}, datosModal).then(function (res) {
                    _this.mensualidades.emit({ Datos: _this.datosContrato });
                });
                _this.vista.emit({ Activa: 'Venta' });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Exito', "Contrato de parcela " + borrado.parcela + " Guardado correctamente", 'success');
            }
        }).catch(function (err) { console.log('err', err); });
    };
    ContratoComponent.prototype.omitirContrato = function () {
        var _this = this;
        var borrado = this.datosContrato.Terrenos.shift();
        if (!this.datosContrato.Terrenos[0]) {
            this.datosContrato = false;
            var datosModal = { Titulo: 'Exito', Contenido: "Los Contratos Han Sido Revisados con exito. Deseas Imprimir las Mensualidades en una boleta?",
                Tipo: 'success', Confirm: 'Si Imprimir' };
            this._confirmarModal({}, datosModal).then(function (res) {
                _this.mensualidades.emit({ Datos: _this.datosContrato });
            });
            this.vista.emit({ Activa: 'Venta' });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Exito', "El Contrato de la parcela " + borrado.parcela + " fue omitido, para revisarlo, ve a la seccion de Clientes ", 'success');
        }
    };
    ContratoComponent.prototype._delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    ContratoComponent.prototype._confirmarModal = function (datos, datosAlert) {
        return new Promise(function (resolve, reject) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({ title: datosAlert.Titulo,
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
    ContratoComponent.prototype._contratoBase = function () {
        if (this.datosContrato) {
            this.contenidoContrato = "<div class=\"row\" style=\"padding:20px;\">\n            <div class=\"col-lg-12\">\n                <h3>CONTRATO DE PROMESA DE COMPRA VENTA</h3>\n                <p>\n                    EN LA CIUDAD DE HERMOSILLO SONORA SIENDO LAS 10:00 HORAS DEL DIA 02 DE  AGOSTO  DE 2017   CELEBRAN: POR UNA PARTE LA C. LIDIA ALEJANDRA DUARTE MEDRANO   QUIEN BAJO PROTESTA DE DECIR VERDAD CELEBRA ESTE CONTRATO COMO POSESIONARIA  DEL POBLADO EL CARMEN MUNICIPIO DE HERMOSILLO COMO PROMITENTE VENDEDOR.\n                    POR UNA SEGUNDA PARTE COMPARECE EL C. &nbsp;&nbsp;<b><u>" + this.datosContrato.Cliente.Nombre + "</u></b> &nbsp;&nbsp;  QUIEN EN LO SUCESIVO SE LE DENOMINARA PROMITENTE COMPRADOR.\n                    MANIFESTARON QUE TIENEN CONCERTADO UN CONTRATO DE PROMESA DE COMPRAVENTA MISMO QUE DEJAN FORMALIZADO AL TENOR DE LOS ANTECEDENTES, DECLARACIONES Y CLAUSULAS SIGUIENTES:\n                </p>\n                <h3>ANTECEDENTES </h3>\n                <p>\n                    <b>PRIMERO.-</b>\n                    EL EJIDO EL CARMEN MUNICIPIO DE HERMOSILLO ESTADO DE SONORA CUENTA CON RESOLUCION PRESIDENCIAL DE FECHA 29 DE JULIO DE 1936, EJECUT\u00C1NDOSE  TOTALMENTE  EL DIA   29 / 07 /  36 POR LA VIA DOTACI\u00D3N  CON UNA  SUPERFICIE DE  718-00-00  HAS , PARA   22   EJIDATARIOS.- \n                </p>\n                <p>\n                    <b>SEGUNDO:</b>\n                    POSTERIORMENTE CON EL PROGRAMA DE CERTIFICACION DE DERECHOS EJIDALES Y TITULACION DE SOLARES URBANOS SE LLEVO A CABO LA REGULARIZACION DE LA TENENCIA DE LA TIERRA CULMINANDO LA ASAMBLEA DE DELIMITACION. DESTINO, ASIGNACION CON FECHA 29 DE NOVIEMBRE DE 1997, RATIFIC\u00C1NDOSE A 22   EJIDATARIOS.-\n                </p>\n                <p>\n                    <b>TERCERO:</b>\n                    ACTO SEGUIDO SE CELEBRA AUTORIZACION PARA ADOPCION DE DOMINIO PLENO SOBRE TIERRAS PARCELADAS  ASAMBLEA  CELEBRADA CON FECHA  01 DE AGOSTO DE 1999, INSCRITO EL ACTO EN EL REGISTRO AGRARIO NACIONAL CON FECHA  21 DE SEPTIEMBRE DEL A\u00D1O 2000.- \n                </p>\n                <p>\n                    <b>CUARTA:</b>\n                    QUE CON FECHA 25  DE OCTUBRE  DE 2014 EN ASAMBLEA DE DELIMITACION, DESTINO Y ASIGNACION DE TIERRAS ( CERTIFICACION DE LA TIERRA INCORPORADA AL REGIMEN EJIDAL COMO AREA PARCELADA)  SE FORMALIZO LA CERTIFICACION DE LA MISMA CORRESPONDIENDOLE A LA LIDIA ALEJANDRA DUARTE MEDRANO  UNA PARCELA CON EL NUMERO " + this.datosContrato.Terrenos[0].parcela + " .-\n                </p>\n                <br>\n\n                <h3>DECLARACIONES</h3>                    \n                <p>\n                    <b>PRIMERA:</b>\n                    LA C. LIDIA ALEJANDRA DUARTE MEDRANO  DECLARA QUE ES TITULAR DE LA PARCELA  N\u00B0  " + this.datosContrato.Terrenos[0].parcela + " CON SUPERFICIE DE " + this.datosContrato.Terrenos[0].Superficie + " MTS. 2  UBICADO EN EL EJIDO EL CARMEN MUNICIPIO DE HERMOSILLO Y QUE SE LOCALIZA EN EL CONJUNTO \u201CCAMPESTRE FAMILIAR EL RETIRO\u201D, EN EL KILOMETRO 15.0 DE LA CARRETERA A SAN MIGUEL DE HORCASITAS. \n                </p>                    \n                \n                <h3 class=\"text-right\">HOJA NO.02 </h3>\n                <p>\n                    <b>SEGUNDA:</b>\n                    LA C. LIDIA ALEJANDRA DUARTE MEDRANO, ACREDITA LA TITULARIDAD DE LA PARCELA NUMERO  " + this.datosContrato.Terrenos[0].parcela + "  CON SUPERFICIE " + this.datosContrato.Terrenos[0].Superficie + " MTS. CON CERTIFICADO PARCELARIO N\u00DAMERO&nbsp;&nbsp;<b><u>" + this.datosContrato.Terrenos[0].parcela + "</u></b> &nbsp;&nbsp; Y FOLIO: &nbsp;&nbsp;<b><u>" + this.datosContrato.Cliente.NumIfe + "</u></b> &nbsp;&nbsp; EXPEDIDO  POR EL REGISTRO AGRARIO NACIONAL .\n                    <br>\n                    LAS PARTES DE COMUN ACUERDO SE SUJETAN A LAS CLAUSULAS SIGUIENTES:\n                </p>\n                <h3 class=\"text-center\">CL\u00C1USULAS </h3>\n                <p>\n                    <b>PRIMERA:</b>\n                    LA C. LIDIA ALEJANDRA DUARTE MEDRANO  ESTA FORMALIZANDO CONTRATO DE PROMESA DE COMPRAVENTA CON EL (LA) C.&nbsp;&nbsp;<b><u>" + this.datosContrato.Cliente.Nombre + "</u></b> &nbsp;&nbsp;  RESPECTO DE LA PARCELA NUMERO &nbsp;&nbsp;<b><u>" + this.datosContrato.Terrenos[0].parcela + "</u></b> &nbsp;&nbsp; QUE SE UBICA EN EL EJIDO EL CARMEN MUNICIPIO DE HERMOSILLO Y SE LOCALIZA DENTRO DEL CONJUNTO \u201CCAMPESTRE FAMILIAR EL RETIRO\u201D, EN EL KILOMETRO 15.0 DE LA CARRETERA A SAN MIGUEL DE HORCASITAS. \n                </p>\n                <p>\n                    <b>SEGUNDA:</b>\n                    DESDE ESTE MOMENTO SE\u00D1ALAN LAS PARTES CONTRATANTES LA OBLIGACION DE LA PARTE PROMITENTE COMPRADORA DE PAGAR LA CANTIDAD DE $ 125,000.00  ( CIENTO VEINTICINCO MIL  PESOS  )   POR UNA SUPERFICIE DE  " + this.datosContrato.Terrenos[0].Superficie + " MTS. 2  \n                    <br>\n                    DICHA CANTIDAD SE CUBRIRA DE LA SIGUIENTE FORMA: PAGO INMEDIATO A LA FIRMA DE ESTE CONTRATO .\n                </p>\n                <p>\n                    <b>TERCERA:</b>\n                    SI POR ALGUNA RAZON EL(LA) C.&nbsp;&nbsp;<b><u>" + this.datosContrato.Cliente.Nombre + "</u></b> &nbsp;&nbsp; QUISIERE TRASPASAR O CEDER LA PARCELA NUMERO " + this.datosContrato.Terrenos[0].parcela + " , SE TENDRA QUE DAR PREVIO AVISO POR ESCRITO A LA C.LIDIA ALEJANDRA DUARTE MEDRANO , PARA QUE UNA VEZ CONCLUIDO EL PAGO TOTAL  SE TENGAN LOS DATOS ACUALIZADOS Y REALIZAR LA CESION DE DERECHOS A FAVOR DE LA PARTE PROMITENTE COMPRADORA Y O BIEN A QUIEN ESTA PERSONA ELIJA POR ASI CONVENIR A SUS INTERESES.-                        \n                </p>\n                <p>\n                    <b>CUARTA:</b>\n                    LA C. LIDIA ALEJANDRA DUARTE MEDRANO  MANIFIESTA ESTAR REALIZANDO Y FORMALIZANDO ESTE CONTRATO DE PROMESA DE COMPRA-VENTA CON EL (LA)C. &nbsp;&nbsp;<b><u>" + this.datosContrato.Cliente.Nombre + "</u></b> &nbsp;&nbsp; EL CUAL CULMINA EN CONVENIO DE CESION DE DERECHOS  A FAVOR DEL( DE LA )  C. &nbsp;&nbsp;<b><u>" + this.datosContrato.Cliente.Nombre + "</u></b> &nbsp;&nbsp; NO TENIENDO NING\u00DAN INCONVENIENTE  LA C. LIDIA ALEJANDRA DUARTE MEDRANO  QUE EL CERTIFICADO PARCELARIO CORRESPONDIENTE SEA A NOMBRE DE LA PERSONA ANTES MENCIONADA,O A QUIEN ESTA SE\u00D1ALE  QUIEN SE HAR\u00C1 RESPONSABLE DE LOS PAGOS Y COSTOS DEL TRASLADO  ANTE LA DEPENDENCIA QUE CORRESPONDE .                        \n                </p>\n                <h3 class=\"text-right\">HOJA NO.03 </h3>\n                <p>\n                    <b>QUINTA:</b>\n                    CONVIENEN AMBAS PARTES QUE EL(LA) C. &nbsp;&nbsp;<b><u>" + this.datosContrato.Cliente.Nombre + "</u></b> &nbsp;&nbsp; PAGAR\u00C1 EL CONTRATO DE AGUA A LA C. LIDIA ALEJANDRA DUARTE MEDRANO   UNA VEZ INSTALADA LA TOMA DE AGUA EN SU TERRENO, EL(LA)  C.&nbsp;&nbsp;<b><u>" + this.datosContrato.Cliente.Nombre + "</u></b> &nbsp;&nbsp; SOLO UTILIZARA ESTE SERVICIO DE SUMINISTRO DE AGUA EN LA PARCELA  YA ESPECIFICADA, HACIENDO UN USO ADECUADO DEL AGUA PARA EL CONSUMO MODERADO DE LAS NECESIDADES QUE REQUIERE UN TERRENO CAMPESTRE DENTRO DE LAS INSTALACIONES DE CAMPESTRE FAMILIAR \u201C EL RETIRO \u201D , POR NINGUN MOTIVO SE PERMITIRA DESPLAZAR EL SUMINISTRO DE AGUA A OTRO LUGAR QUE NO SEA EL MENCIONADO EN ESTE CONTRATO, EN CASO CONTRARIO SE RACIONARA O SUSPENDERA DICHO SUMINISTRO , COBRANDOSE UNA CUOTA POR RECONECCION. EL PAGO DE CONTRATO DE AGUA SE REALIZAR\u00C1 EN LAS OFICINAS GENERALES A M\u00C1S TARDAR 30 D\u00CDAS DESPU\u00C9S DE SU INSTALACI\u00D3N, ASI COMO UN PAGO SEMESTRAL POR MANTENIMIENTO.\n                </p>\n                <p>\n                    <b>SEXTA:</b>\n                    LA PARTE PROMITENTE VENDEDORA SE OBLIGA AL SANEAMIENTO PARA EL CASO DE EVICCION EN FORMA Y CONFORME A DERECHO.\n                </p>\n                <p>\n                    <b>SEPTIMA:</b>\n                    LA C.LIDIA ALEJANDRA DUARTE MEDRANO  ENTREGA A LA CELEBRACION DEL PRESENTE INSTRUMENTO LA POSESI\u00D3N FORMAL, MATERIAL Y JURIDICA DEL INMUEBLE DESCRITO EN LA DECLARACI\u00D3NES DE ESTE CONTRATO DE PROMESA DE COMPRA-VENTA AL(A LA ) C. &nbsp;&nbsp;<b><u>" + this.datosContrato.Cliente.Nombre + "</u></b> &nbsp;&nbsp; QUIEN EN ESTE MISMO ACTO LA RECIBE DE CONFORMIDAD.\n                </p>\n                <p>\n                    <b>OCTAVA:</b>\n                    PARA LA INTERPRETACI\u00D3N Y CUMPLIMIENTO DE LO ESTIPULADO Y LO NO ESTIPULADO EN ESTE CONTRATO, LAS PARTES SE SOMETER\u00C1N EXPRESAMENTE A LA JURISDICCI\u00D3N DE LOS TRIBUNALES DEL DISTRITO JUDICIAL DE HERMOSILLO, SONORA; RENUNCIANDO PARA TAL FIN EL FUERO QUE LES CORRESPONDA AS\u00CD COMO EL DE SU DOMICILIO ACTUAL O FUTURO.\n                </p>\n                <p>\n                    <b>NOVENA:</b>\n                    MANIFIESTAN LAS PARTES PROMITENTE  VENDEDOR Y PROMITENTE COMPRADOR ESTAR DE ACUERDO EN OBLIGARSE A CELEBRAR UN CONTRATO DE CESION DE DERECHOS PARCELARIOS  UNA VEZ QUE SE HAYA CUBIERTO LA TOTALIDAD DE PAGO POR ENAJENACION  DEL  TOTAL DEL AREA  QUE SE ENAJENA, ACTUALMENTE PROPIEDAD DE LA C. LIDIA ALEJANDRA DUARTE MEDRANO  POSESIONARIA   DEL POBLADO   EL CARMEN    MUNICIPIO DE HERMOSILLO ESTADO DE SONORA,  OBLIGANDOSE LAS PARTES A RESPETAR LO ESTABLECIDO EN LA LEY AGRARIA EN VIGOR Y LA FACULTAD DE LA ASAMBLEA DEL RECONOCIMIENTO DEL PROMITENTE COMPRADOR CON CALIDAD DE POSESIONARIO .\n                </p>\n                <p>\n                    <b>DECIMA:</b>\n                    LO NO PREVISTO EN ESTE CONTRATO SE REGIRA POR LOS ARTICULOS 2474, 2475, 2476, 2477, 2478, 2479, 2481, 2482 Y DEMAS RELATIVOS Y APLICABLES AL CODIGO CIVIL PARA EL ESTADO DE SONORA.\n                </p>\n                <p>\n                    <b>DECIMA PRIMERA:</b>\n                    LA C. LIDIA ALEJANDRA DUARTE MEDRANO   PROMITENTE VENDEDOR MANIFIESTA QUE EN ESTA OCACION ESTA REALIZANDO Y FORMALIZANDO ESTE CONTRATO DE PROMESA DE COMPRAVENTA CON EL (LA)C. &nbsp;&nbsp;<b><u>" + this.datosContrato.Cliente.Nombre + "</u></b> &nbsp;&nbsp; COMO PROMITENTE COMPRADOR QUE CULMINARA EN CONVENIO DE CESION DE DERECHOS PARCELARIOS A FAVOR DE EL(DE LA ) C.&nbsp;&nbsp;<b><u>" + this.datosContrato.Cliente.Nombre + "</u></b> &nbsp;&nbsp; No TENIENDO NINGUN INCONVENIENTE LA C.LIDIA ALEJANDRA DUARTE MEDRANO QUE LA ENAJENACION CORRESPONDIENTE SEA A NOMBRE DEL ANTES SE\u00D1ALADO SIENDO LA PARTE PROMITENTE COMPRADORA QUIEN SE HARA RESPONSABLE DE LOS PAGOS Y COSTOS DEL TRASLADO ANTE LA DEPENDENCIA QUE CORRESPONDA, SIENDO IMPORTANTE SE\u00D1ALAR QUE SE DA EL CASO DE INEXISTENCIA DE LAS PARTES  POR EL CASO DE FALLECIMIENTO , LAS PARTES  QUE PARTICIPAN    SOLICITAN QUE  ESTE CONTRATO SEA RESPETADO EN TODOS SUS TERMINOS Y CONDICIONES DEBIENDO CULMINAR  A FAVOR DE QUIENES EN SU MOMENTO DEMUESTREN TENER DEREHO A ELLO CON ARREGLO A LA LEY .-\n                </p>\n                <h3 class=\"text-right\">HOJA NO.04 </h3>\n                <h3 class=\"text-center\">PERSONALIDAD </h3>\n                <p>\n                    LA C. LIDIA ALEJANDRA DUARTE MEDRANO  ACREDITO SU CARACTER DE  POSEISONARIA   DEL POBLADO EL CARMEN MUNICIPIO DE HERMOSILLO ESTADO DE SONORA CON RESOLUCION Y ACTA DE ASAMBLEA DE DELIMITACION, DESTINO Y   ASIGNACION DE TIERRAS CELEBRADA CON FECHA  25 DE  OCTUBRE  DE 2014   Y SU CORRESPONDIENTE   CERTIFICADPO PARCELARIO   , DOCUMENTOS QUE PASAN A FORMAR PARTE DE ESTE CONTRATO.\n                </p>\n                <h3 class=\"text-center\">GENERALES DE LOS DECLARANTES</h3>\n                <p class=\"text-center\">\n                        LA C.LIDIA ALEJANDRA DUARTE MEDRANO   MANIFESTO POR SUS GENERALES SER MEXICANO POR NACIMIENTO  E HIJA DE PADRES MEXICANOS , SOLTERA   POSESIONARIA   ORIGINARIO  DE    HERMOSILLO  ,  SONORA   , NACIDO  EL D\u00CDA  06 DE AGOSTO DE 1990, QUIEN SE IDENTIFICO CON  CREDENCIAL DE ELECTOR FOLIO   &nbsp;&nbsp;<b><u>" + this.datosContrato.Cliente.NumIfe + "</u></b> &nbsp;&nbsp; CON DOMICILIO CONOCIDO EJIDO EL ZACATON , MUNICIPIO DE HERMOSILLO .\n                        <br>\n                        EL (LA)C.&nbsp;&nbsp;<b><u>" + this.datosContrato.Cliente.Nombre + "</u></b> &nbsp;&nbsp;  MANIFESTO POR SUS GENERALES SER MEXICANO POR NACIMIENTO E HIJO DE PADRES MEXICANOS ORIGINARIO DE: &nbsp;&nbsp;<b><u>" + this.datosContrato.Cliente.Origen + "</u></b> &nbsp;&nbsp; NACIDO EL DIA &nbsp;&nbsp;<b><u>" + this.datosContrato.Cliente.Fecha_nacimiento + "</u></b> &nbsp;&nbsp; IDENTIFICANDOSE CON CREDENCIAL DE ELECTOR FOLIO NUMERO &nbsp;&nbsp;<b><u>" + this.datosContrato.Cliente.NumIfe + "</u></b> &nbsp;&nbsp;, CON DOMICILIO EN: &nbsp;&nbsp;<b><u>" + this.datosContrato.Cliente.Direccion + "</u></b> &nbsp;&nbsp;.-\n                        <br>\n                        LEIDO QUE FUE EL PRESENTE CONTRATO POR LOS PARTICIPANTES LO RATIFICAN Y LO FIRMAN, MANIFESTANDO QUE EN LA CELEBRACION DEL MISMO NO EXISTE DOLO O VICIOS OCULTOS, ASI MISMO SE\u00D1ALA NO HABER SIDO COACCIONADOS DE MANERA ALGUNA PARA SU CELEBRACION, ARGUMENTANDO QUE EL PRESENTE DOCUMENTO ES LA REPRESENTACION ESCRITA DE SU VOLUNTAD, POR LO QUE LO FIRMAN DE CONFORMIDAD ABAJO.\n                        <br><br>\n                        A T E N T A M E N T E\n                        POR LAS PARTES\n                        <br>\n                        _____________________________________________ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _____________________________________________\n                        <br>\n                        C. LIDIA ALEJANDRA DUARTE MEDRANO          C.<br>\n                        PROMITENTE VENDEDOR\t\t                       PROMITENTE COMPRADOR\n                        <br>\n                        TESTIGOS\n                        <br><br>\n                        _____________________________________________  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _____________________________________________\n                </p>\n            </div>\n        </div>";
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('datosContrato'),
        __metadata("design:type", Object)
    ], ContratoComponent.prototype, "datosOrigen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ContratoComponent.prototype, "vista", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ContratoComponent.prototype, "mensualidades", void 0);
    ContratoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contrato',
            template: __webpack_require__(/*! ./contrato.component.html */ "./src/app/layout/ventas/contrato/contrato.component.html"),
            styles: [__webpack_require__(/*! ./contrato.component.scss */ "./src/app/layout/ventas/contrato/contrato.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            providers: [_shared_services_catalogos_service__WEBPACK_IMPORTED_MODULE_2__["CatalogosService"], _shared_services_ventas_service__WEBPACK_IMPORTED_MODULE_3__["VentasService"]]
        }),
        __metadata("design:paramtypes", [_shared_services_catalogos_service__WEBPACK_IMPORTED_MODULE_2__["CatalogosService"], _shared_services_ventas_service__WEBPACK_IMPORTED_MODULE_3__["VentasService"]])
    ], ContratoComponent);
    return ContratoComponent;
}());



/***/ }),

/***/ "./src/app/layout/ventas/index.ts":
/*!****************************************!*\
  !*** ./src/app/layout/ventas/index.ts ***!
  \****************************************/
/*! exports provided: ContratoComponent, ClientesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contrato_contrato_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contrato/contrato.component */ "./src/app/layout/ventas/contrato/contrato.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContratoComponent", function() { return _contrato_contrato_component__WEBPACK_IMPORTED_MODULE_0__["ContratoComponent"]; });

/* harmony import */ var _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clientes/clientes.component */ "./src/app/layout/ventas/clientes/clientes.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClientesComponent", function() { return _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_1__["ClientesComponent"]; });





/***/ }),

/***/ "./src/app/layout/ventas/ventas-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/ventas/ventas-routing.module.ts ***!
  \********************************************************/
/*! exports provided: VentasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentasRoutingModule", function() { return VentasRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ventas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ventas.component */ "./src/app/layout/ventas/ventas.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _ventas_component__WEBPACK_IMPORTED_MODULE_2__["VentasComponent"]
    }
];
var VentasRoutingModule = /** @class */ (function () {
    function VentasRoutingModule() {
    }
    VentasRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], VentasRoutingModule);
    return VentasRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/ventas/ventas.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/ventas/ventas.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Ventas'\" [icon]=\"'fa-dashboard'\"></app-page-header>\n    <!--Menu principal-->\n    <div class=\"row text-center\">\n        <div class=\"col-lg-2\">\n            <div class=\"form-group\">\n                <button (click)=\"catalogoClientes();\" class=\"btn btn-secondary menu\" style=\"color: #fff;\"><i class=\"fa fa-users\"></i> Clientes</button>\n            </div>\n        </div>\n        <div class=\"col-lg-2\">    \n            <div class=\"form-group\">\n                <button (click)=\"nuevaCotizacion();\" class=\"btn btn-info menu\"><i class=\"fa fa-clipboard\"></i> Cotización</button>\n            </div>\n        </div>\n        <div class=\"col-lg-2\">    \n            <div class=\"form-group\">\n                <button (click)=\"nuevoCliente();\" class=\"btn btn-success menu\"><i class=\"fa fa-address-card\"></i> Nuevo Cliente</button>\n            </div>\n        </div>\n    </div>\n    <hr />\n    <div *ngIf=\"vistaCentro\">\n        <!--Cotizaciones-->\n        <app-cotizador *ngIf=\"cotizacionNueva\" (vista)=\"nuevoCliente();\" [@routerTransition]></app-cotizador>\n        <!--Clientes-->\n        <app-clientes class=\"row\" *ngIf=\"clienteNuevo\"  (vista)=\"procesarContratos($event);\"  [@routerTransition]></app-clientes>\n        <!--Catalogo Clientes-->\n        <app-catalogo-clientes *ngIf=\"clientesCatalogos\" (vista)=\"nuevaVentaCliente($event);\" (nuevaOperacion)=\"nueva_operacion($event);\" [@routerTransition]></app-catalogo-clientes>\n        <!--Contratos-->\n        <app-contrato class=\"row\" *ngIf=\"datosContrato\" #contratoGenerado  [datosContrato]=\"datosContrato\" (vista)=\"imprimirPagare($event);\" (mensualidades)=\"imprimirMensualidades($event);\" [@routerTransition]></app-contrato>\n    </div> \n</div>\n"

/***/ }),

/***/ "./src/app/layout/ventas/ventas.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/ventas/ventas.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-info {\n  color: #fff;\n  background-color: #359B83 !important;\n  border-color: #46b8da; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #10798D !important;\n  border-color: #46b8da; }\n\n.btn-warning {\n  color: #fff;\n  background-color: #2A8901 !important;\n  border-color: #46b8da; }\n\n.btn-danger {\n  color: #fff;\n  background-color: #955006 !important;\n  border-color: #46b8da; }\n\n.btn-secondary {\n  color: #fff;\n  background-color: #232E5C !important;\n  border-color: #46b8da; }\n\n.btn-info:focus, .btn-info:hover, .btn-info.focus {\n  color: #fff;\n  background-color: #396B57 !important;\n  border-color: #174935; }\n\n.btn-primary:focus, .btn-primary:hover, .btn-primary.focus {\n  color: #fff;\n  background-color: #10798D !important;\n  border-color: #46b8da; }\n\n.btn-warning:focus, .btn-warning:hover, .btn-warning.focus {\n  color: #fff;\n  background-color: #2D6E00 !important;\n  border-color: #0a2a1c; }\n\n.btn-danger:focus, .btn-danger:hover, .btn-danger.focus {\n  color: #fff;\n  background-color: #7F4700 !important;\n  border-color: #623900; }\n\n.btn-secondary:focus, .btn-secondary:hover, .btn-secondary.focus {\n  color: #fff;\n  background-color: #2D3854 !important;\n  border-color: #0c0d35; }\n\n.bg-info {\n  color: #fff;\n  background-color: #359B83 !important;\n  border-color: #46b8da; }\n\n.bg-primary {\n  color: #fff;\n  background-color: #10798D !important;\n  border-color: #46b8da; }\n\n.bg-warning {\n  color: #fff;\n  background-color: #2A8901 !important;\n  border-color: #46b8da; }\n\n.bg-danger {\n  color: #fff;\n  background-color: #955006 !important;\n  border-color: #46b8da; }\n\n.bg-secondary {\n  color: #fff;\n  background-color: #232E5C !important;\n  border-color: #46b8da; }\n"

/***/ }),

/***/ "./src/app/layout/ventas/ventas.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/ventas/ventas.component.ts ***!
  \***************************************************/
/*! exports provided: VentasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentasComponent", function() { return VentasComponent; });
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



var VentasComponent = /** @class */ (function () {
    function VentasComponent() {
        this.contratos = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //this.nuevoMantenimiento();
        this.datosContrato = false;
    }
    VentasComponent.prototype.ngOnInit = function () { };
    VentasComponent.prototype.catalogoClientes = function () {
        var _this = this;
        this._limpiarVistaYVariables();
        this._delay(100).then(function (res) {
            _this.clientesCatalogos = true;
            _this.vistaCentro = true;
        });
    };
    VentasComponent.prototype.nuevoCliente = function () {
        var _this = this;
        this._limpiarVistaYVariables();
        this._delay(100).then(function (res) {
            _this.clienteNuevo = true;
            _this.vistaCentro = true;
        });
    };
    VentasComponent.prototype.imprimirPagare = function (obj) {
        console.log('obj', obj);
    };
    VentasComponent.prototype.nuevaCotizacion = function () {
        var _this = this;
        this._limpiarVistaYVariables();
        this._delay(100).then(function (res) {
            _this.cotizacionNueva = true;
            _this.vistaCentro = true;
        });
    };
    VentasComponent.prototype.procesarContratos = function (event) {
        var _this = this;
        /*        let datosEvent = this._datosPrueba();
                console.log('datos_prueba',datosEvent);*/
        this._limpiarVistaYVariables();
        this._delay(100).then(function (res) {
            _this.vistaCentro = true;
            _this.datosContrato = event;
        });
    };
    VentasComponent.prototype._limpiarVistaYVariables = function () {
        this.vistaCentro = this.clientesCatalogos = this.datosContrato = this.clienteNuevo = this.cotizacionNueva = false;
    };
    VentasComponent.prototype._delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('contratoGenerado'),
        __metadata("design:type", Object)
    ], VentasComponent.prototype, "contratoGenerado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], VentasComponent.prototype, "contratos", void 0);
    VentasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ventas',
            template: __webpack_require__(/*! ./ventas.component.html */ "./src/app/layout/ventas/ventas.component.html"),
            styles: [__webpack_require__(/*! ./ventas.component.scss */ "./src/app/layout/ventas/ventas.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            providers: [_shared_services_estadisticas_service__WEBPACK_IMPORTED_MODULE_2__["EstadisticasService"]]
        }),
        __metadata("design:paramtypes", [])
    ], VentasComponent);
    return VentasComponent;
}());



/***/ }),

/***/ "./src/app/layout/ventas/ventas.module.ts":
/*!************************************************!*\
  !*** ./src/app/layout/ventas/ventas.module.ts ***!
  \************************************************/
/*! exports provided: VentasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentasModule", function() { return VentasModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ventas_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ventas-routing.module */ "./src/app/layout/ventas/ventas-routing.module.ts");
/* harmony import */ var _ventas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ventas.component */ "./src/app/layout/ventas/ventas.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ */ "./src/app/layout/ventas/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var VentasModule = /** @class */ (function () {
    function VentasModule() {
    }
    VentasModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_ventas_routing_module__WEBPACK_IMPORTED_MODULE_1__["VentasRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
            declarations: [_ventas_component__WEBPACK_IMPORTED_MODULE_2__["VentasComponent"], ___WEBPACK_IMPORTED_MODULE_4__["ClientesComponent"], ___WEBPACK_IMPORTED_MODULE_4__["ContratoComponent"]]
        })
    ], VentasModule);
    return VentasModule;
}());



/***/ })

}]);
//# sourceMappingURL=ventas-ventas-module.js.map