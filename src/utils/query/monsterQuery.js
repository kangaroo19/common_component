import axios from 'axios';
import { useQuery, useMutation } from '@tanstack/react-query';

const fetchMonster = () => {
  return axios.get('http://localhost:4000/monster');
};

const addMonster = (monster) => {
  return axios.post('http://localhost:4000/monster', monster);
};
const deleteMonster = (monsterId) => {
  return axios.delete(`http://localhost:4000/monster/${monsterId}`);
};
const updateMonster = (id, monster) => {
  return axios.patch(`http://localhost:4000/monster/${id}`, monster);
};
export const useMonsterDataQuery = () => {
  return useQuery({
    queryKey: ['monster'],
    queryFn: fetchMonster,
  });
};
export const useMonsterMutationPost = (reset, refetch) => {
  return useMutation({
    mutationFn: addMonster,
    onSuccess: () => {
      reset();
      refetch();
      alert('등록 성공!!!!');
    },
    onError: (error) => {
      alert(`${error.response.status} ${error.response.data}`);
    },
  });
};

export const useMonsterMutationDelete = (refetch) => {
  return useMutation({
    mutationFn: deleteMonster,
    onSuccess: () => {
      alert('삭제 성공!!!!');
      refetch();
    },
    onError: (error) => {
      alert(`${error.response.status} ${error.response.data}`);
    },
  });
};

export const useMonsterMutationUpdate = (reset, refetch) => {
  return useMutation({
    mutationFn: updateMonster,
    onSuccess: () => {
      alert('수정 성공!!!!');
      refetch();
    },
    onError: (error) => {
      alert(`${error.response.status} ${error.response.data}`);
    },
  });
};

// useMutation 함수 안에
// update,post,delete 이 모든 요청 함수 넣으려 했으나
// 각 요청별 성공,에러메시지가 다르게 출력되는게 낫겠다 싶어
// 따로 만듦
