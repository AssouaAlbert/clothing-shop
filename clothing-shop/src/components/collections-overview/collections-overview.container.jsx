import { connect } from 'react-redux';
import {compose} from 'redux';

import {isComponentLoading} from '../../redux/shop/shop.selector';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionOverview from './collections-overview.component';

const mapStateToProps = (state) => {
    return {
        isLoading: !isComponentLoading(state)
    }
}
const CollectionsOverviewContainer = compose(   // Compose is a redux function which helps coil the code
        connect(mapStateToProps),//This function will run after WithSoinner
        WithSpinner, //1 This frunction is run first
        )(CollectionOverview); //Argurmrny is passed into  With Spinner

    //This code and the code of compose anove are the same.
    // return connect(mapStateToProps)(WithSpinner(CollectionOverview));
export default CollectionsOverviewContainer;