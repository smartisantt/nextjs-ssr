import Head from 'next/head';

export default function index() {
  return (
    <div>
      <Head>
        <title>首页</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <h1>Index 首页</h1>
      <img src="/favicon.ico" alt="" />
    </div>
  );
}
