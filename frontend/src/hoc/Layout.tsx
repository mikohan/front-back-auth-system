import React, { ReactElement } from 'react';
import Navbar from '../components/Navbar';

export interface Props {
  children: ReactElement;
}

export default function (props: Props): ReactElement | null {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
}
