import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NinhosRoutingModule } from './ninhos-routing.module';
import { NinhosComponent } from './ninhos.component';
import { DataTablesModule } from 'angular-datatables';
import { LoadingModule } from '../../../shared';

@NgModule({
    imports: [
        CommonModule,
        NinhosRoutingModule,
        DataTablesModule,
        LoadingModule
    ],
    declarations: [NinhosComponent]
})
export class NinhosModule { }
