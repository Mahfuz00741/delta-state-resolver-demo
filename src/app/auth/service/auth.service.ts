import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  User: any [] = [
    {email: 'root@mail.com', password: 1234},
    {email: 'user@mail.com', password: 1234}
  ]

  // @ts-ignore
  public login(value: any): any {
    let find = this.User.find(f => (f.email == value.email && f.password == value.password));
    return !!find;
  }

}
