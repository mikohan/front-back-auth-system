import { ReactElement, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';
import {
  checkAuthenticated,
  loadUser,
  googleLogin,
} from '../store/users/userAction';
import { connect } from 'react-redux';
import { IState } from '../intefaces';
import queryString from 'query-string';

export interface Props {
  children: ReactElement;
  checkAuthenticated(): void;
  loadUser(): void;
  isAuthenticated: boolean;
  googleLogin(state: string, code: string): void;
}

function Layout(props: Props): ReactElement | null {
  let location = useLocation();

  useEffect(() => {
    const values = queryString.parse(location.search);
    const state = values.state ? (values.state as string) : null;
    const code = values.code ? (values.code as string) : null;
    if (state && code) {
      props.googleLogin(state, code);
    }
    console.log(state, code, 'In layout state code');
    try {
      const ls = localStorage.getItem('access');
      if (ls) {
        if (!props.isAuthenticated) {
          props.checkAuthenticated();
        }
        if (props.isAuthenticated) {
          props.loadUser();
        }
      }
    } catch (e) {}
  }, [location, props]);

  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
}
const mapStateToProps = (state: IState) => ({
  isAuthenticated: state.user.isAuthenticated,
});
export default connect(mapStateToProps, {
  checkAuthenticated,
  loadUser,
  googleLogin,
})(Layout);
