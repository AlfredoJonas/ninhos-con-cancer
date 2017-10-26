import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { StateService } from '../../services/state/state.service'; 

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
    this.data.is_logged_in = false;
  }

}

