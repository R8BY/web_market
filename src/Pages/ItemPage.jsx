import React from 'react';
import {TopBlock} from "../components/TopBlock";
import {RenderItems} from "../components/RenderItems";
import {Filter} from "../components/FilterWindow";

const ItemPage = ({items}) => {
    return (
        <div>
            {items ? <Filter items={items}/> : null}
            {items ? <TopBlock/> : null}
            {items ? <RenderItems items={items}/> : null}
            {items ? <TopBlock/> : null}
        </div>
    );
};

export {ItemPage};