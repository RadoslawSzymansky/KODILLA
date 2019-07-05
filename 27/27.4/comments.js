import { 
  REMOVE_COMMENT,
  EDIT_COMMENT,
  THUMB_UP_COMMENT,
  THUMB_DOWN_COMMENT,
  ADD_COMMENT
} from './actions';


function reducer(state = [], action) {
  switch (action.type) {

    case ADD_COMMENT:
      return [...state, {
        id: action.id,
        text: action.id,
        votes: 0
      }];

    case REMOVE_COMMENT:
      return state.comments.filter(comment => comment.id !== action.id);

    case EDIT_COMMENT:
      return state.map(comment => {
        if(comment.id ===  action.payload.id) comment.text = action.payload.text;
        return comment;
      });

    case THUMB_DOWN_COMMENT:
      return  state.map(comment => {
          if (comment.id === action.payload) comment.votes--;
          return comment;
      });

    case THUMB_UP_COMMENT:
      return state.map(comment => {
          if (comment.id === action.payload) comment.votes++;
          return comment;
      });

    default:
      return state;
  };
};

export default reducer;