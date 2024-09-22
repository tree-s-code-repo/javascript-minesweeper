import { useQuery, useQueries } from '@tanstack/react-query';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';

export const getTodo = async (id) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  return res.data;
};

export const getTodo222 = async (id) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  return res.data;
};

function App() {
  console.log('render?');

  const id = 1;

  const { data } = useQuery({
    queryKey: ['getTodo', id],
    queryFn: () => getTodo(id),
  });

  // 두 번째 useQuery에서 id 변수를 사용합니다.
  const { data: data2 } = useQuery({
    queryKey: ['getTodo2'], // 여기서는 id + 1로 예시를 들었습니다.
    queryFn: () => getTodo222(2),
  });

  // const ids = [1, 2, 3]; // 예시로 1, 2, 3을 사용
  // const results = useQueries({
  //   queries: ids.map((id) => ({
  //     queryKey: ['post', id],
  //     queryFn: () => getTodo(id + 10),
  //     staleTime: Infinity,
  //   })),
  // });

  // useEffect(() => {
  //   console.log('여기');

  //   results.forEach((x) => {
  //     console.log('>>>>>isLoading>>>>>>>>>>>');
  //     console.log(x.isLoading);
  //     console.log('>>>>>data>>>>>>>>>>>');
  //     console.log(x.data);
  //   });
  // }, [results]);

  return (
    <>
      <div>test !!gd</div>
      {/* {data && <div>Todo 1: {data.title}</div>}
      {data2 && <div>Todo 2: {data2.title}</div>}
      {results.map((result, index) =>
        result.data ? (
          <div key={index}>
            Todo {index + 1}: {result.data.title}
          </div>
        ) : null
      )} */}
    </>
  );
}

export default App;
