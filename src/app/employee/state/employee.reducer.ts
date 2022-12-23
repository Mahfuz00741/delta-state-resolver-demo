import {createReducer, on} from "@ngrx/store";
import {empListState, initialState} from "./employee.state";
import {initializeEmployee, loadEmpList} from "./employee.action";
import {EmployeeModel} from "../model/employee.model";

export function empListReducer(state: any, action: any) {
  return _empListReducer(state, action);
}

const _empListReducer = createReducer(empListState,
  on(loadEmpList, (empList: EmployeeModel[]) => {
    empList = empListState;
    return empList;
  })
)

export function empInitializeReducer(state: any, action: any) {
  return _empReducer(state, action);
}

const _empReducer = createReducer(initialState,
  on(initializeEmployee, (employeeModel: EmployeeModel, {employee}) =>{
    employee = {
      id: employee.id,
      name: employee.name,
      age: employee.age,
      gender: employee.gender,
      salary: employee.salary,
      designation: employee.designation,
      phone: employee.phone,
    };
    return employee;
  })
)
