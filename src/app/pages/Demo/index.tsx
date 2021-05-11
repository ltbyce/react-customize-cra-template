/**
 *
 * Demo
 *
 * author yechangqing created by 2021/05/10 11:03
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
// import { messages } from './messages';
import { Button, message, Divider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

// import redux hooks
import { useDemoSlice } from './slice';

// import redux selectors
import { selectPageName, selectCount } from './slice/selectors';

interface Props {}

export const Demo = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n, ready } = useTranslation();
  const { actions } = useDemoSlice();
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const pageName = useSelector(selectPageName);

  const hanldeChangeLanguage = () => {
    const currentLanguage = i18n.language;
    let targetLanguage;
    if (currentLanguage === 'en') {
      targetLanguage = 'zhCN';
    } else {
      targetLanguage = 'en';
    }
    message.info(`当前语言为${currentLanguage},切换为${targetLanguage}`);
    i18n.changeLanguage(targetLanguage);
  };
  const handleAddCount = () => {
    dispatch(actions.updateCount({}));
  };
  return (
    <Div>
      {/*  {t(...messages.someThing())}  */}
      <p>示例页面</p>
      <Divider />
      <h2>多语言使用</h2>
      {t('title')}
      <br />
      <Button type="primary" onClick={hanldeChangeLanguage}>
        {i18n.language === 'en' ? '中文' : 'English'}
      </Button>
      <Divider />
      <h2>use redux</h2>
      <p>
        pageName: {pageName},count:{count}
      </p>
      <br />
      <Button type="primary" onClick={handleAddCount}>
        点击+1
      </Button>
    </Div>
  );
});

const Div = styled.div``;
