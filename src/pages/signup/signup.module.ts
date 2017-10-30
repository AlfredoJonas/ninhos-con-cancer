import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { HeaderInicioModule, LoadingModule } from '../../shared';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule,
    HeaderInicioModule,
    LoadingModule,
    FormsModule
  ],
  declarations: [
    SignupComponent
  ]
})
export class SignupModule { }
