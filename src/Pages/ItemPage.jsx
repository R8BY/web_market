import React from 'react';
import {TopBlock} from "../components/TopBlock";
import {RenderItems} from "../components/RenderItems";
import {Filter} from "../components/FilterWindow";
import {InfoComp} from "../components/InfoComp";

const ItemPage = ({items}) => {
    return (
        <div>
            {items && <Filter items={items}/>}
            {items ? <TopBlock/> : null}
            {items ? <RenderItems items={items}/> : null}
            {items ? <TopBlock/> : null}
            {items ? <InfoComp items={items}/> : null}
        </div>
    );
};

export {ItemPage};
