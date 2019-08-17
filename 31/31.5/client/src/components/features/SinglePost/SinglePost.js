import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { FacebookProvider, Comments } from 'react-facebook';
import { withRouter } from 'react-router-dom';
import { BASE_URL } from '../../../config';
import PostSummary from '../../features/PostSummary/PostSummary';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';

class SinglePost extends Component {

  componentDidMount() {
    const { random, loadSinglePost, loadRandomPost } = this.props;
    if (random) return loadRandomPost();
    loadSinglePost();
  }

  renderContent() {
    const { pending, error, success } = this.props.request;
    const { singlePost, location } = this.props;

    switch (true) {

      case !pending && success && singlePost !== null:
        return (
          <>
            <PostSummary {...singlePost} />
            <FacebookProvider appId="727203911061100">
              <Comments href={`${BASE_URL}${location.pathname}`} />
            </FacebookProvider>
          </>
        );

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

export default withRouter(props => <SinglePost {...props} />);
