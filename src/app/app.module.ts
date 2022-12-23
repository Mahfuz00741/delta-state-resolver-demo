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
import {loginReducer} from "./auth/state/login.reducer";

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
    ToastrModule.forRoot(),
    StoreModule.forRoot(
      { isLoginPass: loginReducer}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
