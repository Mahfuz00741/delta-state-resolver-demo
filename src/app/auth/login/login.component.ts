import {Component, OnInit} from '@angular/core';
import {FormGroup, UntypedFormBuilder, Validators} from '@angular/forms';
import {Store} from "@ngrx/store";
import {login} from "../state/login.action";
import {ToastrService} from "ngx-toastr";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup
  config: { timeOut: 5000; closeButton: true; positionClass: 'toast-top-right'; enableHtml: true; };
  isLoginPass: boolean = false;
  private emailTest: Boolean;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private store: Store<{ isLoginPass: boolean, users: any[] }>,
    private toast: ToastrService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  resetLoginForm() {
    this.formGroup.reset();
  }

  login2() {
    if (this.validateEmail()) {
      this.store.select('users').subscribe((res) => {
        if (res.length > 0) {
          let find = res.find(f => (f.email == this.formGroup.value.email && f.password == this.formGroup.value.password));
          if (find) {
            this.store.dispatch(login());
            this.toast.success('Success', "Login Successfully!", this.config);
            this.router.navigate(['/employee/list'])
          } else {
            this.toast.error('Wrong Email or Password')
          }
        }
      })
    } else {
      this.toast.warning("please enter valid email")
    }
  }

  validateEmail(): any {
    if (this.formGroup.value.email != '') {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.emailTest = re.test(String(this.formGroup.value.email).toLowerCase())
      return this.emailTest == true;
    }
  }

}
