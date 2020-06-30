import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectMe } from "./store/auth/selectors";
import { getUserWithStoredToken } from "./store/auth/actions";
import "./App.css";
import Homepage from "./pages/Homepage";
import FormPage from "./pages/FormPage";
import AdminPage from "./pages/AdminPage";
import ResultsPage from "./pages/ResultsPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";

//I am changing this for no reason just to have a change.
function App() {
  const dispatch = useDispatch();
  const me = useSelector(selectMe);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/form" component={FormPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/results" component={ResultsPage} />
        <Route path="/login">{me ? <Redirect to="/" /> : <LoginPage />}</Route>
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
