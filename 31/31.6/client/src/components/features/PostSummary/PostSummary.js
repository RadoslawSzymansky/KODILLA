import React from 'react';
import { PropTypes } from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { FacebookProvider, ShareButton } from 'react-facebook'
import { BASE_URL } from '../../../config';

import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';

import './PostSummary.scss';

const PostSummary = ({ id, title, content, author, location }) => (
  <article className="post-summary">
    <SmallTitle>{title}</SmallTitle>
    <FacebookProvider appId="727203911061100">
      <ShareButton href={`${BASE_URL}${location.pathname}`}>
        Share
      </ShareButton>
    </FacebookProvider>
    <p>Author: {author}</p>
    <HtmlBox>{content}</HtmlBox>
    <Link to={`/posts/${id}`}>
      <Button variant="primary">
        Read more
      </Button>
    </Link>
    <Link to={`/posts/edit/${id}`}>
      <Button variant="primary">
        Update post
      </Button>
    </Link>
  </article>
);

PostSummary.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.string.isRequired
};

export default withRouter(props => <PostSummary {...props} />);
