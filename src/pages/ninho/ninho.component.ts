import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { slideToLeft } from '../../app/router.animations';
import { StateService } from '../../shared';
import * as $ from 'jquery';

@Component({
  selector: 'app-ninho',
  templateUrl: './ninho.component.html',
  styleUrls: ['./ninho.component.scss'],
  animations: [slideToLeft()]
})
export class NinhoComponent implements OnInit {

  public data: any;
  private collapsed_box:any = '';

  constructor(
    private router: Router,
    public state: StateService
  ) {
    this.data = state.data;
  }

  ngOnInit() {
    this.state.setRoute(this.router.url, 'Niño');              
  }

  openImg(img){
    $('.enlargeImageModalSource').attr('src', $('#'+img).attr('src'));
  }

  slide(id){
    this.state.slide(id);
  }

}
