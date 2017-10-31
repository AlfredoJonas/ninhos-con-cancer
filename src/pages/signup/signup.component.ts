import { Component, OnInit } from '@angular/core';
import { slideToTop } from '../../app/router.animations';
import { StateService } from '../../shared';
import { Router } from '@angular/router';

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
    cedula: 0,
    estado_id: null,
    municipio_id: null,
    nombre: "",
    numero_contacto_1: "",
    numero_contacto_2: "",
    password: "",
    username: "",
    email: "",
    rol_id: "2",
    representante_cedula: 0
  };

  constructor(
    public state: StateService,
    private router: Router
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
    this.user_new.representante_cedula = this.user_new.cedula;
    console.log(this.user_new);
    let all_resources = [];
    this.data.loading = true;
    this.state.post('/representantes', this.user_new)
      .done((representante) => {
        console.log(representante);
        this.state.post('/users', this.user_new)
          .done((user) => {
            console.log(user);
            this.data.user_a = user;    
            this.data.user_a.representante = representante;     
            all_resources.push(true);
            this.state.get('/municipios/' + this.data.user_a.representante.municipio_id)
              .done((data) => {
                console.log(data);
                this.data.user_a.representante.municipio = data;

                this.state.get('/estados/' + this.data.user_a.representante.municipio.estado_id)
                  .done((data) => {
                    console.log(data);
                    this.data.user_a.representante.municipio.estado = data;
                    all_resources.splice(0, 1);
                    if (all_resources.length == 0) {
                      alert("Usuario creado con exito");
                      this.data.loading = false;
                      this.data.user_a.is_logged_in = true;
                      localStorage.setItem('is_logged_in', this.data.user_a.is_logged_in);
                      this.router.navigate(['/perfil-representante']);
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

}
