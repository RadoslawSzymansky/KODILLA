import React from 'react';

const Comment = ({ text, votes, id, thumbUpComment, thumbDownComment }) => (
  <li>
    {text} <span>votes: {votes}</span> 
    <button onClick={() => thumbUpComment(id)}>Thumb up</button>
    <button onClick={() => thumbDownComment(id)}>Thumb down</button>
  </li>
);
export default Comment;