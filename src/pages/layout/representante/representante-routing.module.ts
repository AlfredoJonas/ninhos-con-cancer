import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepresentanteComponent } from './representante.component';

const routes: Routes = [
    { path: '', component: RepresentanteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepresentanteRoutingModule { }
