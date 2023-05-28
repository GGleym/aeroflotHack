import { Header } from '../../components/Header';
import { Form } from '../../components/tables/Form';
import { FirstChartTable } from '../../components/chartsTables/FirstChartTable';
import { config, data } from '../../data/chartsData/firstTableData';
import styles from '/styles/forms/Charts.module.css';
import Head from 'next/head';
import { SecondChartTable } from '../../components/chartsTables/SecondChartTable';
import {
  secondConfig,
  secondData
} from '../../data/chartsData/secondTableData';
import firstExcel from '../../data/excelJson/firstExcel.json';
import { useState, useEffect } from 'react';

const DynamicTable = props => {
  const [data, setData] = useState();

  return (
    <>
      <Head>
        <title>Динамика бронирования</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Form />
      <div className={styles.chartsTableDiv}>
        <FirstChartTable
          data={secondData}
          options={config}
          className={styles.chartsTable}
        />
        <SecondChartTable
          data={secondData}
          options={secondConfig}
          className={styles.chartsTable}
        />
      </div>
    </>
  );
};

export default DynamicTable;
