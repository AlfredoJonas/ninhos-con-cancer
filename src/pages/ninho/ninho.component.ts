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
    this.data.loading = true;
    this.state.get(`/ninhos/${this.data.ninho_a.id}/requerimientos`)
      .done((requerimientos) => {
        console.log(requerimientos);
        requerimientos.forEach(tipo => {
          all_resources.push(true);
          this.state.get('/tipos/' + tipo.tipo_id)
            .done((data) => {
              console.log(data);
              tipo.tipo = data;
              this.data.ninho_a.requerimientos = requerimientos;
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

  goRepresentante() {
    this.data.representante_a.cedula = this.data.ninho_a.representante_cedula;

    let all_resources = [];
    this.data.loading = true;
    this.state.get('/representantes/' + this.data.representante_a.cedula)
      .done((representante) => {
        console.log(representante);
        all_resources.push(true);
        this.state.get('/users/')
          .done((users) => {
            console.log(users);
            users.forEach(user => {
              if (user.representante_cedula == representante.cedula) {
                representante.user = user;
              }
            });
            this.state.get('/municipios/' + representante.municipio_id)
              .done((municipio) => {
                console.log(municipio);
                this.state.get('/estados/' + municipio.estado_id)
                  .done((data) => {
                    console.log(data);
                    municipio.estado = data;
                    representante.municipio = municipio;
                    this.data.representante_a = representante;
                    all_resources.splice(0, 1);
                    if (all_resources.length == 0) {
                      this.data.loading = false;
                      this.router.navigate(['/representante']);                       
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
