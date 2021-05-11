import { Demo1State } from 'app/pages/Demo1/slice/types';
import { DemoState } from 'app/pages/Demo/slice/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  demo1?: Demo1State;
  demo?: DemoState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
