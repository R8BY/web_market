import React from 'react';
import classes from './Footer.module.scss'
import geo from '../../img/geo.svg';
import tel from '../../img/tel.svg';
import inst from '../../img/instagram.svg';
import facebook from '../../img/facebook.svg';
import twitter from '../../img/twitter.svg';
import youtube from '../../img/youtube.svg';

const Footer = () => {
    return (
        <footer>
            <div className={classes.footer_inner}>
                <div className={classes.info}>
                    <span className={classes.logo}>Logo / Company name</span>
                    <div className={classes.compAdress}>
                        <img src={geo} alt=""/>
                        <span>Company Adress: Lorem ipsum dolor sit amet <br/> 18600, Netherlands</span>
                    </div>
                    <div className={classes.tel}>
                        <img src={tel} alt=""/>
                        <span>+38 958 755-00-00</span>
                    </div>
                    <div className={classes.redirect}>
                        <a href="#"> <img src={facebook} alt="facebook"/></a>
                        <a href="#"> <img src={inst} alt="inst"/></a>
                        <a href="#"> <img src={twitter} alt="twitter"/></a>
                        <a href="#"> <img src={youtube} alt="youtube"/></a>
                    </div>
                </div>
                <div className={classes.infoText}>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quos ullam atque accusantium
                        ratione
                        molestias soluta, provident nobis, assumenda dolorum voluptas incidunt inventore quia reiciendis
                        quis. Quis quo molestias repellat.</p>
                </div>
            </div>
        </footer>
    );
};

export {Footer};