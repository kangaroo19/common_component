import { useForm } from 'react-hook-form';
import FormMain from './components/input/FormMain';

export default function FormHook() {
  const { register, handleSubmit, reset } = useForm({
    // 초기값 설정
    defaultValues: {
      username: '주니어네키',
    },
  });
  const onClickLoginBtn = (data) => {
    console.log(data);
  };
  return (
    <FormMain>
      <FormMain.Label htmlFor="username">아이디</FormMain.Label>
      <FormMain.Input id="username" registerFn={register('username')} />
      <FormMain.Label htmlFor="password">비밀번호</FormMain.Label>
      <FormMain.Input type="password" id="password" registerFn={register('password')} />
      {/* <FormMain.Label htmlFor="checkbox">쳌박</FormMain.Label>
      <FormMain.Checkbox id="checkbox" registerFn={register('checkbox')} />
      <FormMain.Radio id="radio" value="라디오1" registerFn={register('radio')} />
      <FormMain.Radio id="radio" value="라디오2" registerFn={register('radio')} />
      <FormMain.Radio id="radio" value="라디오3" registerFn={register('radio')} /> */}
      <FormMain.Button text="로그인" type="submit" onClick={handleSubmit(onClickLoginBtn)} />
      <FormMain.Button text="초기화" onClick={() => reset()} />
      {/* <input type="submit" onClick={() => alert('123')} /> */}
    </FormMain>
  );
}
