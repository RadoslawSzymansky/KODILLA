import axios from 'axios';
import { API_URL } from '../config';

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

/* SELECTORS */

export const getPosts = ({ posts }) => posts.data;
export const getPostsCount = ({ posts }) => posts.data.length;
export const getRequest = ({ posts }) => posts.request;
export const getSinglePost = ({ posts }) => posts.singlePost;
export const getPostToUpdate = ({ posts }) => posts.postToUpdate;

/* ACTIONS */

export const startRequest = () => ({ type: START_REQUEST });
export const loadPosts = payload => ({ payload, type: LOAD_POSTS });
export const loadSinglePost = payload => ({ payload, type: LOAD_SINGLE_POST });
export const loadPostToUpdate = payload => ({ payload, type: LOAD_POST_TO_UPDATE });
export const clearSinglePost = () => ({ type: CLEAR_POST_TO_UPDATE });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });
export const resetRequest = () => ({ type: RESET_REQUEST });

/* INITIAL STATE */

const initialState = {
  data: [],
  request: {
    pending: false,
    error: null,
    success: null,
  },
  singlePost: null,
  postToUpdate: null
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

    case CLEAR_POST_TO_UPDATE:
      return { ...statePart, postToUpdate: null };

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

      let res = await axios.get(`${API_URL}/posts`);
      await new Promise((resolve, reject) => setTimeout(resolve, 2000));
      dispatch(loadPosts(res.data));
      dispatch(endRequest());

    } catch (e) {
      dispatch(errorRequest(e.message));
    }

  };
};


export const loadSinglePostRequest = id => {
  return async dispatch => {

    dispatch(startRequest());
    try {

      let res = await axios.get(`${API_URL}/posts/${id}`);
      await new Promise((resolve, reject) => setTimeout(resolve, 2000));
      dispatch(loadSinglePost(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }

  };
};

export const loadPostToUpdateRequest = id => {
  return async dispatch => {
    
    dispatch(startRequest());
    try {

      let res = await axios.get(`${API_URL}/posts/${id}`);
      await new Promise((resolve, reject) => setTimeout(resolve, 2000));
      dispatch(loadPostToUpdate(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    };

  };
};

export const addPostRequest = (post) => {
  return async dispatch => {

    dispatch(startRequest());
    try {

      let res = await axios.post(`${API_URL}/posts`, post);
      await new Promise((resolve, reject) => setTimeout(resolve, 2000));
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

      let res = await axios.patch(`${API_URL}/posts`, post);
      await new Promise((resolve, reject) => setTimeout(resolve, 2000));
      dispatch(endRequest());

    } catch (e) {
      dispatch(errorRequest(e.message));
    }

  };
};

