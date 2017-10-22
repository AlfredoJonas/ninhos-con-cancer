import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';
import { PerfilRRoutingModule } from './perfil-r-routing.module';
import { PerfilRComponent } from './perfil-r.component';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        PerfilRRoutingModule
    ],
    declarations: [
        PerfilRComponent
    ]
})
export class PerfilRModule { }
