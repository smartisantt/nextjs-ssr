import Head from 'next/head';
import { getMovies } from '../service/movieService';

export default function index(props) {
 
  return (
    <div>
      <Head>
        <title>首页</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <h1>Index 首页</h1>
    </div>
  );
}

export async function getStaticProps() {
 
  return {
    props: {
      a: 1,
    },
  };
}
