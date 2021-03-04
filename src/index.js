import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./store/rootReducer";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { fetchPosts, fetchUsers } from "./api-actions";
import { ActionCreator } from "./store/action";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

Promise.all([store.dispatch(fetchPosts()), store.dispatch(fetchUsers())])
  .then(() => {
    store.dispatch(ActionCreator.combineData());
  })
  .then(() => {
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>,
      document.getElementById("root")
    );
  });
