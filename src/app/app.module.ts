import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthGuard, AuthDonate, HeaderInicioModule, StateService } from '../shared';
import { NgxAdminLteModule } from 'ngx-admin-lte';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        HttpClientModule,
        AppRoutingModule,
        HeaderInicioModule,
        NgxAdminLteModule,
        FormsModule
    ],
    providers: [AuthGuard, AuthDonate, StateService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
