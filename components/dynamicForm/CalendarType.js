import styles from '../../styles/forms/Form.module.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';

registerLocale('ru', ru);

export const ReactCalendar = props => {
  return (
    <div className={props.className}>
      <p className={styles.textClass}>{props.upText}</p>
      <DatePicker
        locale={'ru'}
        placeholderText={props.placeholder}
        peekNextMonth
        minDate={props.minDate}
        maxDate={props.maxDate}
        showMonthDropdown
        showYearDropdown={props.showYearDropdown}
        dropdownMode={'select'}
        dateFormat={'dd.MM.yyyy'}
        selected={props.selected}
        onChange={props.onChange}
      />
    </div>
  );
};
