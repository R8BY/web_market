import React from 'react';
import classes from './NavBar.module.scss';

const NavBar = ({items}) => {
    return (
        <div className={classes.NavBar}>
            <div className={classes.NavBar__container}>
                <nav className={classes.NavBar}>
                    <ul>
                        <li><a href="#">{items.nav[0].text}</a></li>
                        <li><a href="#">{items.nav[1].text}</a></li>
                        <li><a href="#">{items.nav[2].text}</a></li>
                        <li><a href="#">{items.stock[3].title}</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export {NavBar};