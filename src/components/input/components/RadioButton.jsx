import divideStyleIDString from '../../../utils/divideStyleIDString';
import styles from '../styles/RadioButton.module.css';

export default function RadioButton({ styleID, registerFn, name, id, value, checked }) {
  return (
    <input
      type="radio"
      name={name}
      id={id}
      defaultChecked={checked}
      {...registerFn}
      value={value}
      className={`${divideStyleIDString(styles, styleID)}`}
    />
  );
}
