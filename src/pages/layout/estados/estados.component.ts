import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../app/router.animations';
import { Router } from '@angular/router';
import { StateService } from '../../../shared';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.scss'],
  animations: [routerTransition()]
})
export class EstadosComponent implements OnInit {

  public data: any;

  constructor(
    private router: Router,
    public state: StateService
  ) {
   this.data = state.data;
  }

  ngOnInit() {
    this.state.setRoute(this.router.url, 'Estados');
  }

  goRepresentante(){
    this.router.navigate(['/perfil']);    
  }
}
