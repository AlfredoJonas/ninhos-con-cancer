import { Component, OnInit } from '@angular/core';
import { slideToLeft } from '../../../app/router.animations';
import { Router } from '@angular/router';
import { StateService } from '../../../shared';


@Component({
  selector: 'app-perfil-r',
  templateUrl: './perfil-r.component.html',
  styleUrls: ['./perfil-r.component.scss'],
  animations: [slideToLeft()]
})
export class PerfilRComponent implements OnInit {

  public data: any;

  constructor(
    private router: Router,
    public state: StateService
  ) {
    this.data = this.state.data;
    this.state.setRoute(this.router.url, 'Perfil Representante');
  }


  ngOnInit() {
    this.state.changeEstate(this.data.user_a.representante.municipio.estado_id);
    this.state.set_ninho('', '', '', '', '');
  }

  slide(id) {
    this.state.slide(id);
  }

  changeEstate(){
    this.state.changeEstate(this.data.user_a.representante.municipio.estado_id);
  }

  saveRepresentante() {
    this.data.loading = true;
    this.state.put('/representantes', this.data.representante_a);
    /* .subscribe(
    data => {
      var res = JSON.parse(data["_body"]);
      console.log(res);
      this.data.loading = false;
    },
    err => {
      console.log("Error: " + JSON.stringify(err));
      this.data.loading = false;
    }
    ); */
  }

  newChild() {
    this.data.loading = true;
    this.data.ninho_a.representante_cedula = this.data.user_a.representante.cedula;
    console.log(this.data.ninho_a);
    this.state.post('/ninhos', this.data.ninho_a)
      .done((data) => {
        console.log(data);
        // this.data.user_a.rol = data;
        this.state.set_ninho('', '', '', '', '');
        this.data.loading = false;
      })
      .fail((err) => {
        console.log("Error: " + JSON.stringify(err));
        this.data.loading = false;
      });
    console.log(this.data.ninho_a);
  }

}
