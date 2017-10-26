import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RepresentanteRoutingModule } from './representante-routing.module';
import { RepresentanteComponent } from './representante.component';
import { HeaderInicioModule } from '../../shared';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        RepresentanteRoutingModule,
        HeaderInicioModule,
        ReactiveFormsModule, 
        FormsModule
    ],
    declarations: [
      RepresentanteComponent
    ]
})
export class RepresentanteModule {
}
