import {createAction} from "@ngrx/store";
import {EmployeeModel} from "../model/employee.model";

export const loadEmpList = createAction('empList');
export const initializeEmployee = createAction('initializeEmployee', (employee: EmployeeModel) => ({employee}));
export const updateEmployee = createAction('updateEmployee', (employee: EmployeeModel) => ({employee}));
export const deleteEmployee = createAction('deleteEmployee', (employee: EmployeeModel) => ({employee}));
export const addEmployee = createAction('addEmployee', (employee: EmployeeModel) => ({employee}));
