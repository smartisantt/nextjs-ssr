import axios from 'axios';

const config = {};

if (typeof window == 'undefined') {
  // 服务器
  config.baseURL = 'https://open.duyiedu.com/';
} else {
  // 浏览器
}

const instance = axios.create(config);

export default instance;
