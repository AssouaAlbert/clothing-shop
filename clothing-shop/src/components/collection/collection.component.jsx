import React from 'react';
import './collection.style.scss';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.action'; 
import ButtonPrimary from '../buttons/buttons.primary.component';

const Collection = ({item, addItem}) =>  {
        const {id, price, imageUrl,name} = item;
        return ( <div className='collection-item'>
            <div
            style={{
                backgroundImage : `url(${imageUrl})`
            }}
            className='image'
            />
            <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
            </div>
            <div>
                <ButtonPrimary inverted onClick={()=>addItem(item)}> Add to Cart</ButtonPrimary>
            </div>
        </div> );
    }
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addItem: (item) => {
            dispatch(addItem(item))
        }
    }
}
export default connect(null,mapDispatchToProps)(Collection);