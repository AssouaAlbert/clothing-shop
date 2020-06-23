import {createSelector} from 'reselect';

const selectStore = store => store.user;
const selectToggle= store => store.toggleCart

export const getUser = createSelector(
    [selectStore],
    user => user.currentUser
)
export const getCurrentUser = createSelector(
    [selectStore],
    user => user.currentUser
)
export const toggleCart = createSelector(
    [selectToggle],
    toggle => toggle.hidden
)