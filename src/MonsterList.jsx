import { useFormContext } from 'react-hook-form';
import CustomButton from './components/buttons/CustomButton';
import { useMonsterDataQuery, useMonsterMutationDelete } from './utils/query/monsterQuery';
import { useToggleUpdateBtn } from './utils/zustand/useToggleUpdateBtn';
import styled from 'styled-components';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';

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
      {data.data.length > 0 && (
        <MonsterListWrapper>
          {data?.data.map((item) => {
            return (
              <MonsterListItem key={item.id}>
                <span>{`${item.monsterName} Lv.${item.level}`}</span>
                <IconWrapper>
                  <CustomButton
                    text={<BorderColorIcon sx={{ width: '20px' }} />}
                    onClick={() => onClickUpdateMonster(item)}
                    styleID="button_update monsterList_commonBtn"
                  />
                  <CustomButton
                    text={<DeleteIcon sx={{ width: '20px' }} />}
                    onClick={() => onClickDeleteMonster(item.id)}
                    styleID="button_delete monsterList_commonBtn"
                  />
                </IconWrapper>
              </MonsterListItem>
            );
          })}
        </MonsterListWrapper>
      )}
      <CustomButton text="전체삭제" onClick={onClickAllDeleteBtn} styleID="button_deleteAll" />
    </>
  );
}

const MonsterListWrapper = styled.ul`
  margin: 10px auto;
  width: 60%;
  background: rgba(0, 0, 0, 0.45); /* 투명도 조절 */
  backdrop-filter: blur(30px); /* 배경 블러 효과 */
  border-radius: 10px; /* 모서리 둥글게 */
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); /* 그림자 효과 */
  border: 1px solid rgba(0, 0, 0, 0.18); /* 테두리 선 */
  list-style: none;
  padding: 10px 5px;
`;

const MonsterListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  margin: 10px 0;
`;

const IconWrapper = styled.span`
  display: flex;
`;

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
