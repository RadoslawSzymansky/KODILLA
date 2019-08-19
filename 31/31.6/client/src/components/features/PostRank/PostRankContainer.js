import { connect } from 'react-redux';
import { likePostRequest, unLikePostRequest } from '../../../redux/postsRedux';
import PostRank from './PostRank';

const mapDispatchToProps = (dispatch, ownProps) => ({
  likePost: () => dispatch(likePostRequest(ownProps.id)),
  unLikePost: () => dispatch(unLikePostRequest(ownProps.id)),
});

export default connect(null, mapDispatchToProps)(PostRank);