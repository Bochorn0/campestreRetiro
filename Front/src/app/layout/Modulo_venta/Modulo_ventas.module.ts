import { NgModule } from '@angular/core';
import { ModuloVentasRoutingModule } from './Modulo_ventas-routing.module';
import { ModuloVentasComponent } from './Modulo_ventas.component';
import { SharedModule } from '../../shared';

@NgModule({
    imports: [ ModuloVentasRoutingModule, SharedModule ],
    declarations: [ ModuloVentasComponent]
})

export class ModuloVentasModule {}
