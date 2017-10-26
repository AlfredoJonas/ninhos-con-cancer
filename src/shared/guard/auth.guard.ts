import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StateService } from '../services/state/state.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate(route: Router,
    state: StateService) {
    // state.data.is_logged_in = true;    
    if (state.data.is_logged_in) {
      return true;
    }
    this.router.navigate(['/inicio']); 
    alert(state.data.is_logged_in);    
    return false;
  }
}
