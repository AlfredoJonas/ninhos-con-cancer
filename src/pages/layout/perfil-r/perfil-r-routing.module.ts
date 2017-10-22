import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilRComponent } from './perfil-r.component';

const routes: Routes = [
    { path: '', component: PerfilRComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRRoutingModule { }
