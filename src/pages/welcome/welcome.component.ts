import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../app/router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateService } from '../../shared';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [routerTransition()]
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
    console.log(this.myForm.value);
    this.state.post('/users/login', { username: this.myForm.value.email, password: this.myForm.value.password })
      .done((data) => {
        console.log(data);
        if(data){
          alert('success');
          this.data.user_a = data[0];
          this.data.is_logged_in = true;
          this.router.navigate(['/representantes']);
        }else{
          alert('Usuario o contraseña invalidos!');
        }
      })
      .fail((err) => {
        console.log("Error: " + JSON.stringify(err));
      });
  }

}
