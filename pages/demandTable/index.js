import { Header } from '../../components/Header';
import { Form } from '../../components/tables/Form';
import { FirstChartTable } from '../../components/chartsTables/FirstChartTable';
import { config, data } from '../../functions/chartsData/firstTableData';
import styles from '/styles/forms/Charts.module.css';
import Head from 'next/head';
import { SecondChartTable } from '../../components/chartsTables/SecondChartTable';
import {
    secondConfig,
    secondData
} from '../../functions/chartsData/secondTableData';

const DemandTable = () => {
    return (
        <>
            <Head>
                <title>Профиль спроса</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Header />
            <Form />
            <div className={styles.chartsTableDiv}>
                <FirstChartTable
                    data={data}
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

export default DemandTable;
