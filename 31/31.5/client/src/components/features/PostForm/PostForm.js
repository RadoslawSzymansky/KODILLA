import React from 'react';
import { PropTypes } from 'prop-types';
import Editor from 'react-medium-editor';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';

import TextField from '../../common/TextField/TextField';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import Button from '../../common/Button/Button';
import Alert from '../../common/Alert/Alert';
import Spinner from '../../common/Spinner/Spinner';

import './PostForm.scss';

class PostForm extends React.Component {

  state = {
    post: {
      title: '',
      author: '',
      content: ''
    }
  }

  async componentDidMount () {
    const {loadPost, resetRequest, isUpdate, id } = this.props
    
    if(isUpdate) {
      await loadPost(id)
      resetRequest();

      this.setState({post: this.props.post});
    } else {
      resetRequest();
    };
  };
  
  handleChange = (e) => {
    const { post } = this.state;
    this.setState({ post: { ...post, [e.target.name]: e.target.value } })
  }

  handleEditor = (text) => {
    const { post } = this.state;
    this.setState({ post: { ...post, content: text } })
  }

  sendPost = (e) => {
    const { addPost, updatePost, isUpdate } = this.props;
    const { post } = this.state;

    const callback = isUpdate ? updatePost : addPost;

    e.preventDefault();
    callback(post);
  }

  render() {

    const { post } = this.state;
    const { handleChange, handleEditor, sendPost } = this;
    const { request, isUpdate } = this.props;

    if (request.error) return <Alert variant="error">{request.error}</Alert>
    else if (request.success) return <Alert variant="success">{`Post has been ${isUpdate ? "updated" : "added"}!`}</Alert>
    else if (request.pending) return <Spinner />
    else return (
      <form onSubmit={sendPost}>

        <TextField
          label="Title"
          value={post.title}
          onChange={handleChange}
          name="title"
        />

        <TextField
          label="Author"
          value={post.author}
          onChange={handleChange}
          name="author"
        />

        <SectionTitle>Edit post content</SectionTitle>

        <Editor
          className="content-editor"
          text={post.content}
          onChange={handleEditor}
          options={{ placeholder: false, toolbar: { buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3'] } }}
        />

        <Button variant="primary">{isUpdate? "Update" : "Add"} post</Button>

      </form>
    );
  }
};

PostForm.propTypes = {
  request: PropTypes.object.isRequired,
  addPost: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
  isUpdate: PropTypes.bool
};

export default PostForm;