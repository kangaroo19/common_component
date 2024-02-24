import FormMain from './components/input/FormMain';
import { useInputFieldHook } from './utils/hook/useInputFieldHook.js';

const initialState = {
  id: '',
  pw: '',
  checkbox1: false,
  checkbox2: false,
  checkbox3: false,
  radio1: false,
};
// onChangeFormData (커스텀훅)을 FormMain 컴포넌트에 두려 했으나
// 버튼 컴포넌트 때문에 안됨

// 결론적으로 커스텀훅은 컴포넌트별로 생성되는데
// 같은 상태 공유가 안됨
// 그렇다고 zustand를 써도 안됨
// 예를 들어 로그인 컴포넌트가 있고
// 회원가입 컴포넌트가 있다고 가정하고
// zustand 코드로 구현하면 로그인,회원가입 둘다 같이 상태공유가되므로
// 안됨!
function App() {
  const { formData, onChangeFormData } = useInputFieldHook(initialState);
  const onClick = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <FormMain onChange={onChangeFormData}>
        <FormMain.Input name="id" placeholder="아이디를 입력해 주세요" />
        <FormMain.Input
          type="password"
          name="pw"
          placeholder="비밀번호를 입력해 주세요"
        />
        <FormMain.Checkbox name="checkbox1" />
        <FormMain.Checkbox name="checkbox2" />
        <FormMain.Checkbox name="checkbox3" />
        <FormMain.Radio name="radio1" />
        <FormMain.Button
          type="button"
          styleID="login"
          text="로그인"
          onClick={onClick}
        />
      </FormMain>
    </>
  );
}

export default App;

// onClick이나 onChange 함수를 사용하는 컴포넌트(app)이 아닌
// FormMain에서 사용하는 방법은 없을까..?
// ==> customHook을 만들어서 form태그인 FormMain컴포에서
// 프롭으로 onChange 함수를 받도록 설정
// 이렇게 하면 이제 FormMain 컴포에서 onChange 함수(customhook)
// 하나로 인풋필드 값 핸들링 가능
// 근데 이제 문제는 form 태그 밑에는 인풋[type='text']만
// 들어가는게 아님
// radio,checkbox 등 의 태그가 들어갈 수도 있음
// input/ radio.checkbox 구분하는 로직 필요
