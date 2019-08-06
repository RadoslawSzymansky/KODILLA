import React from 'react';

class PostsCounter extends React.Component {

  render() {
    console.log(this.props)
    const { posts } = this.props;
    return (
      <div>{posts.length ? `Posts amount: ${posts.length}` : '-- no posts --' }</div>
    );
  }

};

export default PostsCounter;
