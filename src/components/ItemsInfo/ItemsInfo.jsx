import React from 'react';
import classes from './ItemsInfo.module.scss'
import errorphoto from '../../img/error.png';

const ItemsInfo = ({title, image, price, mileage, mileage_measure, year, axle_configuration}) => {
    return (
        <div className={classes.itemsInfo}>
            <div className={classes.info_block}>
                <img src={errorphoto} alt="TitleImage"/>
                <div className={classes.desc_block}>
                    <h3>{title}</h3>
                    <span className={classes.span}>${price}</span>
                    <span className={classes.span_description}>Item Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quis distinctio, officia tenetur a eaque deleniti, impedit accusamus, alias provident sint id odio neque laudantium! Saepe quisquam libero soluta itaque? </span>
                    <div className={classes.itemsDown}>
                        <span>{year}</span>
                        <span>{mileage}{mileage_measure}</span>
                        <span>{axle_configuration}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {ItemsInfo};