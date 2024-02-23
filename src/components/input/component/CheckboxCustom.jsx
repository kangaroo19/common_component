import divideStyleIDString from '../../../utils/divideStyleIDString';
import styles from '../style/CheckboxCustom.module.css';

export default function CheckboxCustom({ styleID, name }) {
  return (
    <input
      type="checkbox"
      name={name}
      className={`${divideStyleIDString(styles, styleID)}`}
    />
  );
}
