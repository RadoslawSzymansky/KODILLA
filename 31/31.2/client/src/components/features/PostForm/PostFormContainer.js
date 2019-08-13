import { connect } from 'react-redux';
import { getRequest, addPostRequest, resetRequest, updatePostRequest,  loadPostToUpdateRequest, getPostToUpdate } from '../../../redux/postsRedux';
import PostForm from './PostForm';

const mapStateToProps = (state) => ({
  request: getRequest(state),
  post: getPostToUpdate(state),
  state
});

const mapDispatchToProps = dispatch => ({
  addPost: (post) => dispatch(addPostRequest(post)),
  updatePost: (post) => dispatch(updatePostRequest(post)),
  resetRequest: () => dispatch(resetRequest()),
  loadPost: (id) => dispatch(loadPostToUpdateRequest(id)),
  // clearUpdatePost: () => dispatch(clearSinglePost())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);