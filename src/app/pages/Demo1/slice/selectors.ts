import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.demo1 || initialState;

export const selectDemo1 = createSelector([selectSlice], state => state);
