import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilAComponent } from './perfil-a.component';

const routes: Routes = [
    { path: '', component: PerfilAComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PerfilARoutingModule { }
