import styles from '../styles/forms/Form.module.css';
import { CSSTransition } from 'react-transition-group';

export const ChangeDirection = props => {
  let fromDirection = props.from;
  let toDirection = props.to;
  if (fromDirection === 'Москва') {
    fromDirection = 'Москвы';
  } else if (fromDirection === 'Астрахань') {
    fromDirection = 'Астрахани';
  }

  if (toDirection === 'Москва') {
    toDirection = 'Москву';
  }

  return (
    <CSSTransition
      in={props.showAlert}
      timeout={300}
      classNames="bounce"
      unmountOnExit
    >
      <div className={styles.changeDirectionBox}>
        <p
          className={styles.changeDirectionText}
        >{`К сожалению, самолета из ${fromDirection} в ${toDirection} нет...`}</p>
      </div>
    </CSSTransition>
  );
};