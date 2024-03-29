import { FormProvider, useForm } from 'react-hook-form';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MonsterList from './MonsterList';
import MonsterForm from './MonsterForm';
import styled from 'styled-components';
import Layout from './components/layout/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

function App() {
  const method = useForm();

  return (
    <QueryClientProvider client={queryClient}>
      <FormProvider {...method}>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="dark"
        />
        <Layout styleID="monsterLayout glass-container">
          <Header>몬스터 도감</Header>
          <MonsterForm />
          <MonsterList />
        </Layout>
      </FormProvider>
    </QueryClientProvider>
  );
}

export default App;

const Header = styled.div`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  padding: 10px 0;
`;
