import { useInputField } from '../../utils/zustand/useInputField';
import FormMain from '../input/FormMain';

export default function FormA() {
  const { formData, onChangeFormData } = useInputField();
  const onClick = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
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
        <FormMain.Radio name="radio1" value="라디오1" id="radio1" checked />
      </div>
      <div>
        <FormMain.Label htmlFor="radio2">라디오2</FormMain.Label>
        <FormMain.Radio name="radio1" value="라디오2" id="radio2" />
      </div>
      <div>
        <FormMain.Label htmlFor="radio3">라디오3</FormMain.Label>
        <FormMain.Radio name="radio1" value="라디오3" id="radio3" />
      </div>

      <FormMain.Button
        type="submit"
        styleID="login"
        text="로그인"
        onClick={onClick}
      />
    </FormMain>
  );
}
