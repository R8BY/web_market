import React from 'react';
import classes from './Header.module.scss';

const Header = () => {
    return (
        <header className={classes.header}>
            <span>Header/logo</span>
        </header>
    );
};

export { Header };