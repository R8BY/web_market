import React from 'react';
import classes from './Pagination.module.scss'

const Pagination = () => {
    return (
        <div className={classes.pagination}>
            <a href="#">{"<"}</a>
            <a href="#">{"1"}</a>
            <a href="#">{"2"}</a>
            <a href="#">{">"}</a>
        </div>
    );
};

export { Pagination };