export function getPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json;
    });
}

export function getUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json;
    });
}

export function getComments() {
  return fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json;
    });
}

export function getPost(id) {
  return fetch("https://jsonplaceholder.typicode.com/posts/" + id)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json;
    });
}

// /posts	100 posts
// /comments	500 comments
// /albums	100 albums
// /photos	5000 photos
// /todos	200 todos
// /users	10 users

// GET	/posts
// GET	/posts/1
// GET	/posts/1/comments
// GET	/comments?postId=1
// POST	/posts
// PUT	/posts/1
// PATCH	/posts/1
// DELETE	/posts/1
