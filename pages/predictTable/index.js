import { Header } from '../../components/Header';
import { Form } from '../../components/tables/Form';
import styles from '/styles/forms/Charts.module.css';
import toggleStyles from '/styles/toggle/Toggle.module.css'
import Head from 'next/head';
import React, { createContext, useState } from 'react';
import { ChooseParamsAlert } from '../../components/loaders/ChooseParamsAlert';
import { DynamicLoader } from '../../components/loaders/dynamicLoader';
import { SecondChartTable } from '../../components/chartsTables/SecondChartTable';
import { thirdConfig } from '../../chartConfigs/thirdConfig';
import { NoInfo } from '../../components/NoInfo';
import { ButtonGroup } from '../../components/tables/ButtonGroup';
import { Spreadsheet } from '../../components/spreadsheets/Spreadsheet';
import {ToggleGroup} from "../../components/tables/TogglesGroup";

const PredictTable = props => {
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(true);
  const [notPicked, setNotPicked] = useState(true);
  const [noInfo, setNoInfo] = useState(false);
  const [mounted, setMounted] = useState(true);
  const [typeOfChart, setTypeOfChart] = useState('line');
  const [table, setIDTable] = useState(0);
  const [allDates, setAllDates] = useState(null);
  const [allData, setAllData] = useState(null);


  return (
    <>
      <Head>
        <title>Прогноз</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Form
          getAllDates={dates => {
          setAllDates(dates);
        }}
        getAllData={data => {
          setAllData(data);
          setIDTable(0)
        }}
        unmountTable={unmount => {
          setMounted(unmount);
        }}
        setNoInfo={info => {
          setNoInfo(info);
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
      {data && noInfo === false && loader === false ? (
        <ButtonGroup
          buttons={['График', 'Таблица']}
          setClicked={id => {
            setIDTable(id);
          }}
        />
      ) : (
        ''
      )}
      <div className={styles.chartsTableDiv}>
        {notPicked ? (
          <ChooseParamsAlert
            title1={`Просто выберите необходимые параметры сверху,`}
            title2={
              'и программа спрогнозирует спрос в разрезе классов бронирования!'
            }
          />
        ) : loader ? (
          <DynamicLoader />
        ) : noInfo ? (
          <NoInfo />
        ) : mounted && table === 0 ? (
          <SecondChartTable
            typeOfChart={typeOfChart}
            data={data}
            options={thirdConfig}
            className={styles.chartsTable}
          />
        ) : (
          <Spreadsheet date={allDates} dataOfDate={allData} />
        )}
      </div>
    </>
  );
};

export default PredictTable;
