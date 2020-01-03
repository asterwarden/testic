import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import { Router } from '@angular/router';

@Injectable()
export class ActivateGuard implements CanActivate{

  constructor( private router: Router) { }

  statusSessionStorage: any = sessionStorage.getItem('sessionActive');

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{
    if (this.statusSessionStorage) {
      return true;
    } else {
      this.router.navigate(['dashboard']);
      return false;
    }
  }
}
