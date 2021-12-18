import Header from '../components/Header';
import   './global.css'

export default ({ Component, pageProps }) => {
  console.log(pageProps, "pageProps ds");
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
};
