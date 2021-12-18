import Head from 'next/head';
import getMovies from '../../service/movieService';

export default function Page(props) {
  console.log(props, 'props');
  return (
    <div>
      <Head>
        <title>电影</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <ul>
        {props.movies?.map((m) => (
          <li key={m.id}>
            <span>{m.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 该函数只在服务端运行，组件渲染之前，build期间运行
export async function getStaticProps() {
  const res = await getMovies();
  console.log(res, 'res');
  return {
    props: {
      movies: res.data,
    },
  };
}
