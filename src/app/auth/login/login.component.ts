import { Component, OnInit } from '@angular/core';
import {FormGroup, UntypedFormBuilder, Validators} from '@angular/forms';
import {Store} from "@ngrx/store";
import {AuthService} from "../service/auth.service";
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
    private store: Store<{isLoginPass: boolean}>,
    private authService: AuthService,
    private toast: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  resetLoginForm() {
    this.formGroup.reset();
  }


  login() {
    if (this.validateEmail()) {
      let response = this.authService.login(this.formGroup.value);
      if (response) {
        this.store.select('isLoginPass').subscribe((res) => {
          if (res) {
            this.toast.success('Success', "Login Successfully!", this.config);
            this.router.navigate(['/employee/list'])
          }
        })
      } else {
        this.toast.error('Wrong Email or Password')
      }
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
