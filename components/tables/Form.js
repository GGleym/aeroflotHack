import { SelectType } from '../dynamicForm/SelectType';
import { transpiler } from '../../functions/transpileObj';
import fromCityData from '/data/fromCityData.json';
import toCityData from '/data/toCityData.json';
import styles from '../../styles/forms/Form.module.css';
import { ReactCalendar } from '../dynamicForm/CalendarType';
import React, {useContext, useState, useEffect} from 'react';
import firstExcel from '/data/excelJson/firstExcel.json';
import periodOfPrediction from '/data/periodOfPrediction.json';
import { getClass } from '../../functions/getOptions/getClass';
import { filterEverything } from '../../functions/chartsData/firstTableData';
import { dynamicApi } from '../../data/apiUrls/dynamicApi';
import { dynamicFetchData } from '../../api/dynamicFetchData';
import { convertDateString } from '../../functions/chartsData/firstTableData';
import { useRouter } from 'next/router';
import { predictionsApi } from '../../data/apiUrls/predictionsApi';
import { predictFetchData } from '../../api/predictFetchData';
import {getFltNums} from "../../functions/getOptions/getFltNums";
import {seasonFetchData} from "../../api/seasonFetchData";
import {seasonalityApi} from "../../data/apiUrls/seasonalityApi";
import {checkForDirection} from "../../functions/checkForDirection";
import {getAllDates} from "../../functions/tablesData/getAllDates";
import {getAllData} from "../../functions/tablesData/getAllData";
import {fltNumFetchData} from "../../api/fltNumFetchData";
import {fltNumApi} from "../../data/apiUrls/fltNumApi";
import newClasses from '../../data/newClasses.json'
import newestClasses from '../../data/newestClasses.json'

export const Form = props => {
  const [date, setDate] = useState();
  const [period, setPeriod] = useState(null);
  const [segClass, setSegClass] = useState(null);
  const [fromDirection, setFromDirection] = useState(null);
  const [toDirection, setToDirection] = useState(null);
  const [fltNum, setFltNum] = useState(null)
  const [showAlert, setShowAlert] = useState(false)
  const [getNums, setGetNums] = useState(null)
  const router = useRouter();

  useEffect(() => {

      if (fromDirection && toDirection && segClass) {
          const getFetchFltNum = async () => {
              const fltNums = await fltNumFetchData(
                  fltNumApi,
                  segClass['value'],
                  fromDirection['value'],
                  toDirection['value']
              )
              setGetNums(getFltNums(fltNums))
          }
          getFetchFltNum()
      }

  }, [fromDirection, toDirection, segClass])

  useEffect(() => {
    if (fromDirection && toDirection) {
      if (checkForDirection(toDirection, fromDirection)) {
        setShowAlert(true)
      } else {
        setShowAlert(false)
      }
    }


    if (segClass && date && period && toDirection && fromDirection) {
      props.dataPicked(false);
      if (segClass || date || period || toDirection || fromDirection) {
          props.setLoader(true);
          props.unmountTable(false);
          props.setNoInfo(false);
      }

      if (router.pathname === '/dynamicTable') {
        let count = 0;
        const getFetched = async () => {
          const table = await dynamicFetchData(
            dynamicApi,
            convertDateString(date.toLocaleDateString()),
            period['value'],
            segClass['value'],
            fromDirection['value'],
            toDirection['value'],
            parseInt(fltNum['value'])
          );

          for (let i = 0; i < table[0]['data'].length; i++) {
            let hash = table[0]['data'];
            if (hash[i]['PRED_DEMAND'] === 0) {
              count++;
            }
          }

          if (table[0]['data'].length === 0 || count > 1000) {
            props.setNoInfo(true);
          }
          if (table[1] === true) {
            props.unmountTable(true);
            props.setLoader(false);
          }
          console.log(table[0]['data'])
          props.setData(filterEverything(table[0]['data'], 'SDAT_S', 'PRED_DEMAND'));
        };
        getFetched();
      } else if (router.pathname === '/predictTable') {
        let count = 0;
        const getFetched = async () => {
          const table = await predictFetchData(
              predictionsApi,
              convertDateString(date.toLocaleDateString()),
              period['value'],
              segClass['value'],
              fromDirection['value'],
              toDirection['value'],
              parseInt(fltNum['value'])
          );

          for (let j = 0; j < table[0]['data'].length; j++) {
            let hash = table[0]['data'];
            if (hash[j]['PRED_DEMAND'] === 0) {
              count++;
            }
          }

          if (table[0]['data'].length === 0 || count > 300) {
            props.setNoInfo(true);
          }
          if (table[1] === true) {
            props.unmountTable(true);
            props.setLoader(false);
          }
          props.getAllDates(getAllDates(table[0]['data'], 'CAPTURE_DATE1'))
          props.getAllData(getAllData(table[0]['data'], 'PRED_DEMAND'))
          props.setData(filterEverything(table[0]['data'], 'CAPTURE_DATE1', 'PRED_DEMAND'));
        };
        getFetched();
      } else if (router.pathname === '/seasonTable') {
        let count = 0;
        const getFetched = async () => {
          const table = await seasonFetchData(
              seasonalityApi,
              convertDateString(date.toLocaleDateString()),
              period['value'],
              segClass['value'],
              fromDirection['value'],
              toDirection['value'],
              parseInt(fltNum['value'])
          );


          for (let k = 0; k < table[0].length; k++) {
            let hash = table[0];
            if (hash[k]['trend_route_7d_rolling'] === 0) {
              count++;
            }
          }

          if (table[0].length === 0 || count > 300) {
            props.setNoInfo(true);
          }
          if (table[1] === true) {
            props.unmountTable(true);
            props.setLoader(false);
          }

          console.log(table[0])
          props.setData(filterEverything(table[0], 'CAPTURE_DATE1', 'trend_route_7d_rolling'));
        };
        getFetched();
      }
    }
  }, [segClass, date, period, toDirection, fromDirection, fltNum]);



  return (
        <div className={styles.menuWrapper}>
          <SelectType
              className={styles.selectWrapper}
              textClass={styles.textClass}
              upText={'Откуда?'}
              isSearchable={false}
              onChange={direction => {
                setFromDirection(direction);
              }}
              options={transpiler(fromCityData)}
              id={'directionSelect'}
              placeholder={'Направление...'}
              name={'directionSelect'}
          />
          <SelectType
              fromDirection={fromDirection && fromDirection['label']}
              toDirection={toDirection && toDirection['label']}
              className={styles.selectWrapper}
              showAlert={showAlert}
              textClass={styles.textClass}
              upText={'Куда?'}
              isSearchable={false}
              onChange={direction => {
                setToDirection(direction);
              }}
              options={transpiler(toCityData)}
              id={'toDirectionSelect'}
              placeholder={'Направление...'}
              name={'toDirectionSelect'}
          />
            <SelectType
                textClass={styles.textClass}
                className={styles.selectWrapper}
                upText={'Класс бронирования'}
                onChange={segClass => {
                    setSegClass(segClass);
                }}
                isSearchable={false}
                options={newClasses}
                id={'directionSelect'}
                placeholder={'Класс...'}
                name={'directionSelect'}
            />
          <SelectType
              textClass={styles.textClass}
              upText={'Номер рейса'}
              onChange={fltNum => {
                setFltNum(fltNum);
              }}
              isSearchable={false}
              options={getNums}
              className={styles.selectWrapper}
              id={'fltNumSelect'}
              placeholder={'Номер рейса...'}
              name={'fltNumSelect'}
          />
          <ReactCalendar
              upText={'Датa'}
              selected={date}
              onChange={e => {
                setDate(e);
              }}
              showYearDropdown={router.pathname === '/dynamicTable'}
              maxDate={router.pathname === '/dynamicTable' ? new Date("12.31.2019") : new Date("12.31.2020")}
              minDate={router.pathname === '/dynamicTable' ? new Date("01.01.2018") : new Date("01.01.2020")}
              placeholder={'Выбрать дату'}
          />

          <SelectType
              className={styles.selectWrapper}
              onChange={period => {
                setPeriod(period);
              }}
              textClass={styles.textClass}
              upText={'Период'}
              isSearchable={false}
              options={transpiler(periodOfPrediction)}
              id={'directionSelect'}
              placeholder={'Период...'}
              name={'directionSelect'}
          />
        </div>
  );
};
