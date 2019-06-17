import React from 'react';
import { NavLink, } from 'react-router-dom';
import { Menu, } from 'semantic-ui-react';
import { AccountConsumer, } from "../providers/AccountProvider";

const Navbar = () => (
  <AccountConsumer>
    { value => (  // this provides accountprovider state.
    <Menu inverted>
      <NavLink to="/" >
        <Menu.Item>
          Home
        </Menu.Item>
      </NavLink>
      <NavLink to="/account/profile" >
        <Menu.Item>
          { value.username }
          {/* TODO: Will be replaced with actual username */}
        </Menu.Item>
      </NavLink>
      <NavLink to="/products" >
        <Menu.Item>
          Products
        </Menu.Item>
      </NavLink>
    </Menu>
    )}
  </AccountConsumer>
);


export default Navbar;