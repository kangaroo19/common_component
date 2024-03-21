import FormA from './components/FormA/FormA';
import FormB from './components/FormA/FormB';
import FormC from './components/FormA/FormC';
import CustomButton from './components/buttons/CustomButton';
import { useInputField } from './utils/zustand/useInputField';

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
  const { formData } = useInputField();
  const onClick = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return <div>dd</div>;
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

// 2024-03-08
// 결론부터 이거 쓰레기임
// 재사용성 전혀 없음
// 각각의 재사용한답시고 만든 컴포넌트들 (체크박스,인풋필드..등)
// useInputField라는 스토어사용하는데
// 이러면 다른 페이지에서 사용하려고 아무리 코드만 동일하고
// 따로 스토어를 만든다고 해도
// 각각의 컴포넌트들은 내부에서 useInputField를 사용하므로
// 쓰레기
