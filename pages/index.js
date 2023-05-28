import Head from 'next/head';
import { Header } from '../components/Header';
import { InitialTable } from '../components/tables/InitialTable';
import { useFetch } from '../functions/fetchData';
import { dynamicApi } from '../data/apiUrls/dynamicApi';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Home() {
  const { data, loading, error } = useFetch(dynamicApi);

  return (
    <>
      <Head>
        <title>Главное меню</title>
        <meta name="description" content="Кабинет" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header></Header>
      <InitialTable />
    </>
  );
}
