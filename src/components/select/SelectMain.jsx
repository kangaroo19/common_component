import { useEffect } from 'react';
import divideStyleIDString from '../../utils/divideStyleIDString';
import styles from './SelectMain.module.css';
import OptionCustom from './component/OptionCustom';
import { useInputField } from '../../utils/zustand/useInputField';

export default function SelectMain({ children, styleID, disabled, id, name }) {
  const { initialLizeFormData } = useInputField();
  useEffect(() => {
    initialLizeFormData('select', name);
  }, []);
  return (
    <select
      name={name}
      id={id}
      disabled={disabled}
      className={`${divideStyleIDString(styles, styleID)}`}
    >
      {children}
    </select>
  );
}

SelectMain.Option = OptionCustom;
