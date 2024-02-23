import divideStyleIDString from '../../../utils/divideStyleIDString';
import styles from '../style/RadioButton.module.css';

export default function RadioButton({ styleID, name }) {
  return (
    <input
      type="radio"
      name={name}
      className={`${divideStyleIDString(styles, styleID)}`}
    />
  );
}
