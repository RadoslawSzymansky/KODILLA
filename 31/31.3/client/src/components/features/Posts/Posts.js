import React from 'react';
import { PropTypes } from 'prop-types';

import PostsList from '../PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Pagination from '../../common/Pagination/Pagination';

class Posts extends React.Component {

  componentDidMount() { 
    console.log("mount posts")
    const { loadPostsByPage } = this.props;
    loadPostsByPage(1);
  }

  loadPostsPage = (page) => {
    const { loadPostsByPage } = this.props;
    loadPostsByPage(page);
  }

  renderContent() {

    const { pending, error, success } = this.props.request;
    const {  posts } = this.props;

    switch (true) {

      case !pending && success && posts.length > 0: 
        return (
          <>
            <PostsList posts={posts} />
            <Pagination pages={this.props.pages} onPageChange={this.loadPostsPage} />
          </>
        )

      case pending && !success:
        return <Spinner />;

      case !pending && error:
        return <Alert variant='error'>{error}</Alert>;

      case !pending && success && posts.length === 0:
        return <Alert variant='info'>No posts...</Alert>;

      default:
        return null;
        
    }
  }

  render() {

    return (
      <div>
        {this.renderContent()}
        
      </div>
    );
  };

};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    })
  ),
  loadPostsByPage: PropTypes.func.isRequired,
};

export default Posts;