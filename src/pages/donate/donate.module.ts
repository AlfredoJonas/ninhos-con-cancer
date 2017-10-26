import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DonateRoutingModule } from './donate-routing.module';
import { DonateComponent } from './donate.component';
import { HeaderInicioModule } from '../../shared';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        DonateRoutingModule,
        HeaderInicioModule,
        ReactiveFormsModule, 
        FormsModule
    ],
    declarations: [
      DonateComponent
    ]
})
export class DonateModule {
}
