import React from 'react'
import './collections-overview.style.scss'
import { connect } from 'react-redux'
import {selectCollectionForPreview} from '../../redux/shop/shop.selector';
import {createStructuredSelector} from 'reselect'
import PreviewCollection from '../preview.collection/preview.collection';

const CollectionOverview = ({collections}) => {
    console.log('collections: ', collections);
    return ( <div className="collection-overview">
                    {
                collections.map(({id, ...otherCollectionProps}) => (
                    <PreviewCollection 
                    key={id}
                    {...otherCollectionProps}
                    />
                ))
            }
    </div> );
}
const mapStateToProps = createStructuredSelector({
        collections: selectCollectionForPreview
})
export default connect(mapStateToProps,null)(CollectionOverview);