import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AlertService } from '../services/alert.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _alert: AlertService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    const session = sessionStorage.getItem('user');
    if (!session) {
      this.notLogin();
      return false;
    }
    return true;
  }

  notLogin(): void {
    this._alert.info(
      'No se encuentra autorizado por el sistema. Inicie sesión.'
    );
    this.router.navigate(['/login']);
  }
}
