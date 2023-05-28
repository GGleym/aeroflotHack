import { SelectType } from '../dynamicForm/SelectType';
import { transpiler } from '../../functions/transpileObj';
import fromCityData from '/data/fromCityData.json';
import toCityData from '/data/toCityData.json'
import styles from '../../styles/forms/Form.module.css';
import { ReactCalendar } from '../dynamicForm/CalendarType';
import React, { useState } from 'react';
import classOfBooking from '/data/classOfBooking.json';
import { useEffect } from 'react';
import firstExcel from '/data/excelJson/firstExcel.json';
import periodOfPrediction from '/data/periodOfPrediction.json';
import { getClass } from '../../functions/getOptions/getClass';
import { convertJson } from '../../functions/chartsData/firstTableData';
import { filterEverything } from '../../functions/chartsData/firstTableData';
import { dynamicApi } from '../../data/apiUrls/dynamicApi';
import {dynamicFetchData, fetchData, useFetch} from '../../api/dynamicFetchData';

export const Form = props => {
  const [date, setDate] = useState(new Date('01.01.2018'));
  const [period, setPeriod] = useState(null);
  const [segClass, setSegClass] = useState(null);
  const [fromDirection, setFromDirection] = useState(null);
  const [toDirection, setToDirection] = useState(null);
  const {data, loading} = dynamicFetchData(dynamicApi)


  useEffect(() => {
    if (segClass && date && period) {
      //добавь direction и так далее
      props.setData(
        filterEverything(data, segClass, date.toLocaleDateString(), period)
      );
    }
  }, [segClass, date, period]);

  return (
    <div className={styles.menuWrapper}>
      <SelectType
        textClass={styles.textClass}
        upText={'Откуда?'}
        isSearchable={false}
        onChange={direction => {
          setFromDirection(direction);
        }}
        options={transpiler(fromCityData)}
        id={'directionSelect'}
        placeholder={'Выбрать направление'}
        name={'directionSelect'}
        className={fromDirection ? styles.hideCalendar : ''}
      />
        {
            fromDirection && <SelectType
                textClass={styles.textClass}
                upText={'Куда?'}
                isSearchable={false}
                onChange={direction => {
                    setToDirection(direction);
                }}
                options={transpiler(toCityData)}
                id={'toDirectionSelect'}
                placeholder={'Выбрать направление'}
                name={'toDirectionSelect'}
            />
        }
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
