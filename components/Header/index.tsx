import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './index.module.css';

export default () => {
  const router = useRouter();
  return (
    <div className={styles.header}>
      <ul>
        <li>
          <Link href='/'>
            <a>首页</a>
          </Link>
        </li>
        <li>
          <Link href='/movies'>
            <a>电影</a>
          </Link>
        </li>
        <li>
          <Link href='/movies/3'>
            <a>电影详情页</a>
          </Link>
        </li>
        <li>
          <button
            onClick={() => {
              router.push('/movies/a/b/c');
            }}
          >
            跳转到[...params].js
          </button>
        </li>
      </ul>
    </div>
  );
};
