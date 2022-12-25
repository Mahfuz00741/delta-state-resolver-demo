import {createReducer, on} from "@ngrx/store";
import {empListState, initialState} from "./employee.state";
import {addEmployee, deleteEmployee, initializeEmployee, loadEmpList, updateEmployee} from "./employee.action";
import {EmployeeModel} from "../model/employee.model";

export function empListReducer(state: any, action: any) {
  return _empListReducer(state, action);
}

const _empListReducer = createReducer(empListState,
  // on(loadEmpList, (empList: EmployeeModel[]) => {
  //   empList = empListState;
  //   return empList;
  // }),
  on(updateEmployee, (empList: EmployeeModel[], {employee}) => {
    let copyList = [...empList];
    let foundIndex = copyList.findIndex(emp => emp.id === employee.id);
    if (foundIndex >= 0) {
      copyList[foundIndex] = employee;
    }
    return copyList;
  }),
  on(deleteEmployee, (empList: EmployeeModel[], {employee}) => {
    let copyList = [...empList];
    let foundIndex = copyList.findIndex(f => f.id == employee.id)
    if (foundIndex >= 0) {
      copyList.splice(foundIndex, 1);
    }
    return copyList;
  }),
  on(addEmployee, (empList: EmployeeModel[], {employee}) => {
    let copyList: any = [...empList];
    let find = copyList.find(f => f.id == employee.id);
    if (!find) {
      employee = {
        id: empList.length + 1,
        fullName: employee.fullName,
        age: employee.age,
        gender: employee.gender,
        salary: employee.salary,
        designation: employee.designation,
        phone: employee.phone,
        finalForm: employee.finalForm
      }
      copyList.push(employee);
    }
    return copyList;
  })
)

export function empInitializeReducer(state: any, action: any) {
  return _empReducer(state, action);
}

const _empReducer = createReducer(initialState,
  on(initializeEmployee, (employeeModel: EmployeeModel, {employee}) => {
    employee = {
      id: employee.id,
      fullName: employee.fullName,
      age: employee.age,
      gender: employee.gender,
      salary: employee.salary,
      designation: employee.designation,
      phone: employee.phone,
      finalForm: employee.finalForm
    };
    return employee;
  })
)
