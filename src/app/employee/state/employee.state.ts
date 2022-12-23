import {EmployeeModel} from "../model/employee.model";

export const initialState = new EmployeeModel();

let empList: EmployeeModel[] = [
  {id: 1, name: 'Mahfuzur Rahman', gender: 'Male', age: 20, salary: 550000, designation: 'programmer', phone: '0987654321'},
  {id: 2, name: 'Tipu Sultan', gender: 'Male', age: 24, salary: 50000, designation: 'programmer', phone: '0987654321'},
  {id: 3, name: 'Somrat Sikdar', gender: 'Male', age: 23, salary: 20000, designation: 'programmer', phone: '0987654321'},
  {id: 4, name: 'Momtaz Begum', gender: 'Female', age: 22, salary: 4500, designation: 'programmer', phone: '0987654321'},
]
export const empListState = empList;

