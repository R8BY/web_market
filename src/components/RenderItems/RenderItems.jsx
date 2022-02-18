import React from 'react';
import {ItemsInfo} from '../ItemsInfo';

const RenderItems = ({items}) => {
    return (
        <div>
            {items.stock.map(({ title, image, price, mileage, mileage_measure, year, axle_configuration}) => (
                <ItemsInfo key={title} title={title} image={image} price={price} mileage={mileage} mileage_measure={mileage_measure} year={year} axle_configuration={axle_configuration}/>
            ))}
        </div>
    );
};

export  { RenderItems };