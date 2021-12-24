import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import isBrowser from '../util/isBrowser';

let store;

// 服务端针对不同的请求返回不同的仓库，创建仓库函数，浏览器无需每次都创建仓库
export default function (initialState) {
  if (isBrowser()) {
    if (store) {
      return store;
    }
  }
  store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
  return store;
}
