import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NinhosRoutingModule } from './ninhos-routing.module';
import { NinhosComponent } from './ninhos.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
    imports: [
        CommonModule,
        NinhosRoutingModule,
        DataTablesModule
    ],
    declarations: [NinhosComponent]
})
export class NinhosModule { }
