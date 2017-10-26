import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NinhoRoutingModule } from './ninho-routing.module';
import { NinhoComponent } from './ninho.component';
import { HeaderInicioModule } from '../../shared';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        NinhoRoutingModule,
        HeaderInicioModule,
        ReactiveFormsModule, 
        FormsModule
    ],
    declarations: [
      NinhoComponent
    ]
})
export class NinhoModule {
}
