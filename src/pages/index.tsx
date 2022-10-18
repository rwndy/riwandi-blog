import { AboutMobile, HomeComponent, Meta } from 'components';
import { useAppContext } from 'context/AppContext';

const Home = () => {
  const { isModalMobileOpen, isModalOpen } = useAppContext();

  return (
    <>
      <Meta />
      <HomeComponent />
      {isModalMobileOpen && <AboutMobile />}
    </>
  );
};

export default Home;
