import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import { Router } from '@angular/router';

@Injectable()
export class CheckAuthGuard implements CanActivate{

  constructor( private router: Router) { }

  userNameStorage: string = sessionStorage.getItem('userName');

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{
    if (this.userNameStorage) {
      return true;
    } else {
      this.router.navigate(['dashboard']);
      return false;
    }
  }
}
