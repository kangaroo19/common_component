import CustomButton from './components/buttons/CustomButton';
import { useMonsterDataQuery } from './utils/query/monsterQuery';

export default function MonsterList() {
  const { data, isLoading, refetch } = useMonsterDataQuery();
  if (isLoading) {
    return <div>불러오는중</div>;
  }
  return (
    <>
      <ul>
        {data.data.map((hero) => {
          return <li key={hero.id}>{hero.name}</li>;
        })}
      </ul>
      <CustomButton text="새로고침" onClick={() => refetch()} />
    </>
  );
}

// 이렇게 새로고침 버튼을 만들어 데이터 패칭을 해도 되지만..별로임
// mutation함수에 콜백함수를 넣어 따로 데이터 패칭 가능
