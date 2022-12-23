import { Component, OnInit } from '@angular/core';
import {EmployeeModel} from "../model/employee.model";
import {MatTableDataSource} from "@angular/material/table";
import {EmployeeService} from "../services/employee.service";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  dataSource: any;
  displayedColumns:any = ['position', 'name', 'age', 'gender', 'salary', 'designation', 'phone', 'action'];

  constructor(
    private employeeService: EmployeeService,
    private store: Store<{empList: EmployeeModel[]}>,
  ) { }

  ngOnInit(): void {
    this.employeeService.loadEmpList();
    this.store.select('empList').subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
    })
    // this.dataSource = new MatTableDataSource(this.employeeService.empList);
  }

}