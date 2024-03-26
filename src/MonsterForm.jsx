/* eslint-disable */

import { useFormContext } from 'react-hook-form';
import FormMain from './components/input/FormMain';
import { useMonsterDataQuery, useMonsterMutationPost, useMonsterMutationUpdate } from './utils/query/monsterQuery';
import { useToggleUpdateBtn } from './utils/zustand/useToggleUpdateBtn';

export default function MonsterForm() {
  const { register, handleSubmit, reset} = useFormContext();
  const { isUpdate, setIsUpdateFalse } = useToggleUpdateBtn();
  const { refetch } = useMonsterDataQuery();

  const isUpdateObj = {
    isUpdateText: isUpdate ? '몬스터 수정' : '몬스터 등록',
    mutateFn: isUpdate // newMonster 유무에 따른 사용 훅 달라짐
      ? useMonsterMutationUpdate(reset, refetch, setIsUpdateFalse)
      : useMonsterMutationPost(reset, refetch),
  };
  // post or patch method
  const handleFormButton = (data) => {
    const { name, level } = data;
    if (name === '' || level === '') return;
    // 콜백함수 사용하여 post 요청 이후 data fetching
    // ==> this code moved to query file
    isUpdateObj.mutateFn.mutate(data);
  };

  const onClickResetBtn = () => {
    // 초기화 버튼 클릭시 모든 상태 초기화됨
    reset();
    setIsUpdateFalse();
  };

  return (
    <FormMain onSubmit={handleSubmit(handleFormButton)}>
      <FormMain.Label htmlFor="monsterName">몬스터 이름</FormMain.Label>
      <FormMain.Input id="monsterName" name="monsterName" registerFn={register('monsterName')} />
      <FormMain.Label htmlFor="monsterLevel">몬스터 레벨</FormMain.Label>
      <FormMain.Input id="monsterLevel" registerFn={register('level')} />
      <FormMain.Button text={isUpdateObj.isUpdateText} type="submit" />
      <FormMain.Button text="초기화" onClick={onClickResetBtn} />
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

// const onClickUpdateMonster = (data) => {
//   console.log('update');
//   mutate(data);
//   setIsUpdateFalse();
// };

// 업데이트 함수 안에 이렇게 수정 진행 중인지
// 알려주는 isUpdate 값을 false로 되돌리는 함수가 있었는데
// mutate는 비동기 함수라 setIsupdateFalse 함수가 먼저실행되어
// isUpdate 가 거짓일때의 로직이 동작함
// 그래서 refetch,reset처럼 콜백으로 훅 인자로 넣음

// 원랜는
// const { mutate } = isUpdate // newMonster 유무에 따른 사용 훅 달라짐
//     ? useMonsterMutationUpdate(reset, refetch, setIsUpdateFalse)
//     : useMonsterMutationPost(reset, refetch);

// const isUpdateTExt=isUpdate?'등록':'수정'

// 이런식으로 각각 변수 따로 둬서 isUdpate 값에 따른 분기처리했는데
// 하나의 객체로 묶어서 사용하는게 더 가독성이 좋다고 판단하여
// 코드 수정
