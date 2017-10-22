import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { HeaderInicioModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule,
    HeaderInicioModule
  ],
  declarations: [
    SignupComponent
  ]
})
export class SignupModule { }
