import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectMe, selectAdmin } from "./store/auth/selectors";
import { getUserWithStoredToken } from "./store/auth/actions";
import {
  selectMessageInfo,
  selectLoadingStatus,
  selectTheme,
} from "./store/appstate/selectors";

import Homepage from "./pages/Homepage";
import FormPage from "./pages/FormPage";
import AdminPage from "./pages/AdminPage";
import ResultsPage from "./pages/ResultsPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import AlertBox from "./components/AlertBox";
import Loading from "./components/Loading";

import { GlobalStyles } from "./components/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/Themes";

function App() {
  const dispatch = useDispatch();
  const me = useSelector(selectMe);
  const message = useSelector(selectMessageInfo());
  const adminState = useSelector(selectAdmin);
  const loading = useSelector(selectLoadingStatus());
  const theme = useSelector(selectTheme);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
        {loading ? <Loading /> : null}
        <Navbar />
        {message !== null ? (
          <AlertBox text={message.message} severity={message.severity} />
        ) : null}
        <Container>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/form">
            {me ? <FormPage /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/admin">
            {adminState === false ? <Redirect to="/" /> : <AdminPage />}
          </Route>
          <Route path="/results" component={ResultsPage} />
          <Route path="/login">{me ? <Redirect to="/" /> : <LoginPage />}</Route>
          <Route path="/signup" component={SignUp} />
        </Switch>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;

const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
