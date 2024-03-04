import { useQuery } from '@tanstack/react-query';
import {
  superHeroKey,
  getSuperHerosListFn,
} from '../utils/query/superHeroQuery';
// 리액트 쿼리 사용할 컴포넌트
export default function RQSuperheroesPage() {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: superHeroKey,
    queryFn: getSuperHerosListFn,
  });
  if (isLoading) {
    return <h2>로딩중</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <h2>리액트쿼리 슈퍼히어로</h2>
      {data?.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
    </>
  );
}
