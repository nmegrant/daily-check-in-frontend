import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import FormPage from "./pages/FormPage";
import AdminPage from "./pages/AdminPage";
import ResultsPage from "./pages/ResultsPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/form" component={FormPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/results" component={ResultsPage} />
      </Switch>
    </div>
  );
}

export default App;
