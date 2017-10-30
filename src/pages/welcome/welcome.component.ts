import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { slideToTop } from '../../app/router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateService } from '../../shared';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [slideToTop()]
})
export class WelcomeComponent implements OnInit {

  public data: any;
  private myForm: FormGroup;

  constructor(
    private router: Router,
    public state: StateService,
    private formBuilder: FormBuilder
  ) {
    this.data = state.data;
    this.myForm = this.createMyForm();
  }

  ngOnInit() {
  }

  private createMyForm() {
    return this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLoggedin() {
    var all_resources = [];
    this.data.loading = true;
    this.state.post('/users/login', { username: this.myForm.value.email, password: this.myForm.value.password })
      .done((data) => {
        console.log(data);
        if (data.length > 0) {
          this.data.user_a = data[0];
          all_resources.push(true);
          this.state.get('/roles/' + this.data.user_a.rol_id)
            .done((data) => {
              console.log(data);
              this.data.user_a.rol = data;
              all_resources.splice(0, 1);
              if (all_resources.length == 0) {
                this.finishGetResources();                
              }
            })
            .fail((err) => {
              console.log("Error: " + JSON.stringify(err));
              this.data.loading = false;
            });

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
                      if(estado.id == municipio.estado_id){
                        estado.municipios.push(municipio);
                      }
                    });
                  });
                  console.log(this.data.estados);
                  all_resources.splice(0, 1);
                  if (all_resources.length == 0) {
                    this.finishGetResources();                
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
          if (this.data.user_a.representante_cedula != '') {
            all_resources.push(true);
            this.state.get('/representantes/' + this.data.user_a.representante_cedula)
              .done((data) => {
                console.log(data);
                this.data.user_a.representante = data;

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
                          this.finishGetResources();
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
                // Aqui traer los niños de este representantes con todos los cancer
              })
              .fail((err) => {
                console.log("Error: " + JSON.stringify(err));
                this.data.loading = false;
              });
          }
        } else {
          alert('Usuario o contraseña invalidos!');
          this.data.loading = false;
        }
      })
      .fail((err) => {
        console.log("Error: " + JSON.stringify(err));
        this.data.loading = false;
      });
  }

  finishGetResources(){
    this.data.user_a.is_logged_in = true;
    this.data.loading = false;
    localStorage.setItem('is_logged_in', this.data.user_a.is_logged_in);
    if (this.data.user_a.rol_id == '1') {
      this.router.navigate(['/representantes']);
    } else {
      this.router.navigate(['/perfil-representante']);
    }
  }

}
