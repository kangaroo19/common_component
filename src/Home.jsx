import FormMain from './components/input/FormMain';
// import { useInputField } from './utils/zustand/useInputField';
import { useInputFieldHook } from './utils/hook/useInputFieldHook';
export default function Home() {
  const { formData, onChangeFormData } = useInputFieldHook();
  const onClick = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <FormMain onChange={onChangeFormData}>
        <FormMain.Input name="id2" />
        <FormMain.Input name="pw2" />
        <FormMain.Button
          type="submit"
          styleID="login"
          text="로그인"
          onClick={onClick}
        />
      </FormMain>
    </>
  );
}
