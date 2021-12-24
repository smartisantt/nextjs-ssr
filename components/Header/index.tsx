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
          <Link href='/login'>
            <a>login</a>
          </Link>
        </li>
        <li>
          <Link href='/redux'>
            <a>redux测试</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
