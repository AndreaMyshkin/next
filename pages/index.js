import Layout from "../components/layout";
import Title from "../components/title";

export default function Home() {
  return (
    <Layout>
      <Title>Home Page</Title>
      <p> Next</p>
      <style jsx>
  {
      `p{
          color:darkgray;
      }`
  }
      </style>
    </Layout>
  );
}
