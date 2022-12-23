import { Injectable } from '@angular/core';
import {EmployeeModel} from "../model/employee.model";
import {Store} from "@ngrx/store";
import {loadEmpList} from "../state/employee.action";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private store: Store,
  ) { }

  loadEmpList() {
    this.store.dispatch(loadEmpList())
  }

}
