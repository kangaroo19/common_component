import { useEffect } from 'react';
import divideStyleIDString from '../../../utils/divideStyleIDString';
import { useInputField } from '../../../utils/zustand/useInputField';
import styles from '../style/RadioButton.module.css';

export default function RadioButton({ styleID, name, id, value, checked }) {
  const { initialLizeFormData } = useInputField();
  useEffect(() => {
    initialLizeFormData('radio', name, checked ? value : null); // checked가 없을 때는 null로 설정
  }, [checked]);
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
// checked 프롭이 없는 경우 모든 값 '너검'으로

//checked 프롭 있는 경우 value 값 제대로 들어감-> 이때는 잘 됨

// 현재 문제점
// checked 기능 구현 위해
// 초기값 할당하는 함수인 initialLizeFormData 사용
// 근데 라디오버튼에 checked 프롭이 있는 경우
// 라디오버튼은 체크되는 버튼이 무조건 하나만 존재하므로
// 값이 제대로 들어감
// 없는 경우는 '너검'식별자를 둬서 값이 아예 안들어가게
// 바로 return
// 내가 원하는건 radio1:null인데 이렇게 안됨
