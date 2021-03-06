import "./style.css";
import React from "react";
import { Router, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import List from "./components/list";
import Post from "./components/post";
import { connect } from "react-redux";
import history from "./browser-history";

function App({ combinedData }) {
  return (
    <React.Fragment>
      <Router history={history}>
        <Header />
        <Route
          exact
          path="/"
          render={() => {
            return <List />;
          }}
        />
        <Route
          exact
          path={"/post/:id"}
          render={({ match }) => {
            return (
              <Post
                param={match.params.id}
              />
            );
          }}
        />
        <Footer />
      </Router>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  combinedData: state.combinedData,
});

export default connect(mapStateToProps)(App);
