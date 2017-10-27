import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StateService } from '../services/state/state.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    public state: StateService
  ) { }

  canActivate() {
    
    if (localStorage.getItem('is_logged_in')) {
      return true;
    }
    this.router.navigate(['/inicio']); 
    return false;
  }
}
