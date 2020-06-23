import React from 'react';
import {
    Route,
    withRouter,
    Switch
} from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchCollectionsStart} from '../../redux/shop/shop-action';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import './shoppage.style.scss'

//Note that this is a HOC which is wrapped around another compoent
//const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview); //Move here CollectionsOverviewContainer
class ShopPage extends React.Component{
    // constructor(){
    //     super()
    //     this.state = {
    //         isloading: true
    //     } 
    // }

    // unsubcribeFromSnapShop = null; //This is to close the snapShot

    componentDidMount = () => {
        const {fetchCollectionsStart} = this.props;
        fetchCollectionsStart();
        /*********************This code is now managed by redux */
        // const {updateCollections} = this.props;
        // const collectionRef = firestore.collection(`collections`);
        // collectionRef.get().then( async snapShot => {
        //         const collectionMaps = await convertSnapShopToObject(snapShot);
        //         updateCollections(collectionMaps);
        //         this.setState({isloading: false});
        // });
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
            {/*! <Route exact path={`${match.url}`} component={CollectionOverview}/> */}
            <Route exact path={`${match.url}`} component={CollectionsOverviewContainer}/>
            {/* <Route exact path={`${match.url}`} render={(props)=> <CollectionOverviewWithSpinner isloading={!isCollectionLoading} {...props} />}/> */}
            {/* <Route path={`${match.url}/:collectionId`} component={CollectionPage}/> */}
            <Route path={`${match.url}/:collectionId`} component={CollectionPageContainer}/>
        </Switch>
        </div>);
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchCollectionsStart: () => {
            dispatch(fetchCollectionsStart())
        }
    }
}

export default connect(null,mapDispatchToProps)(withRouter(ShopPage));