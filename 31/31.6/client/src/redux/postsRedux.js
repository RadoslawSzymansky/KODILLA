import axios from 'axios';

// action name creator
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

export const LOAD_POSTS = createActionName('LOAD_POSTS');
export const LOAD_SINGLE_POST = createActionName('LOAD_SINGLE_POST');
export const LOAD_POST_TO_UPDATE = createActionName('LOAD_POST_TO_UPDATE');
export const CLEAR_POST_TO_UPDATE = createActionName('CLEAR_SINGLE_POST');
export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const RESET_REQUEST = createActionName('RESET_REQUEST');
export const LOAD_POSTS_PAGE = createActionName('LOAD_POSTS_PAGE');
export const LIKE_POST = createActionName('LIKE_POST');
export const UNLIKE_POST = createActionName('UNLIKE POST');

/* SELECTORS */

export const getPosts = ({ posts }) => posts.data;
export const getPostsCount = ({ posts }) => posts.data.length;
export const getRequest = ({ posts }) => posts.request;
export const getSinglePost = ({ posts }) => posts.singlePost;
export const getPostToUpdate = ({ posts }) => posts.postToUpdate;
export const getPages = ({ posts }) => Math.ceil(posts.amount / posts.postsPerPage);

/* ACTIONS */

export const startRequest = () => ({ type: START_REQUEST });
export const loadPosts = payload => ({ payload, type: LOAD_POSTS });
export const loadSinglePost = payload => ({ payload, type: LOAD_SINGLE_POST });
export const loadPostToUpdate = payload => ({ payload, type: LOAD_POST_TO_UPDATE });
export const clearSinglePost = () => ({ type: CLEAR_POST_TO_UPDATE });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });
export const resetRequest = () => ({ type: RESET_REQUEST });
export const loadPostsByPage = payload => ({ payload, type: LOAD_POSTS_PAGE });
export const likePost = payload => ({ payload, type: LIKE_POST });
export const unLikePost = payload => ({ payload, type: LIKE_POST });

/* INITIAL STATE */

const initialState = {
  data: [],
  request: {
    pending: false,
    error: null,
    success: null,
  },
  singlePost: null,
  postToUpdate: null,
  amount: 0,
  postsPerPage: 10,
  presentPage: 0
};

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    
    case LOAD_POSTS:
      return { ...statePart, data: action.payload };

    case LOAD_SINGLE_POST:
      return { ...statePart, singlePost: action.payload };
    
    case LOAD_POST_TO_UPDATE:
      return { ...statePart, postToUpdate: action.payload };
    
      case LOAD_POSTS_PAGE:
      return {
        ...statePart,
        postsPerPage: action.payload.postsPerPage,
        presentPage: action.payload.presentPage,
        amount: action.payload.amount,
        data: [...action.payload.posts],
      };

    case CLEAR_POST_TO_UPDATE:
      return { ...statePart, postToUpdate: null };

    case LIKE_POST || UNLIKE_POST:
      return {
        ...statePart,
        data: statePart.data.map(post => {
          const postCopy = {...post};
          if (post.id === action.payload.id) {
            postCopy.likes = action.payload.likes
          };
          return postCopy
        }),
        singlePost: {...statePart.singlePost, likes: action.payload.likes}
      };

    case START_REQUEST:
      return { ...statePart, request: { pending: true, error: null, success: null } };
    
    case END_REQUEST:
      return { ...statePart, request: { pending: false, error: null, success: true } };

    case RESET_REQUEST:
      return { ...statePart, request: { pending: false, error: null, success: null } };

    case ERROR_REQUEST:
      return { ...statePart, request: { pending: false, error: action.error, success: false } };
    
    default:
      return statePart;
  };
};

/* THUNKS */

export const loadPostsRequest = () => {
  return async dispatch => {

    dispatch(startRequest());
    try {

      let res = await axios.get(`/api/posts`);
      await new Promise((resolve, reject) => resolve() );
      dispatch(loadPosts(res.data));
      dispatch(endRequest());

    } catch (e) {
      dispatch(errorRequest(e.message));
    }

  };
};


export const loadSinglePostRequest = (id, update) => {
  return async dispatch => {

    dispatch(startRequest());
    try {
      const action = update ? loadPostToUpdate : loadSinglePost;
      let res = await axios.get(`/api/posts/${id}`);
      await new Promise((resolve, reject) => resolve() );
      dispatch(action(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }

  };
};

export const addPostRequest = (post) => {
  return async dispatch => {

    dispatch(startRequest());
    try {

      await axios.post(`/api/posts`, post);
      await new Promise((resolve, reject) => resolve() );
      dispatch(endRequest());

    } catch (e) {
      dispatch(errorRequest(e.message));
    }

  };
};

export const updatePostRequest = (post) => {
  return async dispatch => {

    dispatch(startRequest());
    try {

      await axios.patch(`/api/posts`, post);
      await new Promise((resolve, reject) => resolve() );
      dispatch(endRequest());

    } catch (e) {
      dispatch(errorRequest(e.message));
    }

  };
};

export const loadPostsByPageRequest = (page, postsPerPage) => {
  return async dispatch => {

    dispatch(startRequest());
    try {

      const limit = postsPerPage || 10;
      const startAt = (page - 1) * limit;

      let res = await axios.get(`/api/posts/range/${startAt}/${limit}`);
      await new Promise((resolve, reject) => resolve() );

      const payload = {
        posts: res.data.posts,
        amount: res.data.amount,
        postsPerPage: limit,
        presentPage: page,
      };

      dispatch(loadPostsByPage(payload));
      dispatch(endRequest());

    } catch (e) {
      dispatch(errorRequest(e.message));
    }

  };
};


export const loadRandomPostRequest = () => {
  return async dispatch => {

    dispatch(startRequest());
    try {
      let res = await axios.get(`/api/posts/random`);
      await new Promise((resolve, reject) => resolve() );
      dispatch(loadSinglePost(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }

  };
};

export const likePostRequest = id => {
  return async dispatch => {
  
    let res = await axios.put(`/api/posts/${id}/like`);
    await new Promise((resolve, reject) => resolve());
    dispatch(likePost({ id, likes: res.data }));

  };
};

export const unLikePostRequest = id => {
  return async dispatch => {

    let res = await axios.put(`/api/posts/${id}/unlike`);
    await new Promise((resolve, reject) => resolve());
    dispatch(unLikePost({ id, likes: res.data }));
  
  };
};