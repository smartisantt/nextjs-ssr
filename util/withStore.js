import makeStore from '../store';
import { getServerInstance } from '../service/request';

export default function (func) {
  return async function (props) {
    const store = makeStore();
    props.store = store;
    const axios = getServerInstance(props.req);
    props.axios = axios;
    let resp = await func(props);
    resp = resp || {};
    return {
      props: {
        _initialState: store.getState(),
        ...resp,
      },
    };
  };
}
