import axios from 'axios';
import { useEffect, useState } from 'react';

// 전통적인 방식(useEffect,useState)사용할 컴포넌트
export default function SuperheroesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  // 우리가 흔히 useState,useEffect을 사용하던 방식의 get 요청
  useEffect(() => {
    axios
      .get('http://localhost:4000/superher1oes')
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <>
      <h2>Super Heroes Page</h2>
      {data.map((hero) => {
        return <div>{hero.name}</div>;
      })}
    </>
  );
}
