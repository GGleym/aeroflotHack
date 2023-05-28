import { Header } from '../../components/Header';
import { Form } from '../../components/tables/Form';
import { FirstChartTable } from '../../components/chartsTables/FirstChartTable';
import {config, data, filterEverything} from '../../functions/chartsData/firstTableData';
import styles from '/styles/forms/Charts.module.css';
import Head from 'next/head';
import {
  secondData
} from '../../functions/chartsData/secondTableData';
import {useState} from "react";
import {useFetch} from "../../api/dynamicFetchData";
import {dynamicApi} from "../../data/apiUrls/dynamicApi";
import {DynamicLoader} from "../../components/loaders/dynamicLoader";
import {ShowAlert} from "../../components/loaders/ShowAlert";
import {SecondChartTable} from "../../components/chartsTables/SecondChartTable";


const DynamicTable = props => {
    const [data, setData] = useState(null)
    const [firstTableData, setFirstTableData] = useState(null)


  return (
    <>
      <Head>
        <title>Динамика бронирования</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Form setData={setData} apiUrl={}/>
      <div className={styles.chartsTableDiv}>
          {
             data ? (
                 <FirstChartTable
                     data={data}
                     options={config}
                     className={styles.chartsTable}
                 />
             ) : <ShowAlert />

          }
      </div>
    </>
  );
};

export default DynamicTable;
