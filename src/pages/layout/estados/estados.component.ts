import { Component, OnInit } from '@angular/core';
import { slideToLeft } from '../../../app/router.animations';
import { Router } from '@angular/router';
import { StateService } from '../../../shared';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.scss'],
  animations: [slideToLeft()]
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

    this.data.loading = true;
    this.state.get(`/estados`)
      .done((estados) => {
        this.data.estados = estados;
        this.data.loading = false;
      })
      .fail((err) => {
        console.log("Error: " + JSON.stringify(err));
        this.data.loading = false;
      });
  }

  goRepresentante(){
    this.router.navigate(['/perfil']);
  }
}
