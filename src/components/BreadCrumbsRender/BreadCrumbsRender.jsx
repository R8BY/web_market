import React from 'react';
import {BreadCrumbs} from '../BreadCrumbs';
import classes from './BreadCrumbsRender.module.scss'

const BreadCrumbsRender = ({items}) => {
    return (
        <div className={classes.bread}>
            <nav>
                <ul>
                    {items.breadcrumbs.map(({text, href}) => (
                        <BreadCrumbs key={text} text={text} href={href}/>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export {BreadCrumbsRender};