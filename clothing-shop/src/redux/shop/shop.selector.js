import {createSelector} from 'reselect';

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    Mens: 5
}
const selectShop = (state) => state.shop;

export const getShop = createSelector(
    [selectShop],
    (shop) => shop.shopData
)
export const selectCollectionForPreview =createSelector(
    [getShop],
    shopCollection => Object.keys(shopCollection).map(key => shopCollection[key])
)
export const selectCollection = (collectionURLParam) => createSelector(
    [getShop],
    shopData => shopData[collectionURLParam]
)