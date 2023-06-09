import Head from 'next/head';
import { Header } from '../components/Header';
import { InitialTable } from '../components/tables/InitialTable';


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
