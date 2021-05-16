import { ReactElement, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { checkAuthenticated, loadUser } from '../store/users/userAction';
import { connect } from 'react-redux';

export interface Props {
  children: ReactElement;
  checkAuthenticated(): void;
  loadUser(): void;
}

function Layout(props: Props): ReactElement | null {
  useEffect(() => {
    props.checkAuthenticated();
    props.loadUser();
  });
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
}

export default connect(null, { checkAuthenticated, loadUser })(Layout);
