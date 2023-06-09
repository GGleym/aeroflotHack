import { Header } from '../../components/Header';
import { Form } from '../../components/tables/Form';
import { FirstChartTable } from '../../components/chartsTables/FirstChartTable';
import {
  config,
  convertDateString,
  filterEverything
} from '../../functions/chartsData/firstTableData';
import styles from '/styles/forms/Charts.module.css';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { ChooseParamsAlert } from '../../components/loaders/ChooseParamsAlert';
import { DynamicLoader } from '../../components/loaders/dynamicLoader';
import { NoInfo } from '../../components/NoInfo';
import {ToggleGroup} from "../../components/tables/TogglesGroup";

const DynamicTable = props => {
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(true);
  const [notPicked, setNotPicked] = useState(true);
  const [noInfo, setNoInfo] = useState(false);
  const [mounted, setMounted] = useState(true);
  const [typeOfChart, setTypeOfChart] = useState('line')

  return (
    <>
      <Head>
        <title>Динамика бронирования</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />

      <Form
        unmountTable={unmount => {
            setMounted(unmount)
        }}
        setNoInfo={info => {
            setNoInfo(info)
        }}
        setData={(data) => {
            setData(data)
            setTypeOfChart('line')
        }}

        setLoader={response => {
          setLoader(response);
        }}
        dataPicked={picked => {
          setNotPicked(picked);
        }}
      />
      <div className={styles.chartsTableDiv}>
        {notPicked ? (
          <ChooseParamsAlert title1={`Просто выберите необходимые параметры сверху,`} title2={"и программа рассчитает динамику бронирования!"} />
        ) : loader ? (
          <DynamicLoader />
        ) : noInfo ? (
          <NoInfo />
        ) : (
            mounted && (
            <FirstChartTable
              data={data}
              typeOfChart={typeOfChart}
              options={config}
              className={styles.chartsTable}
            />
          )
        )}
      </div>

    </>
  );
};

export default DynamicTable;
