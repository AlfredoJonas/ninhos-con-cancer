import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';
import { PerfilRRoutingModule } from './perfil-r-routing.module';
import { PerfilRComponent } from './perfil-r.component';
import { LoadingModule } from '../../../shared';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        PerfilRRoutingModule,
        FormsModule,
        LoadingModule
    ],
    declarations: [
        PerfilRComponent
    ]
})
export class PerfilRModule { }
