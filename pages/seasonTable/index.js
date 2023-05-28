import { Header } from '../../components/Header';
import { Form } from '../../components/tables/Form';
import { FirstChartTable } from '../../components/chartsTables/FirstChartTable';
import {config, data, filterEverything} from '../../functions/chartsData/firstTableData';
import styles from '/styles/forms/Charts.module.css';
import Head from 'next/head';
import {useState} from "react";
import {ShowAlert} from "../../components/loaders/ShowAlert";
import {SecondChartTable} from "../../components/chartsTables/SecondChartTable";
import {secondConfig} from "../../functions/chartsData/secondTableData";


const SeasonTable = props => {
    const [data, setData] = useState(null)
    const [firstTableData, setFirstTableData] = useState(null)

    return (
        <>
            <Head>
                <title>Сезонность спроса</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Header />
            <Form setData={setData} />
            <div className={styles.chartsTableDiv}>
                {
                    data ? (
                        <SecondChartTable
                            data={data}
                            options={secondConfig}
                            className={styles.chartsTable}
                        />
                    ) : <ShowAlert />

                }
            </div>
        </>
    );
};

export default SeasonTable;
