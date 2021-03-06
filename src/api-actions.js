import { getPosts, getUsers, getComments, getPost, deletePost } from "./api";
import { ActionCreator } from "./store/action";

export const fetchPosts = () => (dispatch) => {
  return getPosts()
    .then((response) => {
      dispatch(ActionCreator.updatePosts(response));
    })
    .then(() => {
      dispatch(ActionCreator.gotPosts());
    });
};

export const fetchUsers = () => (dispatch) => {
  return getUsers().then((response) => {
    dispatch(ActionCreator.getUsers(response));
  });
};

export const fetchComments = (id) => (dispatch) => {
  getComments(id).then((response) => {
    dispatch(ActionCreator.getComments(response));
  });
};

export const fetchPost = (id) => (dispatch) => {
  getPost(id)
    .then((response) => {
      dispatch(ActionCreator.savePost(response));
    })
    .then(() => {
      dispatch(ActionCreator.combinePost());
    });
};

export const fetchDeletePost = (id) => (dispatch) => {
  deletePost(id).then((response) => {
    console.log(response);
  });
};
