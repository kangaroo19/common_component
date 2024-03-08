// 테스트용

/* eslint-disable */
import { create } from 'zustand';

const initializeInputField = (prevState, name, initialValue) => ({
  formData: {
    ...prevState.formData,
    [name]: initialValue ? initialValue : '',
  },
});

const initializeCheckbox = (prevState, name, initialValue) => ({
  formData: {
    ...prevState.formData,
    [name]: initialValue ? true : false,
  },
});

const initializeRadio = (prevState, get, name, initialValue) => {
  if (!get().formData.hasOwnProperty(String(name))) {
    return {
      formData: {
        ...prevState.formData,
        [name]: initialValue ? initialValue : null,
      },
    };
  } else if (initialValue) {
    return {
      formData: {
        ...prevState.formData,
        [name]: initialValue,
      },
    };
  }
  return {};
};

const initializeSelect = (prevState, name, initialValue) => ({
  formData: {
    ...prevState.formData,
    [name]: initialValue ? initialValue : null,
  },
});

export const useInputField = create((set, get) => ({
  formData: {},
  initialLizeFormData: (inputType, name, initialValue) => {
    switch (inputType) {
      case 'inputField':
        set((prevState) => initializeInputField(prevState, name, initialValue));
        break;
      case 'checkbox':
        set((prevState) => initializeCheckbox(prevState, name, initialValue));
        break;
      case 'radio':
        set((prevState) => initializeRadio(prevState, get, name, initialValue));
        break;
      case 'select':
        set((prevState) => initializeSelect(prevState, name, initialValue));
        break;
      default: //
        throw Error('올바른 inputType 값을 입력해 주세요');
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
