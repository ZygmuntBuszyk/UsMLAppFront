import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import { Router } from "react-router";
import './App.css';
import LoanForm from './components/loanForm';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import Status from './components/status';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact  path="/">
            <RegisterForm />
          </Route>
          <Route path="/register">
            <RegisterForm />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/loanForm">
            <LoanForm />
          </Route>
          <Route path="/status">
            <Status />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
