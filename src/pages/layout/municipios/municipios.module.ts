import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MunicipiosRoutingModule } from './municipios-routing.module';
import { MunicipiosComponent } from './municipios.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
    imports: [
        CommonModule,
        MunicipiosRoutingModule,
        DataTablesModule
    ],
    declarations: [
        MunicipiosComponent    
    ]
})
export class MunicipiosModule { }
