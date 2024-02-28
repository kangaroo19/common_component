/* eslint-disable */
import { create } from 'zustand';

export const useInputField = create((set) => ({
  formData: {},
  initialLizeFormData: (inputType, name, value) => {
    // 각 상태 프로퍼티 초기화
    // value가 없을떄 인풋 타입별 초기값 다르게 하기 위함 값 할당은 삼항연산자로 처리
    switch (inputType) {
      case 'inputField':
        return set((prevState) => ({
          formData: { ...prevState.formData, [name]: value ? value : '' },
        }));
      case 'checkbox':
        return set((prevState) => ({
          formData: { ...prevState.formData, [name]: value ? true : false },
        }));
      case 'radio':
        console.log(value);
        if (value === '너검') return;
        set((prevState) => ({
          formData: { ...prevState.formData, [name]: value },
        }));
    }
  },
  onChangeFormData: (event) => {
    const { type, value, name, checked } = event.target;
    if (type === 'checkbox') {
      set((prevState) => ({
        formData: { ...prevState.formData, [name]: checked },
      }));
    } else {
      set((prevState) => ({
        formData: { ...prevState.formData, [name]: value },
      }));
    }
  },
}));

//initialLizeFormData 첫 페이지 랜더링 시 초기값 할당 위함
// 임마가 있음으로서 초기값 일일이 할당하지 않아도 쓸 수 있음
// 첫번쨰 인자는 식별자(name) , 두번쨰는 할당할 값
