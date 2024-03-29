import Head from "next/head";

interface PropsMeta {
  title: string
}

const Meta = ({ title }: PropsMeta) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />

      <meta
        name="description"
        content="Passionate front-end engineer with 4 years of experience. Expertise in React.js, Next.js, TypeScript, Sass, Tailwind, Emotion-CSS, Redux, GraphQL, and React Native."
      />
      <meta name="keywords" content="Penulis, Front-end Engineer, Riwandi" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="distribution" content="global" />
      <meta
        name="classification"
        content="Penulis, Front-end Engineer"
      />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="Passionate front-end engineer with 4 years of experience. Expertise in React.js, Next.js, TypeScript, Sass, Tailwind, Emotion-CSS, Redux, GraphQL, and React Native."
      />
      <meta property="og:image" content="/favicon.ico" />
    </Head>
  );
};

export default Meta;
