import {EmployeeModel} from "../model/employee.model";

export const initialState = new EmployeeModel();

let empList: EmployeeModel[] = [
  {id: 1, fullName: 'Mahfuzur Rahman', gender: 'Male', age: 20, salary: 550000, designation: 'programmer', phone: 987654321, finalForm:false},
  {id: 2, fullName: 'Tipu Sultan', gender: 'Male', age: 24, salary: 50000, designation: 'QA', phone: 987654321, finalForm:false},
  {id: 3, fullName: 'Somrat Sikdar', gender: 'Male', age: 23, salary: 20000, designation: 'programmer', phone: 987654321, finalForm:false},
  {id: 4, fullName: 'Momtaz Begum', gender: 'Female', age: 22, salary: 4500, designation: 'HR', phone: 987654321, finalForm:false},
]
export const empListState = empList;

