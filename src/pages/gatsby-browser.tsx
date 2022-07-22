import * as React from 'react';
import { GatsbyBrowser } from 'gatsby';

import '../styles/global.scss';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
}) => {
  return (
    <>
      <h1>Icaro Vieira da Silva</h1>
      {element}
    </>
  );
};
