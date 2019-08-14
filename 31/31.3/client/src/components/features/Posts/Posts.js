import React from 'react';
import { PropTypes } from 'prop-types';

import PostsList from '../PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Pagination from '../../common/Pagination/Pagination';

class Posts extends React.Component {
  state = {
    presentPage: this.props.initialPage || 1,
    postsPerPage: this.props.postsPerPage || 10,
    pagination: this.props.pagination !== undefined
      ? 
        this.props.pagination
      :
        true
  }

  componentDidMount() { 
    const { loadPostsByPage } = this.props;
    const { presentPage, postsPerPage } = this.state;

    loadPostsByPage(presentPage, postsPerPage);
  }

  loadPostsPage = (page) => {
    const { loadPostsByPage } = this.props;
    const { postsPerPage } = this.state;

    this.setState({ presentPage: page });
    loadPostsByPage(page, postsPerPage);
  }

  renderContent() {

    const { pending, error, success } = this.props.request;
    const { posts } = this.props;
    const { presentPage, pagination } = this.state;
    switch (true) {

      case !pending && success && posts.length > 0: 
        return (
          <>
            <PostsList posts={posts} />
            { pagination 
              ?
                <Pagination pages={this.props.pages} onPageChange={this.loadPostsPage} page={presentPage}/>
              : 
                null
            }
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
    console.log("wywoluje posts")
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
  postsPerPage: PropTypes.number,
};

export default Posts;