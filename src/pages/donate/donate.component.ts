import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../app/router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateService } from '../../shared';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss'],
  animations: [routerTransition()]
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
        this.data.user_a = data[0];
        if(this.data.user_a.representante_id)
        this.data.is_logged_in = true;
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['/representantes']);
      })
      .fail((err) => {
        console.log("Error: " + JSON.stringify(err));
      });
  }

}
