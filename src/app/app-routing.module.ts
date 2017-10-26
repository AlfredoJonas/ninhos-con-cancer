import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared';

const routes: Routes = [
    {
        path: '',
        loadChildren: '../pages/layout/layout.module#LayoutModule',
        canActivate: [AuthGuard]
    },
    { path: 'inicio', loadChildren: '../pages/welcome/welcome.module#WelcomeModule' },
    { path: 'donar', loadChildren: '../pages/donate/donate.module#DonateModule' } ,
    { path: 'registro', loadChildren: '../pages/signup/signup.module#SignupModule' },
    { path: 'ninho', loadChildren: '../pages/ninho/ninho.module#NinhoModule' },
    { path: 'representate', loadChildren: '../pages/representate/representate.module#RepresentateModule' },    
    { path: 'no-encontrada', loadChildren: '../pages/not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'no-encontrada' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
