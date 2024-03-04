import { useQuery } from '@tanstack/react-query';
import {
  superHeroKey,
  getSuperHerosListFn,
} from '../utils/query/superHeroQuery';
// 리액트 쿼리 사용할 컴포넌트
export default function RQSuperheroesPage() {
  const { isLoading, data, isError, error, isFetching} = useQuery({
    queryKey: superHeroKey,
    queryFn: getSuperHerosListFn,
    gcTime: 5000, // 캐시데이터 지속시간 이후에 가비지컬렉터의 수집대상됨
  });
  if (isLoading) {
    return <h2>로딩중</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  console.log(isLoading, isFetching);
  return (
    <>
      <h2>리액트쿼리 슈퍼히어로</h2>
      {data?.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
    </>
  );
}
