import { useState } from 'react';

// 커스텀 훅은 컴포넌트 별로 새로운 값이 생성됨
// zustand 사용하려 했으나 함수 사용하는 모든 값이 공유됨

// 초기값 할당 위한 initialState 인자 추가
export const useInputFieldHook = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const onChangeFormData = (event) => {
    const { name, value, checked, type } = event.target;
    if (type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  const onClickFormData = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return {
    formData,
    onChangeFormData,
    onClickFormData,
  };
};
