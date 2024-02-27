import { useState } from 'react';
import FormMain from './components/input/FormMain';
// import { useInputField } from './utils/zustand/useInputField';
import { useInputFieldHook } from './utils/hook/useInputFieldHook';

export default function Home() {
  const [value, setValue] = useState('CSS'); // 초기값을 CSS로 설정합니다.

  const onChange = (event) => {
    console.log(event.target.value);
    setValue(event.target.value); // 라디오 버튼이 선택될 때마다 상태를 업데이트합니다.
  };

  return (
    <>
      <form action="" onChange={onChange}>
        <input
          type="radio"
          name="chk_info"
          value="HTML"
          checked={value === 'HTML'}
        />
        HTML
        <input
          type="radio"
          name="chk_info"
          value="CSS"
          checked={value === 'CSS'}
        />
        CSS
        <input
          type="radio"
          name="chk_info"
          value="웹디자인"
          checked={value === '웹디자인'}
        />
        웹디자인
      </form>
    </>
  );
}
