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

  private createMyForm(){
    return this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLoggedin() {
    this.state.post('/users/login', { username: 'sanoj94', password: 'aeu18'})
      .subscribe(
      data => {
        var res = JSON.parse(JSON.parse(data["_body"]));   
        console.log(res);        
        this.data.user_a = res;
        this.data.is_logged_in = true;
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['/representantes']);
      },
      err => {
        console.log("Error: " + JSON.stringify(err));
      }
      );
  }

}
