import React from 'react';
import { connect } from 'react-redux'
// import { createStructuredSelector } from 'reselect';
import Collection from '../../components/collection/collection.component';
import {selectCollection} from '../../redux/shop/shop.selector';
import './collection.style.scss';



const CollectionPage = ({collection}) => {
    const {title, items} = collection;
    return ( <div className="collection-page">
        <h2 className="title">{title}</h2>
        <div className="items">{
            items.map(({id,...item}) =>  
                <Collection key={id} className="collection-item" item={item}/>)
        }
        </div>
    </div> );
}
const mapStateToProps = (store,ownProps) => ({
        collection: selectCollection(ownProps.match.params.collectionId)(store)
})
export default connect(mapStateToProps)(CollectionPage);