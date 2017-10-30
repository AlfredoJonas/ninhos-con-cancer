import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { StateService } from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public data: any;

  constructor(
    public router: Router,
    public state: StateService
  ) {
    this.data = state.data;
  }

  ngOnInit() { }

  onLoggedout() {
    this.state.set_all();
    localStorage.removeItem('is_logged_in');
  }

  setRoute(route) {
    if (route != this.data.bread_crumb[this.data.bread_crumb.length - 1].route) {
      this.state.setRoute('/inicio', 'Inicio');
    }
  }

}

