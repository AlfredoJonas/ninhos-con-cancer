import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoadingComponent } from './loading.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [LoadingComponent],
    exports: [CommonModule, LoadingComponent]
})
export class LoadingModule {
}
