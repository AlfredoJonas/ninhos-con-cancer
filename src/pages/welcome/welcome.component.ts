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
    this.data.loading = true;
    this.state.post('/users/login', { username: this.myForm.value.email, password: this.myForm.value.password })
      .done((data) => {
        if (data.length > 0) {
          this.data.user_a = data[0];
          /* this.data.user_a.is_logged_in = true;
          localStorage.setItem('is_logged_in', this.data.user_a.is_logged_in);
          this.router.navigate(['/representantes']);
          this.data.loading = false; */
          this.state.get('/roles/'+this.data.user_a.rol_id)
            .done((data) => {
              console.log(data);
              this.data.user_a.rol = data[0]; 
              this.data.user_a.is_logged_in = true;
              this.data.loading = false;                            
              localStorage.setItem('is_logged_in', this.data.user_a.is_logged_in);
              if(this.data.user_a.rol_id == '1'){
                this.router.navigate(['/representantes']);
              }else{
                this.router.navigate(['/perfil-representante']);
              }
            })
            .fail((err) => {
              console.log("Error: " + JSON.stringify(err));
              this.data.loading = false;
            });
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

}
