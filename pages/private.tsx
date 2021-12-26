import withStore from '../util/withStore';
import { whoAmI } from '../store/actions/login';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { connect } from 'react-redux';

const Page = ({ loginUser }) => {
  const router = useRouter();
  useEffect(() => {
    if (!loginUser) {
      router.push('/login');
    }
  }, []);

  if (loginUser) {
    return <div>必须登陆才能访问</div>;
  } else {
    return null;
  }
};

function mapState(state) {
  return {
    loginUser: state.loginUser,
  };
}
// export async function getServerSideProps() {
//   return {
//     props: {},
//   };
// }

export default connect(mapState)(Page);

const func = async ({ axios, store }) => {
  await store.dispatch(whoAmI(axios));
};

export const getServerSideProps = withStore(func);
