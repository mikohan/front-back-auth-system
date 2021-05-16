import Home from './containers/Home';
import Activate from './containers/Activate';
import Login from './containers/Login';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
import SignUp from './containers/SignUp';
import Layout from './hoc/Layout';
import { Provider } from 'react-redux';
import store from './store/store';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/reset-password" component={ResetPassword} />
          <Route
            exact
            path="/password/confirm/:uid/:token"
            component={ResetPasswordConfirm}
          />
          <Route exact path="/activate/:uid/:token" component={Activate} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </Router>
  </Provider>
);

export default App;
