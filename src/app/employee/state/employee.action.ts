import {createAction} from "@ngrx/store";
import {EmployeeModel} from "../model/employee.model";

export const loadEmpList = createAction('empList');
export const initializeEmployee = createAction('initializeEmployee', (employee: EmployeeModel) => ({employee}));
