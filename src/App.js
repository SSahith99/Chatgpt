import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FormComponent from "./components/FormComponent";
import ResultPage from "./components/ResultPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <FormComponent {...props} />}
          />
          <Route path="/result" render={(props) => <ResultPage {...props} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
