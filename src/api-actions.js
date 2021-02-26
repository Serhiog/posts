import { getPosts, getComments } from "./api";
import { ActionCreator } from "./store/action";

const fetchPosts = () => (dispatch) => {
  dispatch(ActionCreator.gotPosts());
  getPosts().then((response) => {
    dispatch(ActionCreator.updatePosts(response));
  });
};

const fetchComments = (id) => (dispatch) => {
  getComments(id).then((response) => {
    dispatch(ActionCreator.getComments(response));
  });
};

export { fetchPosts, fetchComments };
