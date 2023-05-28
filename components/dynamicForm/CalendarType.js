import styles from '../../styles/forms/Form.module.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';
import {subYears} from "date-fns";

registerLocale('ru', ru);

export const ReactCalendar = props => {
  return (
    <div className={props.className}>
      <p className={styles.textClass}>{props.upText}</p>

      <DatePicker
        locale={'ru'}
        selectsStart={props.selectsStart}
        selectsEnd={props.selectsEnd}
        placeholderText={props.placeholder}
        peekNextMonth
        minDate={new Date("01.01.2018")}
        maxDate={new Date("12.31.2018")}
        showMonthDropdown
        dropdownMode={'select'}
        calendarClassName={'datePicker'}
        dateFormat={'dd.mm.yyyy'}
        selected={props.selected}
        onChange={props.onChange}
        selectsRange={props.selectRange}
        endDate={props.endDate}
        startDate={props.startDate}
      />
    </div>
  );
};
