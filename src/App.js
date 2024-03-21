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
