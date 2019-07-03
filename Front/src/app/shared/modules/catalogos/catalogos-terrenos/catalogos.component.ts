import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { routerTransition } from '../../../../router.animations';
import { CatalogosService } from '../../../services/catalogos.service';
import swal from 'sweetalert2';
import * as moment from 'moment';

@Component({
    selector: 'app-catalogos-terrenos',
    templateUrl: './catalogos.component.html',
    styleUrls: ['./catalogos.component.scss'],
    animations: [routerTransition()],
    providers: [CatalogosService]
})
export class CatalogosTerrenosComponent implements OnInit {
    contenidoReportes;contratosActivos;
    terrenosTodos;datosTerrenos;vistaCentro;
    chksTerrenos = [];parcelas = []; etapas=[]; lotes = [];
    parcelaFiltro;loteFiltro;etapaFiltro;
    @ViewChild('datatableTerrenos')datatableTerrenos;
    frmSolicitud: FormGroup; // Formulario de solicitud
    constructor(private catalogosService : CatalogosService,private fb: FormBuilder) {
        this.frmSolicitud = fb.group({
            'File': [null]
        });
        this.parcelaFiltro = this.loteFiltro =this.etapaFiltro = '0';
        this.verCatalogoTerrenos({});
    }

    ngOnInit() { }
    obtenerContratosActivos(event){
        this._limpiarVariables();
        this.catalogosService.obtenerContratos().then(res =>{
            //console.log('res',res['Data']);
            this.contenidoReportes = true;
            this.contratosActivos =  { Datos : res['Data']};
        }).catch(err=>{this._limpiarVariables();});
    }
    filtrarTerrenos(){
        let filtrados = this.terrenosTodos;
        //console.log('filtrados',filtrados);
        filtrados = (this.parcelaFiltro != '0')?filtrados.filter(f=>f.Parcela == this.parcelaFiltro):filtrados;
        filtrados = (this.loteFiltro != '0')?filtrados.filter(f=>f.Lote == this.loteFiltro):filtrados;
        filtrados = (this.etapaFiltro != '0')?filtrados.filter(f=>f.Etapa == this.etapaFiltro):filtrados;
        //console.log('filtrados',filtrados);
        let datosOrdenados = {Opciones:{Eliminar:true,Seleccionar: true,Editar:true,Detalles:true},Datos:filtrados};

        this.datosTerrenos = datosOrdenados;
        if(this.datatableTerrenos != null){
            this.datatableTerrenos._reiniciarRegistros(datosOrdenados);
        }
        this.datosTerrenos = datosOrdenados;
        this._recorrerFiltros(filtrados);

    }
    verCatalogoTerrenos(event){
        console.log('entro',event);
        this.catalogosService.obtenerTerrenos().then(res=>{
            let datos = this._ordenarDatosTerrenos(res['Data']);
            this._recorrerFiltros(datos);
            console.log('par',this.parcelas);
            console.log('lot',this.lotes);
            console.log('eta',this.etapas);
            this.vistaCentro = true;
            this.terrenosTodos =  datos;
            let datosOrdenados = {Opciones:{Eliminar:true,Seleccionar: true,Editar:true,Detalles:true},Datos:datos};
            console.log('res',this.terrenosTodos);
            this.datosTerrenos = datosOrdenados;
            if(this.datatableTerrenos != null){
                this.datatableTerrenos._reiniciarRegistros(datosOrdenados);
            }
            this.datosTerrenos = datosOrdenados;
            console.log('res',this.datosTerrenos);
        }).catch(err=>{
            console.log('err',err);
        });
    }
    importar_excel($event): void {
        let fileObject;
        this.importarArchivo($event).then((resultado: any) => {
            if (resultado) {
                fileObject = { file: resultado.substring(78), Tipo: `Gasto` }
            }
            this.frmSolicitud.controls["File"].setValue(null);
            return this.catalogosService.subirExcelTerrenos(fileObject);
        }).then(res=>{
            console.log('res',res);
            let tipo = res['Tipo'];
            swal('Exito', `${res['Operacion']}`, tipo);
            this.chksTerrenos = [];
            return this._delay(1000);
        }).then(re=>{
            this.verCatalogoTerrenos({});
        }).catch(error => {
            console.log('error',error);
        });
    }
    editarTerreno(obj){
        let datosActualizar =  {IdTerreno: obj['Obj'].IdTerreno,Lote: `${obj['Lote']}`,Parcela: `${obj['Parcela']}`,Estapa: `${obj['Lote']}`,Propietario: obj['Lote'],Superficie: `${obj['Superficie']}`,
    Asignado : `${obj['Asignado']}`, Activo: `${obj['Activo']}`};
        console.log('datosActualizar',datosActualizar); 
        this.catalogosService.actualizarDatosTerreno(datosActualizar).then(res=>{
            let tipo = res['Tipo'];
            swal('Exito', `${res['Operacion']}`, tipo);
            this.verCatalogoTerrenos({});
        }).catch(err=>{
            console.log('error obteniendo catalogo', err);
        })
    }
    borrarTerreno(obj){
        console.log('obj',obj);
        let datos = {IdTerreno: obj.IdTerreno };
        this.catalogosService.borrarTerreno(datos).then( res=>{
            let tipo = res['Tipo'];
            swal('Exito', `${res['Operacion']}`, tipo);
            this.verCatalogoTerrenos({});
        }).catch(err=>{
            console.log('error obtener gastos', err);
        })
    }
    obtenerPlantillaTerrenos(){
        this.catalogosService.obtenerPlantillaTerenos().then( res=>{
            console.log('res',res);
            this.descargarPlantilla(res['String'], 'Plantilla_terrenos_');
        }).catch(err=>{
            console.log('error al obtener plantilla', err);
        })
    }
    descargarPlantilla(data, nombre = "Plantilla_terrenos_") {
        let dwldLink = document.createElement("a");
        let url = 'data:application/vnd.ms-excel;base64,' + data;
        let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
        if (isSafariBrowser) {
            dwldLink.setAttribute("target", "_blank");
        }
        dwldLink.setAttribute("href", url);
        dwldLink.setAttribute("download", `${nombre}${new Date().toLocaleDateString()}.xlsx`);
        dwldLink.style.visibility = "hidden";
        document.body.appendChild(dwldLink);
        dwldLink.click();
        document.body.removeChild(dwldLink);
    }
    borrarMultiplesTerrenos(){
        if(this.chksTerrenos.length > 0){
            console.log('chks',this.chksTerrenos);
            let ter_ids = ``;
            this.chksTerrenos.forEach(c=>{
                ter_ids += `${c.IdTerreno},`;
            });
            ter_ids = (ter_ids.indexOf(',') > -1)?ter_ids.slice(0,-1):ter_ids;
            let datosEliminar =  {Ids: ter_ids};
            let datosModal = {Titulo:'Cuidado',Contenido: `Estas a punto de eliminar todos estos terrenos, esta operación no se puede deshacer, deseas continuar ? `, Tipo:'warning',Confirm:'Si Continuar'};
            this._confirmarModal(datosModal).then(re=>{
                return  this.catalogosService.borrarMultiplesTerrenos(datosEliminar);
            }).then(res=>{
                this.verCatalogoTerrenos({});
            }).catch(err=>{
                console.log('error obtener gastos', err);
                this._limpiarVariables();
            });
        }else{
            swal('Error','Debes seleccionar al menos un gasto para usar este boton', 'error');
        }
    }
    importarArchivo($event){
        return new Promise((resolve, reject) => {
            try {
                let uploadFiles = $event.target.files;
                let file: File = uploadFiles[0];
                let myReader: FileReader = new FileReader();

                myReader.readAsDataURL(file);

                myReader.onloadend = (e) => {
                    return resolve(myReader.result);
                };
            } catch (error) {
                return reject({ errorMessage: "No se pudo cargar el archivo", error });
            }
        });
    }
    _recorrerFiltros(datos){
        this.parcelas = []; this.lotes = []; this.etapas = [];
        console.log('dat para fil',datos);
        if(datos){
            datos.forEach(d=>{        
                let existePar = this.parcelas.find(pa=>pa.parcela == d.Parcela);
                if(!existePar){
                    this.parcelas.push({parcela:d.Parcela});
                }
                let existeEta = this.etapas.find(pa=>pa.etapa == d.Etapa);
                if(!existeEta){
                    this.etapas.push({etapa:d.Etapa});
                }
                let existeLot = this.lotes.find(pa=>pa.lote == d.Lote);
                if(!existeLot){
                    this.lotes.push({lote:d.Lote});
                }
            });
        }
    }
    _ordenarDatosTerrenos(datos){
        let datosOrdenados = [];
        if(datos){
            datos.forEach(d=>{
                datosOrdenados.push({Etapa :d.etapa, Lote: d.lote, Parcela: d.parcela, Superficie:d.Superficie,
                Pertenece:d.Pertenece, Asignado: d.Asignado, Activo: d.Activo, ObjCompleto:d});
            });
        }
        return datosOrdenados;
    }
    _limpiarVariables(){
    this.contenidoReportes = this.contratosActivos = this.vistaCentro =  false;
    }
    _confirmarModal(datosAlert){
        return new Promise ((resolve,reject)=>{
          swal({ title: datosAlert.Titulo,
            html: `<p class="">${datosAlert.Contenido}</p>`,
            type: datosAlert.Tipo,
            showCancelButton: true,
            cancelButtonColor:'#D33',
            confirmButtonText: datosAlert.Confirm
          }).then((result)=>{
            if(result.value){
              return resolve(true);
            }
          }).catch((err)=>{
            return reject(false);
          });
        });
      }
    _delay(ms){
        return new Promise( resolve => setTimeout(resolve, ms) );
    }
}
