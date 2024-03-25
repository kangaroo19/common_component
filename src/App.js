import { FormProvider, useForm } from 'react-hook-form';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MonsterList from './MonsterList';
import MonsterForm from './MonsterForm';

const queryClient = new QueryClient();

function App() {
  const method = useForm();

  return (
    <QueryClientProvider client={queryClient}>
      <FormProvider {...method}>
        <MonsterForm />
        <MonsterList />
      </FormProvider>
    </QueryClientProvider>
  );
}

export default App;
