import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.demo || initialState;

export const selectDemo = createSelector([selectSlice], state => state);

export const selectPageName = createSelector(
  [selectSlice],
  state => state.pageName,
);

export const selectCount = createSelector([selectSlice], state => state.count);
