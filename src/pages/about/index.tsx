import { Layout, Navigation, ModalNav } from "@/components";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";

const About = () => {

  const { isModalOpen } = useAppContext();

  return (
    <Layout>
       { isModalOpen &&  <ModalNav /> }
      <Navigation />
      <div className="about">
        <h1 className="about__title">
          <u>About me</u>
        </h1>
        <div className="about__content">
          <div className="about__avatar">
            <Image
              src="/assets/me.webp"
              alt="my-avatar"
              objectFit="cover"
              layout="fill"
            />
          </div>

          <p className="about__description">
            I am a Software Engineer focusing on front-end development.
            Currently, I am working at RCTI+. I have 4 years of experience
            working with different industries, including e-commerce, logistics,
            and media.
          </p>
        </div>

        <div className="about__content--journey">
          <h1 className="about__title">
            <u>My Journey</u>
          </h1>

          <div className="about__journey">
            <p className="about__description--journey">
              I am currently employed at{" "}
              <a href="https://www.rctiplus.com/" target="blank">
                <strong>RCTI+</strong>
              </a>
              where I delve into deep learning about front-end development and
              how React.js works. At present, my daily tech stack includes{" "}
              <a href="https://nextjs.org" target="blank" rel="noreferrer">
                <strong>Next.js</strong>
              </a>
              ,{" "}
              <a
                href="https://reactnative.dev/"
                target="blank"
                rel="noreferrer"
              >
                <strong>React Native</strong>
              </a>
              ,{" "}
              <a
                href="https://tailwindcss.com/docs/installation"
                target="blank"
              >
                <strong>Tailwind</strong>
              </a>
              ,{" "}
              <a
                href="https://www.typescriptlang.org/"
                target="blank"
                rel="noreferrer"
              >
                <strong>Typescript.</strong>
              </a>
              contribute to various products at RCTI+, such as{" "}
              <a href="https://m.rctiplus.com/short" target="blank">
                <strong>SHORT+</strong>
              </a>
              ,{" "}
              <a href="https://m.rctiplus.com/news" target="blank">
                <strong>NEWS+</strong>
              </a>{" "}
              and{" "}
              <a href="https://hot.rctiplus.com/" target="blank">
                <strong>HOT+.</strong>
              </a>
              Additionally, I develop reusable components for use across
              different products and ensure code integrity using SonarLint.
            </p>
            <p className="about__description--journey">
              From April 2022 to the first week of November 2022, I served as a
              Senior React Developer at Resync Digital, an IT consultancy based
              in New Zealand and Bali. During this time, I continued the legacy
              project of ScapeSpec by refactoring existing apps to separate the
              frontend using the latest technologies like Next.js, Redux, and
              Tailwind. I collaborated closely with a product owner from New
              Zealand, taking part in the initiation, design, and planning of
              frontend architecture from scratch, following the principles of
              Atomic Design. I conducted code reviews with pairs and implemented
              code improvements to enhance code quality scores.
            </p>
            <p className="about__description--journey">
              {
                "From January 2021 to April 2022, I worked at BookingToGo in the marketplace's team."
              }
              I initiated projects from scratch using Next.js with my team and
              played a role in determining the technology to be used in the
              projects.
            </p>
            <p className="about__description--journey">
              From February 2020 to August 2020, I developed the SIBA ONLINE web
              platform using Next.js and Express JS. I implemented the Google
              Direction API into SIBA ONLINE. and also collaborating with
              backend engineers, product owners, and designers to ship features
              and products in a timely manner.
            </p>
            <p className="about__description--journey">
              and in august 2019, I worked in Metro TV as freelance web designer
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
