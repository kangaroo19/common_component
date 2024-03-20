import CustomButton from './components/buttons/CustomButton';
import FormHook from './FormHook';
import { FormProvider, useForm } from 'react-hook-form';
import { useMonsterMutation } from './utils/query/monsterQuery';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './Home';
import MonsterList from './MonsterList';

const queryClient = new QueryClient();
function App() {
  const method = useForm({
    defaultValues: { username: '주니어네키' },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <FormProvider {...method}>
        <FormHook />
        <MonsterList />
      </FormProvider>
    </QueryClientProvider>
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
