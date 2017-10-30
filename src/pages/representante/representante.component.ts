import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { slideToLeft } from '../../app/router.animations';
import { StateService } from '../../shared';

@Component({
  selector: 'app-representante',
  templateUrl: './representante.component.html',
  styleUrls: ['./representante.component.scss'],
  animations: [slideToLeft()]
})
export class RepresentanteComponent implements OnInit {

  public data: any;

  constructor(
    private router: Router,
    public state: StateService
  ) {
    this.data = state.data;
  }

  ngOnInit() {
    this.state.setRoute(this.router.url, 'Representante');

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
            this.data.representante_a = representante;            
            all_resources.splice(0, 1);
            if (all_resources.length == 0) {
              this.data.loading = false;
            }
          })
          .fail((err) => {
            console.log("Error: " + JSON.stringify(err));
            this.data.loading = false;
          });
        all_resources.push(true);
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

}
