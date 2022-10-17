import { useAppContext } from 'context/AppContext';
import Layout from 'components/Layout';

const HomeComponent = () => {
  const { openModal } = useAppContext();

  return (
    <Layout>
      <div className="home__container">
        <h1 className="home__title">Hi! Nice to Meet You!</h1>
        <div className="button__container">
          <button onClick={openModal}>know more about me</button>
        </div>
      </div>
    </Layout>
  );
};

export default HomeComponent;
