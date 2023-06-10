import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard {
  constructor(private router: Router) {}

  canActivate() {
    if (!localStorage.getItem('auth')) this.router.navigate(['/login']);
    return false;
  }
}
