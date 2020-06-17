import shopActions from './shop-actions.types'
export const updateCollections  = (collectionsMap) => ({
    type: shopActions.UPDATE_COLLECTION,
    payload: collectionsMap
})