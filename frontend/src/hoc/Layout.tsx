import { ReactElement } from 'react';
import Navbar from '../components/Navbar';

export interface Props {
  children: ReactElement;
}

export default function Layout(props: Props): ReactElement | null {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
}
