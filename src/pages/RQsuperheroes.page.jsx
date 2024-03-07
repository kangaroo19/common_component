/* eslint-disable */

import { useQuery } from '@tanstack/react-query';
import {
  useAddSuperHeroMutation,
  // superHeroKey,
  // getSuperHerosListFn,
  useSuperHeroesDataQuery,
} from '../utils/query/superHeroQuery';
import CustomButton from '../components/buttons/CustomButton';
import FormMain from '../components/input/FormMain';
import { useInputField } from '../utils/zustand/useInputField';
// 리액트 쿼리 사용할 컴포넌트
export default function RQSuperheroesPage() {
  const { formData, onChangeFormData } = useInputField();

  const { isLoading, data, isError, error, refetch } =
    useSuperHeroesDataQuery();
  console.log(formData);
  const { mutate } = useAddSuperHeroMutation();
  const onClickTestBtn = (event) => {
    event.preventDefault();
    const { name, alterEgo } = formData;
    if (name === '' || alterEgo === '') return;
    mutate(formData);
  };
  if (isLoading) {
    return <h2>로딩중</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <h2>리액트쿼리 슈퍼히어로</h2>
      <FormMain onChange={onChangeFormData}>
        <FormMain.Input name="name" placeholder="type your hero name" />
        <FormMain.Input name="alterEgo" placeholder="type your alterEgo name" />
        <FormMain.Button type="submit" onClick={onClickTestBtn} text="check" />
      </FormMain>
      <CustomButton text="fetch Data" onClick={refetch} />
      {data?.data.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
    </>
  );
}
