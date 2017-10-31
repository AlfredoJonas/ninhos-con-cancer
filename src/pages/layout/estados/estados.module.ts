import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadosRoutingModule } from './estados-routing.module';
import { EstadosComponent } from './estados.component';
import { DataTablesModule } from 'angular-datatables';
import { LoadingModule } from '../../../shared';

@NgModule({
    imports: [
        CommonModule,
        EstadosRoutingModule,
        DataTablesModule,
        LoadingModule
    ],
    declarations: [
        EstadosComponent    
    ]
})
export class EstadosModule { }
