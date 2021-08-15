import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './admin_style.css';
import './client_style.css';

import { Redirect } from 'react-router';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";

import Login from './admin_components/login';
import Signup from './admin_components/signup';
import Dashboard from './admin_components/dashbord';
import AddUser from './admin_components/addUser';
import Notfound404 from './admin_components/notfound404';
import UserList from './admin_components/userList';
import Client_dashboard from './client_components/client_dashboard';
import Send_money from './client_components/Send_money';


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
        <Route exact path="/client_dashboard" component={Client_dashboard} />
        <Route exact path="/send_money" component={Send_money} />
        <Route exact path="/logout">
          <Redirect to='/login' />
        </Route>
        <Route component={Notfound404} />
      </Switch>

    </Router>

  );
}

export default App;
