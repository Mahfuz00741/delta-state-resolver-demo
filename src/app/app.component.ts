import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {logout} from "./auth/state/login.action";
import {initializeEmployee} from "./employee/state/employee.action";
import {EmployeeModel} from "./employee/model/employee.model";

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

  goTo(path) {
    if ((path == 'employee/list' && !this.isLogin) || (path == 'employee/add' && !this.isLogin)) {
      this.toast.warning('Please login first..!!');
      this.router.navigate([path]);
    } else if ((path == 'employee/list' && this.isLogin) || (path == 'employee/add' && this.isLogin)) {
      this.router.navigate([path]);
      if (path == 'employee/add' && this.isLogin) {
        this.store.dispatch(initializeEmployee(new EmployeeModel()));
      }
    } else if (path == '') {
      this.router.navigate([path]);
    }
  }

  logOutProcess() {
    this.store.dispatch(logout());
    this.store.select("isLoginPass").subscribe(res => {
      this.isLogin = res;
      if (!this.isLogin) {
        this.toast.success( "Successfully Logout");
        this.router.navigate(['login']);
      }
    })
  }
}
