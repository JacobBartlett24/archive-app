import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import { CSSTransition } from "react-transition-group";
import {ReactComponent as SearchIcon} from './Images/magnifying-glass-solid.svg';
import {ReactComponent as UserIcon} from './Images/user-solid.svg';
import {ReactComponent as CaretIcon} from './Images/caret-down-solid.svg';

export function Header(props){

    return(
        <nav className="navbar">
            <ul className="navbar-nav">{props.children}
            <HeaderItem icon ={<SearchIcon />}  />
            <HeaderItem icon ={<UserIcon />}  />
            <HeaderItem icon ={<CaretIcon />}>
            <DropdownMenu leftIcon={<UserIcon />} rightIcon = {<UserIcon />}/>
            </HeaderItem>
            </ul>
            
        </nav>
        
    )
}

export function HeaderItem(props){

    const[open, setOpen] = useState(false);

    

    return(
        <li className="nav-item">
            <a href="#" className="icon-button" onClick = {() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
    )
}

export function DropdownMenu(props){

    const [activeMenu,setActiveMenu] = useState('main')

    function DropdownItem(props){
        return(
        <a href="" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
            <span className="icon-button">{props.leftIcon}</span>
            {props.children}

            <span className="icon-right">{props.rightIcon}</span>
        </a> 
        );
    }
    
    return(
        <div className="dropdown">            
            <div className="menu">
                <DropdownItem
                    leftIcon={props.leftIcon}
                    rightIcon={props.rightIcon}
                    goToMenu="profile">
                    My Profile
                </DropdownItem>
                <DropdownItem
                    leftIcon={props.leftIcon}
                    rightIcon={props.rightIcon}
                    goToMenu="profile">
                    Settings
                </DropdownItem>
            </div>
        </div>
    )
}
