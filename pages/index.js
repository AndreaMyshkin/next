import Layout from "../components/layout";
import Title from "../components/title";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home with Next.js</title>
        <meta name="description" content="next course" />
      </Head>
      <Title>Home Page</Title>
      <p> Next</p>
      <style jsx>
        {`
          p {
            color: darkgray;
          }
        `}
      </style>
    </Layout>
  );
}
