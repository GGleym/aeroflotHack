import Head from 'next/head';
import { Header } from '../components/Header';
import { InitialTable } from '../components/tables/InitialTable';
import {dynamicApi} from "../data/apiUrls/dynamicApi";
import {Fetch} from "../components/Fetch";
import {useFetch} from "../api/fetchData";
import {useEffect} from "react";

export default function Home() {

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
