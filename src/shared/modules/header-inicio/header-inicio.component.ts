import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { StateService } from '../../services';

@Component({
  selector: 'app-header-inicio',
  templateUrl: './header-inicio.component.html',
  styleUrls: ['./header-inicio.component.scss']
})
export class HeaderInicioComponent implements OnInit {

  public data: any;

  constructor(
    public router: Router,
    public state: StateService
  ) {
    this.data = state.data;
  }

  ngOnInit() { }

  setRoute() {
    this.state.setRoute('/inicio', 'Inicio');
  }

}
