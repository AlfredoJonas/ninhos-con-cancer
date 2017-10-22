import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../app/router.animations';
import { Router } from '@angular/router';
import { StateService } from '../../../shared';

@Component({
  selector: 'app-municipios',
  templateUrl: './municipios.component.html',
  styleUrls: ['./municipios.component.scss'],
  animations: [routerTransition()]
})
export class MunicipiosComponent implements OnInit {

  public data: any;

  constructor(
    private router: Router,
    public state: StateService
  ) {
   this.data = state.data;
  }

  ngOnInit() {
    this.state.setRoute(this.router.url, 'Municipios');
  }

  goRepresentante(){
    this.router.navigate(['/perfil']);    
  }
}
