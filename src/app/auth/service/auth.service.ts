import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import { login, logout } from 'src/app/auth/state/login.action';
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userList: any[] = [
    {email: 'root@mail.com', password: '1234'},
    {email: 'user@mail.com', password: '1234'}
  ]

  constructor(
    private store: Store<{ isLogin: Boolean }>,
    private toast: ToastrService,
  ) {}

  public login(value: any): any {
    let find = this.userList.find(f => (f.email == value.email && f.password == value.password));
    if (find) {
      this.store.dispatch(login());
      return true;
    } else {
      return false
    }
  }

  public logout() {
    this.store.dispatch(logout());
  }

}
