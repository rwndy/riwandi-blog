import { Layout, ModalNav, Navigation } from "@/components";
import { useAppContext } from "@/context/AppContext";

const HomeComponent = () => {
  const { isModalOpen } = useAppContext();

  return (
    <>
      { isModalOpen &&  <ModalNav /> }
      <Layout>
        <Navigation />
        <div className="home__container">
          <h1 className="home__title">Hi, I am Riwandi</h1>
          <p className="home__description">
            I am a Software Engineer focusing on front-end development. Currently,
            I am working at RCTI+. I have 4 years of experience working with
            different industries, including e-commerce, logistics, and media.
          </p>
        </div>
      </Layout>    
    </>
  );
};

export default HomeComponent;
