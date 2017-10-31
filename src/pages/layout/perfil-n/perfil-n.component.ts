import { Component, OnInit } from '@angular/core';
import { slideToLeft } from '../../../app/router.animations';
import { Router } from '@angular/router';
import { StateService } from '../../../shared';

@Component({
  selector: 'app-perfil-n',
  templateUrl: './perfil-n.component.html',
  styleUrls: ['./perfil-n.component.scss'],
  animations: [slideToLeft()]
})
export class PerfilNComponent implements OnInit {

  public data: any;
  private ninho: any = {
    nombre: '',
    apellido: '',
    descripcion_situacion: ''
  };

  constructor(
    private router: Router,
    public state: StateService
  ) {
    this.data = state.data;
  }

  ngOnInit() {
    this.state.setRoute(this.router.url, 'Perfil Niño');

    this.data.loading = true;    

    let all_resources = [];
    all_resources.push(true);
    this.state.get('/tipos')
      .done((data) => {
        console.log(data);
        this.data.tipos = data;
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
      this.state.get('/cancer')
        .done((data) => {
          console.log(data);
          this.data.cancer = data;
          all_resources.splice(0, 1);
          if (all_resources.length == 0) {
            this.data.loading = false;
          }
        })
        .fail((err) => {
          console.log("Error: " + JSON.stringify(err));
          this.data.loading = false;
        });

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
              all_resources.splice(0, 1);
              if (all_resources.length == 0) {
                this.data.ninho_a.requerimientos = requerimientos;
                this.data.loading = false;
              }
            })
            .fail((err) => {
              console.log("Error: " + JSON.stringify(err));
              this.data.loading = false;
            });
        });
        if (requerimientos.length == 0) { this.data.loading = false }
      })
      .fail((err) => {
        console.log("Error: " + JSON.stringify(err));
        this.data.loading = false;
      });
  }

  copyData() {
    this.ninho = JSON.parse(JSON.stringify(this.data.ninho_a));
  }

  openImg(img) {
    $('.enlargeImageModalSource').attr('src', $('#' + img).attr('src'));
  }

  slide(id) {
    this.state.slide(id);
  }

  saveChild() {
    this.data.loading = true;
    console.log(this.ninho);
    this.state.post('/ninhos/' + this.ninho.id, this.ninho)
      .done((data) => {
        alert("El niño se ha actualizado correctamente");
        console.log(data);
        this.data.ninho_a.id = data.id;
        this.data.ninho_a.nombre = data.nombre;
        this.data.ninho_a.apellido = data.apellido;
        this.data.ninho_a.descripcion_situacion = data.descripcion_situacion;
        this.data.ninho_a.representante_cedula = data.representante_cedula;
        this.data.loading = false;
      })
      .fail((err) => {
        console.log("Error: " + JSON.stringify(err));
        this.data.loading = false;
      });
  }

  newCancer(){
    this.data.loading = true;
    this.state.post('/ninhos/'+this.data.ninho_a.id+'/cancer', {descripcion: this.data.cancer_a.descripcion, ninho_id: this.data.ninho_a.id, cancer_id: this.data.cancer_a.id})
      .done((data) => {
        alert("El cancer se ha agregado correctamente");
        console.log(data);
        this.data.ninho_a.cancer = data.cancer;
        this.data.loading = false;    
      })
      .fail((err) => {
        console.log("Error: " + JSON.stringify(err));
        this.data.loading = false;
      });
  }

  new_requerimiento(){
    this.data.loading = true;
    console.log(this.data.requerimiento_a);
    this.data.requerimiento_a.ninho_id = this.data.ninho_a.id;
    this.data.requerimiento_a.estado = 1;    
    this.state.post('/requerimientos', this.data.requerimiento_a)
      .done((data) => {
        alert("El requerimiento se ha agregado correctamente");
        console.log(data);
        if(this.data.ninho_a.requerimientos == null){
          this.data.ninho_a.requerimientos = [];
        }
        this.data.ninho_a.requerimientos.push(data);
      })
      .fail((err) => {
        console.log("Error: " + JSON.stringify(err));
        this.data.loading = false;
      });
  }

  onChangeAdjunto(event){
    // this.data.requerimiento_a.adjuntos = event.srcElement.files;
    console.log(this.data.requerimiento_a.adjuntos);
  }
}
