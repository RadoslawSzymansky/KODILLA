const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
const ADD_COMMENT = 'ADD_COMMENT';

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
    id
  };
};

function editComment(text, id) {
  return {
    type: EDIT_COMMENT,
    text,
    id
  };
};

function thumbUpComment(id) {
  return {
    type: THUMB_UP_COMMENT,
    id
  };
};

function thumbDownComment(id) {
  return {
    type: THUMB_DOWN_COMMENT,
    id
  };
};