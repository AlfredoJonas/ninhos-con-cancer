import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../app/router.animations';
import { Router } from '@angular/router';
import { StateService } from '../../../shared';


@Component({
    selector: 'app-perfil-r',
    templateUrl: './perfil-r.component.html',
    styleUrls: ['./perfil-r.component.scss'],
    animations: [routerTransition()]
})
export class PerfilRComponent implements OnInit {
  
  public data: any;

    constructor(
      private router: Router,
      public state: StateService
    ) {
      this.data = this.state.data;            
      this.state.setRoute(this.router.url, 'Perfil Representante');            
    }

    ngOnInit() {
      // setTimeout(() => {  }, 3000);  
    }

}
