import { Component, OnInit } from '@angular/core';
import { slideToLeft } from '../../../app/router.animations';
import { Router } from '@angular/router';
import { StateService } from '../../../shared';

@Component({
  selector: 'app-ninhos',
  templateUrl: './ninhos.component.html',
  styleUrls: ['./ninhos.component.scss'],
  animations: [slideToLeft()]
})
export class NinhosComponent implements OnInit {

  public data: any;

  constructor(
    private router: Router,
    public state: StateService
  ) { 
    this.data = state.data;
    console.log(this.data);
  }

  ngOnInit() {
    this.state.setRoute(this.router.url, 'Niños');    
  }

  goNinho() {
    this.router.navigate(['/perfil-ninho']);
  }
}
