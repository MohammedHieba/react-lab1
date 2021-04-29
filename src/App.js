import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/header/Header";
import Form from "./components/form/form";
import List from "./components/list/List";
import Todo from "./components/todo/Todo";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }

  render() {
    return (
      <Router>
        <Header />
        <div className="container">
          <br />
          <Switch>
            <Route path="/form" component={Form} />
            <Route path="/list" component={List} />
            <Route path="/" component={Todo} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
