import divideStyleIDString from '../../../utils/divideStyleIDString';
import styles from '../style/RadioButton.module.css';

export default function RadioButton({ styleID, name, id, value }) {
  return (
    <input
      type="radio"
      name={name}
      id={id}
      value={value}
      className={`${divideStyleIDString(styles, styleID)}`}
    />
  );
}
