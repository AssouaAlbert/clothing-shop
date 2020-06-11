import React from 'react';
import {
    Route,
    withRouter,
    Switch
} from 'react-router-dom'

import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import './shoppage.style.scss'
const ShopPage = ({match}) => {
    return ( <div className='shop-page'>
        <Switch>
        <Route exact path={`${match.url}`} component={CollectionOverview}/>
        <Route path={`${match.url}/:collectionId`} component={CollectionPage}/>
        </Switch>
    </div> );
    }
export default withRouter(ShopPage);