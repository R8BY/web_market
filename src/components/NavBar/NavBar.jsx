import React from 'react';
import classes from './NavBar.module.scss';

const NavBar = () => {
    return (
        <div className={classes.NavBar}>
            <div className={classes.NavBar__container}>
                <nav className={classes.NavBar}>
                    <ul>
                        <li><a href="#">navlink1</a></li>
                        <li><a href="#">navlink2</a></li>
                        <li><a href="#">navlink3</a></li>
                        <li><a href="#">navlink4</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export {NavBar};