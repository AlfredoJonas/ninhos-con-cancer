import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CancerRoutingModule } from './cancer-routing.module';
import { CancerComponent } from './cancer.component';
import { DataTablesModule } from 'angular-datatables';
import { LoadingModule } from '../../../shared';

@NgModule({
    imports: [
        CommonModule,
        CancerRoutingModule,
        DataTablesModule,
        LoadingModule
    ],
    declarations: [CancerComponent]
})
export class CancerModule { }
