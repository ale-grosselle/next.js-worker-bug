import React from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

interface ServerSideResponse {
  response: string;
}

export const getServerSideProps = async (): Promise<{
  props: ServerSideResponse;
}> => {
  import('../utils/workers');
  return {
    props: { response: 'Hello, all in the server, sorry :(' },
  };
};

export default function Home(props: { response: string }) {
  console.log(props);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div>{JSON.stringify(props)}</div>
      </main>
    </>
  );
}
