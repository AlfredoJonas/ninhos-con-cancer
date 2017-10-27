import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { HeaderInicioModule, LoadingModule } from '../../shared';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        WelcomeRoutingModule,
        HeaderInicioModule,
        ReactiveFormsModule, 
        FormsModule,
        LoadingModule
    ],
    declarations: [
      WelcomeComponent
    ]
})
export class WelcomeModule {
}
