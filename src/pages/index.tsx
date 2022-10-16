import { Meta } from 'components';

const Home = () => {
  return (
    <>
      <Meta />
      <div className="home__container">
        <h1 className="home__title">Hi! Nice to meet You!</h1>
        <div className="button__container">
          <button>Hit me to know more about me!</button>
        </div>
      </div>
    </>
  );
};

export default Home;
