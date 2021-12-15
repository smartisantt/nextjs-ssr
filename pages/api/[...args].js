const { createProxyMiddleware } = require('http-proxy-middleware');

export default createProxyMiddleware({ target: 'https://open.duyiedu.com/', changeOrigin: true });
