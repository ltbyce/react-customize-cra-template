/**
 *
 * Asynchronously loads the component for Demo
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Demo = lazyLoad(
  () => import('./index'),
  module => module.Demo,
);
