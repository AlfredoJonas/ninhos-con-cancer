import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'representantes', loadChildren: './representantes/representantes.module#RepresentantesModule' },
            { path: 'perfil-representante', loadChildren: './perfil-r/perfil-r.module#PerfilRModule' },
            { path: 'perfil-representantes', loadChildren: './representante/representante.module#RepresentanteModule' },            
            { path: 'perfil-administrador', loadChildren: './perfil-a/perfil-a.module#PerfilAModule' },           
            { path: 'perfil-ninho', loadChildren: './perfil-n/perfil-n.module#PerfilNModule' },                                    
            { path: 'ninhos', loadChildren: './ninhos/ninhos.module#NinhosModule' },
            { path: 'cancer', loadChildren: './cancer/cancer.module#CancerModule' },
            { path: 'tipos-requerimiento', loadChildren: './tipo-r/tipo-r.module#TipoRModule' },
            { path: 'estados', loadChildren: './estados/estados.module#EstadosModule' },
            { path: 'municipios', loadChildren: './municipios/municipios.module#MunicipiosModule' },            
            // { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            // { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            // { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            // { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
