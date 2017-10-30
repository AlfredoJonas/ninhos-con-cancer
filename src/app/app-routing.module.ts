import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, AuthDonate } from '../shared';

localStorage.removeItem('is_logged_in');
localStorage.removeItem('is_donate');

const routes: Routes = [
    {
        path: '',
        loadChildren: '../pages/layout/layout.module#LayoutModule',
        canActivate: [AuthGuard]
    },
    { path: 'inicio', loadChildren: '../pages/welcome/welcome.module#WelcomeModule' },
    { path: 'donar', loadChildren: '../pages/donate/donate.module#DonateModule' } ,
    { path: 'registro', loadChildren: '../pages/signup/signup.module#SignupModule' },
    { path: 'ninho', loadChildren: '../pages/ninho/ninho.module#NinhoModule',
    canActivate: [AuthDonate] },
    { path: 'representante', loadChildren: '../pages/representante/representante.module#RepresentanteModule',
    canActivate: [AuthDonate] },    
    { path: 'no-encontrada', loadChildren: '../pages/not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'no-encontrada' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
