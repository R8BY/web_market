import React from 'react';
import classes from './NavBar.module.scss';

const NavBar = ({items}) => {
    return (
        <div className={classes.NavBar}>
            <div className={classes.NavBar__container}>
                <nav className={classes.NavBar}>
                    <ul>
                        {items.nav.map((el) =>
                            <li key={el.text}>
                                <a href={el.href}>{el.text}</a>
                            </li>)}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export {NavBar};