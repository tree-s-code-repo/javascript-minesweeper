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

export const getTodo2 = async (id) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  return res.data;
};
function App() {
  console.log('render?');
  const id = 1;

  const { data, refetch } = useQuery({
    staleTime: 15 * 1000,
    queryKey: ['getTodo', id],
    queryFn: () => getTodo(id),
    placeholderData: { title: 'todo1' }, //캐시에 유지되지 않는다.
  });

  // // 두 번째 useQuery에서 id 변수를 사용합니다.
  const { data: data2, refetch: refetch2 } = useQuery({
    staleTime: 15 * 1000,
    queryKey: ['getTodo2'], // 여기서는 id + 1로 예시를 들었습니다.
    queryFn: () => getTodo2(2),
    initialData: { title: 'todo2' }, //캐시 유지
  });

  console.log('place holder');
  console.log(data);
  console.log('initial data');
  console.log(data2);

  return (
    <>
      <div>Todo 1: {data.title}</div>
      <div>Todo 2: {data2.title}</div>
      <button
        onClick={() => {
          refetch();
          console.log(data);
        }}
      >
        여기를 클릭하면 리패치가 되어요.
      </button>
      <br />
      <button
        onClick={() => {
          refetch2();
          console.log(data2);
        }}
      >
        여기를 클릭하면 리패치222 가 되어요.
      </button>

      {/* {data2 && <div>Todo 2: {data2.title}</div>} */}
      {/* {results.map((result, index) =>
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
