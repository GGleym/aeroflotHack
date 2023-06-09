import { Header } from '../../components/Header';
import { Form } from '../../components/tables/Form';
import { FirstChartTable } from '../../components/chartsTables/FirstChartTable';
import {config, data, filterEverything} from '../../functions/chartsData/firstTableData';
import styles from '/styles/forms/Charts.module.css';
import Head from 'next/head';

import {useState} from "react";
import {DynamicLoader} from "../../components/loaders/dynamicLoader";


const DemandTable = props => {
    const [data, setData] = useState(null)
    const [firstTableData, setFirstTableData] = useState(null)

    return (
        <>
            <Head>
                <title>Профиль спроса</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Header />
            <Form setData={setData} />
                {
                    data ? (
                        <FirstChartTable
                            data={data}
                            options={config}
                            className={styles.chartsTable}
                        />
                    ) : <DynamicLoader />

                }
        </>
    );
};

export default DemandTable;
