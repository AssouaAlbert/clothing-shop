import React from 'react';
import './collection.style.scss';

const Collection = ({id,name,imageUrl,price}) =>  {
       
        return ( <div>
            <div
            style={{
                backgroundImage : `url(${imageUrl})`
            }}
            className='image'
            />
            <div className='collection-footer'>
            <span>{name}</span>
            <span>{price}</span>
            </div>
        </div> );
    } 
export default Collection;