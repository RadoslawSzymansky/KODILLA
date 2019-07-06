import React from 'react';
import CommentContainer from './CommentContainer';

const CommentsList = ({ comments }) => <ul>{comments.map(comment => <CommentContainer key={comment.id} {...comment} />)}</ul>;

export default CommentsList;