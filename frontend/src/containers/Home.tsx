import React, { ReactElement } from 'react';

export interface HomeProps {}

export default function Home(props: HomeProps): ReactElement | null {
  return <h1>Home Component</h1>;
}
