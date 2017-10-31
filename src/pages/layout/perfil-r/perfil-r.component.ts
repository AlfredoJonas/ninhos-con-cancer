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
  private representante: any = {
    email: '',
    nombre: '',
    apellido: '',
    numero_contacto_1: '',
    numero_contacto_2: '',
    municipio_id: '',
    municipio: {estado_id: ''}    
  };

  constructor(
    private router: Router,
    public state: StateService
  ) {
    this.data = this.state.data;
    this.state.setRoute(this.router.url, 'Perfil Representante');
  }


  ngOnInit() {
    this.state.set_ninho('', '', '', '', '');

    let all_resources = [];
    this.data.loading = true;
    this.state.get('/estados')
      .done((data) => {
        console.log(data);
        this.data.estados = data;
        all_resources.push(true);
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
              this.state.changeEstate(this.data.user_a.representante.municipio.estado_id);
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

    this.state.get('/representantes/' + this.data.user_a.representante.cedula + '/ninhos')
      .done((ninhos) => {
        console.log(ninhos);
        this.data.user_a.representante.ninhos = JSON.parse(JSON.stringify(ninhos));
        ninhos.forEach(ninho => {
          this.state.get('/ninhos/' + ninho.id + '/cancer')
            .done((data2) => {
              console.log(data2);
              ninho.cancer = data2;
              data2.forEach(cancer => {
                all_resources.push(true);
                this.state.get('/cancer/' + cancer.id)
                  .done((data3) => {
                    console.log(data3);
                    cancer.cancer = data3;
                    all_resources.splice(0, 1);
                    if (all_resources.length == 0) {
                      this.data.loading = false;
                      this.data.user_a.representante.ninhos = ninhos;
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
        });
        if (ninhos.length == 0) { this.data.loading = false }
      })
      .fail((err) => {
        console.log("Error: " + JSON.stringify(err));
        this.data.loading = false;
      });
  }
  
  copyData(){
    this.representante = JSON.parse(JSON.stringify(this.data.user_a.representante));
  }

  goChild(id){
    this.data.ninho_a = this.data.representante_a.ninhos[this.data.representante_a.ninhos.findIndex((item) => item.id == id)];    
  }

  slide(id) {
    this.state.slide(id);
  }

  changeEstate() {
    this.state.changeEstate(this.data.user_a.representante.municipio.estado_id);
  }

  saveRepresentante() {

    this.data.loading = true;

    console.log(this.representante);
    this.state.post('/representantes/' + this.representante.cedula, this.representante)
      .done((data) => {
        console.log(data);
        this.data.loading = false;
      })
      .fail((err) => {
        console.log("Error: " + JSON.stringify(err));
        this.data.loading = false;
      });
  }

  newChild() {
    let all_resources = [];
    this.data.loading = true;
    this.data.ninho_a.representante_cedula = this.data.user_a.representante.cedula;
    console.log(this.data.ninho_a);
    this.state.post('/ninhos', this.data.ninho_a)
      .done((ninho) => {
        console.log(ninho);
        this.data.user_a.representante.ninhos.push(ninho);
        this.data.loading = false;
      })
      .fail((err) => {
        console.log("Error: " + JSON.stringify(err));
        this.data.loading = false;
      });
    console.log(this.data.ninho_a);
  }

}
