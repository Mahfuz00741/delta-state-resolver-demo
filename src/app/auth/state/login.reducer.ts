import {createReducer, on} from "@ngrx/store";
import {login, logout, uploadUser} from "./login.action";
import {isLoginPassState} from "./login.state";
import {userList} from "./user.state";

export function loginReducer(state: any, action: any){

  return _loginReducer(state, action);
}

const _loginReducer = createReducer(isLoginPassState,
  on(login, (isLoginPass: boolean) => {
    isLoginPass = true
    return isLoginPass
  }),
  on(logout, (isLoginPass: boolean) => {
    isLoginPass = false
    return isLoginPass;
  })
)

export function userReducer(state: any, action: any){

  return _loadUserReducer(state, action);
}

const _loadUserReducer = createReducer(userList,
  on(uploadUser, (users: any[]) => {
    users = userList;
    return users;
  })
  )
