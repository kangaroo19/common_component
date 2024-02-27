import FormMain from './components/input/FormMain';
import SelectMain from './components/select/SelectMain';
// import { useInputFieldHook } from './utils/hook/useInputFieldHook.js';
import { useInputField } from './utils/zustand/useInputField';
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

// 생각해보니 여러가지 문제들 때문에
// 초기값 페이지 랜더링 될 때와 실제 값 서로 다름
// zustand 사용하고 각기 다른 스토어 사용하면 되는거 아닌가?
// 근데 그러면 코드 갈아 엎어야함 ㅎ
function App() {
  const { formData, onChangeFormData } = useInputField();
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
        <FormMain.Label htmlFor="checkbox1">체크박스1</FormMain.Label>
        <FormMain.Checkbox name="checkbox1" id="checkbox1" checked />
        <FormMain.Checkbox name="checkbox2" id="checkbox2" />

        <div>
          <FormMain.Label htmlFor="radio1">라디오1</FormMain.Label>
          <FormMain.Radio name="radio1" value="라디오1" id="radio1" />
        </div>
        <div>
          <FormMain.Label htmlFor="radio2">라디오2</FormMain.Label>
          <FormMain.Radio name="radio1" value="라디오2" id="radio2" checked />
        </div>
        <div>
          <FormMain.Label htmlFor="radio3">라디오3</FormMain.Label>
          <FormMain.Radio name="radio1" value="라디오3" id="radio3" />
        </div>
        <FormMain.Button
          type="button"
          styleID="login"
          text="로그인"
          onClick={onClick}
        />
      </FormMain>
      <SelectMain>
        <SelectMain.Option>1</SelectMain.Option>
        <SelectMain.Option>2</SelectMain.Option>
        <SelectMain.Option>3</SelectMain.Option>
      </SelectMain>
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
