
// 动态api路由，中间件
const { createProxyMiddleware } = require('http-proxy-middleware');

export default createProxyMiddleware({ target: 'http://yuanjin.tech:5100/', changeOrigin: true });
