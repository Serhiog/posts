import "./style.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import List from "./components/list";
import Post from "./components/post";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Route
          exact
          path="/"
          render={() => {
            return <List />;
          }}
        />
        <Route
          path={"/post"}
          render={() => {
            return <Post />;
          }}
        />
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
