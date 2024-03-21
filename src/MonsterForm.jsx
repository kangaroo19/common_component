import { useForm, useFormContext } from 'react-hook-form';
import FormMain from './components/input/FormMain';
import { useMonsterDataQuery, useMonsterMutationPost, useMonsterMutationUpdate } from './utils/query/monsterQuery';

export default function MonsterForm() {
  const { register, handleSubmit, reset, getValues } = useFormContext();
  const { refetch } = useMonsterDataQuery();
  const { mutate } = getValues('newMonster') // newMonster 유무에 따른 사용 훅 달라짐
    ? useMonsterMutationUpdate(reset, refetch)
    : useMonsterMutationPost(reset, refetch);
  console.dir(mutate);
  const onClickAddMonster = (data) => {
    const { name, level } = data;
    if (name === '' || level === '') return;
    // 콜백함수 사용하여 post 요청 이후 data fetching
    // ==> 이 코드 쿼리함수로 이사했음..ㅋ
    mutate(data);
  };
  const onClickUpdateMonster = (data) => {
    console.log('업뎃');
    console.log(data);

    const { name, level } = data;
    const {
      newMonster: { id },
    } = data;
    // console.log(name, level);
    // if (name === '' || level === '') return;
    mutate({ id, data });
  };
  return (
    <FormMain onSubmit={getValues('newMonster') ? handleSubmit(onClickUpdateMonster) : handleSubmit(onClickAddMonster)}>
      <FormMain.Label htmlFor="monsterName">몬스터 이름</FormMain.Label>
      <FormMain.Input id="monsterName" name="monsterName" registerFn={register('monsterName')} />
      <FormMain.Label htmlFor="monsterLevel">몬스터 레벨</FormMain.Label>
      <FormMain.Input id="monsterLevel" registerFn={register('level')} />
      <FormMain.Button text="몬스터 등록" type="submit" />
      <FormMain.Button text="초기화" onClick={() => reset()} />
    </FormMain>
  );
}
// const onErrorForm = ({ response }) => {
//   alert(`${response.status}`);
// };
// 이렇게 Form 태그에서도 error 메시지 처리 가능하지만 어차피 react-query에서도
// 이 기능 제공하므로 사용안하기로

// mutate함수 안에있던 onSuccess
// 호출 시 인자로 refetch,reset함수 넣으려 했지만
//
// onSuccess: (data, variables, context) => {
//   // I will fire second!
// },
// 이 값만 들어가는듯한...?
// 어쩄든 그래서 useMonsterMutationPost 안에 인자로 넣어 해결
