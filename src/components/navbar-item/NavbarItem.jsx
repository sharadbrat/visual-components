import React from 'react';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';

import { globalToggleNavigationAction } from '../../store';

import './NavbarItem.scss';

const mapDispatchToProps = dispatch => {
  return {
    navigate: (url) => {
      dispatch(push(url));
      dispatch(globalToggleNavigationAction())
    }
  }
};

export function NavbarItemComponent({ url, title, navigate }) {
  return <button onClick={() => navigate(url)} className="navbar-item">{title}</button>;
}

const NavbarItem = connect(null, mapDispatchToProps)(NavbarItemComponent);

export { NavbarItem };
