import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { slideToLeft } from '../../../app/router.animations';
import { StateService } from '../../../shared';

@Component({
  selector: 'app-representante',
  templateUrl: './representante.component.html',
  styleUrls: ['./representante.component.scss'],
  animations: [slideToLeft()]
})
export class RepresentanteComponent implements OnInit {

  public data: any;
  private representante: any = {
    email: '',
    nombre: '',
    apellido: '',
    numero_contacto_1: '',
    numero_contacto_2: '',
    municipio_id: '',
    municipio: { estado_id: '' }
  };

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
    this.state.get('/representantes/' + this.data.representante_a.cedula + '/ninhos')
      .done((ninhos) => {
        console.log(ninhos);
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
                      this.data.representante_a.ninhos = ninhos;
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
        if(ninhos.length == 0){this.data.loading = false}        
      })
      .fail((err) => {
        console.log("Error: " + JSON.stringify(err));
        this.data.loading = false;
      });
  }

  copyData() {
    this.representante = JSON.parse(JSON.stringify(this.data.representante));
  }

  goChild(id){
    this.data.ninho_a = this.data.representante_a.ninhos[this.data.representante_a.ninhos.findIndex((item) => item.id == id)];    
  }


  slide(id) {
    this.state.slide(id);
  }

  changeEstate() {
    this.state.changeEstate(this.data.representante_a.municipio.estado_id);
  }

  saveRepresentante() {

    this.data.loading = true;

    console.log(this.representante);
    // this.representante._method = 'put';
    this.state.post('/representantes/' + this.representante.cedula, this.representante)
      .done((data) => {
        console.log(data);
        alert("El representante se ha actualizado correctamente");        
        this.data.representante_a.cedula = data.cedula;
        this.data.representante_a.nombre = data.nombre;
        this.data.representante_a.apellido = data.apellido;
        this.data.representante_a.numero_contacto_1 = data.numero_contacto_1;
        this.data.representante_a.numero_contacto_2 = data.numero_contacto_2;
        this.data.representante_a.municipio_id = data.municipio_id;
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
        this.data.representante_a.ninhos.push(ninho);
        this.data.loading = false;
      })
      .fail((err) => {
        console.log("Error: " + JSON.stringify(err));
        this.data.loading = false;
      });
    console.log(this.data.ninho_a);
  }

  deleteChild(id) {
    this.state.delete('/ninhos/' + id)
      .subscribe(
      data => {
        var res = JSON.parse(data["_body"]);
        console.log(res);
      },
      err => {
        console.log("Error: " + JSON.stringify(err));
      }
      );
  }

}
