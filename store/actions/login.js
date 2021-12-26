import * as loginService from '../../service/loginService';

export const acitonTypes = {
  setLoginUser: 'login/setLoginUser',
  whoAmI: 'login/whoAmI',
  loginOut: 'login/loginOut',
};

export function setLoginUser(user) {
  return {
    type: acitonTypes.setLoginUser,
    payload: user,
  };
}

export function login(loginId, loginPwd) {
  return async function (dispatch) {
    const resp = await loginService.login(loginId, loginPwd);
    if (resp.data) {
      dispatch(setLoginUser(resp.data));
      return true;
    } else {
      dispatch(setLoginUser(null));
      return false;
    }
  };
}

export function whoAmI(axios) {
  return async function (dispatch) {
    const resp = await loginService.whoAmI(axios);
    if (resp.data) {
      dispatch(setLoginUser(resp.data));
      return true;
    } else {
      dispatch(setLoginUser(null));
      return false;
    }
  };
}

export function loginOut() {
  return function (dispatch) {
    dispatch(setLoginUser(null));
    loginService.loginOut();
  };
}
