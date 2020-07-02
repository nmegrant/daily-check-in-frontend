import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectMe, selectAdmin } from "./store/auth/selectors";
import { getUserWithStoredToken } from "./store/auth/actions";
import {
  selectMessageInfo,
  selectLoadingStatus,
} from "./store/appstate/selectors";
import "./App.css";
import Homepage from "./pages/Homepage";
import FormPage from "./pages/FormPage";
import AdminPage from "./pages/AdminPage";
import ResultsPage from "./pages/ResultsPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import AlertBox from "./components/AlertBox";
import Loading from "./components/Loading";

function App() {
  const dispatch = useDispatch();
  const me = useSelector(selectMe);
  const message = useSelector(selectMessageInfo());
  const adminState = useSelector(selectAdmin);
  const loading = useSelector(selectLoadingStatus());

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      {loading ? <Loading /> : null}
      {message !== null ? (
        <AlertBox text={message.message} severity={message.severity} />
      ) : null}
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/form" component={FormPage} />
        <Route exact path="/admin">
          {adminState === false ? <Redirect to="/" /> : <AdminPage />}
        </Route>
        {/* <Route path="/admin" component={AdminPage} /> */}
        <Route path="/results" component={ResultsPage} />
        <Route path="/login">{me ? <Redirect to="/" /> : <LoginPage />}</Route>
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
