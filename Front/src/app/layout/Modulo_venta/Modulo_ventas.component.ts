import { Component, OnInit, ViewChild,Output,EventEmitter} from '@angular/core';
import { routerTransition } from '../../router.animations';
import { EstadisticasService } from '../../shared/services/estadisticas.service';
import { CatalogosService } from '../../shared/services/catalogos.service';
import { VentasService } from '../../shared/services/ventas.service';
import { Router } from '@angular/router';
import * as moment  from 'moment';
import * as _ from 'lodash';
@Component({
    selector: 'app-modulo-ventas',
    templateUrl: './Modulo_ventas.component.html',
    styleUrls: ['./Modulo_ventas.component.scss'],
    animations: [routerTransition()],
    providers: [EstadisticasService]
})

export class ModuloVentasComponent implements OnInit {
    //componentes
    clienteNuevo;datosContrato;cotizacionNueva; totales;
    vistaCentro;clientesCatalogos;terrenos;parcelas;lotes;etapas;clientesTodosTodos;clientesTodos;nombresClientes;
    mostrarPrincipal;panelVisualizar;textoBuscar;terrenosTodos;terrenosBuscar;terrenosClientes = [];
    clienteDetalles;mantenimientosTodos;datosDetalle;contenidoContrato;
    clientesTodosVista;detallesClienteVista;mensualidadesVista;anualidadesVista;mantenimientoVista;
    IdTerrenoContrato;terrenoDatos;
    constructor(public router: Router,private catalogosService : CatalogosService, private ventasService: VentasService) {
        this.mostrarPrincipal = true;
        this.clienteDetalles = {};
        this.totales = {Clientes:0, Terrenos:0, Lotes:0, Prospectos:5};
        //this.nuevoMantenimiento();
        this.datosContrato = false;
       this._obtenerTerrenos();
        this.obtenerClientesActivos();
    }
    ngOnInit() {}
    _obtenerTerrenos(){
        this.catalogosService.obtenerTerrenos().then(res=>{
            let datos = res['Data'].filter(ob=>ob.Asignado == 0);
            datos.forEach(d=>{
                d.Color = 'secondary';
            })
            this.terrenosTodos = this.terrenos =  datos;

            this.totales.Terrenos = this.terrenos.length;
            console.log('terr',this.terrenos);
            this.parcelas = this.terrenos.map((key)=>{
                return key.parcela;
            })
            this.lotes = this.terrenos.map((key)=>{
                return key.lote;
            })
            this.totales.Lotes = this.lotes.length;
            this.etapas = this.terrenos.map((key)=>{
                return key.etapa;
            })
        }).catch(err=>{console.log('err',err);})
    }
    obtenerContratoTerreno(){
        let datosTerreno = this.clienteDetalles.Terrenos.filter(ob=>ob.IdTerreno == this.IdTerrenoContrato)[0];
        let datos_contrato = {datosTerreno, datosCliente: this.clienteDetalles};
        this.terrenoDatos = datosTerreno;
        this.catalogosService.obtenerDatosContrato(datos_contrato).then(res=>{
            if(res['Data']){
                this.contenidoContrato =  res['Data'];
            }else{
                this.contenidoContrato = 'Sin contrato ';
            }
        }).catch(err=>{this.contenidoContrato = 'Sin contrato ';})
    }
    filtrarClientes(){
        let filtrados = this.clientesTodosTodos;
        //console.log('filtrados',filtrados);
        if((this.textoBuscar && this.textoBuscar != '' )){
            let coincidencias = [];
            if(filtrados[0]){
                filtrados.forEach((f)=>{
                    let validado = false;
                    //NOMBRE
                    if(f.Nombre.toString().toUpperCase().indexOf(this.textoBuscar.toUpperCase()) > -1){
                        validado = true;
                    }
                    //CODIGO
                    if(f.Codigo.toString().toUpperCase().indexOf(this.textoBuscar.toUpperCase()) > -1){
                        validado = true;
                    }
                    //ETAPA
                    if(f.Etapa.toString().toUpperCase().indexOf(this.textoBuscar.toUpperCase()) > -1){
                        validado = true;
                    }
                    //LOTE
                    if(f.Lote.toString().toUpperCase().indexOf(this.textoBuscar.toUpperCase()) > -1){
                        validado = true;
                    }
                    //PARCELA
                    if(f.Parcela.toString().toUpperCase().indexOf(this.textoBuscar.toUpperCase()) > -1){
                        validado = true;
                    }
                    if(validado){ coincidencias.push(f);}
                });
                filtrados =coincidencias;
            }
        }
        this.clientesTodos = filtrados;
    }
    filtrarTerrenos(){
        let filtrados = this.terrenosTodos;
        //console.log('filtrados',filtrados);
        if((this.terrenosBuscar && this.terrenosBuscar != '' )){
            let coincidencias = [];
            if(filtrados[0]){
                filtrados.forEach((f)=>{
                    let validado = false;
                    //NOMBRE
                    if(f.Pertenece.toString().toUpperCase().indexOf(this.terrenosBuscar.toUpperCase()) > -1){
                        validado = true;
                    }
                    //CODIGO
                    if(`TER-${f.IdTerreno}`.toString().toUpperCase().indexOf(this.terrenosBuscar.toUpperCase()) > -1){
                        validado = true;
                    }
                    //ETAPA
                    if(`${f.etapa}`.toString().toUpperCase().indexOf(this.terrenosBuscar.toUpperCase()) > -1){
                        validado = true;
                    }
                    //LOTE
                    if(`${f.lote}`.toString().toUpperCase().indexOf(this.terrenosBuscar.toUpperCase()) > -1){
                        validado = true;
                    }
                    //PARCELA
                    if(`${f.parcela}`.toString().toUpperCase().indexOf(this.terrenosBuscar.toUpperCase()) > -1){
                        validado = true;
                    }
                    //SUPERFICIE
                    if(`${f.Superficie}`.toString().toUpperCase().indexOf(this.terrenosBuscar.toUpperCase()) > -1){
                        validado = true;
                    }
                    //ESTADO
                    if(`${f.Estado}`.toString().toUpperCase().indexOf(this.terrenosBuscar.toUpperCase()) > -1){
                        validado = true;
                    }
                    if(validado){ coincidencias.push(f);}
                });
                filtrados =coincidencias;
            }
        }
        this.terrenos = filtrados;
    }
    obtenerClientesActivos(){
        this.catalogosService.clientesTerrenos().then(res=>{
            this.terrenosClientes =  res['Data'];
            return this.catalogosService.clientesActivos();
        }).then(resCli=>{
            this.clientesTodosTodos = this.clientesTodos =  this._ordenarDatosCliente(resCli['Data']);
            this.totales.Clientes = this.clientesTodosTodos.length;
            console.log('clientes',this.clientesTodos);
            this.nombresClientes = resCli['Data'].map((key)=>{
                return key.Nombre;
            })
        }).catch(err=>{console.log('err',err);});
    }
    verCatalogoClientes(){
        this.panelVisualizar = 'Clientes';
    }
    detalleCliente(cliente){
        this._limpiarPantallas();
        this.clienteDetalles = cliente;
        if(this.clienteDetalles){
            if(this.clienteDetalles.Terrenos[0]){
                this.mensualidades();
                this.anualidades();
            }else{
                this.clienteDetalles.Terrenos = [];
            }
            this.mantenimientos();
        }
        console.log('clientes',this.clienteDetalles);
    }
    _limpiarPantallas(){
        this.clienteDetalles = this.clientesTodosVista = this.detallesClienteVista = this.mensualidadesVista = this.anualidadesVista = this.mantenimientoVista = false;
    }
    mantenimientos(){
        let cliente = this.clienteDetalles;
        //this._limpiarPantallas();
        if(cliente.IdCliente){
            this.ventasService.obtenerMantenimientosCliente(cliente).then(man=>{
                if(man['Data']){
                    this.mantenimientosTodos = {Datos: this._ordenarDatosMensualidad(man['Data'])};
                    this.clienteDetalles.Mantenimientos = man['Data'];
                    this.mantenimientoVista = true;
                }
            })
        }
    }
    mensualidades(){
        let cliente = this.clienteDetalles;
        this._limpiarPantallas();
        this.clienteDetalles = cliente;
        if(this.clienteDetalles.IdCliente){
            //console.log('det',this.clienteDetalles);
            this.ventasService.obtenerMensualidadesCliente(this.clienteDetalles).then(men=>{
                if(men['Data']){
                this.clienteDetalles.Terrenos.forEach(te=>{
                    let mensualidadTerreno = men['Data'].filter(ob=> ob.IdTerreno ==  te.IdTerreno);
                    if(mensualidadTerreno[0]){
                        te.Mensualidades = {Datos: this._ordenarDatosMensualidad(mensualidadTerreno)};
                    }else{
                        te.Mensualidades = {Datos: [{Fecha: '0000-00-00', Fecha_ultimo_abono: '0000-00-00', Importe:'-',Pagado : '-', Restante: '-', ObjCompleto: {}}]}
                    }
                    console.log('mensu',te.Mensualidades);
                })
                    this.clienteDetalles.Mensualidades = men['Data'];
                    //console.log('clientes',this.clienteDetalles);
                    this.mensualidadesVista = true;
                }
            })
        }
    }
    anualidades(){
        let cliente = this.clienteDetalles;
        this._limpiarPantallas();
        this.clienteDetalles = cliente;
        if(this.clienteDetalles.IdCliente){
            //console.log('det',this.clienteDetalles);
            this.ventasService.obtenerAnualidadesCliente(this.clienteDetalles).then(men=>{
                if(men['Data']){
                this.clienteDetalles.Terrenos.forEach(te=>{
                    let anualidadTerreno = men['Data'].filter(ob=> ob.IdTerreno ==  te.IdTerreno);
                    if(anualidadTerreno[0]){
                        te.Anualidades = {Datos: this._ordenarDatosMensualidad(anualidadTerreno)};
                    }else{
                        te.Anualidades = {Datos: [{Fecha: '0000-00-00', Fecha_ultimo_abono: '0000-00-00', Importe:'-',Pagado : '-', Restante: '-', ObjCompleto: {}}]}
                    }
                    //console.log('mensu',te.Mensualidades);
                })
                    this.clienteDetalles.Anualidades = men['Data'];
                    //console.log('clientes',this.clienteDetalles);
                    this.anualidadesVista = true;
                }
            })
        }
    }
    _ordenarDatosMensualidad(datos){
        let datosOrdenados =  [];
        datos.forEach(da=>{
            let pagado =  (da.Pagado ==1)?'Si':'No';
            pagado =  (da.Pendiente == 0)?pagado:'Abonado';
            datosOrdenados.push({Fecha: da.Fecha, Fecha_ultimo_abono: da.Fecha_modificacion, Importe:da.Importe,Pagado : pagado, Restante: da.Pendiente, ObjCompleto: da});
        });
        return datosOrdenados;
    }
    _ordenarDatosCliente(datos){
        let datosOrdenados =  [];
        let Parcela;let Lote;let Etapa;let Estado
        Parcela = Lote = Etapa = Estado = '-';
        datos.forEach(dat=>{
            dat.Color = 'secondary';
            let ter =  this.terrenosClientes.filter(ob => ob.IdCliente ==  dat.IdCliente);
//            console.log('dat',dat);
            if(!ter[0]){
                ter =  []
                Parcela = Lote = Etapa = Estado = '';
            }else{
                Parcela = Lote = Etapa = Estado = '';
                let aux = (ter.length > 1)?` y `:``;
                let c = 1;
                ter.forEach(t=>{
                    Parcela += `${t.parcela} ${(c<ter.length)?aux:``}`;
                    Lote += `${t.lote} ${(c<ter.length)?aux:``}`;
                    Etapa += `${t.etapa} ${(c<ter.length)?aux:``}`;
                    Estado += `${t.Estado} ${(c<ter.length)?aux:``}`;
                    c++;
                });
            } 
            dat.Parcela = Parcela;
            dat.Lote = Lote;
            dat.Etapa = Etapa;
            dat.Estado = Estado;
//            console.log('ter',ter);
            dat.Terrenos = ter;
            dat.Fecha_nacimiento =  dat.Fecha_nacimiento.split('T')[0];
            datosOrdenados.push(dat);
        })
        return datosOrdenados;
    }
    catalogoClientes(){
        this._limpiarVistaYVariables();
        this._delay(100).then(res=>{
            this.clientesCatalogos = true;
            this.vistaCentro = true;
        });
    }
    nuevoCliente(){
        this._limpiarVistaYVariables();
        this._delay(100).then(res=>{
            this.clienteNuevo = true;
            this.vistaCentro = true;
        });
    }
    imprimirPagare(obj){
        console.log('obj',obj);
    }
    nuevaCotizacion(){
        this._limpiarVistaYVariables();
        this._delay(100).then(res=>{
            this.cotizacionNueva = true;
            this.vistaCentro = true;
        });
    }
    procesarContratos(event){
/*        let datosEvent = this._datosPrueba();
        console.log('datos_prueba',datosEvent);*/
        this._limpiarVistaYVariables();
        this._delay(100).then(res=>{
            this.vistaCentro = true;
            this.datosContrato = event;
        });
    }
    _limpiarVistaYVariables(){
        this.vistaCentro = this.clientesCatalogos = this.datosContrato = this.clienteNuevo = this.cotizacionNueva  = false;
    }
    _delay(ms){
        return new Promise( resolve => setTimeout(resolve, ms) );
    }

}
