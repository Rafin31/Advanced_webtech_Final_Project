import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './style.css';

import { Redirect } from 'react-router';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";

import Login from './admin_components/login';
import Signup from './admin_components/signup';
import Sidemenu from './admin_components/Layouts/sidemenu';
import Dashboard from './admin_components/dashbord';
import AddUser from './admin_components/addUser';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to='/login' />
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        {/* <Route exact path="/dashboard" component={Sidemenu} /> */}
      </Switch>

      <Sidemenu />

      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/adduser" component={AddUser} />
      </Switch>

    </Router>

  );
}

export default App;
