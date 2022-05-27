import React from 'react';
import classes from './header.module.css';
import Avatar from "./avatar";

const Header = () => {
    return (
        <div className={classes.container}>
            <Avatar/>
        </div>
    );
};

export default Header;
