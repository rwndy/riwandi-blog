import Head from 'next/head';

const Meta = () => {
  return (
    <Head>
      <title>Riwandi</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,300&display=swap"
        rel="stylesheet"
      ></link>

      <meta
        name="description"
        content="Riwandi adalah seorang Penulis dan juga Front-end Developer di Indonesia "
      />
      <meta name="keywords" content="Penulis, Front-end Developer, Riwandi" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="distribution" content="global" />
      <meta
        name="classification"
        content="Penulis konten, Front-end Developer"
      />
      <meta name="mytopic" content="keseharian, keluh-kesah, anak muda" />
      <meta property="og:title" content="Riwandi" />
      <meta
        property="og:description"
        content="Riwandi adalah seorang Penulis dan juga Front-end Developer di Indonesia"
      />
      <meta property="og:image" content="/favicon.ico" />
    </Head>
  );
};

export default Meta;
