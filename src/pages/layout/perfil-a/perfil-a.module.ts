import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// relative import
import { PerfilARoutingModule } from './perfil-a-routing.module';
import { PerfilAComponent } from './perfil-a.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        PerfilARoutingModule
    ],
    declarations: [
        PerfilAComponent
    ]
})
export class PerfilAModule { }
