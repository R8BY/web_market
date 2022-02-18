import React from 'react';
import {Pagination} from "../Pagination";
import {Sort} from "../Sort";
import classes from './TopBlock.module.scss'

const TopBlock = () => {
    return (
        <div className={classes.bar}>
            <Pagination/>
            <Sort/>
        </div>
    );
};

export { TopBlock };