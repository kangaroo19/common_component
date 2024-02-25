/* eslint-disable import/prefer-default-export */
import { create } from 'zustand';

export const useInputField = create((set) => ({
  formData: {},
  initialLizeFormData: (name, value = null) => { // 각 상태 프로퍼티 초기화
    set((prevState) => ({
      formData: { ...prevState.formData, [name]: value },
    }));
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

//initialLizeFormData
// 임마가 있음으로서 초기값 일일이 할당하지 않아도 쓸 수 있음
// 첫번쨰 인자는 식별자(name) , 두번쨰는 할당할 값