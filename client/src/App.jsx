import React, {useState} from 'react';
import Login from './components/Login';
import Profile from "./components/Profile";
import { Redirect, Route, Switch } from "react-router-dom";
import Register from './components/Register';
function App() {
  const [user, setUser] = useState({name: "", age: "", email: "", password: ""})
  const loggedIn = false;
  const handleSubmit = () => {
    // setUser({
    //   name: "Karan",
    //   age: "20",
    //   email: "hejmadi@gmal.com",
    //   password: "cocopuffs"
    // });
    console.log("form submitted")
    return <Redirect to="/profile" />
  }
  return (
    <div className="App">
      <Switch>
      <Route exact path="/">
          {loggedIn ? <Redirect from="/" to="/profile" /> : <Redirect from="/" to="/login" />}
        </Route>
        <Route path="/login">
          <Login onSubmit={handleSubmit}/>
        </Route>
        <Route path="/register">
          <Register onSubmit={handleSubmit}/>
        </Route>
        <Route to="/profile">
          <Profile user={user} />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
