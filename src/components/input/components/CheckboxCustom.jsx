import divideStyleIDString from '../../../utils/divideStyleIDString';
import styles from '../styles/CheckboxCustom.module.css';

export default function CheckboxCustom({ styleID, checked, registerFn, name, id }) {
  return (
    <input
      type="checkbox"
      name={name}
      id={id}
      {...registerFn}
      defaultChecked={checked}
      className={`${divideStyleIDString(styles, styleID)}`}
    />
  );
}
