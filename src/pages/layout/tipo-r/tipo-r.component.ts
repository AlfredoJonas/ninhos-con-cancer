import { Component, OnInit } from '@angular/core';
import { slideToLeft } from '../../../app/router.animations';
import { Router } from '@angular/router';
import { StateService } from '../../../shared';

@Component({
  selector: 'app-tipo-r',
  templateUrl: './tipo-r.component.html',
  styleUrls: ['./tipo-r.component.scss'],
  animations: [slideToLeft()]
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

    this.data.loading = true;
    this.state.get(`/tipos`)
      .done((tipo) => {
        this.data.tipos = tipo;
        this.data.loading = false;
      })
      .fail((err) => {
        console.log("Error: " + JSON.stringify(err));
        this.data.loading = false;
      });
  }
}
