import React from 'react';

const PostRank = ({ likes, likePost, unLikePost }) => {
  return (
    <div className="post-rank">
      <button className="button button--primary" onClick={ unLikePost }>-</button>
      <span className="likes">{likes}</span>
      <button className="button button--primary" onClick={ likePost }>+</button>
    </div>
  );
};

export default PostRank;
