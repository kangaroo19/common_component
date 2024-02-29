/* eslint-disable */
import { create } from 'zustand';

export const useInputField = create((set, get) => ({
  formData: {},
  initialLizeFormData: (inputType, name, initialValue) => {
    // 각 상태 프로퍼티 초기화
    // value가 없을떄 인풋 타입별 초기값 다르게 하기 위함 값 할당은 삼항연산자로 처리
    switch (inputType) {
      case 'inputField':
        return set((prevState) => ({
          formData: {
            ...prevState.formData,
            [name]: initialValue ? initialValue : '',
          },
        }));
      case 'checkbox':
        return set((prevState) => ({
          formData: {
            ...prevState.formData,
            [name]: initialValue ? true : false,
          },
        }));
      case 'radio':
        // 라디오 버튼 name 프로퍼티 존재하지 않을 때 초기값 할당 위함
        if (!get().formData.hasOwnProperty(String(name))) {
          set((prevState) => ({
            formData: {
              ...prevState.formData,
              [name]: initialValue ? initialValue : null,
            },
          }));
        }
        // checked 프롭 존재할 때 value 값 할당 위함
        //
        else {
          if (!initialValue) return;
          set((prevState) => ({
            formData: { ...prevState.formData, [name]: initialValue },
          }));
        }
        break;
      case 'select':
        return set((prevState) => ({
          formData: {
            ...prevState.formData,
            [name]: initialValue ? initialValue : null,
          },
        }));

      default: //에러처리
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
