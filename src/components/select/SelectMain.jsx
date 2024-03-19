import { createContext } from 'react';
import divideStyleIDString from '../../utils/divideStyleIDString';
import styles from './SelectMain.module.css';
import OptionCustom from './component/OptionCustom';

const selectContext = createContext({});

export default function SelectMain({ children, styleID, onChange, disabled, id, name }) {
  const onChangeOption = (event) => {
    console.log(event.target.value);
  };
  return (
    <select
      name={name}
      id={id}
      onChange={onChangeOption}
      disabled={disabled}
      className={`${divideStyleIDString(styles, styleID)}`}
    >
      {children}
    </select>
  );
}

SelectMain.Option = OptionCustom;
