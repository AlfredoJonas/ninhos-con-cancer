import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { slideToLeft } from '../../app/router.animations';
import { StateService } from '../../shared';

@Component({
  selector: 'app-ninho',
  templateUrl: './ninho.component.html',
  styleUrls: ['./ninho.component.scss'],
  animations: [slideToLeft()]
})
export class NinhoComponent implements OnInit {

  public data: any;

  constructor(
    private router: Router,
    public state: StateService
  ) {
    this.data = state.data;
  }

  ngOnInit() {
    this.state.setRoute(this.router.url, 'Niño');

    let all_resources = [];
    this.state.get('/ninhos/'+ this.data.ninho_a.id +'/requerimientos')
      .done((data) => {
        console.log(data);
        this.data.ninho_a.requerimientos = data;
        this.data.ninho_a.requerimientos.forEach(tipo => {
          all_resources.push(true);
          this.state.get('/tipos/'+ tipo.tipo_id)
            .done((data) => {
              console.log(data);
              tipo.tipo = data;
              all_resources.splice(0, 1);
              if (all_resources.length == 0) {
                this.data.loading = false;
              }
            })
            .fail((err) => {
              console.log("Error: " + JSON.stringify(err));
              this.data.loading = false;
            });
        });
      })
      .fail((err) => {
        console.log("Error: " + JSON.stringify(err));
        this.data.loading = false;
      });
  }

  openImg(img) {
    $('.enlargeImageModalSource').attr('src', $('#' + img).attr('src'));
  }

  slide(id) {
    this.state.slide(id);
  }

}