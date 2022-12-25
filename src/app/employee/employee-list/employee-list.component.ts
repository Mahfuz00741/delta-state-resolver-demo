import { Component, OnInit } from '@angular/core';
import {EmployeeModel} from "../model/employee.model";
import {MatTableDataSource} from "@angular/material/table";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {deleteEmployee, initializeEmployee, loadEmpList} from "../state/employee.action";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  dataSource: any;
  displayedColumns:any = ['position', 'name', 'age', 'gender', 'salary', 'designation', 'phone', 'action'];

  constructor(
    private router: Router,
    private store: Store<{empList: EmployeeModel[], }>,
  ) { }

  ngOnInit(): void {
    // this.store.dispatch(loadEmpList());
    this.store.select('empList').subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
    })
  }

  editEmployee(element) {
    this.store.dispatch(initializeEmployee({...element}));
    this.router.navigate(['/employee/add'])
  }

  deleteEmployee(element) {
    this.store.dispatch(deleteEmployee({...element}));
  }

}
