import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import './navigation.styles.scss';

const Navigation = () => {
  return (
    <div>
    <h1>Navigation</h1>
    <Outlet />
    </div>
  );
};

export default Navigation;
