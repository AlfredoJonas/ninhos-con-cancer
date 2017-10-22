import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilNRoutingModule } from './perfil-n-routing.module';
import { PerfilNComponent } from './perfil-n.component';

@NgModule({
    imports: [
        CommonModule,
        // Ng2PerfilN,
        PerfilNRoutingModule
    ],
    declarations: [PerfilNComponent]
})
export class PerfilNModule { }
