import CustomButton from './components/buttons/CustomButton';
import { useFormContext } from 'react-hook-form';
import { useMonsterMutation } from './utils/query/monsterQuery';

export default function Home() {
  const { handleSubmit } = useFormContext();
  const { mutate } = useMonsterMutation();
  const onClickAddMonster = (data) => {
    const { name, level } = data;
    if (name === '' || level === '') return;
    mutate(data);
  };
  return <CustomButton text="몬스터 등록!!!!" onClick={handleSubmit(onClickAddMonster)} />;
}
