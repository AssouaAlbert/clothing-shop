import {createSelector} from 'reselect';

const selectDiectory = state => state.directory

export const getDirectory = createSelector(
    [selectDiectory],
    directory => directory
)