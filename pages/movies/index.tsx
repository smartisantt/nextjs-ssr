import { useEffect } from 'react';

import Head from 'next/head';
import { getMovies } from '../../service/movieService';
import Pager from '../../components/Pager';
import { useRouter } from 'next/router';

export default function Page(props) {
  const router = useRouter();

  const { movies, page, total, limit } = props;
  return (
    <div>
      <Head>
        <title>电影</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <ul>
        {movies?.map((m) => (
          <li key={m._id}>
            <a href={`/movies/${m._id}`}>
              <span>{m.name}</span>
            </a>
          </li>
        ))}
      </ul>
      <Pager
        page={page}
        total={total}
        limit={limit}
        onPageChange={(page) => {
          router.push(`/movies`, `/movies/?page=${page}`, { shallow: true });
        }}
      />
    </div>
  );
}

// 每次请求来了都会运行 仅仅在服务端运行
export async function getServerSideProps({ query }) {
  const page = +query.page || 1;

  const resp = await getMovies(page, 10);

  return {
    props: {
      movies: resp.data,
      page,
      total: resp.count,
      limit: 10,
    },
  };
}
