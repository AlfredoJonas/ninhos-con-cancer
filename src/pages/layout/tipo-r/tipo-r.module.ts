import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoRRoutingModule } from './tipo-r-routing.module';
import { TipoRComponent } from './tipo-r.component';
import { DataTablesModule } from 'angular-datatables';
import { LoadingModule } from '../../../shared';

@NgModule({
    imports: [
        CommonModule,
        TipoRRoutingModule,
        DataTablesModule,
        LoadingModule
    ],
    declarations: [TipoRComponent]
})
export class TipoRModule { }
