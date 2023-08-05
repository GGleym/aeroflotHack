import { Header } from '../../components/Header';
import { Form } from '../../components/tables/Form';
import styles from '/styles/forms/Charts.module.css';
import Head from 'next/head';
import React, { useState } from 'react';
import { ChooseParamsAlert } from '../../components/loaders/ChooseParamsAlert';
import { SecondChartTable } from '../../components/chartsTables/SecondChartTable';
import { secondConfig } from '../../chartConfigs/secondConfig';
import {DynamicLoader} from "../../components/loaders/dynamicLoader";
import {NoInfo} from "../../components/NoInfo";
import {ButtonGroup} from "../../components/tables/ButtonGroup";
import {Spreadsheet} from "../../components/spreadsheets/Spreadsheet";
import toggleStyles from "../../styles/toggle/Toggle.module.css";
import {ToggleGroup} from "../../components/tables/TogglesGroup";

const SeasonTable = props => {
    const [data, setData] = useState(null);
    const [loader, setLoader] = useState(true);
    const [notPicked, setNotPicked] = useState(true);
    const [noInfo, setNoInfo] = useState(false);
    const [mounted, setMounted] = useState(true);
    const [table, setIDTable] = useState(0)
    const [typeOfChart, setTypeOfChart] = useState('line')

  return (
    <>
      <Head>
        <title>Сезонность спроса</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Form
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
      <div className={styles.chartsTableDiv}>
        {notPicked ? (
          <ChooseParamsAlert title1={'Просто выберите необходимые параметры сверху,'} title2={'и программа рассчитает сезонность спроса по классам бронирования!'}/>
        ) : loader ? (
          <DynamicLoader />
        ) : noInfo ? (
          <NoInfo />
        ) : (
          mounted && (
            <SecondChartTable
              data={data}
              typeOfChart={typeOfChart}
              options={secondConfig}
              className={styles.chartsTableDynamic}
            />
          )
        )}
      </div>
    </>
  );
};

export default SeasonTable;
