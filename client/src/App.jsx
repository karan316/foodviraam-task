import React, {useState, useEffect} from 'react';
import Login from './components/Login';
import Profile from "./components/Profile";
import ChangePassword from "./components/ChangePassword";
import ProtectedRoute from "./components/common/ProtectedRoute";
import { Route, Switch } from "react-router-dom";
import Register from './components/Register';
import auth from "./services/authService";

function App() {
  const [user, setUser] = useState({name: "", age: "", email: "", password: ""});

  useEffect(() => {
    const currentUser = auth.getCurrentUser();
    if(currentUser) {
      setUser({
        _id: currentUser._id,
        name: currentUser.name,
        age: currentUser.age,
        email: currentUser.email,
        password: currentUser.password
      });
    }
    console.log(currentUser);
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <ProtectedRoute
          path="/profile"
          render={props => <Profile {...props} user={user} />}
        />
        <ProtectedRoute
          path="/change-password"
          render={props => <ChangePassword {...props} user={user} />}
        />
        <ProtectedRoute
          path="/"
          render={props => <Profile {...props} user={user} />}
        />
      </Switch>
    </div>
  );
}

export default App;
