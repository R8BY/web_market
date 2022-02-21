import React from 'react';
import classes from './Footer.module.scss'

const Footer = () => {
    return (
        <footer>
            <div className={classes.footer_inner}>
                <div className={classes.info}>
                    <span>Logo / Company name</span>
                    <span>Company Adress: Lorem ipsum dolor sit amet  18600, Netherlands</span>
                    <span>+38 958 755-00-00</span>
                </div>
            </div>
        </footer>
    );
};

export {Footer};