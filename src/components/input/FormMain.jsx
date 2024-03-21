import divideStyleIDString from '../../utils/divideStyleIDString';
import styles from './FormMain.module.css';
import InputButtonCustom from './components/InputButtonCustom';
import InputFieldCustom from './components/InputFieldCustom';
import CheckboxCustom from './components/CheckboxCustom';
import RadioButton from './components/RadioButton';
import LabelCustom from './components/LabelCustom';
import { Form } from 'react-hook-form';

export default function FormMain({ children, styleID, onSubmit, onError, onSuccess, method, control }) {
  return (
    <Form
      control={control}
      onSubmit={onSubmit}
      method={method}
      action="/api"
      onError={onError}
      onSuccess={onSuccess}
      className={`${divideStyleIDString(styles, styleID)}`}
    >
      {children}
    </Form>
  );
}

FormMain.Input = InputFieldCustom;
FormMain.Button = InputButtonCustom;
FormMain.Checkbox = CheckboxCustom;
FormMain.Radio = RadioButton;
FormMain.Label = LabelCustom;
// inputField 이벤트 버블링 이용하여 form태그에 onChange 달면
// form 태그 하위에 라디오 버튼 있을때도 onChange함수 호출됨

// input type이 text인지 검증하는 로직 필요할듯
