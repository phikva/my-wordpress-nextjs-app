import Head from "next/head";

function SeoHead({ title, description }) {
  return (
    <Head>
      {title && (
        <title>
          {title}
        </title>
      )}
      {description && (
        <meta name="description" content={description} />
      )}
    </Head>
  );
}

export default SeoHead;