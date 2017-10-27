import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NinhoRoutingModule } from './ninho-routing.module';
import { NinhoComponent } from './ninho.component';
import { HeaderInicioModule } from '../../shared';
// import { NgxAdminLteModule } from 'ngx-admin-lte';

@NgModule({
    imports: [
        CommonModule,
        NinhoRoutingModule,
        HeaderInicioModule,
    ],
    declarations: [
      NinhoComponent
    ]
})
export class NinhoModule {
}
