import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { slideToLeft } from '../../app/router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateService } from '../../shared';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss'],
  animations: [slideToLeft()]
})
export class DonateComponent implements OnInit {

  public data: any;
  private myForm: FormGroup;

  constructor(
    private router: Router,
    public state: StateService,
    private formBuilder: FormBuilder
  ) {
    this.data = state.data;
  }

  ngOnInit() {
    this.state.setRoute(this.router.url, 'Donar');

    var ninhos = [];
    let all_resources = [];
    this.data.loading = true;
    this.state.get('/ninhos')
      .done((data1) => {
        console.log(data1);
        ninhos = data1;
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
                      this.data.ninhos = ninhos;
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
      })
      .fail((err) => {
        console.log("Error: " + JSON.stringify(err));
        this.data.loading = false;
      });
  }

  goNinho(id) {
    this.data.ninho_a = this.data.ninhos[this.data.ninhos.findIndex((item) => item.id == id)];
  }

}
