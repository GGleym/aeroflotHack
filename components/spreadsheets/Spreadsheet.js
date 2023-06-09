import styles from '../../styles/tables/Spreadsheet.module.css';
import {useState} from "react";

export const Spreadsheet = props => {
  let mapOfData = new Map();
  const [showMore, setShowMore] = useState(false)

  for (let i = 0; i < props.date.length; i++) {
    mapOfData.set(props.date[i], props.dataOfDate[i]);
  }

  return (
      <div className={styles.spreadsheetWrapper}>
        <div className={styles.spreadsheetStyles}>
          <table>
            <thead>
            <th>Дата</th>
            <th>Данные</th>
            </thead>
            <tbody>
            {[...mapOfData.keys()].map((item, id) => (
                <tr key={id}>
                  <td>{item}</td>
                  <td>{mapOfData.get(item)}</td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
        <svg width="30px" height="30px" viewBox="0 0 20.00 20.00" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#002596" stroke="#002596" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow_up [#002596]</title>  <defs> </defs> <g id="Page-1" stroke-width="0.0002" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-260.000000, -6684.000000)" fill="#002596"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M223.707692,6534.63378 L223.707692,6534.63378 C224.097436,6534.22888 224.097436,6533.57338 223.707692,6533.16951 L215.444127,6524.60657 C214.66364,6523.79781 213.397472,6523.79781 212.616986,6524.60657 L204.29246,6533.23165 C203.906714,6533.6324 203.901717,6534.27962 204.282467,6534.68555 C204.671211,6535.10081 205.31179,6535.10495 205.70653,6534.69695 L213.323521,6526.80297 C213.714264,6526.39807 214.346848,6526.39807 214.737591,6526.80297 L222.294621,6534.63378 C222.684365,6535.03868 223.317949,6535.03868 223.707692,6534.63378" id="arrow_up-[#002596]"> </path> </g> </g> </g> </g></svg>
      </div>
  );
};
