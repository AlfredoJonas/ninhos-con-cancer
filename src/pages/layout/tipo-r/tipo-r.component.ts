import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../app/router.animations';
import { Router } from '@angular/router';
import { StateService } from '../../../shared';

@Component({
  selector: 'app-tipo-r',
  templateUrl: './tipo-r.component.html',
  styleUrls: ['./tipo-r.component.scss'],
  animations: [routerTransition()]
})
export class TipoRComponent implements OnInit {

  public data: any;

  constructor(
    private router: Router,
    public state: StateService
  ) {
    this.data = state.data;
  }

  ngOnInit() {
    this.state.setRoute(this.router.url, 'Tipos Requerimiento');    
  }
}
