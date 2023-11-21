/* eslint-disable @next/next/no-img-element */
import { Layout, Navigation, Meta } from "@/components"

const Contact = () => {
  return (
    <Layout>
      <Meta title="Riwandi | Contact"/>
      <Navigation />
      <div className="contact">
        <div className="contact__contents">
          <img src="/assets/sorry.webp" alt="avatar-sorry" className="contact__avatar" />
          <h1 className="contact__title">This page will coming up soon!</h1>
        </div>
      </div>
    </Layout>
  )
}

export default Contact