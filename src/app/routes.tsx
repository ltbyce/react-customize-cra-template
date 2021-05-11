import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Redirect, Route } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { renderRoutes } from 'react-router-config';

// import pages

import { HomePage } from 'app/pages/HomePage';
import { Demo } from 'app/pages/Demo';
import { NotFoundPage } from 'app/components/NotFoundPage';

// interface Props {
//   route: {
//     routes: { [propName: string]: any }[];
//   };
// }

export function convertPath(path: string) {
  return process.env.PUBLIC_URL + path;
}

export const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => <route.component {...props} routes={route.routes} />}
  />
);

export const routes = [
  {
    path: '/',
    exact: true,
    name: '首页',
    component: HomePage,
  },
  {
    path: '/demo',
    exact: true,
    name: '示例',
    component: Demo,
  },
  {
    component: NotFoundPage,
    name: '404',
  },
];
