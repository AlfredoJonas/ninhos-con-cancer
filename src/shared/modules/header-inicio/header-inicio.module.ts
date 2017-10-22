import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeaderInicioComponent } from './header-inicio.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [HeaderInicioComponent],
    exports: [CommonModule, HeaderInicioComponent]
})
export class HeaderInicioModule {
}
