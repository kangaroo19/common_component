import divideStyleIDString from '../../../utils/divideStyleIDString';
import styles from '../style/CheckboxCustom.module.css';

export default function CheckboxCustom({ styleID, checked, registerFn, name, id }) {
  console.log(checked);
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
