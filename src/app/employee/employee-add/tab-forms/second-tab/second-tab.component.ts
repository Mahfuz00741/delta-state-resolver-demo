import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {EmployeeModel} from "../../../model/employee.model";

@Component({
  selector: 'app-second-tab',
  templateUrl: './second-tab.component.html',
  styleUrls: ['./second-tab.component.scss']
})
export class SecondTabComponent implements OnInit {
  secondForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<{employeeModel: EmployeeModel}>,
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

}
