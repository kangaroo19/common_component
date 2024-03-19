import divideStyleIDString from '../../../utils/divideStyleIDString';
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
  id,
  styleID,
  name,
  placeholder,
  defaultValue,
  registerFn,
  readOnly,
}) {
  if (type !== 'text' && type !== 'password') {
    throw new Error(`Invalid type '${type}' for InputButtonCustom. Type must be 'text' or 'password'.`);
  }
  return (
    <input
      id={id}
      type={type}
      name={name}
      {...registerFn}
      placeholder={placeholder}
      readOnly={readOnly}
      className={`${divideStyleIDString(styles, styleID)}`}
      aria-label={`inputTEXT_${id}`}
      aria-labelledby={id}
    />
  );
}

// 현재 문제점

// form 컴포넌트와 인풋필드 컴포넌트 사용 하고 있음
// form 컴포넌트에 이벤트 버블링 사용하여 form 컴포에만 onChange 이벤트 함수 할당
// 이러면 input 컴포에는 onChange 함수 할당 안해도 됨

// 근데 문제는 inupt 컴포 사용 할 때 onChange 함수가 없다고 warning 발생
// input 컴포에 value 속성을 빼면 ㄱㅊ음
// 근데 value 속성 빼면 초기값 할당 몬함

// 초기값 같은 경우 defaultValue 로 속성을 주면 해결되는듯/..?
