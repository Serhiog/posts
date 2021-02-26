const ActionType = {
  UPDATE_POSTS: "UPDATE_POSTS",
  GOT_POSTS: "GOT_POSTS",
  GET_AUTHORS: "GET_AUTHORS",
  MERGE_DATA: "MERGE_DATA",
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
  CLEAR_FORM: "CLEAR_FORM",
};

const ActionCreator = {
  updatePosts: (payload) => ({
    type: ActionType.UPDATE_POSTS,
    payload,
  }),
  gotPosts: () => ({
    type: ActionType.GOT_POSTS,
  }),
  updateAuthors: (payload) => ({
    type: ActionType.GET_AUTHORS,
    payload,
  }),
  savePost: (payload) => ({
    type: ActionType.SAVE_POST,
    payload,
  }),
  getComments: (payload) => ({
    type: ActionType.SAVE_COMMENTS,
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
    payload
  }),
  generateId: () => ({
    type: ActionType.GENERATE_ID,
  }),
  generateIdMessage: () => ({
    type: ActionType.GENERATE_ID_MESSAGE,
  }),
};

export { ActionCreator, ActionType };
