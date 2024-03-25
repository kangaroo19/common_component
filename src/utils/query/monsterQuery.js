import axios from 'axios';
import { useQuery, useMutation } from '@tanstack/react-query';

const fetchMonster = () => {
  return axios.get('http://localhost:4000/monster');
};

const addMonster = (monster) => {
  return axios.post('http://localhost:4000/monster', monster);
};
// 전체삭제 때문에 병렬처리하는 함수 하나 더 만드려 했으나
// 기본 베이스는 병렬처리로 하고 단건삭제시에도 인자를
// 길이가 1인 배열로 받기로 했음
const deleteMonster = (monsterIdArr) => {
  const deleteRequests = monsterIdArr.map((monsterId) => {
    return axios.delete(`http://localhost:4000/monster/${monsterId}`);
  });

  return Promise.all(deleteRequests);
};

const updateMonster = (monster) => {
  return axios.patch(`http://localhost:4000/monster/${monster.id}`, monster);
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
      alert('등록1 성공!!!!');
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

export const useMonsterMutationUpdate = (reset, refetch, setIsUpdateFalse) => {
  return useMutation({
    mutationFn: updateMonster,
    onSuccess: () => {
      alert('수정 성공!!!!');
      refetch();
      reset();
      setIsUpdateFalse();
    },
    onError: (error) => {
      alert(`${error.response.status} ${error.response.data}`);
    },
  });
};

export const useMonsterMutation = (type, monster) => {
  console.log('test');
  switch (type) {
    case 'post':
      return axios.post('http://localhost:4000/monster', monster);

    default:
  }
  return null;
};

// useMutation 함수 안에
// update,post,delete 이 모든 요청 함수 넣으려 했으나
// 각 요청별 성공,에러메시지가 다르게 출력되는게 낫겠다 싶어
// 따로 만듦

// 그래도 mustation 훅 하나만 쓰는게 좋을거같다.....
