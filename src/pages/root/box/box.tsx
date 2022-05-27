import React from 'react';
import classes from './box.module.css';
import Header from "../header/header";
import Infos from "../infos/infos";

const Box = () => {
    return (
        <div className={classes.container}>
            <Header/>
            <Infos/>
        </div>
    );
};

export default Box;
