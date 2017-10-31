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
  private ninho: any;

  constructor(
    private router: Router,
    public state: StateService
  ) {
    this.data = state.data;
  }

  ngOnInit() {
    this.state.setRoute(this.router.url, 'Perfil Niño');   
    
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
          if(requerimientos.length == 0){this.data.loading = false}
        })
        .fail((err) => {
          console.log("Error: " + JSON.stringify(err));
          this.data.loading = false;
        });
  }

  copyData(){
    this.ninho = JSON.parse(JSON.stringify(this.data.ninho_a));
  }

  openImg(img){
    $('.enlargeImageModalSource').attr('src', $('#'+img).attr('src'));
  }

  slide(id){
    this.state.slide(id);
  }
}
