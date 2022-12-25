import {Store} from "@ngrx/store";
import {ToastrService} from "ngx-toastr";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private store: Store<{ isLoginPass: boolean }>,
    private toast: ToastrService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  checkLogin(): boolean {
    let value: boolean;
    this.store.select("isLoginPass").subscribe(res => {
      if (res != true) {
        value = false;
      }
    })
    return value;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLogin();
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLogin();
  }
}
