import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error from "./Components/Error/Error";
import Login from "./Components/Login/Login";
import Details from "./Components/Details/Details";
import React, {createContext, useState} from 'react';
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Header></Header>
        <Switch>

          <Route path="/home">
            <Home></Home>
          </Route>    

          <Route exact path="/">
            <Home></Home>
            </Route>      

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/details/:id">
            <Details></Details>
          </PrivateRoute>

          <Route path="*">
            <Error></Error>
          </Route>

        </Switch>

      </Router>
    </UserContext.Provider>
  );
}

export default App;
