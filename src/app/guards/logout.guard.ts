import { CanActivate,  RouterStateSnapshot,UrlTree, ActivatedRouteSnapshot } from '@angular/router';
import {Observable} from 'rxjs';

export class LogoutGuard implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
     {
       const token = localStorage.getItem('token');
     if(token) false;
     else
     return true;
     }
}
