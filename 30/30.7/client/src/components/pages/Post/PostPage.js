import React from 'react';

const PostPage = props => (
  <div>
    <h1>Single post. 
      <br/> ID: {props.match.params.id}
    </h1>
  </div>
);

export default PostPage;