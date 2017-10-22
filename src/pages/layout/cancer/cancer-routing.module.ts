import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CancerComponent } from './cancer.component';

const routes: Routes = [
    { path: '', component: CancerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CancerRoutingModule { }
