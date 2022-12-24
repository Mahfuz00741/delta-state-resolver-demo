import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {EmployeeModel} from "../../../model/employee.model";
import {initializeEmployee} from "../../../state/employee.action";

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
    private store: Store<{employeeModel: EmployeeModel}>,
  ) { }

  ngOnInit(): void {
    this.firstForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required]
    })

    this.store.select('employeeModel').subscribe((res) => {
      if (res) {
        this.setFormValue(res)
      }
    })
    window.onbeforeunload = () => this.ngOnDestroy();
  }

  setFormValue (data) {
    this.firstForm.patchValue({
      id: data.id,
      name: data.name,
      age: data.age,
      gender: data.gender
    })
  }

  ngOnDestroy(): void {
    if(this.firstForm.valid){
      this.employee.id = this.firstForm.value.id;
      this.employee.name = this.firstForm.value.name;
      this.employee.age = this.firstForm.value.age;
      this.employee.gender = this.firstForm.value.gender;
      this.store.dispatch(initializeEmployee(this.employee));
    }

    console.log('hello');
    // this.store.dispatch(initializeEmployee(this.firstForm.value));
  }

}
