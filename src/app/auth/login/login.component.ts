import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Store} from "@ngrx/store";
import {AuthService} from "../service/auth.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    // private store: Store<{isLogin: boolean}>,
    private authService: AuthService,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  resetLoginForm() {
    this.formGroup.reset();
  }


  login() {
    let value = this.authService.login(this.formGroup.value);
    if (value) {
      this.toast.success("Success")
    }
  }
}
