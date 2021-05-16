import { ReactElement, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { checkAuthenticated, loadUser } from '../store/users/userAction';
import { connect } from 'react-redux';
import { IState } from '../intefaces';

export interface Props {
  children: ReactElement;
  checkAuthenticated(): void;
  loadUser(): void;
  isAuthenticated: boolean;
}

function Layout(props: Props): ReactElement | null {
  useEffect(() => {
    if (!props.isAuthenticated) {
      props.checkAuthenticated();
    }
    if (props.isAuthenticated) {
      props.loadUser();
    }
  });
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
export default connect(mapStateToProps, { checkAuthenticated, loadUser })(
  Layout
);
