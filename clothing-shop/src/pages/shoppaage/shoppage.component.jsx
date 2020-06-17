import React from 'react';
import {
    Route,
    withRouter,
    Switch
} from 'react-router-dom';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import {updateCollections} from '../../redux/shop/shop-action';
import { connect } from 'react-redux';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import {firestore, convertSnapShopToObject} from '../../firebase/firebase.util';
import './shoppage.style.scss'
import collectionsOverviewComponent from '../../components/collections-overview/collections-overview.component';
//Note that this is a HOC which is wrapped around another compoent
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends React.Component{
    constructor(){
        super()
        this.state = {
            isloading: true
        } 
    }

    unsubcribeFromSnapShop = null; //This is to close the snapShot

    componentDidMount = () => {
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection(`collections`);
        collectionRef.get().then( async snapShot => {
                const collectionMaps = await convertSnapShopToObject(snapShot);
                updateCollections(collectionMaps);
                this.setState({isloading: false});
                });
        // this.unsubcribeFromSnapShop = collectionRef.onSnapshot( async snapShot => {
        // const collectionMaps = await convertSnapShopToObject(snapShot);
        // updateCollections(collectionMaps);
        // this.setState({isloading: false});
        // });
    }
    render () {
        const {match} = this.props;
        return ( <div className='shop-page'>
        <Switch>
            {/* The line of code below has been modified */}
        {/* <Route exact path={`${match.url}`} component={CollectionOverview}/> */}
        <Route exact path={`${match.url}`} render={(props)=> <CollectionOverviewWithSpinner isloading={this.state.isloading} {...props} />}/>
        {/* <Route path={`${match.url}/:collectionId`} component={CollectionPage}/> */}
        <Route path={`${match.url}/:collectionId`} render={(props)=> <CollectionPageWithSpinner isloading={this.state.isloading} {...props} />}/>
        </Switch>
        </div> );
    }


}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateCollections: (collectionMap) => {
            dispatch(updateCollections(collectionMap));
        }
    }
}
export default connect(null,mapDispatchToProps)(withRouter(ShopPage));