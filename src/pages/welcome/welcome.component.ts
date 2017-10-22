import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../app/router.animations';
import { StateService } from '../../shared';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [routerTransition()]
})
export class WelcomeComponent implements OnInit {

  public data: any;

  constructor(
    private router: Router,
    public state: StateService
  ) {
    this.data = state.data;
  }

  ngOnInit() {
  }

  onLoggedin() {
    localStorage.setItem('isLoggedin', 'true');
    this.data.is_logged_in = true;
    this.router.navigate(['/representantes']);
  }

}
