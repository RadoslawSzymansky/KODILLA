export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
export const ADD_COMMENT = 'ADD_COMMENT';

function addComment(text) {
  return {
    type: ADD_COMMENT,
    text,
    id: uuid.v4()
  };
};

function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    payload: id
  };
};

function editComment(text, id) {
  return {
    type: EDIT_COMMENT,
    payload: {
      text,
      id
    }
  };
};

function thumbUpComment(id) {
  return {
    type: THUMB_UP_COMMENT,
    payload: id
  };
};

function thumbDownComment(id) {
  return {
    type: THUMB_DOWN_COMMENT,
    payload: id
  };
};