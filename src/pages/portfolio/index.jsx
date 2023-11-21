/* eslint-disable @next/next/no-img-element */
import { Layout, Navigation, Meta, ModalNav } from "@/components"
import { useAppContext } from "@/context/AppContext"

const Portfolio = () => {

  const { isModalOpen } = useAppContext();

  return (
    <>
      <Meta title="Riwandi | Portfolio" />
      <Layout>
      { isModalOpen &&  <ModalNav /> }
        <Navigation />
        <div className="portfolio">
          <div className="portfolio__contents">
            <img src="/assets/sorry.webp" alt="avatar-sorry" className="portfolio__avatar" />
            <h1 className="portfolio__title">This page will coming up soon!</h1>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Portfolio