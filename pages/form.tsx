import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const Home: React.FunctionComponent<{}> = () => {
  const router = useRouter();
  const { query } = router;
  return (
    <div>
      <Head>
        <title>Sheldon App | Form</title>
      </Head>
      <h1>Hi, {query.u}</h1>
      <h2>This is your form {query.f}</h2>
    </div>
  );
};

export default Home;
