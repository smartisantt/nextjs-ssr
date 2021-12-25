import { login, whoAmI, loginOut } from '../service/loginService';
import { getServerInstance } from '../service/request';

export default () => {
  // login('11111111111', '123123').then((res) => {
  //   console.log(res);
  // });

  // whoAmI().then(res=>{
  //   console.log(res);
  // })
  // loginOut();
  return <h1>登录页面</h1>;
};

export async function getServerSideProps({ req }) {
  const request = getServerInstance(req);
 
  whoAmI(request).then((res) => {
    console.log(res, '>>>');
  });
  return {
    props: {},
  };
}
