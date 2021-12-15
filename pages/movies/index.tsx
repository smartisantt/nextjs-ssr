 
import Head from 'next/head';
import getMovies from '../../service/movieService'

export default function index() {
  getMovies().then(res=>{
    console.log(res);
  })

  return (
    <div>
      <Head>
        <title>电影</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      电影页面
    </div>
  );
}
