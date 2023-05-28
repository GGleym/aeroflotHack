import { Header } from '../../components/Header';
import { Form } from '../../components/tables/Form';
import { FirstChartTable } from '../../components/chartsTables/FirstChartTable';
import {config, data, filterEverything} from '../../functions/chartsData/firstTableData';
import styles from '/styles/forms/Charts.module.css';
import Head from 'next/head';
import {useState} from "react";
import {ThirdChartTable} from "../../components/chartsTables/ThirdChartTable";
import {thirdConfig, thirdData} from "../../functions/chartsData/thirdTableTable";
import {ShowAlert} from "../../components/loaders/ShowAlert";

const PredictTable = props => {
    const [data, setData] = useState(null)
    const [firstTableData, setFirstTableData] = useState(null)

    return (
        <>
            <Head>
                <title>Прогноз</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Header />
            <Form setData={setData} />
            <div className={styles.chartsTableDiv}>
                {
                    data ? (
                        <ThirdChartTable
                            data={data}
                            options={thirdConfig}
                            className={styles.chartsTable}
                        />
                    ) : <ShowAlert />

                }
            </div>
        </>
    );
};

export default PredictTable;
