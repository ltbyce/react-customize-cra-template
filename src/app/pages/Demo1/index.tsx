/**
 *
 * Demo1
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
// import { messages } from './messages';
import { Button } from 'antd';

interface Props {}

export const Demo1 = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Div>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      <p className="test"></p>
    </Div>
  );
});

const Div = styled(Button)``;
