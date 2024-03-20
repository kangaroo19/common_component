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
