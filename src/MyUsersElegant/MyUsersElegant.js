import React from 'react';
import useFetch from './useFetch'; // Import the custom hook

function MyUsersElegant() {
  const endpoint = 'https://jsonplaceholder.typicode.com/users';
  const { data, loading, error } = useFetch(endpoint); // Use the custom hook

  return (
    <div>
      <h1>Users List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyUsersElegant;