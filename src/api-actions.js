import { getPosts, getUsers, getComments, getPost } from "./api";
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

export const fetchComments = () => (dispatch) => {
  getComments().then((response) => {
    dispatch(ActionCreator.getComments(response));
  });
};

export const fetchPost = (id) => (dispatch) => {
  getPost(id).then((response) => {
    dispatch(ActionCreator.savePost(response));
  });
};
