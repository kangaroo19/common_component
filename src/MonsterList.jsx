import { useFormContext } from 'react-hook-form';
import CustomButton from './components/buttons/CustomButton';
import { useMonsterDataQuery, useMonsterMutationDelete } from './utils/query/monsterQuery';
import { useToggleUpdateBtn } from './utils/zustand/useToggleUpdateBtn';

export default function MonsterList() {
  const { data, isLoading, refetch, isError } = useMonsterDataQuery();
  const { setValue } = useFormContext();
  const { mutate } = useMonsterMutationDelete(refetch);
  const { setIsUpdateTrue } = useToggleUpdateBtn();
  if (isLoading) {
    return <div>불러오는중</div>;
  }
  if (!data && isError) {
    return <div>불러오지 못했습니다.</div>;
  }

  const onClickUpdateMonster = (monster) => {
    setValue('monsterName', monster.monsterName);
    setValue('level', monster.level);
    setValue('id', monster.id);
    setIsUpdateTrue();
  };
  // 단건 삭제
  const onClickDeleteMonster = (monsterId) => {
    mutate([monsterId]);
  };
  // 전체삭제
  const onClickAllDeleteBtn = () => {
    const monsterIdArr = data.data.map((item) => item.id);
    mutate(monsterIdArr);
  };
  return (
    <>
      <h1>몬스터 도감</h1>
      <ul>
        {data?.data.map((item) => {
          return (
            <li key={item.id}>
              <span>{`${item.monsterName} Lv.${item.level}`}</span>
              <span>
                <CustomButton text="update" onClick={() => onClickUpdateMonster(item)} />
                <CustomButton text="delete" onClick={() => onClickDeleteMonster(item.id)} />
              </span>
            </li>
          );
        })}
      </ul>
      <CustomButton text="전체삭제" onClick={onClickAllDeleteBtn} />
    </>
  );
}

// 이렇게 새로고침 버튼을 만들어 데이터 패칭을 해도 되지만..별로임
// mutation함수에 콜백함수를 넣어 따로 데이터 패칭 가능

// eslint 속성 parserOptions.ecmaVersion이 2018이면
// 옵셔널 체이닝 안됨
// 2018 -> 2020 으로 변경

// 현재 문제 update 시 onClickUpdateMonster 함수 안의
// 값 monsterName,level 을 어떻게 MonsterForm 컴포넌트로 보내나..
// => react-hook-form의 상태관리 위한 FormProvider컴포넌트 사용
// 업데이트 버튼 클릭시 setValue("어쩌고") 로 값 할당
// 그리고 MonsterForm 컴포넌트에서 getValue("어쩌고")로 값 가져옴
// 이때 중요한 것은 useForm이 아닌 useFormContext사용!!!
