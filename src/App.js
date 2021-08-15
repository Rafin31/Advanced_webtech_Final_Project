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
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/adduser" component={AddUser} />
        <Route exact path="/userlist" component={UserList} />



        <Route exact path="/userlist/edit/:id" component={EditUser} />
        <Route exact path="/requests" component={Request} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/postnotices" component={Postnotices} />
        <Route exact path="/changepassword" component={ChangePassword} />
        <Route exact path="/editprofile" component={Editprofile} />

        <Route exact path="/logout">

          <Redirect to='/login' />
        </Route>
        <Route component={Notfound404} />
      </Switch>

    </Router>

  );
}

export default App;
