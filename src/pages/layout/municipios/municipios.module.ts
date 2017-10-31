import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MunicipiosRoutingModule } from './municipios-routing.module';
import { MunicipiosComponent } from './municipios.component';
import { DataTablesModule } from 'angular-datatables';
import { LoadingModule } from '../../../shared';

@NgModule({
    imports: [
        CommonModule,
        MunicipiosRoutingModule,
        DataTablesModule,
        LoadingModule
    ],
    declarations: [
        MunicipiosComponent    
    ]
})
export class MunicipiosModule { }
