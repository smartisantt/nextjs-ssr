import { connect } from 'react-redux';
import * as actions from '../store/actions/counter';
import withStore from '../util/withStore';

function Page({ number, increase, decrease, asyncIncrease, asyncDecrease }) {
  return (
    <div>
      <h1>{number}</h1>
      <p>
        <button onClick={asyncDecrease}>异步减少</button>
        <button onClick={decrease}>减</button>
        <button onClick={increase}>加</button>
        <button onClick={asyncIncrease}>异步加</button>
      </p>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    number: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    asyncDecrease() {
      dispatch(actions.asyncDecrease());
    },
    decrease() {
      dispatch(actions.decrease());
    },
    increase() {
      dispatch(actions.increase());
    },
    asyncIncrease() {
      dispatch(actions.asyncDecrease());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);

// export async function getServerSideProps() {
//   const store = makeStore(null);
//   await store.dispatch(actions.asyncIncrease());
//   return {
//     props: {
//       _initialState: store.getState(),
//     },
//   };
// }

const func = async ({ store }) => {
  await store.dispatch(actions.asyncIncrease());
};
export const getServerSideProps = withStore(func);
