(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/services/estadisticas.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/estadisticas.service.ts ***!
  \*********************************************************/
/*! exports provided: EstadisticasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadisticasService", function() { return EstadisticasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _API_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./API_service */ "./src/app/shared/services/API_service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EstadisticasService = /** @class */ (function () {
    function EstadisticasService(api) {
        this.api = api;
    }
    EstadisticasService.prototype.resumenIngresos = function () {
        return this.api.get("/reportes/reporteIngresos").then(function (response) {
            return Promise.resolve(response);
        }).catch(function (err) { return Promise.reject(err); });
    };
    EstadisticasService.prototype.resumenGastos = function () {
        return this.api.get("/reportes/reporteGastos").then(function (response) {
            return Promise.resolve(response);
        }).catch(function (err) { return Promise.reject(err); });
    };
    EstadisticasService.prototype.resumenCartera = function () {
        return this.api.get("/reportes/reporteClientes").then(function (response) {
            return Promise.resolve(response);
        }).catch(function (err) { return Promise.reject(err); });
    };
    EstadisticasService.prototype.resumenClientes = function () {
        return this.api.get("/reportes/reporteClientes").then(function (response) {
            return Promise.resolve(response);
        }).catch(function (err) { return Promise.reject(err); });
    };
    EstadisticasService.prototype.obtenerReporteVentas = function (Filtros) {
        return this.api.post("/reportes/obtenerReporteVentas", Filtros).then(function (response) {
            return Promise.resolve(response);
        }).catch(function (err) { return Promise.reject(err); });
    };
    EstadisticasService.prototype.obtenerReporteGastos = function (Filtros) {
        return this.api.post("/reportes/obtenerReporteGastos", Filtros).then(function (response) {
            return Promise.resolve(response);
        }).catch(function (err) { return Promise.reject(err); });
    };
    EstadisticasService.prototype.obtenerReporteNomina = function (Filtros) {
        return this.api.post("/reportes/obtenerReporteNomina", Filtros).then(function (response) {
            return Promise.resolve(response);
        }).catch(function (err) { return Promise.reject(err); });
    };
    EstadisticasService.prototype.obtenerReporteDocumentos = function (Filtros) {
        return this.api.post("/reportes/obtenerReporteDocumentos", Filtros).then(function (response) {
            return Promise.resolve(response);
        }).catch(function (err) { return Promise.reject(err); });
    };
    EstadisticasService.prototype.obtenerReporteFinanzas = function (Filtros) {
        return this.api.post("/reportes/obtenerDetallesFinanzas", Filtros).then(function (response) {
            return Promise.resolve(response);
        }).catch(function (err) { return Promise.reject(err); });
    };
    EstadisticasService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root",
        }),
        __metadata("design:paramtypes", [_API_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], EstadisticasService);
    return EstadisticasService;
}());



/***/ }),

/***/ "./src/app/shared/services/usuarios.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/usuarios.service.ts ***!
  \*****************************************************/
/*! exports provided: UsuariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosService", function() { return UsuariosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _API_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./API_service */ "./src/app/shared/services/API_service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsuariosService = /** @class */ (function () {
    function UsuariosService(api) {
        this.api = api;
    }
    UsuariosService.prototype.login = function (datosLogin) {
        return this.api.post("/usuarios/login", datosLogin).then(function (response) {
            return Promise.resolve(response);
        }).catch(function (err) { return Promise.reject(err); });
    };
    UsuariosService.prototype.guardarApartadoDocumento = function (datos) {
        return this.api.post("/usuarios/apartarDocumento", datos).then(function (response) {
            return Promise.resolve(response);
        }).catch(function (err) { return Promise.reject(err); });
    };
    UsuariosService.prototype.guardarNuevoUsuario = function (datos) {
        return this.api.post("/usuarios/guardarNuevoUsuario", datos).then(function (response) {
            return Promise.resolve(response);
        }).catch(function (err) { return Promise.reject(err); });
    };
    UsuariosService.prototype.guardarNuevoPerfil = function (datos) {
        return this.api.post("/usuarios/guardarNuevoPerfil", datos).then(function (response) {
            return Promise.resolve(response);
        }).catch(function (err) { return Promise.reject(err); });
    };
    UsuariosService.prototype.borrarApartadoDocumento = function (obj) {
        return this.api.get("/usuarios/borrarApartadoDocumento?ID=" + obj.IdApartado).then(function (response) {
            return Promise.resolve(response);
        }).catch(function (err) { return Promise.reject(err); });
    };
    UsuariosService.prototype.borrarUsuario = function (obj) {
        return this.api.get("/usuarios/borrarUsuario?ID=" + obj.IdUsuario).then(function (response) {
            return Promise.resolve(response);
        }).catch(function (err) { return Promise.reject(err); });
    };
    UsuariosService.prototype.borrarPuesto = function (obj) {
        return this.api.get("/usuarios/borrarPerfil?ID=" + obj.IdPerfil).then(function (response) {
            return Promise.resolve(response);
        }).catch(function (err) { return Promise.reject(err); });
    };
    UsuariosService.prototype.actualizarDatosUsuario = function (datosActualizar) {
        return this.api.post("/usuarios/actualizarDatosUsuario", datosActualizar).then(function (response) {
            return Promise.resolve(response);
        }).catch(function (err) { return Promise.reject(err); });
    };
    UsuariosService.prototype.actualizarDatosPerfil = function (datosActualizar) {
        return this.api.post("/usuarios/actualizarDatosPerfil", datosActualizar).then(function (response) {
            return Promise.resolve(response);
        }).catch(function (err) { return Promise.reject(err); });
    };
    UsuariosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root",
        }),
        __metadata("design:paramtypes", [_API_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], UsuariosService);
    return UsuariosService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map