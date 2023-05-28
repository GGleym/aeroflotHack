import styles from '../../styles/forms/Charts.module.css'
import {FirstChartTable} from "../chartsTables/FirstChartTable";
import {SecondChartTable} from "../chartsTables/SecondChartTable";
import {ThirdChartTable} from "../chartsTables/ThirdChartTable";
import {FourthChartTable} from "../chartsTables/FourthChartTable";
import {data} from "../../data/chartsData/firstTableData";
import {config} from "../../data/chartsData/firstTableData";
import {secondData} from "../../data/chartsData/secondTableData";
import {secondConfig} from "../../data/chartsData/secondTableData";
import {thirdData} from "../../data/chartsData/thirdTableTable";
import {thirdConfig} from "../../data/chartsData/thirdTableTable";
import {fourthData} from "../../data/chartsData/fourthTableTable";
import {fourthConfig} from "../../data/chartsData/fourthTableTable";

export const ChartsTables = () => {
    return (
        <div className={styles.chartsTableDiv}>
            <FirstChartTable data={data} options={config} className={styles.chartsTable}/>
            <SecondChartTable data={secondData} options={secondConfig} className={styles.chartsTable}/>
            <ThirdChartTable data={thirdData} options={thirdConfig} className={styles.chartsTable}/>
            <FourthChartTable data={fourthData} options={fourthConfig} className={styles.chartsTable}/>
        </div>
    )
}