import React from 'react';
import classes from './Sort.module.scss';

const Sort = () => {
    return (
        <div>
            <span>Sort By</span>
            <select className={classes.sortSelect}>
                <option>Price</option>
                <option>Data</option>
            </select>
        </div>
    );
};

export {Sort};