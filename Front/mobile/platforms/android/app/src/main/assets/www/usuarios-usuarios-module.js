(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["usuarios-usuarios-module"],{

/***/ "./src/app/layout/usuarios/usuarios-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/usuarios/usuarios-routing.module.ts ***!
  \************************************************************/
/*! exports provided: UsuariosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosRoutingModule", function() { return UsuariosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _usuarios_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usuarios.component */ "./src/app/layout/usuarios/usuarios.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _usuarios_component__WEBPACK_IMPORTED_MODULE_2__["UsuariosComponent"]
    }
];
var UsuariosRoutingModule = /** @class */ (function () {
    function UsuariosRoutingModule() {
    }
    UsuariosRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UsuariosRoutingModule);
    return UsuariosRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/usuarios/usuarios.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/usuarios/usuarios.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Egresos'\" [icon]=\"'fa-table'\"></app-page-header>\n    <hr>\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-xl-12 col-lg-12\">\n            <button (click)=\"nuevoUsuario();\" class=\"btn btn-info text--right\"><i class=\"fa fa-plus-\"></i> Nuevo Usuario</button> &nbsp;&nbsp;|&nbsp;&nbsp; \n            <button (click)=\"nuevoPuesto();\" class=\"btn btn-success text--right\"><i class=\"fa fa-plus-\"></i> Nuevo Puesto</button>\n            <br><br>\n        </div>\n        <div class=\"col-xl-4 col-lg-4\">\n            <app-stat [bgClass]=\"'primary'\" [icon]=\"'fa-user'\" [label]=\"'Usuarios'\" (event)=\"obtenerUsuarios($event);\"  ></app-stat>\n        </div>\n        <div class=\"col-xl-4 col-lg-4\">\n            <app-stat [bgClass]=\"'danger'\" [icon]=\"'fa-building'\" [label]=\"'Puestos'\" (event)=\"obtenerPuestos($event);\" ></app-stat>\n        </div>\n    </div>\n    <hr />\n    <div class=\"row\" *ngIf=\"vistaCentro\">\n        <div class=\"col-xl-12 col-lg-12 col-xs-12\">\n            <!--Nuevo Usuario-->\n            <div class=\"row\" *ngIf=\"this.altaNuevoUsuario\" [@routerTransition]>\n                <div class=\"col-xs-12 col-xl-12 col-lg-12\">\n                    <div class=\"card mb-3\">\n                        <div class=\"card-header bg-info\">\n                            Nuevo Usuario\n                        </div>\n                        <div class=\"card-body\">\n                            <div class=\"row\">\n                                <!--Empleado-->\n                                <div class=\"col-xs-7 col-lg-7 col-xl-7\">\n                                    <div class=\"form-group\">\n                                        <label class=\"label-form\"> Empleado </label>\n                                        <input autofocus id=\"typeahead-format\" placeholder=\"Nombre del empleado:\" type=\"text\" class=\"form-control\" [(ngModel)]=\"catalogoEmpleados.Nombre\" [ngbTypeahead]=\"filtrarEmpleado\" (selectItem)=\"seleccionarEmpleado($event)\" [resultFormatter]=\"formatter\" />\n                                        <input type=\"hidden\" value=\"0\" *ngIf=\"datosEmpleado\" [(ngModel)]=\"datosEmpleado.IdEmpleado\" />\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-2 col-lg-2 col-xl-2\"></div>\n                                <!--Perfiles-->\n                                <div class=\"col-xs-3 col-lg-3 col-xl-3\">\n                                    <div class=\"form-group\">\n                                        <label class=\"label-form\"> Perfil </label>\n                                        <select class=\"form-control\" [(ngModel)]=\"this.uIdPerfil\" >\n                                            <option value=\"0\">Selecciona el puesto</option>\n                                            <option *ngFor=\"let per of catalogoPuestos\" value=\"{{per.IdPerfil}}\">{{per.Nombre_perfil}}</option>\n                                        </select>\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-4 col-lg-4 col-xl-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"label-form\"> Nombre </label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Nombre\" [(ngModel)]=\"uNombre\" />\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-4 col-lg-4 col-xl-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"label-form\"> Correo </label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Correo:\"  [(ngModel)]=\"uCorreo\"/>\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-4 col-lg-4 col-xl-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"label-form\"> Password </label>\n                                        <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"uPassword\"/>\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-12 col-lg-12 col-xl-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"label-form\"> &nbsp;</label><br>\n                                        <button (click)=\"guardarNuevoUsuario();\"  class=\"btn btn-primary pull-right\">Guardar</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!--Nuevo Puesto-->\n            <div class=\"row\" *ngIf=\"altaNuevoPuesto\" [@routerTransition]>\n                <div class=\"col-xs-12 col-xl-12 col-lg-12\">\n                    <div class=\"card mb-3\">\n                        <div class=\"card-header bg-success\">\n                            Nuevo Puesto\n                        </div>\n                        <div class=\"card-body\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"label-form\"> Nombre perfil </label>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Perfil\" [(ngModel)]=\"pNombre\" />\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-12 col-lg-12 col-xl-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"label-form\"> Permisos </label> &nbsp;&nbsp;&nbsp;<input type=\"checkbox\" name=\"\" [(ngModel)]=\"Todos\" (change)=\"seleccionarTodos();\"> Todos<br>\n                                        <input type=\"checkbox\" name=\"\" [(ngModel)]=\"Clientes\"> Clientes &nbsp;&nbsp;\n                                        <input type=\"checkbox\" name=\"\" [(ngModel)]=\"Abonos\"> Abonos &nbsp;&nbsp;\n                                        <input type=\"checkbox\" name=\"\" [(ngModel)]=\"Mantenimientos\"> Mantenimientos &nbsp;&nbsp;\n                                        <input type=\"checkbox\" name=\"\" [(ngModel)]=\"Cotizaciones\"> Cotizaciones &nbsp;&nbsp;\n                                        <input type=\"checkbox\" name=\"\" [(ngModel)]=\"Altas\"> Altas &nbsp;&nbsp;\n                                        <input type=\"checkbox\" name=\"\" [(ngModel)]=\"Egresos\"> Egresos &nbsp;&nbsp;\n                                        <input type=\"checkbox\" name=\"\" [(ngModel)]=\"Empleados\"> Empleados &nbsp;&nbsp;\n                                        <input type=\"checkbox\" name=\"\" [(ngModel)]=\"Nomina\"> Nomina &nbsp;&nbsp;\n                                        <input type=\"checkbox\" name=\"\" [(ngModel)]=\"Usuarios\"> Usuarios &nbsp;&nbsp;\n                                        <input type=\"checkbox\" name=\"\" [(ngModel)]=\"Catalogos\"> Catalogos &nbsp;&nbsp;\n                                        <input type=\"checkbox\" name=\"\" [(ngModel)]=\"Reportes\"> Reportes &nbsp;&nbsp;\n                                        <input type=\"checkbox\" name=\"\" [(ngModel)]=\"Carga\"> Carga \n                                    </div>\n                                </div>\n                                <div class=\"col-xs-12 col-lg-12 col-xl-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"label-form\"> &nbsp;</label><br>\n                                        <button (click)=\"guardarNuevoPerfil();\"  class=\"btn btn-primary pull-right\">Guardar</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\" *ngIf=\"this.datosUsuarios\" [@routerTransition]>\n                <div class=\"col-xs-12 col-lg-12 col-xl-12\">\n                    <div class=\"card-header bg-primary\">\n                        Usuarios\n                    </div>\n                    <div class=\"card-body table-responsive\">\n                    <app-datatables-general *ngIf=\"this.datosUsuarios\" [datosDatatable]=\"this.datosUsuarios\" (edit)=\"editarUsuario($event);\" (delete)=\"borrarUsuario($event);\"></app-datatables-general>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\" *ngIf=\"this.datosPuestos\" [@routerTransition]>\n                    <div class=\"col-xs-12 col-lg-12 col-xl-12\">\n                        <div class=\"card-header bg-danger\">\n                            Puestos\n                        </div>\n                        <div class=\"card-body table-responsive\">\n                        <app-datatables-general *ngIf=\"this.datosPuestos\" [datosDatatable]=\"this.datosPuestos\" (edit)=\"editarPuestos($event);\"  (delete)=\"borrarPuesto($event);\"></app-datatables-general>\n                        </div>\n                    </div>\n                </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/usuarios/usuarios.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layout/usuarios/usuarios.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div#sugerencias {\n  width: 100%;\n  background: #fff;\n  border: 1px solid #ddd;\n  font-size: 12px;\n  max-height: 100px;\n  overflow-y: auto;\n  padding: 10px;\n  z-index: 1; }\n\n#sugerencias th {\n  font-size: 16;\n  margin-bottom: 3px; }\n\n.activeLink {\n  cursor: pointer; }\n\n.activeLink:hover {\n  opacity: .7; }\n\n#sugerencias td {\n  padding: 5px; }\n\n.card-header {\n  color: #fff !important; }\n\n.btn-info {\n  color: #fff;\n  background-color: #359B83 !important;\n  border-color: #46b8da; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #10798D !important;\n  border-color: #46b8da; }\n\n.btn-warning {\n  color: #fff;\n  background-color: #2A8901 !important;\n  border-color: #46b8da; }\n\n.btn-danger {\n  color: #fff;\n  background-color: #955006 !important;\n  border-color: #46b8da; }\n\n.btn-secondary {\n  color: #fff;\n  background-color: #232E5C !important;\n  border-color: #46b8da; }\n\n.btn-info:focus, .btn-info:hover, .btn-info.focus {\n  color: #fff;\n  background-color: #396B57 !important;\n  border-color: #174935; }\n\n.btn-primary:focus, .btn-primary:hover, .btn-primary.focus {\n  color: #fff;\n  background-color: #10798D !important;\n  border-color: #46b8da; }\n\n.btn-warning:focus, .btn-warning:hover, .btn-warning.focus {\n  color: #fff;\n  background-color: #2D6E00 !important;\n  border-color: #0a2a1c; }\n\n.btn-danger:focus, .btn-danger:hover, .btn-danger.focus {\n  color: #fff;\n  background-color: #7F4700 !important;\n  border-color: #623900; }\n\n.btn-secondary:focus, .btn-secondary:hover, .btn-secondary.focus {\n  color: #fff;\n  background-color: #2D3854 !important;\n  border-color: #0c0d35; }\n\n.bg-info {\n  color: #fff;\n  background-color: #359B83 !important;\n  border-color: #46b8da; }\n\n.bg-primary {\n  color: #fff;\n  background-color: #10798D !important;\n  border-color: #46b8da; }\n\n.bg-warning {\n  color: #fff;\n  background-color: #2A8901 !important;\n  border-color: #46b8da; }\n\n.bg-danger {\n  color: #fff;\n  background-color: #955006 !important;\n  border-color: #46b8da; }\n\n.bg-secondary {\n  color: #fff;\n  background-color: #232E5C !important;\n  border-color: #46b8da; }\n"

/***/ }),

/***/ "./src/app/layout/usuarios/usuarios.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/usuarios/usuarios.component.ts ***!
  \*******************************************************/
/*! exports provided: UsuariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosComponent", function() { return UsuariosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared_services_catalogos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/catalogos.service */ "./src/app/shared/services/catalogos.service.ts");
/* harmony import */ var _shared_services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/usuarios.service */ "./src/app/shared/services/usuarios.service.ts");
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






//const moment =  require('moment');
var UsuariosComponent = /** @class */ (function () {
    function UsuariosComponent(catalogosService, usuariosService) {
        var _this = this;
        this.catalogosService = catalogosService;
        this.usuariosService = usuariosService;
        this.filtrarEmpleado = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (term) { return term === '' ? [] : _this.nombresEmpleados.filter(function (ob) { return ob.toUpperCase().indexOf(term.toUpperCase()) > -1; }); }));
        };
        this._catalogoPuestos();
        this._catalogoEmpleados();
        this.uIdPerfil = 0;
        this.Clientes = this.Abonos = this.Mantenimientos = this.Cotizaciones = this.Altas = this.Egresos = this.Empleados = this.Nomina = this.Usuarios = this.Reportes = this.Carga = false;
    }
    UsuariosComponent.prototype._catalogoPuestos = function () {
        var _this = this;
        this.catalogosService.obtenerPuestos().then(function (res) {
            _this.catalogoPuestos = res['Data'];
        });
    };
    UsuariosComponent.prototype._catalogoEmpleados = function () {
        var _this = this;
        this.catalogosService.obtenerEmpleados().then(function (res) {
            console.log('res', res);
            _this.catalogoEmpleados = res['Data'];
            _this.nombresEmpleados = res['Data'].map(function (key) {
                return key.Nombre;
            });
        });
    };
    UsuariosComponent.prototype.seleccionarEmpleado = function (selected, t) {
        this.datosEmpleado = this.catalogoEmpleados.filter(function (ob) { return ob.Nombre == selected.item.toString(); })[0];
        this.visualizarSugerencias = false;
        this.sugerenciasEmpleados = false;
        this.uNombre = this.datosEmpleado.Nombre;
        this.uCorreo = this.datosEmpleado.Correo;
        this.uPassword = this._randomPassword(12);
    };
    UsuariosComponent.prototype.ngOnInit = function () { };
    //Usuario nuevo
    UsuariosComponent.prototype.nuevoUsuario = function () {
        var _this = this;
        this._limpiarVariables();
        this._delay(100).then(function (res) {
            _this.altaNuevoUsuario = (_this.altaNuevoUsuario) ? false : true;
            _this.vistaCentro = true;
        });
    };
    //Catalogo de usuarios
    UsuariosComponent.prototype.obtenerUsuarios = function () {
        var _this = this;
        this._limpiarVariables();
        this.catalogosService.obtenerUsuarios().then(function (res) {
            var datosUsuarios = _this._ordenarUsuarios(res['Data']);
            _this.datosUsuarios = { Opciones: { Eliminar: true, Editar: true }, Datos: datosUsuarios };
            //            this.datosUsuarios = { Opciones:{Eliminar:true,Editar:true}, Columnas : ["Nombre", "Correo", "Fecha_creacion", "Password"] ,Datos:res['Data']};
            _this.vistaCentro = true;
        }).catch(function (err) {
            console.log('error usuarios', err);
            _this._limpiarVariables();
        });
    };
    UsuariosComponent.prototype._ordenarUsuarios = function (datos) {
        var datosOrdenados = [];
        datos.forEach(function (d) {
            datosOrdenados.push({
                "Nombre": d.Nombre,
                Correo: d.Correo,
                Perfil: d.Nombre_perfil,
                Password: d.Password,
                "Fecha de Creación": d.Fecha_creacion,
                ObjCompleto: d
            });
        });
        return datosOrdenados;
    };
    UsuariosComponent.prototype.editarUsuario = function (obj) {
        var _this = this;
        console.log('obj', obj);
        var datosActualizar = { IdUsuario: obj['Obj'].IdUsuario, Nombre: obj['Nombre'], Correo: obj['Correo'], Password: obj['Password'] };
        console.log('datos_actualizar', datosActualizar);
        this.usuariosService.actualizarDatosUsuario(datosActualizar).then(function (res) {
            _this.obtenerUsuarios();
            _this._limpiarVariables();
        }).catch(function (err) { console.log('err', err); });
    };
    UsuariosComponent.prototype.editarPuestos = function (obj) {
        var _this = this;
        console.log('obj', obj);
        var datosActualizar = {
            IdPerfil: obj['Obj'].IdPerfil,
            Nombre_perfil: obj['Nombre del Perfil'],
            Ventas: (obj['Ventas'] == '1') ? 1 : 0,
            Cobranza: (obj['Cobranza'] == '1') ? 1 : 0,
            Finanzas: (obj['Finanzas'] == '1') ? 1 : 0,
            Cotizaciones: (obj['Cotizaciones'] == '1') ? 1 : 0,
            Gastos: (obj['Gastos'] == '1') ? 1 : 0,
            Usuarios: (obj['Usuarios'] == '1') ? 1 : 0,
            Empleados: (obj['Empleados'] == '1') ? 1 : 0,
            Catalogos: ("" + obj['Catalogos'] == '1') ? 1 : 0,
            Reportes: (obj['Reportes'] == '1') ? 1 : 0,
            Carga: (obj['Carga'] == '1') ? 1 : 0
        };
        console.log('datos_actualizar', datosActualizar);
        this.usuariosService.actualizarDatosPerfil(datosActualizar).then(function (res) {
            var tipo = res['Tipo'];
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Exito', "" + res['Operacion'], tipo);
            _this._limpiarVariables();
            _this.obtenerPuestos();
        }).catch(function (err) { console.log('err', err); });
    };
    //Guardar Usuario
    UsuariosComponent.prototype.guardarNuevoUsuario = function () {
        var _this = this;
        var Datos = { Nombre: this.uNombre, Correo: this.uCorreo,
            Password: this.uPassword, IdPerfil: this.uIdPerfil, IdEmpleado: this.datosEmpleado.IdEmpleado };
        this.usuariosService.guardarNuevoUsuario(Datos).then(function (res) {
            var tipo = res['Tipo'];
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Exito', "" + res['Operacion'], tipo);
            _this.obtenerUsuarios();
        }).catch(function (err) { console.log('err', err); });
    };
    //Guardar Perfil
    UsuariosComponent.prototype.guardarNuevoPerfil = function () {
        var _this = this;
        var Datos = { Nombre: this.pNombre,
            Clientes: this.Clientes, Abonos: this.Abonos, Mantenimientos: this.Mantenimientos,
            Cotizaciones: this.Cotizaciones, Altas: this.Altas, Egresos: this.Egresos, Empleados: this.Empleados,
            Nomina: this.Nomina, Usuarios: this.Usuarios, Reportes: this.Reportes, Carga: this.Carga
        };
        this.usuariosService.guardarNuevoPerfil(Datos).then(function (res) {
            var tipo = res['Tipo'];
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Exito', "" + res['Operacion'], tipo);
            _this.obtenerPuestos();
        }).catch(function (err) { console.log('err', err); });
    };
    //Borrar Usuario
    UsuariosComponent.prototype.borrarUsuario = function (obj) {
        var _this = this;
        this.usuariosService.borrarUsuario(obj).then(function (res) {
            var movsRes = _this.datosUsuarios.filter(function (ob) { return ob != obj.ObjCompleto; });
            _this.datosUsuarios = movsRes;
        }).catch(function (err) {
            console.log('error usuarios', err);
        });
    };
    //Puesto nuevo
    UsuariosComponent.prototype.nuevoPuesto = function () {
        var _this = this;
        this._limpiarVariables();
        this._delay(100).then(function (res) {
            _this.altaNuevoPuesto = (_this.altaNuevoPuesto) ? false : true;
            _this.vistaCentro = true;
        });
    };
    //Catalogo puestos
    UsuariosComponent.prototype.obtenerPuestos = function () {
        var _this = this;
        this.datosPuestos = false;
        this._limpiarVariables();
        this.catalogosService.obtenerPuestos().then(function (res) {
            var datosPerfiles = _this._ordenarPerfiles(res['Data']);
            _this.datosPuestos = { Opciones: { Eliminar: true, Editar: true }, Datos: datosPerfiles };
            _this.vistaCentro = true;
        });
    };
    UsuariosComponent.prototype._ordenarPerfiles = function (datos) {
        var datosOrdenados = [];
        datos.forEach(function (d) {
            console.log('d', d);
            datosOrdenados.push({
                "Nombre del Perfil": d.Nombre_perfil,
                "Fecha de Creación": d.Fecha_insert,
                "Ventas": d.Ventas,
                "Cobranza": d.Cobranza,
                "Finanzas": d.Finanzas,
                "Catalogos": d.Catalogos,
                "Cotizaciones": d.Cotizaciones,
                "Gastos": d.Gastos,
                "Empleados": d.Empleados,
                "Usuarios": d.Usuarios,
                "Carga": d.Carga,
                "Reportes": d.Reportes,
                "ObjCompleto": d
            });
        });
        return datosOrdenados;
    };
    //Borrar Puesto
    UsuariosComponent.prototype.borrarPuesto = function (obj) {
        var _this = this;
        console.log('obj', obj);
        this.usuariosService.borrarPuesto(obj).then(function (res) {
            var movsRes = _this.catalogoPuestos.filter(function (ob) { return ob != obj.ObjCompleto; });
            _this.catalogoPuestos = _this.datosPuestos = movsRes;
        }).catch(function (err) {
            console.log('error puestos', err);
        });
    };
    UsuariosComponent.prototype._randomPassword = function (length) {
        var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
        var pass = "";
        for (var x = 0; x < length; x++) {
            var i = Math.floor(Math.random() * chars.length);
            pass += chars.charAt(i);
        }
        return pass;
    };
    UsuariosComponent.prototype.seleccionarTodos = function () {
        this.Clientes = this.Abonos = this.Mantenimientos = this.Cotizaciones = this.Altas = this.Egresos = this.Empleados = this.Nomina = this.Usuarios = this.Reportes = this.Carga = true;
    };
    UsuariosComponent.prototype._limpiarVariables = function () {
        this.vistaCentro = false;
        this.vistaCentro = this.datosPuestos = this.datosUsuarios = this.altaNuevoPuesto = this.altaNuevoUsuario = false;
    };
    UsuariosComponent.prototype._delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    UsuariosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usuarios',
            template: __webpack_require__(/*! ./usuarios.component.html */ "./src/app/layout/usuarios/usuarios.component.html"),
            styles: [__webpack_require__(/*! ./usuarios.component.scss */ "./src/app/layout/usuarios/usuarios.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            providers: [_shared_services_catalogos_service__WEBPACK_IMPORTED_MODULE_2__["CatalogosService"], _shared_services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__["UsuariosService"]]
        }),
        __metadata("design:paramtypes", [_shared_services_catalogos_service__WEBPACK_IMPORTED_MODULE_2__["CatalogosService"], _shared_services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__["UsuariosService"]])
    ], UsuariosComponent);
    return UsuariosComponent;
}());



/***/ }),

/***/ "./src/app/layout/usuarios/usuarios.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/usuarios/usuarios.module.ts ***!
  \****************************************************/
/*! exports provided: UsuariosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosModule", function() { return UsuariosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usuarios-routing.module */ "./src/app/layout/usuarios/usuarios-routing.module.ts");
/* harmony import */ var _usuarios_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usuarios.component */ "./src/app/layout/usuarios/usuarios.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UsuariosModule = /** @class */ (function () {
    function UsuariosModule() {
    }
    UsuariosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_usuarios_routing_module__WEBPACK_IMPORTED_MODULE_1__["UsuariosRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
            declarations: [_usuarios_component__WEBPACK_IMPORTED_MODULE_2__["UsuariosComponent"]],
        })
    ], UsuariosModule);
    return UsuariosModule;
}());



/***/ })

}]);
//# sourceMappingURL=usuarios-usuarios-module.js.map