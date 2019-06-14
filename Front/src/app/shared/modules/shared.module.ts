import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule,Http, XHRBackend, RequestOptions } from '@angular/http';
import { DatatableModule} from './datatables-general/datatables-general.module';
import { CatalogoClientesModule} from './catalogos/catalogo-clientes/catalogo-clientes.module';
import { CatalogoTerrenosModule} from './catalogos/catalogos-terrenos/catalogos.module';
import { VentasCotizadorModule} from './ventas/cotizador/cotizador.module';
import { MantenimientoVentasModule} from './ventas/mantenimiento/mantenimiento.module';
import { IngresosExtraModule} from './ventas/ingresos-extra/ingresos-extra.module';
import { FinanciamientoVentasModule} from './ventas/venta/venta.module';
import { FormularioClientesModule } from './formularios/formulario-clientes/formulario-clientes.module';
import { StatModule} from './stat/stat.module';
import { PageHeaderModule } from './page-header/page-header.module';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { NgbCarouselModule, NgbAlertModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from '../guard/auth.guard';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
//import { AngularPrint} from 'angular-print';
/*import {
    AlertComponent,
    ButtonsComponent,
    ModalComponent,
    CollapseComponent,
    DatePickerComponent,
    DropdownComponent,
    PaginationComponent,
    PopOverComponent,
    ProgressbarComponent,
    TabsComponent,
    RatingComponent,
    TooltipComponent,
    TimepickerComponent
} from './components';*/
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CatalogoClientesModule,
    CatalogoTerrenosModule,
    VentasCotizadorModule,
    MantenimientoVentasModule,
    FinanciamientoVentasModule,
    IngresosExtraModule,
    FormularioClientesModule,
    DatatableModule,
    HttpModule,
    StatModule,
    RouterModule,
    PageHeaderModule,
    Ng2Charts,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    NgbTypeaheadModule.forRoot(),
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot()
   // AngularPrint
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CatalogoClientesModule,
    CatalogoTerrenosModule,
    VentasCotizadorModule,
    MantenimientoVentasModule,
    FinanciamientoVentasModule,
    IngresosExtraModule,
    FormularioClientesModule,
    DatatableModule,
    HttpModule,
    StatModule,
    RouterModule,
    PageHeaderModule,
    Ng2Charts,
    NgbCarouselModule, 
    NgbAlertModule, 
    NgbTypeaheadModule,
    FroalaEditorModule,
    FroalaViewModule
   // AngularPrint
  ],
  providers:[AuthGuard]
})
export class SharedModule { }
 