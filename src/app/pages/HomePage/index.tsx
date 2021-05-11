import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import { Button, message } from 'antd';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <div>
        <Button
          onClick={() => {
            message.info('点击antd button');
          }}
          type="primary"
        >
          antd button
        </Button>
      </div>
    </>
  );
}
