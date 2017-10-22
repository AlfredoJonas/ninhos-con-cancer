import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found.component';
import { NotFoundRoutingModule } from './not-found-routing.module';
import { HeaderInicioModule } from '../../shared';

@NgModule({
    imports: [
        NotFoundRoutingModule,
        RouterModule,
        HeaderInicioModule
    ],
    declarations: [
      NotFoundComponent
    ]
})
export class NotFoundModule {}
