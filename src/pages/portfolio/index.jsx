/* eslint-disable @next/next/no-img-element */
import { Layout, Navigation, Meta } from "@/components"

const Portfolio = () => {
  return (
    <>
      <Meta title="Riwandi | Portfolio" />
      <Layout>
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