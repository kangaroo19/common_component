import axios from 'axios';
import { useEffect, useState } from 'react';
// import { useQuery } from '@tanstack/react-query';
// import { seoulDateFn, seoulDateKey } from '../utils/query/callSeoulDateQuery';

export default function HomePage() {
  const [traditionalDate, setTraditionalDate] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get('https://worldtimeapi.org/api/timezone/Asia/Seoul')
  //     .then((res) => {
  //       setTraditionalDate(res.data.datetime);
  //     });
  // }, [traditionalDate]);
  return (
    <>
      {/* <div>traditional : {traditionalDate}</div> */}
      {/* <div>react-query : {data.datetime}</div> */}
    </>
  );
}
