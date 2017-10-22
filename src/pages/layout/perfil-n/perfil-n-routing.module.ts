import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilNComponent } from './perfil-n.component';

const routes: Routes = [
    { path: '', component: PerfilNComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PerfilNRoutingModule { }
