import React from 'react';
import classes from './Filter.module.scss';

const Filter = ({items}) => {
    return (
        <form className={classes.form}>
            <div className={classes.inner}>
                <h3>{items.stock.length} Results found</h3>
                <div className={classes.line}></div>
                <div>Param1</div>
                <div>
                    <input type="checkbox" id={"value1"}/>
                    <label htmlFor="value1">value1</label>
                </div>
                <div>
                    <input type="checkbox" id={"value2"}/>
                    <label htmlFor="value2">value2</label>
                </div>
                <div>
                    <input type="checkbox" id={"value3"}/>
                    <label htmlFor="value3">value3</label>
                </div>
                <div>
                    <input type="checkbox" id={"value4"}/>
                    <label htmlFor="value4">value4</label>
                </div>
            </div>
        </form>
    );
};

export {Filter};