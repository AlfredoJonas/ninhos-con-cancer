import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { StateService } from '../../services/state/state.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  public data: any;

  constructor(
    public router: Router,
    public state: StateService
  ) {
    this.data = state.data;
  }

  ngOnInit() { }

  done(){
    this.data.loading = false;
  }

}
