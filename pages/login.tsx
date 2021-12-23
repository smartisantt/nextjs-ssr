import { login } from '../service/loginService';

export default () => {
  login('11111111111', '123123').then((res) => {
    console.log(res);
  });
  return <h1>登录页面</h1>;
};
