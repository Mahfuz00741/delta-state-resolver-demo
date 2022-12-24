import {createAction} from '@ngrx/store';

export enum CourseActionType {
  LOGIN = 'login',
  LOG_OUT = 'logout',
  UPLOAD = 'upload',
}

export const login = createAction(CourseActionType.LOGIN);

export const logout = createAction(CourseActionType.LOG_OUT);

export const uploadUser = createAction(CourseActionType.UPLOAD);
