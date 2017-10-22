import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadosRoutingModule } from './estados-routing.module';
import { EstadosComponent } from './estados.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
    imports: [
        CommonModule,
        EstadosRoutingModule,
        DataTablesModule
    ],
    declarations: [
        EstadosComponent    
    ]
})
export class EstadosModule { }
