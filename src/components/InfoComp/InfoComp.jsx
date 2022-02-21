import React from 'react';
import classes from './InfoComp.module.scss';

const InfoComp = ({items}) => {
    return (
        <div className={classes.rightinfo}>
            {items.page_text.map(({content, index}) => (
                <p key={content}>
                    {content}
                </p>
            ))}
        </div>
    );
};

export  { InfoComp };