import Header from '../components/Header';
import './global.css';
import { Provider } from 'react-redux';
import makeStore from '../store';

export default ({ Component, pageProps }) => {
  return (
    <Provider store={makeStore()}>
      <div>
        <Header />
        <Component {...pageProps} />
      </div>
    </Provider>
  );
};
