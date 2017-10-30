import { Component, OnInit } from '@angular/core';
import { slideToTop } from '../../app/router.animations';
import { StateService } from '../../shared';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [slideToTop()]
})
export class SignupComponent implements OnInit {

  data: any;
  private user_new: any = {
    apellido: "",
    cedula: 123,
    estado_id: null,
    municipio_id: null,
    nombre: "",
    numero_contacto_1: "",
    numero_contacto_2: "",
    password: "",
    username: ""
  };

  constructor(
    public state: StateService
  ) {
    this.data = state.data;
  }

  ngOnInit() {
    let all_resources = [];
    this.data.loading = true;
    all_resources.push(true);
    this.state.get('/estados')
      .done((data) => {
        console.log(data);
        this.data.estados = data;
        this.state.changeEstate(this.data.estados[0].id);
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
  }

  changeEstate() {
    this.state.changeEstate(this.user_new.estado_id);
  }

  newUser() {
    console.log(this.user_new);
  }

}
