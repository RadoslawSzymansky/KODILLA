import { connect } from 'react-redux';
import { getSinglePost, loadSinglePostRequest, getRequest, loadRandomPostRequest } from '../../../redux/postsRedux';
import SinglePost from './SinglePost';

const mapStateToProps = state => ({
  singlePost: getSinglePost(state),
  request: getRequest(state)
}); 

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadSinglePost: () => dispatch(loadSinglePostRequest( ownProps.id )),
  loadRandomPost: () => dispatch(loadRandomPostRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);