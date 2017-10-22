import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { HeaderInicioModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        WelcomeRoutingModule,
        HeaderInicioModule
    ],
    declarations: [
      WelcomeComponent
    ]
})
export class WelcomeModule {
}
