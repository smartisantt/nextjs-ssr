import Header from '../components/Header';

export default ({ Component, ...props }) => {
  return (
    <div>
      <Header />
      <Component {...props} />
    </div>
  );
};
