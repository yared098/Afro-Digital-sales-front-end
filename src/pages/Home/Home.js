import React from 'react';
import { useFetchMenu } from '../../state/queries';

const Home = () => {
  const { data: menu, isLoading, error } = useFetchMenu();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Home Page</h1>
      <ul className="mt-4">
        {menu.map((item) => (
          <li key={item.id} className="py-2 border-b">
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
