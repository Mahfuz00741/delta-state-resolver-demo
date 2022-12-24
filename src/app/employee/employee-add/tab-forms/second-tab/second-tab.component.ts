import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {EmployeeModel} from "../../../model/employee.model";
import {updateEmployee} from "../../../state/employee.action";
import {Router} from "@angular/router";

@Component({
  selector: 'app-second-tab',
  templateUrl: './second-tab.component.html',
  styleUrls: ['./second-tab.component.scss']
})
export class SecondTabComponent implements OnInit {
  secondForm: FormGroup;
  employee: EmployeeModel;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<{employeeModel: EmployeeModel, empList: EmployeeModel[]}>,
  ) { }

  ngOnInit(): void {
    this.secondForm = this.formBuilder.group({
      salary: ['', Validators.required],
      designation: ['', Validators.required],
      phone: ['', Validators.required],
    })

    this.store.select('employeeModel').subscribe((res) => {
      if (res) {
        this.setFormValue(res)
        this.employee = res;
      }
    })
  }

  setFormValue (data) {
    this.secondForm.patchValue({
      id: data.id,
      salary: data.salary,
      designation: data.designation,
      phone: data.phone
    })
  }

  updateEmp() {
    this.store.dispatch(updateEmployee(this.employee));
    this.router.navigate(['employee/list']);
  }
}
