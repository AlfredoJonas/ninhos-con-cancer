import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilNRoutingModule } from './perfil-n-routing.module';
import { PerfilNComponent } from './perfil-n.component';
import { FormsModule } from '@angular/forms';
import { LoadingModule } from '../../../shared';

@NgModule({
    imports: [
        CommonModule,
        PerfilNRoutingModule,
        FormsModule,
        LoadingModule
    ],
    declarations: [PerfilNComponent]
})
export class PerfilNModule { }
