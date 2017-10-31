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

  goChild(id){
    this.data.ninho_a = this.data.representante_a.ninhos[this.data.representante_a.ninhos.findIndex((item) => item.id == id)];    
  }

}
