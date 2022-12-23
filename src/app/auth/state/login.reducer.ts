import {createReducer, on} from "@ngrx/store";
import {login, logout} from "./login.action";
import {isLoginPassState} from "./login.state";

export function loginReducer(state: any, action: any){

  return _loginReducer(state, action);

}

const _loginReducer = createReducer(isLoginPassState,
  on(login, (isLoginPass: boolean) => {
    isLoginPass = true
    return isLoginPass
  }),
  on(logout, (isLoginPass: boolean) => {
    return isLoginPass = false;
  })
)

