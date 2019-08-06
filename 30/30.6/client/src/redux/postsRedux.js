import axios from 'axios';

// action name creator
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

/* SELECTORS */
export const LOAD_POSTS = createActionName('LOAD_POSTS');

/* ACTIONS */

export const loadPosts = payload => ({ payload, type: LOAD_POSTS });


/* INITIAL STATE */

const initialState = [];

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_POSTS:
      return [...action.payload];
    default:
      return statePart;
  };
};

/* THUNKS */

export const loadPostsRequest = () => {
  return dispatch => {

    axios.get('http://localhost:8000/api/posts')
      .then(res => {
        dispatch(loadPosts(res.data));
        console.log('ress', res)
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};

export const getPosts = ({ posts }) => posts;
