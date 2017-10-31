import { Component, OnInit } from '@angular/core';
import { slideToLeft } from '../../../app/router.animations';
import { Router } from '@angular/router';
import { StateService } from '../../../shared';

@Component({
  selector: 'app-representantes',
  templateUrl: './representantes.component.html',
  styleUrls: ['./representantes.component.scss'],
  animations: [slideToLeft()]
})
export class RepresentantesComponent implements OnInit {

  public data: any;

  constructor(
    private router: Router,
    public state: StateService
  ) {
    this.data = state.data;
  }

  ngOnInit() {
    this.state.setRoute(this.router.url, 'Representantes');

    this.data.loading = true;
    this.state.get(`/representantes`)
      .done((representantes) => {
        this.data.representantes = representantes;
        this.data.loading = false;
      })
      .fail((err) => {
        console.log("Error: " + JSON.stringify(err));
        this.data.loading = false;
      });
  }

  goRepresentante(cedula) {
    this.data.representante_a = this.data.representantes[this.data.representantes.findIndex((item) => item.cedula == cedula)];

    let all_resources = [];

    all_resources.push(true);
    this.state.get('/estados')
      .done((data) => {
        console.log(data);
        this.data.estados = data;
        this.state.get('/municipios')
          .done((data) => {
            console.log(data);
            this.data.municipios = data;
            this.data.estados.forEach(estado => {
              estado.municipios = [];
              this.data.municipios.forEach(municipio => {
                if (estado.id == municipio.estado_id) {
                  estado.municipios.push(municipio);
                }
              });
            });
            console.log(this.data.estados);
            all_resources.splice(0, 1);
            if (all_resources.length == 0) {
              this.data.loading = false;
            }
          })
          .fail((err) => {
            console.log("Error: " + JSON.stringify(err));
            this.data.loading = false;
          });
      })
      .fail((err) => {
        console.log("Error: " + JSON.stringify(err));
        this.data.loading = false;
      });

    all_resources.push(true);
    this.state.get('/users/')
      .done((users) => {
        console.log(users);
        users.forEach(user => {
          if (user.representante_cedula == this.data.representante_a.cedula) {
            this.data.representante_a.user = user;
          }
        });
        this.state.get('/municipios/' + this.data.representante_a.municipio_id)
          .done((municipio) => {
            console.log(municipio);
            this.state.get('/estados/' + municipio.estado_id)
              .done((data) => {
                console.log(data);
                municipio.estado = data;
                this.data.representante_a.municipio = municipio;
                all_resources.splice(0, 1);
                if (all_resources.length == 0) {
                  this.data.loading = false;
                  this.router.navigate(['/perfil-representantes']);
                }
              })
              .fail((err) => {
                console.log("Error: " + JSON.stringify(err));
                this.data.loading = false;
              });
          })
          .fail((err) => {
            console.log("Error: " + JSON.stringify(err));
            this.data.loading = false;
          });
      })
      .fail((err) => {
        console.log("Error: " + JSON.stringify(err));
        this.data.loading = false;
      });
  }

  changeEstate(){
    this.state.changeEstate(this.data.user_a.representante.municipio.estado_id);
  }
}
