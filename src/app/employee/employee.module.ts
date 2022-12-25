import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { FirstTabComponent } from './employee-add/tab-forms/first-tab/first-tab.component';
import { SecondTabComponent } from './employee-add/tab-forms/second-tab/second-tab.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";
import {NgxPrintModule} from "ngx-print";


@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeAddComponent,
    FirstTabComponent,
    SecondTabComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatRadioModule,
    NgxPrintModule
  ]
})
export class EmployeeModule { }
