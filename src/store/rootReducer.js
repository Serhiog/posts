import { ActionType } from "./action";

const initialState = {
  gotPosts: false,
  posts: [],
  activePost: {},
  activeComments: [],
  formName: "",
  formEmail: "",
  formMessage: "",
  formId: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_POSTS:
      return Object.assign({}, state, { posts: action.payload.slice(0, 10) });
    case ActionType.SAVE_POST:
      return Object.assign({}, state, { activePost: action.payload });
    case ActionType.GOT_POSTS:
      return Object.assign({}, state, { gotPosts: true });
    case ActionType.SAVE_COMMENTS:
      return Object.assign({}, state, { activeComments: action.payload });
    case ActionType.DELETE_POST:
      return Object.assign({}, state, {
        posts: state.posts.filter((post) => {
          return post.id !== action.payload;
        }),
      });
    case ActionType.DELETE_COMMENT:
      return Object.assign({}, state, {
        activeComments: state.activeComments.filter((comment) => {
          return comment.id !== action.payload;
        }),
      });
    case ActionType.CHANGE_NAME:
      return Object.assign({}, state, { formName: action.payload });
    case ActionType.CHANGE_EMAIL:
      return Object.assign({}, state, { formEmail: action.payload });
    case ActionType.CHANGE_MESSAGE:
      return Object.assign({}, state, { formMessage: action.payload });
    case ActionType.SEND_BTN:
      return Object.assign({}, state, {
        posts: [
          ...state.posts,
          {
            name: action.payload.name,
            email: action.payload.email,
            body: action.payload.message,
            id: state.formId,
          },
        ],
      });
    case ActionType.SEND_BTN_MESSAGE:
      return Object.assign({}, state, {
        activeComments: [
          ...state.activeComments,
          {
            name: action.payload.name,
            email: action.payload.email,
            body: action.payload.message,
            id: state.formId,
          },
        ],
      });
    case ActionType.GENERATE_ID:
      return Object.assign({}, state, {
        formId: state.posts[state.posts.length - 1].id + 1,
      });
    case ActionType.GENERATE_ID_MESSAGE:
      return Object.assign({}, state, {
        formId: state.activeComments[state.activeComments.length - 1].id + 1,
      });
    default:
      return state;
  }
};

export { rootReducer };
