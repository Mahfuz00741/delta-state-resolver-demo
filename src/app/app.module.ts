import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from "@angular/material/icon";
import {ToastrModule} from "ngx-toastr";
import {StoreModule} from "@ngrx/store";
import {loginReducer, userReducer} from "./auth/state/login.reducer";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButtonModule} from "@angular/material/button";
import {empInitializeReducer, empListReducer} from "./employee/state/employee.reducer";
import {AuthGuard} from "./auth/resolver-guard/auth.guard";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot(
      { isLoginPass: loginReducer, empList: empListReducer, employeeModel: empInitializeReducer, users: userReducer}
    )
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
