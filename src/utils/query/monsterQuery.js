import axios from 'axios';
import { useQuery, useMutation } from '@tanstack/react-query';

const fetchMonster = () => {
  return axios.get('http://localhost:4000/monster');
};

const addMonster = (monster) => {
  return axios.post('http://localhost:4000/monster', monster);
};

export const useMonsterDataQuery = () => {
  return useQuery({
    queryKey: ['superHeroes11'],
    queryFn: fetchMonster,
  });
};
export const useMonsterMutation = () => {
  return useMutation({
    mutationFn: addMonster,
  });
};
