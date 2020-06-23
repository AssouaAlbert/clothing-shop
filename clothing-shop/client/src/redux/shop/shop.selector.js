import {createSelector} from 'reselect';
const selectShop = (state) => state.shop;

export const selectCollectionIsFetching  = createSelector(
    [selectShop],
    shop => shop.isFetching
)
export const isComponentLoading = createSelector(
    [selectShop],
    shop => !!shop.shopData
)
export const getShop = createSelector(
    [selectShop],
    (shop) => shop.shopData
)
export const selectCollectionForPreview =createSelector(
    [getShop],
    shopCollection => shopCollection? Object.keys(shopCollection).map(key => shopCollection[key]) : []
)
export const selectCollection = (collectionURLParam) => createSelector(
    [getShop],
    shopData => shopData? shopData[collectionURLParam]: null
)