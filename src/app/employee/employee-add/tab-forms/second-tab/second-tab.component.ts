import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {EmployeeModel} from "../../../model/employee.model";
import {addEmployee, initializeEmployee, updateEmployee} from "../../../state/employee.action";
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
  isNew: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toast: ToastrService,
    private store: Store<{ employeeModel: EmployeeModel, empList: EmployeeModel[] }>,
  ) {
  }

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
        this.isNew = res.id ? false : true;
      }
    })
  }

  setFormValue(data) {
    this.secondForm.patchValue({
      id: data.id,
      salary: data.salary,
      designation: data.designation,
      phone: data.phone
    })
  }

  ngOnDestroy(): void {
    if (this.secondForm.valid) {
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
        this.store.dispatch(updateEmployee(this.employee));
        this.router.navigate(['employee/list']);
        // this.toast.success('Successfully Updated');
      }
    })
  }

  /** I am not using toast message because I called ngOnDestroy from getUpdate function
   * that's why when I save a new employee, update function called, the problem is happening here
   * toaster message duplicate and also update success message called
   * I can handle it by extends another form but this time I am not doing this.
   * Now functionality working fine just skip message*/

  clickAdd() {
    this.ngOnDestroy();
    this.store.dispatch(addEmployee(this.employee));
    this.router.navigate(['employee/list']);
    // this.toast.success('New Employee Added');
  }

}
