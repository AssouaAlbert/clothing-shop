import React from 'react';
import shopData from '../../data/shopdata';
import PreviewCollection from '../../components/preview.collection/preview.collection'
import './shoppage.style.scss'
class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            collections: shopData
        }
    }
    render(props) {
        console.log('props: ', props);
        const {collections} = this.state;
        return ( <div className='shop-page'>
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
}
 
export default ShopPage;