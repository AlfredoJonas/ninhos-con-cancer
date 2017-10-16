import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePage } from '../pages/welcome/welcome';
import { LogInPage } from '../pages/log-in/log-in';

import { IonMenuHeaderComponent } from '../components/ion-menu-header/ion-menu-header';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: 'inicio', component: WelcomePage },
  { path: 'ingreso', component: LogInPage },
  { path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomePage,
    LogInPage,
    IonMenuHeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
