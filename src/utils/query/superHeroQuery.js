import axios from 'axios';

export const superHeroKey = ['superheroes'];

export const getSuperHerosListFn = async () => {
  const response = await axios.get('http://localhost:4000/superheroes');
  return response.data;
};
