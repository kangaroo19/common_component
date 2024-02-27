import { useEffect } from 'react';
import divideStyleIDString from '../../../utils/divideStyleIDString';
import { useInputField } from '../../../utils/zustand/useInputField';
import styles from '../style/InputCustom.module.css';

/**
 *
 * @param {string} styleID
 * @param {*} onChange 이벤트 객체와 어떤 값인지 구분위한 아이디 인자로 받는 onChange함수
 * @returns
 */

// 원래는 type 도 프롭으로 줘서 버튼,인풋 둘다 사용가능하게 하려했는데
// 버튼 같은 경우 onChange가 안달리고
// 인풋 같은 경우에는 onClick이 안달리므로 타입 기준으로 컴포넌트 나눔
export default function InputFieldCustom({
  type = 'text',
  styleID,
  name,
  placeholder,
  initialState,
  value,
}) {
  const { formData, initialLizeFormData } = useInputField();
  useEffect(() => {
    if (type !== 'text' && type !== 'password') {
      throw new Error(
        `Invalid type '${type}' for InputButtonCustom. Type must be 'text' or 'password'.`
      );
    }
    initialLizeFormData(name, initialState);
  }, []);
  return (
    <input
      type={type}
      name={name}
      value={formData[name]}
      placeholder={placeholder}
      className={`${divideStyleIDString(styles, styleID)}`}
    />
  );
}
