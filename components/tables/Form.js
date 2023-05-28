import { SelectType } from '../dynamicForm/SelectType';
import { transpiler } from '../../functions/transpileObj';
import cityData from '/data/cityData.json';
import styles from '../../styles/forms/Form.module.css';
import { ReactCalendar } from '../dynamicForm/CalendarType';
import React, { useState } from 'react';
import { sendRequest } from '../../functions/fetchData';
import classOfBooking from '/data/classOfBooking.json';
import { useEffect } from 'react';
import firstExcel from '/data/excelJson/firstExcel.json';
import periodOfPrediction from '/data/periodOfPrediction.json';
import {getClass} from "../../functions/getOptions/getClass";
import {convertJson} from "../../data/chartsData/firstTableData";
import {filterEverything} from "../../data/chartsData/firstTableData";

export const Form = () => {
  const [date, setDate] = useState(new Date("01.01.2018"));
  const [period, setPeriod] = useState(null);
  const [segClass, setSegClass] = useState(null);
  const [direction, setDirection] = useState(null);

  useEffect(() => {
      if (segClass && date && period) { //добавь direction и так далее
          filterEverything(segClass, date.toLocaleDateString(), period)
      }
  }, [date, segClass, period])



  return (
    <div className={styles.menuWrapper}>
      <SelectType
        textClass={styles.textClass}
        upText={'Направление'}
        isSearchable={false}
        onChange={(direction) => setDirection(direction)}
        options={transpiler(cityData)}
        id={'directionSelect'}
        placeholder={'Выбрать направление'}
        name={'directionSelect'}
      />
      {/*<SelectType*/}
      {/*    textClass={styles.textClass}*/}
      {/*    upText={'Номер рейса'}*/}
      {/*    isSearchable={false}*/}
      {/*    id={'directionSelect'}*/}
      {/*    placeholder={'Выбрать номер рейса'}*/}
      {/*    name={'directionSelect'}*/}
      {/*/>*/}
      <SelectType
        textClass={styles.textClass}
        upText={'Класс бронирования'}
        onChange={segClass => {
          setSegClass(segClass);
        }}
        isSearchable={false}
        options={getClass(firstExcel)}
        id={'directionSelect'}
        placeholder={'Выбрать класс'}
        name={'directionSelect'}
      />
      <ReactCalendar
        upText={'Датa'}
        selected={date}
        onChange={e => {
          setDate(e);
        }}
        placeholder={'Выбрать дату'}
      />

      <SelectType
        onChange={period => {
          setPeriod(period);
        }}
        textClass={styles.textClass}
        upText={'Период прогнозирования'}
        isSearchable={false}
        options={transpiler(periodOfPrediction)}
        id={'directionSelect'}
        placeholder={'Выбрать период'}
        name={'directionSelect'}
      />
      {/*<ReactCalendar*/}
      {/*  upText={'Период прогнозирования'}*/}
      {/*  selected={startDate}*/}
      {/*  onChange={e => {*/}
      {/*      setStartDate(e)*/}
      {/*  }}*/}
      {/*  selectsStart*/}
      {/*  startDate={startDate}*/}
      {/*  endDate={endDate}*/}
      {/*  placeholder={'С какого числа?'}*/}
      {/*  className={startDate ? `${styles.hideCalendar}` :  ''}*/}
      {/*/>*/}
      {/*{startDate && (*/}
      {/*  <ReactCalendar*/}
      {/*    upText={'Период прогнозирования'}*/}
      {/*    selected={endDate}*/}
      {/*    onChange={e => setEndDate(e)}*/}
      {/*    selectsEnd*/}
      {/*    startDate={startDate}*/}
      {/*    endDate={endDate}*/}
      {/*    placeholder={'По какое число?'}*/}
      {/*  />*/}
      {/*)}*/}
    </div>
  );
};
