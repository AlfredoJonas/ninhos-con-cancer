import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthDonate implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate() {
    
    if (localStorage.getItem('is_donate')) {
      return true;
    }
    this.router.navigate(['/inicio']); 
    return false;
  }
}
