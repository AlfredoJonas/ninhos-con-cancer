import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NinhoComponent } from './ninho.component';

const routes: Routes = [
    { path: '', component: NinhoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NinhoRoutingModule { }
