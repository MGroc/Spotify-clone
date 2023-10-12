import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private cookieService: CookieService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAdmin();
  }

  isAdmin(): boolean {
    try {

      const role: string = this.cookieService.get('role')
      console.log('role: ', role)
      if(role !== 'admin'){
        this.router.navigate(['/'])
        // return false
      }
      return true;

    } catch(e){
      
      console.log('Algo sucedio ?? 🔴🔴', e);
      return false

    }

  }
  
}
