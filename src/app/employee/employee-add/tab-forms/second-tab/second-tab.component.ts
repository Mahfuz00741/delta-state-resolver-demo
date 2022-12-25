import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {EmployeeModel} from "../../../model/employee.model";
import {initializeEmployee, updateEmployee} from "../../../state/employee.action";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-second-tab',
  templateUrl: './second-tab.component.html',
  styleUrls: ['./second-tab.component.scss']
})
export class SecondTabComponent implements OnInit, OnDestroy {
  secondForm: FormGroup;
  employee: EmployeeModel;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toast: ToastrService,
    private store: Store<{employeeModel: EmployeeModel, empList: EmployeeModel[]}>,
  ) { }

  ngOnInit(): void {
    this.secondForm = this.formBuilder.group({
      id: [''],
      fullName: [''],
      age: [''],
      gender: [''],
      salary: ['', Validators.required],
      designation: ['', Validators.required],
      phone: ['', Validators.required],
      finalForm: [],
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

  ngOnDestroy(): void {
    if(this.secondForm.valid){
      this.secondForm.value.fullName = this.employee.fullName;
      this.secondForm.value.age = this.employee.age;
      this.secondForm.value.gender = this.employee.gender;
      this.secondForm.value.gender = this.employee.gender;
      this.secondForm.value.finalForm = true;
      this.store.dispatch(initializeEmployee(this.secondForm.value));
    } else {
      this.toast.warning("Fill The Form Tab-Two..!!")
    }

    console.log('test');
    // this.store.dispatch(initializeEmployee(this.firstForm.value));
  }

  getUpdate(callBack) {
    this.ngOnDestroy();
    this.store.select('employeeModel').subscribe((res) => {
      if (res.finalForm == true) {
        callBack(true);
      } else {
        callBack(false);
      }
    })
  }

  clickUpdate() {
    this.getUpdate((res) => {
      if (res) {
        this.updateEmp();
      }
    })
  }

  updateEmp() {
    this.store.dispatch(updateEmployee(this.employee));
    this.router.navigate(['employee/list']);
  }


}
