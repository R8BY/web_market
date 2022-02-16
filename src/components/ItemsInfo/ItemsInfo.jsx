import React from 'react';
import classes from './ItemsInfo.module.scss'
import errorphoto from '../../img/error.png';

const ItemsInfo = ({items}) => {
    return (
        <div className={classes.itemsInfo}>
            <div className={classes.info_block}>
                <div>
                    <img src={errorphoto} alt="image"/>
                </div>
                <div className={classes.desc_block}>
                    <div className={classes.item_info}>
                        <span>{items.stock[0].title}</span>
                    </div>
                    <div className={classes.item_desc}>
                        <span>{items.stock[0].price}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {ItemsInfo};