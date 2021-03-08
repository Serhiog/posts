import axios from "axios";

export function getPosts() {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return response.data;
    });
}

export function getUsers() {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.data;
    });
}

export function getComments(id) {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts/" + id + "/comments")
    .then((response) => {
      return response.data;
    });
}

export function getPost(id) {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts/" + id)
    .then((response) => {
      return response.data;
    });
}

export function deletePost(id) {
  return axios.delete("https://jsonplaceholder.typicode.com/posts/" + id);
}

export function deleteComment(id) {
  return axios.delete("https://jsonplaceholder.typicode.com/comments/" + id);
}

export function addPost({ name, email, message }) {
  return axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      name,
      email,
      message,
    })
    .then((response) => {
      return response.data;
    });
}

export function addComment({ name, email, message }) {
  return axios
    .put("https://jsonplaceholder.typicode.com/posts/1", {
      name,
      email,
      message,
    })
    .then((response) => {
      return response.data;
    });
}