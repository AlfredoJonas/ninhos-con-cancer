import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoRRoutingModule } from './tipo-r-routing.module';
import { TipoRComponent } from './tipo-r.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
    imports: [
        CommonModule,
        TipoRRoutingModule,
        DataTablesModule
    ],
    declarations: [TipoRComponent]
})
export class TipoRModule { }
