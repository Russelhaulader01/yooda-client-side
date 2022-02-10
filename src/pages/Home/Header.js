import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth()
    return (
        <div>
            <Link to='/dashboard'>Dashboard </Link> 
            <Link to='/home'> Home </Link>
            <Link to='/login'> Login </Link>
            <Link to='/foods'>Order Food </Link>
            <p onClick={logOut}> Logout </p>
            <Link to='/home'> {user?.displayName} </Link>
        </div>
    );
};

export default Header;