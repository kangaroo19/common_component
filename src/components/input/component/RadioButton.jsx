import { useEffect } from 'react';
import divideStyleIDString from '../../../utils/divideStyleIDString';
import { useInputField } from '../../../utils/zustand/useInputField';
import styles from '../style/RadioButton.module.css';

//value 서버로 보낼 값
// checked

export default function RadioButton({ styleID, name, id, value, checked }) {
  const { formData, initialLizeFormData } = useInputField();
  useEffect(() => {
    initialLizeFormData(name, checked && value);
  }, []);
  return (
    <input
      type="radio"
      name={name}
      id={id}
      value={value}
      checked={formData[name] === value}
      className={`${divideStyleIDString(styles, styleID)}`}
    />
  );
}
