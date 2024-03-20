import { useForm, useFormContext } from 'react-hook-form';
import FormMain from './components/input/FormMain';
import { useMonsterDataQuery, useMonsterMutation } from './utils/query/monsterQuery';

export default function FormHook() {
  const { register, handleSubmit, reset } = useFormContext();
  const { mutate } = useMonsterMutation();
  const onClickAddMonster = (data) => {
    const { name, level } = data;
    if (name === '' || level === '') return;
    mutate(data);
  };
  return (
    <FormMain onSubmit={handleSubmit(onClickAddMonster)}>
      <FormMain.Label htmlFor="monsterName">몬스터 이름</FormMain.Label>
      <FormMain.Input id="monsterName" name="monsterName" registerFn={register('name')} />
      <FormMain.Label htmlFor="monsterLevel">몬스터 레벨</FormMain.Label>
      <FormMain.Input id="monsterLevel" registerFn={register('level')} />
      <FormMain.Button text="몬스터 등록" type="submit" />
      <FormMain.Button text="초기화" onClick={() => reset()} />
    </FormMain>
  );
}
