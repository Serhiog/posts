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
  users: [],
  combinedData: [],
  actualComments: [],
  combinedPost: {},
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
        combinedData: state.combinedData.filter((post) => {
          return post.id !== action.payload;
        }),
      });
    case ActionType.DELETE_COMMENT:
      return Object.assign({}, state, {
        actualComments: state.actualComments.filter((comment) => {
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
        combinedData: [
          ...state.combinedData,
          {
            name: action.payload.name,
            email: action.payload.email,
            body: action.payload.message,
            id: state.formId,
            title: action.payload.email,
          },
        ],
      });
    case ActionType.SEND_BTN_MESSAGE:
      return Object.assign({}, state, {
        actualComments: [
          ...state.actualComments,
          {
            name: action.payload.name,
            email: action.payload.email,
            body: action.payload.message,
            id: state.formId,
            title: action.payload.email,
          },
        ],
      });
    case ActionType.GENERATE_ID:
      return Object.assign({}, state, {
        formId: state.combinedData[state.combinedData.length - 1].id + 1,
      });
    case ActionType.GENERATE_ID_MESSAGE:
      return Object.assign({}, state, {
        formId: state.actualComments[state.actualComments.length - 1].id + 1,
      });
    case ActionType.GET_USERS:
      return Object.assign({}, state, {
        users: action.payload,
      });
    case ActionType.COMBINE_DATA:
      return Object.assign({}, state, {
        combinedData: state.posts.map((post) => {
          const user = state.users.find((user) => user.id === post.id);
          return Object.assign(
            {},
            post,
            { name: user.name },
            { email: user.email }
          );
        }),
      });
    case ActionType.GET_COMMENTS:
      return Object.assign({}, state, {
        activeComments: action.payload.filter((c) => {
          const comment = state.combinedData.find(
            (post) => post.id === c.postId
          );
          return comment;
        }),
      });
    case ActionType.GET_ACTUAL_COMMENTS:
      return Object.assign({}, state, {
        actualComments: state.activeComments.filter((comment) => {
          return comment.postId === action.payload;
        }),
      });
    case ActionType.COMBINE_POST:
      return Object.assign({}, state, {
        combinedPost: Object.assign(
          {},
          state.activePost,
          state.users.find((user) => {
            return user.id === state.activePost.id;
          })
        ),
      });
    default:
      return state;
  }
};

export { rootReducer };
