// 动态api路由，中间件
const { createProxyMiddleware } = require('http-proxy-middleware');

const cookieName = 'token';
const maxAge = 24 * 60 * 60;

export default createProxyMiddleware({
  target: 'http://yuanjin.tech:5100/',
  changeOrigin: true,
  onProxyRes(proxyRes, req, res) {
    const token = proxyRes.headers['authorization'];
    if (token) {
      //
      delete proxyRes.headers['authorization']; // remove header from response
      proxyRes.headers['set-cookie'] = `${cookieName}=${token};Max-Age=${maxAge};path=/`; // add new header to response
    }
  },
  onProxyReq(proxyReq, req, res) {
    // add custom header to request
    const token = req.cookies[cookieName]; 
    if (token) {
      proxyReq.setHeader('authorization', token);
    }
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};
