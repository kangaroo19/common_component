import { useFormContext } from 'react-hook-form';
import FormMain from './components/input/FormMain';
import {
  useMonsterDataQuery,
  useMonsterMutation,
} from './utils/query/monsterQuery';
import { useEffect } from 'react';

export default function FormHook() {
  const { register, handleSubmit, reset } = useFormContext();
  const { mutate } = useMonsterMutation();
  const { refetch } = useMonsterDataQuery();

  const onClickAddMonster = (data) => {
    const { name, level } = data;
    if (name === '' || level === '') return;
    // 콜백함수 사용하여 post 요청 이후 data fetching
    mutate(data, {
      // 요청 성공 시
      onSuccess: () => {
        reset(); // 상태 값 초기화
        refetch(); // 데이터 다시 불러오기
        alert('등록 성공!!!!');
      },
      // 요청 실패 시
      onError: (error) => {
        alert(`${error.response.status} ${error.response.data}`);
      },
    });
  };
  // const onErrorForm = ({ response }) => {
  //   alert(`${response.status}`);
  // };
  // 이렇게 Form 태그에서도 error 메시지 처리 가능하지만 어차피 react-query에서도
  // 이 기능 제공하므로 사용안하기로
  return (
    <FormMain onSubmit={handleSubmit(onClickAddMonster)}>
      <FormMain.Label htmlFor="monsterName">몬스터 이름</FormMain.Label>
      <FormMain.Input
        id="monsterName"
        name="monsterName"
        registerFn={register('name')}
      />
      <FormMain.Label htmlFor="monsterLevel">몬스터 레벨</FormMain.Label>
      <FormMain.Input id="monsterLevel" registerFn={register('level')} />
      <FormMain.Button text="몬스터 등록" type="submit" />
      <FormMain.Button text="초기화" onClick={() => reset()} />
    </FormMain>
  );
}
//////
