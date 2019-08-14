import React from 'react';
import PostForm from '../../features/PostForm/PostFormContainer';

const UpdatePost = ({ match }) => (
  <div>
    <PostForm isUpdate={true} id={match.params.id}/>
  </div>
);

export default UpdatePost;