import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './admin_style.css';
import './client_style.css';

import { Redirect } from 'react-router';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";

import Login from './admin_components/login';
import Signup from './admin_components/signup';

import Sidemenu from './Layouts/sidemenu';

import Dashboard from './admin_components/dashbord';
import AddUser from './admin_components/addUser';
import Notfound404 from './admin_components/notfound404';
import UserList from './admin_components/userList';




import EditUser from './admin_components/edituser';
import Request from './admin_components/Request';
import Profile from './admin_components/profile';
import Postnotices from './admin_components/postnotices';
import ChangePassword from './admin_components/ChangePassword';
import Editprofile from './admin_components/Editprofile';
import Protected from './protected';
import request from 'request';
import Logout from './logout';

function App() {

  return (
    <Router>
      <Switch>
        {/* Admin routes */}

        <Route exact path="/">
          <Redirect to='/login' />
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />

        <Route exact path="/dashboard">
          <Protected cmp={Dashboard} />
        </Route>
        <Route exact path="/adduser">
          <Protected cmp={AddUser} />
        </Route>

        <Route exact path="/userlist">
          <Protected cmp={UserList} />
        </Route>

        <Route exact path="/userlist/edit/:id">
          <Protected cmp={EditUser} />
        </Route>

        <Route exact path="/requests">
          <Protected cmp={request} />
        </Route>

        <Route exact path="/profile">
          <Protected cmp={Profile} />
        </Route>

        <Route exact path="/postnotices">
          <Protected cmp={Postnotices} />
        </Route>

        <Route exact path="/changepassword">
          <Protected cmp={ChangePassword} />
        </Route>

        <Route exact path="/editprofile">
          <Protected cmp={Editprofile} />
        </Route>

        <Route exact path="/logout">
          <Logout cmp={Login} />
        </Route>
        <Route component={Notfound404} />
      </Switch>

    </Router>

  );
}

export default App;
