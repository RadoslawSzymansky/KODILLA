import React from 'react';

class PostsCounter extends React.Component {

  render() {
    const { postsCount } = this.props;

    return (
      <div>{postsCount ? `Posts amount: ${postsCount}` : '-- no posts --' }</div>
    );
  }

};

export default PostsCounter;
