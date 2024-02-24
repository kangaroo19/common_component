import divideStyleIDString from '../../../utils/divideStyleIDString';
import styles from '../style/CheckboxCustom.module.css';

export default function CheckboxCustom({ styleID, name, id }) {
  return (
    <input
      type="checkbox"
      name={name}
      id={id}
      className={`${divideStyleIDString(styles, styleID)}`}
    />
  );
}
