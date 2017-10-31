import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepresentantesRoutingModule } from './representantes-routing.module';
import { RepresentantesComponent } from './representantes.component';
import { DataTablesModule } from 'angular-datatables';
import { LoadingModule } from '../../../shared';

@NgModule({
    imports: [
        CommonModule,
        RepresentantesRoutingModule,
        DataTablesModule,
        LoadingModule
    ],
    declarations: [
        RepresentantesComponent    
    ]
})
export class RepresentantesModule { }
