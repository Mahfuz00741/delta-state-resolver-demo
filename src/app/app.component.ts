import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {AuthService} from "./auth/service/auth.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'delta-employee-demo';
  isLogin: boolean = true;
  config: { timeOut: 5000; closeButton: true; positionClass: 'toast-top-right'; enableHtml: true; };

  constructor(
    private store: Store<{isLoginPass: boolean}>,
    private authService: AuthService,
    private toast: ToastrService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.checkLogin();
  }

  checkLogin(): any {
    this.store.select("isLoginPass").subscribe(res => {
      this.isLogin = res;
    })
  }

  logOutProcess() {
    this.authService.logout();
    this.store.select("isLoginPass").subscribe(res => {
      this.isLogin = res;
      if (!this.isLogin) {
        this.toast.success('Success', "Logout Successfully!", this.config);
        this.router.navigate(['/login']);
      }
    })
  }
}
