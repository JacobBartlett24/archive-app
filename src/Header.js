/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-extraneous-dependencies */
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ReactComponent as SearchIcon } from './Images/magnifying-glass-solid.svg';
import { ReactComponent as UserIcon } from './Images/user-solid.svg';
import { ReactComponent as CaretIcon } from './Images/caret-down-solid.svg';
import { ReactComponent as PlusIcon } from './Images/plus-solid.svg';

export function Header(props) {
  return (
    <nav className="navbar">
      <Link to="/Home"><h1 id="navTitle">Archive.app</h1></Link>
      <ul className="navbar-nav">
        {props.children}

        <HeaderItem icon={<Link to="/AddPlaylist"><PlusIcon /></Link>} />

        <HeaderItem icon={<SearchIcon />} />

        <HeaderItem icon={<Link to="/Profile"><UserIcon /></Link>} />

        <HeaderItem icon={<CaretIcon />}>
          <DropdownMenu leftIcon={<UserIcon />} rightIcon={<UserIcon />} />
        </HeaderItem>

      </ul>
    </nav>

  );
}

export function HeaderItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <div type="button" href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </div>

      {open && props.children}
    </li>
  );
}

export function DropdownMenu(props) {
  const [activeMenu, setActiveMenu] = useState('main');

  function DropdownItem() {
    return (
      <div className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}

        <span className="icon-right">{props.rightIcon}</span>
      </div>
    );
  }

  return (
    <div className="dropdown">
      <div className="menu">
        <Link to="/Profile">
          <DropdownItem
            leftIcon={props.leftIcon}
            rightIcon={props.rightIcon}
            goToMenu="profile"
          >
            My Profile
          </DropdownItem>
        </Link>
        <DropdownItem
          leftIcon={props.leftIcon}
          rightIcon={props.rightIcon}
          goToMenu="profile"
        >
          Settings
        </DropdownItem>
      </div>
    </div>
  );
}
