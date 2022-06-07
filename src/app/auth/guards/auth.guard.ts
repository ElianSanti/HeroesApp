import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  
  constructor(private service:AuthServiceService, private router:Router){}

  canActivate(): Observable<boolean> | boolean {
    return this.service.validarToken().pipe(
      tap(valid => {
        if(!valid){
          this.router.navigateByUrl('/auth')
        }
      })
    );
  }
  canLoad(): Observable<boolean> | boolean {
    return this.service.validarToken().pipe(
      tap(valid => {
        if(!valid){
          this.router.navigateByUrl('/auth')
        }
      })
    );
  }
}
