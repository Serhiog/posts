const ActionType = {
  UPDATE_POSTS: "UPDATE_POSTS",
  GOT_POSTS: "GOT_POSTS",
  GET_USERS: "GET_USERS",
  SAVE_POST: "SAVE_POST",
  SAVE_COMMENTS: "SAVE_COMMENTS",
  DELETE_POST: "DELETE_POST",
  DELETE_COMMENT: "DELETE_COMMENT",
  CHANGE_NAME: "CHANGE_NAME",
  CHANGE_EMAIL: "CHANGE_EMAIL",
  CHANGE_MESSAGE: "CHANGE_MESSAGE",
  SEND_BTN: "SEND_BTN",
  GENERATE_ID: "GENERATE_ID",
  SEND_BTN_MESSAGE: "SEND_BTN_MESSAGE",
  GENERATE_ID_MESSAGE: "GENERATE_ID_MESSAGE",
  COMBINE_DATA: "COMBINE_DATA",
  GET_COMMENTS: "GET_COMMENTS",
  GET_ACTUAL_COMMENTS: "GET_ACTUAL_COMMENTS",
  COMBINE_POST: "COMBINE_POST",
};

const ActionCreator = {
  updatePosts: (payload) => ({
    type: ActionType.UPDATE_POSTS,
    payload,
  }),
  gotPosts: () => ({
    type: ActionType.GOT_POSTS,
  }),
  savePost: (payload) => ({
    type: ActionType.SAVE_POST,
    payload,
  }),
  deletePost: (payload) => ({
    type: ActionType.DELETE_POST,
    payload,
  }),
  deleteComment: (payload) => ({
    type: ActionType.DELETE_COMMENT,
    payload,
  }),
  handleName: (payload) => ({
    type: ActionType.CHANGE_NAME,
    payload,
  }),
  handleEmail: (payload) => ({
    type: ActionType.CHANGE_EMAIL,
    payload,
  }),
  handleMessage: (payload) => ({
    type: ActionType.CHANGE_MESSAGE,
    payload,
  }),
  handleSendBtn: (payload) => ({
    type: ActionType.SEND_BTN,
    payload,
  }),
  handleSendBtnMessage: (payload) => ({
    type: ActionType.SEND_BTN_MESSAGE,
    payload,
  }),
  generateId: () => ({
    type: ActionType.GENERATE_ID,
  }),
  generateIdMessage: () => ({
    type: ActionType.GENERATE_ID_MESSAGE,
  }),
  getUsers: (payload) => ({
    type: ActionType.GET_USERS,
    payload,
  }),
  combineData: () => ({
    type: ActionType.COMBINE_DATA,
  }),
  getComments: (payload) => ({
    type: ActionType.GET_COMMENTS,
    payload,
  }),
  getActualComments: (payload) => ({
    type: ActionType.GET_ACTUAL_COMMENTS,
    payload,
  }),
  combinePost: () => ({
    type: ActionType.COMBINE_POST,
  }),
};

export { ActionCreator, ActionType };
