import { useRouter } from 'next/router';
import { getMovie, getMovies } from '../../service/movieService';

export default ({ movie }) => {
 
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>{movie.name}</h1>
      <p>英文名：{movie.ename}</p>
    </div>
  );
};


// 在build时候运行，只能在服务端运行，
export async function getStaticProps({ params }) {
  const resp = await getMovie(params.id);
  return {
    props: {
      movie: resp.data,
    },
  };
}

//该函数用于得到有哪些可能出现的 params
export async function getStaticPaths() {
  const resp = await getMovies();
 
  const paths = resp.data?.map((m) => ({
    params: {
      id: String(m._id),
    },
  }));

  return {
    paths,
    fallback: true, //给 [id].html
  };
}
