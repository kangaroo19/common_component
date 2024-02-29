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

//initialLizeFormData 첫 페이지 랜더링 시 초기값 할당 위함
// 임마가 있음으로서 초기값 일일이 할당하지 않아도 쓸 수 있음
// 첫번쨰 인자는 식별자(name) , 두번쨰는 할당할 값

// radio 버튼에 대한 초기값 따로 두려했으나
// 코드보기 어려울것 같고 라디오 버튼이 하나만 있다는 보장 없으므로
// 안햇음

//radio 버튼
// radio 버튼 관련 프로퍼티 이름에 대한 공간 없다는 것은
// checked 프롭 전혀 존재하지 않는 다는 것이므로 null 로 초기값 할당
// 어쨋든, checekd 프롭 전혀 존재하지 않을 떄를 위한 코드임

// radio 버튼 프로퍼티 존재한다는 것은 두개로 나뉘어짐
// 프로퍼티 존재하고 value 가 null 일때
// 이때는 이미 위의 코드를 한번 거쳤음
// 근데 checked 프롭은 없음 (value null 로 들어가게 설정했음)
// 근데 이대로 두면 value가 null 로 들어가므로
// 아무런 동작도 안하게 바로 return

// 프로퍼티 존재하고 value 가 null이 아닐때
// checked 프롭 존재함을 의미
// 초기값 checked 프롭 존재하는 라디오 컴포넌트의 value로 초기값 들어가게 설정
