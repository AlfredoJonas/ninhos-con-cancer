import { Component } from '@angular/core';
import { routerTransition } from '../../../app/router.animations';
import { Router } from '@angular/router';
import { StateService } from '../../../shared';

@Component({
  selector: 'app-perfil-a-component',
  templateUrl: './perfil-a.component.html',
  styleUrls: ['./perfil-a.component.scss'],
  animations: [routerTransition()]
})
export class PerfilAComponent {

  public data: any;

  constructor(
    private router: Router,
    public state: StateService
  ) {
    this.data = state.data;
  }

  ngOnInit() {
    this.state.setRoute(this.router.url, 'Perfil Administrador');    
  }

}
