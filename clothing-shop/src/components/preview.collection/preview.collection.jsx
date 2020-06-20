import React from 'react';
import { withRouter } from 'react-router-dom'
import './preview.style.scss';
import Collection from '../collection/collection.component'
const PreviewCollection = ({title, items,history}) => {
    return ( <div className='collection-preview'>
        <h1 className='title'onClick={()=>
        {return (history.push(`shop/${title.toLowerCase()}`))}}>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                //Note the filter pops the whole element, map pushes a specific colunm
            // items.filter((i, index) => index < 4).map(item => <div key={item.id}>{item.name} </div>)
            items
            .filter((i, index) => index < 4)
            .map((item) => 
            <Collection 
            key={item.id}
            item={item}
            />)
            }
        </div>
    </div> );
}

export default withRouter(PreviewCollection);