import axios from 'axios';
import { useQuery, useMutation } from '@tanstack/react-query';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};

const addSuperHero = (hero) => {
  return axios.post('http://localhost:4000/superheroes', hero);
};

export const useSuperHeroesDataQuery = () => {
  return useQuery({
    queryKey: ['superHeroes11'],
    queryFn: fetchSuperHeroes,
  });
};
export const useAddSuperHeroMutation = () => {
  return useMutation({
    mutationFn: addSuperHero,
  });
};
