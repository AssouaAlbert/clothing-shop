import { connect } from 'react-redux'

import {selectCollectionIsFetching} from '../../redux/shop/shop.selector';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component.jsx';

const mapStateToProps = (state) => {
    return {
        isFetching: selectCollectionIsFetching(state)
    }
}
const CollectionPageContainer = connect(mapStateToProps)(WithSpinner(CollectionPage));

export default CollectionPageContainer;