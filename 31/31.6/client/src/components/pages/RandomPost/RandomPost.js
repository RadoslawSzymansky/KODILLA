import React from 'react';
import SinglePost from '../../features/SinglePost/SinglePostContainer';

const RandomPost = ({ match }) => (
  <div>
    <SinglePost random={true} />
  </div>
);

export default RandomPost;