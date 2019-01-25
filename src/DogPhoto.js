/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { get } from 'lodash';
import { object, string } from 'prop-types';
import { withDogPhotoQuery } from './graphql/hoc';

const DogPhoto = (props) => {
  const { refetch, networkStatus, loading, error } = props.data;
  if (networkStatus === 4) return "Refetching!";
  if (loading) return null;
  if (error) return `Error!: ${error}`;
  return (
    <div>
      <img
        src={get(props.data, 'dog.displayImage', '')}
        style={{ height: 100, width: 100 }}
      />
      {!loading && (
        <div>
          <button onClick={() => refetch()}>Refetch!</button>
        </div>
      )}
     
    </div>
  );
}

DogPhoto.propTypes = {
  breed: string,
  data: object.isRequired,
}

DogPhoto.defaultProps = {
  breed: '',
}

export default withDogPhotoQuery(DogPhoto);