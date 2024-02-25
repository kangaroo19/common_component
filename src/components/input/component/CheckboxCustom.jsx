import divideStyleIDString from '../../../utils/divideStyleIDString';
import styles from '../style/CheckboxCustom.module.css';

export default function CheckboxCustom({ styleID, value, name, id }) {
  return (
    <input
      type="checkbox"
      name={name}
      id={id}
      value={value}
      checked={value}
      className={`${divideStyleIDString(styles, styleID)}`}
    />
  );
}
