import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import PostSummary from '../../features/PostSummary/PostSummary';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';

class SinglePost extends Component {

  componentDidMount() {
    this.props.loadSinglePost();
  }

  renderContent() {
    const { pending, error, success } = this.props.request;
    const { singlePost } = this.props;

    switch (true) {

      case !pending && success && singlePost !== null:
        return <PostSummary {...singlePost} />;

      case pending && !success:
        return <Spinner />;

      case !pending && error:
        return <Alert variant='error'>{error}</Alert>;

      default:
        return null;

    }
  }

  render() {
    return(
      <div>{ this.renderContent() }</div>
    );
  } 
};

PostSummary.propTypes = {
  singlePost: PropTypes.object,
  request: PropTypes.object,
  loadSinglePost: PropTypes.func
};

export default SinglePost;