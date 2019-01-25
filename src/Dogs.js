import React from 'react';
import { get } from 'lodash';
import { withDogListQuery } from './graphql/hoc';

const Dogs = ({ onDogSelected, data }) => {
  const { loading, error } = data;
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <select name="dog" onChange={onDogSelected}>
      {get(data, 'dogs', []).map(dog => (
        <option key={dog.id} value={dog.breed}>
          {dog.breed}
        </option>
      ))}
    </select>
  )
};

export default withDogListQuery(Dogs)