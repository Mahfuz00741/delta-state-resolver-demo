import {createReducer, on} from "@ngrx/store";
import {empListState} from "./employee.state";
import {loadEmpList} from "./employee.action";
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
