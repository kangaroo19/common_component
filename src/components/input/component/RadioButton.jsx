import { useEffect } from 'react';
import divideStyleIDString from '../../../utils/divideStyleIDString';
import { useInputField } from '../../../utils/zustand/useInputField';
import styles from '../style/RadioButton.module.css';

export default function RadioButton({ styleID, name, id, value, checked }) {
  const { initialLizeFormData } = useInputField();
  useEffect(() => {
    initialLizeFormData('radio', name, checked && value ? value : '너검');
  }, []);
  return (
    <input
      type="radio"
      name={name}
      id={id}
      value={value}
      defaultChecked={checked}
      className={`${divideStyleIDString(styles, styleID)}`}
    />
  );
}
