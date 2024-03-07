import axios from 'axios';

export const seoulDateKey = ['seoulDate'];

export const seoulDateFn = async () => {
  const response = await axios.get(
    'https://worldtimeapi.org/api/timezone/Asia/Seoul'
  );
  return response.data;
};
