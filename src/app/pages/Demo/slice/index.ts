import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { demoSaga } from './saga';
import { DemoState } from './types';

export const initialState: DemoState = {
  pageName: 'demo component',
  count: 0,
};

const slice = createSlice({
  name: 'demo',
  initialState,
  reducers: {
    // someAction(state, action: PayloadAction<any>) {},
    updatePageName(state, action: PayloadAction<any>) {
      const { newPageName } = action.payload;
      return {
        ...state,
        pageName: newPageName,
      };
    },
    updateCount(state, action: PayloadAction<any>) {
      let oldCount = state.count;
      return {
        ...state,
        count: ++oldCount,
      };
    },
  },
});

export const { actions: demoActions } = slice;

export const useDemoSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: demoSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useDemoSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
