import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserWithStoredToken } from "./store/auth/actions";
import "./App.css";
import Homepage from "./pages/Homepage";
import FormPage from "./pages/FormPage";
import AdminPage from "./pages/AdminPage";
import ResultsPage from "./pages/ResultsPage";
import LoginPage from "./pages/LoginPage";

//I am changing this for no reason just to have a change.
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Switch> 
        <Route exact path="/" component={Homepage} />
        <Route path="/form" component={FormPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/results" component={ResultsPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
