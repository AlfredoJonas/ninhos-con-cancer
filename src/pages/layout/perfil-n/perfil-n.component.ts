import { Component, OnInit } from '@angular/core';
import { slideToLeft } from '../../../app/router.animations';
import { Router } from '@angular/router';
import { StateService } from '../../../shared';

@Component({
  selector: 'app-perfil-n',
  templateUrl: './perfil-n.component.html',
  styleUrls: ['./perfil-n.component.scss'],
  animations: [slideToLeft()]
})
export class PerfilNComponent implements OnInit {

  public data: any;

  constructor(
    private router: Router,
    public state: StateService
  ) {
    this.data = state.data;
  }

  ngOnInit() {
    this.state.setRoute(this.router.url, 'Perfil Niño');    
  }

  openImg(img){
    $('.enlargeImageModalSource').attr('src', $('#'+img).attr('src'));
  }

  slide(id){
    this.state.slide(id);
  }
}
