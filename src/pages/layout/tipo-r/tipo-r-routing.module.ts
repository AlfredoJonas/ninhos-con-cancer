import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoRComponent } from './tipo-r.component';

const routes: Routes = [
    { path: '', component: TipoRComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoRRoutingModule { }
