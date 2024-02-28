import { useEffect } from 'react';
import divideStyleIDString from '../../../utils/divideStyleIDString';
import { useInputField } from '../../../utils/zustand/useInputField';
import styles from '../style/CheckboxCustom.module.css';

export default function CheckboxCustom({
  styleID,
  name,
  id,
  disabled,
  checked,
}) {
  const { formData, initialLizeFormData } = useInputField();
  useEffect(() => {
    initialLizeFormData('checkbox', name, checked);
  }, []);
  return (
    <input
      type="checkbox"
      name={name}
      id={id}
      checked={formData[name]}
      value={formData[name]}
      disabled={disabled}
      className={`${divideStyleIDString(styles, styleID)}`}
    />
  );
}
