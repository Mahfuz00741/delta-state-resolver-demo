import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {EmployeeModel} from "../../../model/employee.model";
import {initializeEmployee} from "../../../state/employee.action";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-first-tab',
  templateUrl: './first-tab.component.html',
  styleUrls: ['./first-tab.component.scss']
})
export class FirstTabComponent implements OnInit, OnDestroy {

  firstForm: FormGroup;
  employee: EmployeeModel = new EmployeeModel();


  constructor(
    private formBuilder: FormBuilder,
    private toast: ToastrService,
    private store: Store<{employeeModel: EmployeeModel}>,
  ) { }

  ngOnInit(): void {
    this.firstForm = this.formBuilder.group({
      id: [''],
      fullName: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      salary: [''],
      designation: [''],
      phone: [''],
    })

    this.store.select('employeeModel').subscribe((res) => {
      if (res) {
        this.employee = res;
        this.setFormValue(res)
      }
    })
    window.onbeforeunload = () => this.ngOnDestroy();
  }

  setFormValue (data) {
    this.firstForm.patchValue({
      id: data.id,
      fullName: data.fullName,
      age: data.age,
      gender: data.gender,
    })
  }

  ngOnDestroy(): void {
    if(this.firstForm.valid){
      this.firstForm.value.salary = this.employee.salary;
      this.firstForm.value.designation = this.employee.designation;
      this.firstForm.value.phone = this.employee.phone;
      this.store.dispatch(initializeEmployee(this.firstForm.value));
    } else {
      this.toast.warning("Fill The Form Tab-One..!!")
    }

    console.log('test');
    // this.store.dispatch(initializeEmployee(this.firstForm.value));
  }

}
