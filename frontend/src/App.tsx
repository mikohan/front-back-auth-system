import React from 'react';
import Home from '~/containers/Home';
import Activate from '~/containers/Activate';
import Login from '~/containers/Login';
import ResetPassword from '~/containers/ResetPassword';
import ResetPasswordConfirm from '~/containers/ResetPasswordConfirm';
import SignUp from '~/containers/SignUp';
import Layout from './hoc/Layout';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
