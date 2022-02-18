import React from 'react';
// import classes from './BreadCrumbs.module.scss';
const BreadCrumbs = ({href, text}) => {
    return (
        <>
            <li><a href={href}>{text}</a></li>
        </>
    );
};

export {BreadCrumbs};