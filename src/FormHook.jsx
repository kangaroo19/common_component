import { useForm, useFormContext } from 'react-hook-form';
import FormMain from './components/input/FormMain';

export default function FormHook() {
  const { register, handleSubmit, reset } = useFormContext();
  const onClickLoginBtn = (data) => {
    console.log(data);
  };
  // console.log(register)
  const onError = () => {
    alert('느금');
  };
  return (
    <FormMain onSubmit={handleSubmit(onClickLoginBtn)}>
      <FormMain.Label htmlFor="username">아이디</FormMain.Label>
      <FormMain.Input id="username" name="username" registerFn={register('username')} />
      <FormMain.Label htmlFor="password">비밀번호</FormMain.Label>
      <FormMain.Input type="password" id="password" registerFn={register('password')} />
      <FormMain.Button text="로그인" type="submit" />
      <FormMain.Button text="초기화" onClick={() => reset()} />
    </FormMain>
  );
}
